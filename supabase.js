/**
 * Supabase integration layer for Chiang Mai Office Hub
 * Handles: data sync, realtime subscriptions, chat
 */

const SUPABASE_URL = 'https://ppqwgudbolejngqqbpvm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwcXdndWRib2xlam5ncXFicHZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3Njg2NjUsImV4cCI6MjEwNzM0NDY2NX0.aYD3FLd9Dt1em3y_scaPrJRCM_1UqA7RuzLcuttGEfs';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  realtime: { params: { eventsPerSecond: 10 } }
});

// --- Case conversion (JS camelCase ↔ Postgres snake_case) ---
function camelToSnake(s) { return s.replace(/[A-Z]/g, l => '_' + l.toLowerCase()); }
function snakeToCamel(s) { return s.replace(/_([a-z])/g, (_, l) => l.toUpperCase()); }

function objToSnake(obj) {
  const r = {};
  for (const [k, v] of Object.entries(obj)) {
    if (k === 'createdAt' || k === 'updatedAt') continue;
    r[camelToSnake(k)] = v;
  }
  return r;
}

function objToCamel(obj) {
  const r = {};
  for (const [k, v] of Object.entries(obj)) {
    r[snakeToCamel(k)] = v;
  }
  return r;
}

// --- Sync state ---
let isRemoteUpdate = false;
let syncTimeout = null;
let supabaseReady = false;

const TABLE_CONFIG = [
  { name: 'tasks', getLocal: () => tasks, setLocal: (d) => { tasks = d; } },
  { name: 'supplies', getLocal: () => supplies, setLocal: (d) => { supplies = d; } },
  { name: 'appointments', getLocal: () => appointments, setLocal: (d) => { appointments = d; } },
  { name: 'renovations', getLocal: () => renovations, setLocal: (d) => { renovations = d; } },
  { name: 'assets', getLocal: () => assets, setLocal: (d) => { assets = d; } },
  { name: 'recurring_bills', getLocal: () => recurringBills, setLocal: (d) => { recurringBills = d; } },
  { name: 'handworkers', getLocal: () => handworkers, setLocal: (d) => { handworkers = d; } },
];

// --- Load all data from Supabase ---
async function loadAllFromSupabase() {
  try {
    const results = await Promise.all(
      TABLE_CONFIG.map(t => sb.from(t.name).select('*'))
    );

    let isEmpty = true;
    results.forEach((res, i) => {
      if (res.error) throw res.error;
      if (res.data && res.data.length > 0) {
        isEmpty = false;
        TABLE_CONFIG[i].setLocal(res.data.map(objToCamel));
      }
    });

    if (isEmpty) {
      await seedDefaultsToSupabase();
    }

    supabaseReady = true;
    return true;
  } catch (err) {
    console.error('[Supabase] Load failed, falling back to localStorage:', err);
    return false;
  }
}

// --- Seed default data on first run ---
async function seedDefaultsToSupabase() {
  const defaults = [
    { table: 'tasks', data: typeof defaultCMTasks !== 'undefined' ? defaultCMTasks : [] },
    { table: 'supplies', data: typeof defaultCMSupplies !== 'undefined' ? defaultCMSupplies : [] },
    { table: 'appointments', data: typeof defaultCMAppointments !== 'undefined' ? defaultCMAppointments : [] },
    { table: 'renovations', data: typeof defaultCMRenovations !== 'undefined' ? defaultCMRenovations : [] },
    { table: 'assets', data: typeof defaultCMAssets !== 'undefined' ? defaultCMAssets : [] },
    { table: 'recurring_bills', data: typeof defaultCMRecurringBills !== 'undefined' ? defaultCMRecurringBills : [] },
    { table: 'handworkers', data: typeof defaultCMHandworkers !== 'undefined' ? defaultCMHandworkers : [] },
  ];

  for (const { table, data } of defaults) {
    if (data.length > 0) {
      const snakeData = data.map(objToSnake);
      const { error } = await sb.from(table).upsert(snakeData, { onConflict: 'id' });
      if (error) console.error(`[Supabase] Seed ${table} failed:`, error);
    }
  }

  TABLE_CONFIG[0].setLocal([...defaultCMTasks]);
  TABLE_CONFIG[1].setLocal([...defaultCMSupplies]);
  TABLE_CONFIG[2].setLocal([...defaultCMAppointments]);
  TABLE_CONFIG[3].setLocal([...defaultCMRenovations]);
  TABLE_CONFIG[4].setLocal([...defaultCMAssets]);
  TABLE_CONFIG[5].setLocal([...defaultCMRecurringBills]);
  TABLE_CONFIG[6].setLocal([...defaultCMHandworkers]);
}

// --- Sync local changes to Supabase (debounced) ---
function scheduleSyncToSupabase() {
  if (!supabaseReady || isRemoteUpdate) return;
  clearTimeout(syncTimeout);
  syncTimeout = setTimeout(doSyncAll, 800);
}

async function doSyncAll() {
  for (const cfg of TABLE_CONFIG) {
    await syncOneTable(cfg.name, cfg.getLocal());
  }
}

async function syncOneTable(tableName, localData) {
  try {
    const snakeData = localData.map(objToSnake);
    const { data: existing } = await sb.from(tableName).select('id');
    const existingIds = new Set((existing || []).map(r => r.id));
    const currentIds = new Set(localData.map(r => r.id));

    const toDelete = [...existingIds].filter(id => !currentIds.has(id));
    if (toDelete.length > 0) {
      await sb.from(tableName).delete().in('id', toDelete);
    }

    if (snakeData.length > 0) {
      await sb.from(tableName).upsert(snakeData, { onConflict: 'id' });
    }
  } catch (err) {
    console.error(`[Supabase] Sync ${tableName} failed:`, err);
  }
}

// --- Realtime subscriptions ---
function setupRealtime() {
  const channel = sb.channel('office-realtime');

  TABLE_CONFIG.forEach(cfg => {
    channel.on('postgres_changes',
      { event: '*', schema: 'public', table: cfg.name },
      () => handleRemoteTableChange(cfg)
    );
  });

  channel.on('postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'messages' },
    (payload) => handleNewChatMessage(payload.new)
  );

  channel.subscribe((status) => {
    if (status === 'SUBSCRIBED') console.log('[Supabase] Realtime connected');
  });
}

async function handleRemoteTableChange(cfg) {
  try {
    const { data } = await sb.from(cfg.name).select('*');
    if (!data) return;

    isRemoteUpdate = true;
    cfg.setLocal(data.map(objToCamel));

    if (typeof renderCurrentView === 'function') renderCurrentView();
    if (typeof renderBadges === 'function') renderBadges();
    if (typeof renderNotifications === 'function') renderNotifications();

    isRemoteUpdate = false;
  } catch (err) {
    isRemoteUpdate = false;
    console.error(`[Supabase] Remote refresh ${cfg.name} failed:`, err);
  }
}

// =====================================================================
// CHAT MODULE
// =====================================================================

let chatChannels = [];
let chatMessages = [];
let currentChannel = 'general';
let currentChatUser = localStorage.getItem('cm_chat_user') || '';
let chatOpen = false;
let unreadCount = 0;

const TEAM_MEMBERS = ['Pierre', 'Jérémy', 'Matthieu', 'Marvin', 'Alexandre', 'Mailys', 'Kibo'];

async function initChat() {
  try {
    const { data, error } = await sb.from('channels').select('*');
    if (error) throw error;
    chatChannels = data || [];
  } catch (e) {
    console.warn('[Chat] Channels not available yet, using defaults');
    chatChannels = [
      { id: 'general', name: 'General', name_th: 'ทั่วไป', type: 'group' },
      { id: 'team-gmb', name: 'Team GMB', name_th: 'ทีม GMB', type: 'group' },
      { id: 'team-seo', name: 'Team SEO', name_th: 'ทีม SEO', type: 'group' },
      { id: 'team-ad', name: 'Team Ad', name_th: 'ทีม Ad', type: 'group' },
    ];
  }
  if (currentChatUser) {
    await loadChatMessages(currentChannel);
  }
}

async function loadChatMessages(channelId) {
  currentChannel = channelId;
  try {
    const { data, error } = await sb.from('messages')
      .select('*')
      .eq('channel', channelId)
      .order('created_at', { ascending: true })
      .limit(100);
    if (error) throw error;
    chatMessages = data || [];
  } catch (e) {
    console.warn('[Chat] Messages not available yet');
    chatMessages = [];
  }
  renderChat();
}

async function sendChatMessage() {
  const input = document.getElementById('chatInput');
  if (!input || !input.value.trim() || !currentChatUser) return;

  const content = input.value.trim();
  input.value = '';

  const { error } = await sb.from('messages').insert({
    channel: currentChannel,
    sender: currentChatUser,
    content
  });

  if (error) {
    console.error('[Chat] Send failed:', error);
    showNotification('Error', 'Message not sent', 'error');
  }
}

function handleNewChatMessage(msg) {
  if (!msg) return;
  if (msg.channel === currentChannel) {
    chatMessages.push(msg);
    renderChatMessages();
    scrollChatToBottom();
  }
  if (msg.sender !== currentChatUser) {
    if (!chatOpen || msg.channel !== currentChannel) {
      unreadCount++;
      updateChatBadge();
    }
    if (!chatOpen) {
      showNotification('💬 ' + msg.sender, msg.content.substring(0, 60));
    }
  }
}

function setChatUser(name) {
  currentChatUser = name;
  localStorage.setItem('cm_chat_user', name);
  renderChat();
  loadChatMessages(currentChannel);
}

function toggleChat() {
  chatOpen = !chatOpen;
  const panel = document.getElementById('chatPanel');
  if (panel) {
    panel.classList.toggle('hidden', !chatOpen);
    if (chatOpen) {
      unreadCount = 0;
      updateChatBadge();
      if (chatChannels.length === 0) {
        initChat().then(() => renderChat());
      } else {
        renderChat();
      }
    }
  }
}

function updateChatBadge() {
  const badge = document.getElementById('chatUnreadBadge');
  if (badge) {
    badge.textContent = unreadCount;
    badge.classList.toggle('hidden', unreadCount === 0);
  }
}

function scrollChatToBottom() {
  const container = document.getElementById('chatMessagesContainer');
  if (container) {
    setTimeout(() => { container.scrollTop = container.scrollHeight; }, 50);
  }
}

// --- Chat rendering ---
function renderChat() {
  const panel = document.getElementById('chatPanel');
  if (!panel) return;

  const loggedInUser = sessionStorage.getItem('cm_user');
  if (loggedInUser && loggedInUser !== currentChatUser) {
    currentChatUser = loggedInUser;
    localStorage.setItem('cm_chat_user', loggedInUser);
  }

  if (!currentChatUser) {
    renderUserPicker();
    return;
  }

  const channelTabs = chatChannels.map(ch => {
    const active = ch.id === currentChannel;
    const label = currentLang === 'th' && ch.name_th ? ch.name_th : ch.name;
    return `<button onclick="loadChatMessages('${ch.id}')"
      class="px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
        active ? 'bg-amber-500 text-white' : 'bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-neutral-600'
      }">${escapeHtml(label)}</button>`;
  }).join('');

  const header = `
    <div class="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800">
      <div class="flex items-center space-x-2">
        <span class="text-sm font-bold text-gray-900 dark:text-white">💬 Chat</span>
        <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 font-medium">${escapeHtml(currentChatUser)}</span>
      </div>
      <button onclick="toggleChat()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1">✕</button>
    </div>
    <div class="flex space-x-1.5 px-3 py-2 overflow-x-auto border-b border-gray-200 dark:border-neutral-700">
      ${channelTabs}
    </div>
  `;

  const inputBar = `
    <div class="flex items-center space-x-2 px-3 py-2 border-t border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800">
      <input type="text" id="chatInput" placeholder="${currentLang === 'th' ? 'พิมพ์ข้อความ...' : 'Type a message...'}"
        class="flex-1 bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-600 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 dark:text-white"
        onkeydown="if(event.key==='Enter')sendChatMessage()">
      <button onclick="sendChatMessage()"
        class="bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg text-xs font-bold transition">
        ${currentLang === 'th' ? 'ส่ง' : 'Send'}
      </button>
    </div>
  `;

  panel.innerHTML = `
    ${header}
    <div id="chatMessagesContainer" class="flex-1 overflow-y-auto px-3 py-2 space-y-2" style="min-height:0"></div>
    ${inputBar}
  `;

  renderChatMessages();
}

function renderChatMessages() {
  const container = document.getElementById('chatMessagesContainer');
  if (!container) return;

  if (chatMessages.length === 0) {
    container.innerHTML = `<div class="text-center text-gray-400 dark:text-neutral-500 text-xs py-8">${
      currentLang === 'th' ? 'ยังไม่มีข้อความ' : 'No messages yet'
    }</div>`;
    return;
  }

  container.innerHTML = chatMessages.map(msg => {
    const isMe = msg.sender === currentChatUser;
    const time = new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `
      <div class="flex ${isMe ? 'justify-end' : 'justify-start'}">
        <div class="max-w-[80%] ${isMe
          ? 'bg-amber-500 text-white rounded-t-xl rounded-bl-xl'
          : 'bg-gray-200 dark:bg-neutral-700 text-gray-900 dark:text-gray-100 rounded-t-xl rounded-br-xl'
        } px-3 py-2">
          ${!isMe ? `<div class="text-[10px] font-bold ${isMe ? 'text-amber-100' : 'text-amber-600 dark:text-amber-400'} mb-0.5">${escapeHtml(msg.sender)}</div>` : ''}
          <div class="text-xs leading-relaxed">${escapeHtml(msg.content)}</div>
          <div class="text-[9px] ${isMe ? 'text-amber-200' : 'text-gray-400 dark:text-neutral-500'} mt-0.5 text-right">${time}</div>
        </div>
      </div>
    `;
  }).join('');

  scrollChatToBottom();
}

function renderUserPicker() {
  const panel = document.getElementById('chatPanel');
  if (!panel) return;

  panel.innerHTML = `
    <div class="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800">
      <span class="text-sm font-bold text-gray-900 dark:text-white">💬 ${currentLang === 'th' ? 'คุณคือใคร?' : 'Who are you?'}</span>
      <button onclick="toggleChat()" class="text-gray-400 hover:text-gray-600 p-1">✕</button>
    </div>
    <div class="flex-1 overflow-y-auto p-4 space-y-2">
      ${TEAM_MEMBERS.map(name => `
        <button onclick="setChatUser('${name}')"
          class="w-full text-left px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition text-sm font-medium text-gray-900 dark:text-white flex items-center space-x-3 ${currentChatUser === name ? 'ring-2 ring-amber-500 bg-amber-50 dark:bg-amber-950/30' : ''}">
          <span class="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-700 dark:text-amber-300 font-bold text-xs">${name.charAt(0)}</span>
          <span>${name}${name === 'Kibo' ? ' (Office Manager)' : ''}</span>
        </button>
      `).join('')}
    </div>
  `;
}
