/**
 * Chiang Mai Office Hub - Notion Style App (Team & Calendar Edition)
 * Featuring:
 * - Team Members: Pierre, Jérémy, Matthieu, Marvin, Alexandre, Mailys, Kibo (Office Manager)
 * - Beneficiaries: Team GMB, Team SEO, Team Ad, Pierre, Office Common
 * - Sourcing Stores & Courier Tracking
 * - Dual Pricing (Regular vs Discounted) & Quantity calculation
 * - Office Rooms/Pieces destination tagging
 * - Contacts: AIS, True, Agent (+ custom)
 * - Appointments & Calendar with Google Calendar + Apple Calendar (.ICS) sync
 * - Notification Center & Reminders
 */

// --- 1. TRANSLATION DICTIONARY ---
const translations = {
  en: {
    search_placeholder: "Search Pierre, Jérémy, Alexandre, supplies, tracking... (Ctrl+K)",
    new_task: "New Item",
    menu_new_task: "New Task",
    menu_new_supply: "New Supply Order",
    menu_new_appointment: "New Appointment / RDV",
    menu_new_renovation: "New Renovation Project",
    menu_new_handworker: "Add Contact (AIS/True/Agent)",
    workspace_title: "Chiang Mai Office Hub",
    workspace_role: "Kibo (Office Manager)",
    views_section: "Views",
    view_tutorial: "🎓 Kibo's Guide",
    btn_kibo_tutorial: "🎓 Kibo's Guide / คู่มือ Kibo",
    view_kanban: "Board / Kanban",
    view_table: "Detailed Table",
    view_supplies: "Supplies & Order Tracking",
    view_calendar: "Calendar & RDV Sync",
    view_handworkers: "AIS • True • Agent",
    view_renovations: "Office Renovations",
    view_it_inventory: "IT Hardware & Assets",
    view_budget: "Budget by Team",
    view_recurring_bills: "Monthly Office Bills",
    view_wiki: "Office Wiki & Emergency",
    menu_new_asset: "New IT Asset / Equipment",
    menu_new_bill: "New Recurring Office Bill",
    it_view_title: "IT Hardware & Equipment Registry",
    it_view_subtitle: "Track MacBooks, 4K monitors, mechanical keyboards, serial numbers & AppleCare warranties by person",
    add_new_asset: "+ Add IT Equipment",
    budget_view_title: "Monthly Team Budget & Spend Breakdown",
    budget_view_subtitle: "Detailed allocation of office expenditures in Thai Baht (฿) across Team GMB, Team SEO, Team Ad, Pierre, and Office Common",
    bills_view_title: "Monthly Office Overhead & Recurring Charges",
    bills_view_subtitle: "Payment cadence for Landlord Rent, PEA Electricity, MWA Water, AIS Fibre, True backup, and Weekly Cleaning",
    add_new_bill: "+ Add Recurring Bill",
    teams_section: "Teams & Beneficiaries",
    members_section: "Team Members",
    rooms_section: "Office Rooms / Pieces",
    quick_templates: "Quick Templates",
    tpl_ac: "AC Deep Clean & Servicing",
    tpl_pm25: "PM2.5 Air Purifiers & Filters",
    tpl_tm30: "TM30 & 90-Day Reporting",
    tpl_coffee: "Doi Chang Coffee & Supplies",
    tpl_pea: "PEA Electricity & AIS Fibre",
    local_data_saved: "Saved in browser",
    live: "Active",
    export: "Export",
    import: "Import",
    page_title: "Chiang Mai Office Hub",
    page_subtitle: "Tasks, supplies, team equipment, calendar appointments & order tracking",
    load_demo: "Restore Defaults",
    filter_all_teams: "All Teams / Beneficiaries",
    filter_all_members: "All Members",
    filter_all_priorities: "All Priorities",
    prio_urgent: "🔥 Urgent / Critical",
    prio_high: "🔴 High",
    prio_medium: "🟡 Medium",
    prio_low: "🟢 Low",
    stat_open: "Open:",
    stat_inprogress: "In Progress:",
    stat_done: "Done:",
    col_task: "Task / Item",
    col_team: "Team / Member",
    col_contact: "Contact (AIS/True/Agent)",
    col_status: "Status",
    col_priority: "Priority",
    col_due: "Due Date",
    col_budget: "Budget (฿)",
    col_actions: "Actions",
    add_row: "Add new entry",
    // Notifications & Reminders
    notif_center_title: "Office Reminders & Alerts",
    enable_push: "Enable Browser Push",
    // Appointments & Calendar
    appt_view_title: "Appointments & Office Schedule",
    appt_view_subtitle: "Schedule RDVs with AIS, True, Landlord Agent, team syncs, and sync with Google or Apple Calendar",
    add_new_appt: "+ New Appointment",
    upcoming_appts: "Upcoming Appointments / RDV",
    modal_appt_header: "Schedule Appointment / RDV",
    lbl_appt_title: "Title / Meeting Subject",
    lbl_appt_date: "Date",
    lbl_appt_time: "Start Time",
    lbl_appt_endtime: "End Time",
    lbl_appt_attendees: "Team Members Concerned",
    lbl_appt_contact: "External Contact (AIS, True, Agent)",
    lbl_appt_room: "Office Room / Location",
    lbl_appt_notes: "Notes / Meeting Agenda",
    // Supplies
    tracking_banner_title: "Active Shipments & Order Tracking (พัสดุและคำสั่งซื้อที่อยู่ระหว่างจัดส่ง)",
    room_all: "All Rooms / Zones",
    beneficiary_all: "All Teams / Beneficiaries",
    supply_status_all: "All Stock Statuses",
    add_new_supply: "+ Add Supply & Order",
    modal_supply_header: "Office Supply Item & Pricing",
    lbl_supply_name: "Item Name & Brand",
    lbl_supply_room: "Destination Room / Piece des bureaux",
    lbl_supply_beneficiary: "Necessary for Team / Person",
    lbl_supply_photo: "Photo of Supply",
    click_photo: "Upload",
    upload_local_photo: "Choose file from Mac",
    lbl_supply_store: "Store / Purchase Source (Chiang Mai)",
    lbl_supply_link: "Direct Purchase Link (URL)",
    lbl_supply_status: "Stock Status",
    tracking_details_title: "Order Tracking Details (ข้อมูลติดตามพัสดุ)",
    btn_track_live: "Track Online",
    lbl_carrier: "Courier / Delivery Service",
    lbl_tracking_number: "Tracking Number",
    lbl_order_date: "Order Date",
    lbl_est_delivery: "Est. Delivery Date",
    lbl_supply_notes: "Notes & Specifications",
    mark_delivered: "Mark Received & Stocked",
    // Key contacts
    key_contacts_title: "Essential Contacts (AIS, True, Agent)",
    key_contacts_subtitle: "Quick 1-click phone dial & Line ID for AIS Fibre, True Business, and Landlord/Visa Agent",
    add_handworker: "+ Add Contact",
    modal_hw_header: "Contact (AIS / True / Agent)",
    // Tasks
    modal_title_ph: "Task title (e.g. Schedule AIS Fibre check for SEO team)",
    prop_status: "Status",
    prop_priority: "Priority",
    prop_due: "Due Date",
    prop_cost: "Cost (฿)",
    status_todo: "To Do",
    status_in_progress: "In Progress",
    status_waiting: "Waiting / External",
    status_done: "Done",
    subtasks_title: "Action Items / Checklist",
    add_item: "Add item",
    task_photos_title: "Photos & Attachments",
    upload_photo: "Upload Photo",
    add_photo_url: "Add URL",
    notes_title: "Notes & Details",
    notes_placeholder: "Add remarks or instructions for the team...",
    btn_delete: "Delete",
    btn_cancel: "Cancel",
    btn_save: "Save Changes",
    btn_call: "Call",
    add_card: "+ New Card",
    // Routine
    routine_title: "Chiang Mai Office Manager Cadence",
    routine_1: "Day 1-5: Pay PEA electricity & MWA water bills (via PEA Smart Plus or Thai bank app).",
    routine_2: "Weekly: Restock Singha drinking water bottles & Doi Chang whole coffee beans.",
    routine_3: "Monthly: Check AC filter cleanliness. Inspect fire extinguishers & emergency lighting.",
    routine_4: "Quarterly: Deep AC cleaning wash by certified tech. Check 90-day expat visa status.",
    routine_5: "Dec - April: High PM2.5 Season! Keep HEPA filters active 24/7, monitor indoor AQI, stock N95 masks.",
    wiki_emergency_title: "Chiang Mai Emergency Contacts",
    contact_tourist_police: "Tourist Police (English/Thai)",
    contact_pea: "PEA Electricity Faults (การไฟฟ้า)",
    contact_hospital: "Chiang Mai Ram Hospital",
    contact_immigration: "Chiang Mai Immigration Office",
    sop_title: "Standard Operating Procedures (SOP)",
    sop_tm30_title: "TM30 Filing Process (แจ้งที่พักคนต่างชาติ)",
    sop_tm30_desc: "Must be registered within 24 hours of any foreign staff arriving at company housing. File via Section 38 portal.",
    sop_ac_title: "Aircon Maintenance Rules",
    sop_ac_desc: "Set thermostat to 25°C. Clean dust mesh every 2 weeks. Deep water coil wash every 3 months.",
    // Renovations (missing from dictionary)
    renovations_title: "Office Renovation Projects",
    renovations_subtitle: "Track maintenance, improvements & contractor work across all rooms",
    add_new_renovation: "+ Add Renovation Project",
    modal_reno_header: "Office Renovation Project",
    // IT Inventory KPIs
    it_total_devices: "Total Devices",
    it_total_value: "Total Asset Value",
    it_assigned: "Assigned to Team",
    it_warranties: "Warranties Active",
    // IT Filters
    it_filter_members: "All Team Members",
    it_filter_categories: "All Device Categories",
    it_filter_rooms: "All Rooms",
    // Budget KPIs
    budget_print: "Print Report",
    budget_total_spend: "Total Office Spend",
    budget_supplies_orders: "Supplies & Orders",
    budget_fixed_bills: "Monthly Fixed Bills",
    budget_top_team: "Top Allocated Team",
    budget_distribution: "Team Expenditure Distribution (%)",
    budget_currency: "Currency: THB (฿)",
    // Recurring Bills KPIs
    bills_monthly_commit: "Monthly Commitment",
    bills_paid_month: "Paid This Month",
    bills_remaining: "Remaining to Pay",
    bills_next_due: "Next Bill Due",
    bills_mark_paid: "Mark Paid",
    bills_mark_unpaid: "Mark Unpaid",
    bills_to_pay: "To Pay before Day",
    // Wiki extras
    wiki_expat_emergency: "Emergency for expat staff",
    wiki_pea_center: "Chiang Mai PEA Call Center",
    wiki_accident_24h: "Accidents & 24h Emergency",
    wiki_immigration_branch: "Promenada / Airport Branch",
    // Modal - Contact form
    modal_contact_name: "Contact Name / Provider",
    modal_provider_type: "Provider Type",
    modal_phone: "Phone Number",
    modal_line_id: "Line ID / WhatsApp",
    modal_contract_ref: "Account / Contract Ref",
    // Modal - Renovation form
    modal_reno_title: "Project Title",
    modal_reno_stage: "Stage",
    modal_reno_room: "Office Room",
    modal_reno_budget: "Est. Budget (฿)",
    modal_reno_contractor: "Contractor / Technician Contact",
    modal_reno_photos: "Site Photos (Before/After)",
    modal_reno_notes: "Work Scope & Notes",
    // Modal - IT form
    modal_it_header: "IT Equipment & Asset Details",
    modal_device_name: "Device Name & Model",
    modal_device_category: "Category",
    modal_device_assignee: "Assigned Person",
    modal_device_team: "Team / Pole",
    modal_device_room: "Office Room",
    modal_device_serial: "Serial Number (S/N)",
    modal_device_cost: "Purchase Cost (฿)",
    modal_device_purchase_date: "Purchase Date",
    modal_device_warranty: "Warranty Expiration Date",
    modal_device_status: "Status",
    modal_device_photo: "Photo / Link URL",
    modal_device_notes: "Specs & Notes",
    // Modal - Bill form
    modal_bill_header: "Recurring Office Overhead Bill",
    modal_bill_name_en: "Bill Name (English)",
    modal_bill_name_th: "Bill Name (Thai / ชื่อภาษาไทย)",
    modal_bill_category: "Category",
    modal_bill_amount: "Monthly Amount (฿)",
    modal_bill_due_day: "Due Day of Month",
    modal_bill_provider: "Provider / Vendor Contact",
    modal_bill_payment: "Payment Method",
    modal_bill_ref: "Customer / Reference / CA No.",
    modal_bill_room: "Office Room",
    modal_bill_notes: "Payment Instructions & Tax Notes",
    // Supply pricing
    supply_pricing_title: "Pricing, Discount & Quantity",
    supply_regular_price: "Regular Price (฿)",
    supply_discount_price: "Discount Price (฿)",
    supply_quantity: "Quantity",
    supply_total: "Total Budget:",
    supply_paste_url: "or paste image URL:",
    // Calendar
    calendar_download_ics: "Download .ICS (Apple)",
    calendar_add_to: "Add to Calendar:",
    calendar_google: "Google Calendar",
    calendar_apple: "Apple Calendar (.ics)",
    // Table
    table_showing: "Showing",
    table_tasks: "tasks",
    // Common
    team_edition: "Team Edition",
    btn_save_project: "Save Project",
    btn_save_equipment: "Save Equipment",
    btn_save_bill: "Save Bill",
    // Confirm dialogs
    confirm_delete_task: "Delete this task?",
    confirm_delete_appt: "Delete this appointment?",
    confirm_delete_contact: "Delete this contact?",
    confirm_delete_reno: "Delete this renovation project?",
    confirm_delete_asset: "Delete this equipment?",
    confirm_delete_bill: "Delete this bill?",
    // Sidebar groups
    group_main: "Main",
    group_finance: "Finance & Bills",
    group_reference: "Reference & Tools",
    // Overdue alerts
    overdue_label: "OVERDUE",
    overdue_days: "days overdue",
    // Low stock
    low_stock_alert: "Low Stock Alert",
    low_stock_items: "items need reordering",
    // EUR/THB
    exchange_rate: "EUR/THB",
    rate_updated: "Updated",
    // Room names
    room_exterieur: "Exterieur (Outdoor)",
    room_private: "Private Office",
    room_common: "Common Office",
    room_kitchen: "Kitchen",
    room_bathroom: "Bathroom",
    room_rooftop: "Rooftop",
    room_playground: "Common Space / Playground",
    room_subtitle_exterieur: "Terraces & garden",
    room_subtitle_private: "Private workspace",
    room_subtitle_common: "Shared workspace",
    room_subtitle_kitchen: "Coffee & pantry",
    room_subtitle_bathroom: "Sanitary facilities",
    room_subtitle_rooftop: "Sunset terrace",
    room_subtitle_playground: "Lounge & meetings"
  },
  th: {
    search_placeholder: "ค้นหา Pierre, Jérémy, Alexandre, ของใช้, พัสดุ, นัดหมาย... (Ctrl+K)",
    new_task: "สร้างรายการ",
    menu_new_task: "สร้างงานใหม่",
    menu_new_supply: "สั่งของใช้เข้าออฟฟิศ",
    menu_new_appointment: "นัดหมาย / ตารางนัด (RDV)",
    menu_new_renovation: "เพิ่มโครงการรีโนเวท",
    menu_new_handworker: "เพิ่มเบอร์ติดต่อ (AIS/True/Agent)",
    workspace_title: "สำนักงานเชียงใหม่ (Chiang Mai)",
    workspace_role: "Kibo (ผู้จัดการออฟฟิศ / Office Manager)",
    views_section: "มุมมอง",
    view_tutorial: "🎓 คู่มือการทำงาน Kibo",
    btn_kibo_tutorial: "🎓 คู่มือการทำงาน Kibo",
    view_kanban: "บอร์ดคัมบัง (Kanban)",
    view_table: "ตารางละเอียด (Table)",
    view_supplies: "ของใช้ & ติดตามพัสดุ",
    view_calendar: "ปฏิทินนัดหมาย (Calendar & RDV)",
    view_handworkers: "AIS • True • Agent",
    view_renovations: "งานปรับปรุงออฟฟิศ",
    view_it_inventory: "อุปกรณ์ไอทีประจำตัว",
    view_budget: "งบประมาณแยกตามทีม",
    view_recurring_bills: "ค่าใช้จ่ายประจำสำนักงาน",
    view_wiki: "คู่มือออฟฟิศ & เบอร์ฉุกเฉิน",
    menu_new_asset: "เพิ่มอุปกรณ์ไอที",
    menu_new_bill: "เพิ่มค่าใช้จ่ายประจำ",
    it_view_title: "ทะเบียนอุปกรณ์ไอทีและเครื่องมือประจำตัว",
    it_view_subtitle: "บันทึก MacBook, จอ 4K, คีย์บอร์ด, หมายเลขเครื่อง (S/N) และประกัน AppleCare แยกรายบุคคล",
    add_new_asset: "+ เพิ่มอุปกรณ์ไอที",
    budget_view_title: "สรุปงบประมาณและค่าใช้จ่ายแยกตามทีม",
    budget_view_subtitle: "การจัดสรรงบประมาณสำนักงานในหน่วยบาท (฿) สำหรับ Team GMB, Team SEO, Team Ad, Pierre และส่วนกลาง",
    bills_view_title: "ค่าใช้จ่ายประจำและสาธารณูปโภครายเดือน",
    bills_view_subtitle: "กำหนดการชำระค่าเช่า ค่าไฟ PEA ค่าน้ำ กปภ. อินเทอร์เน็ต AIS/True และแม่บ้านประจำสัปดาห์",
    add_new_bill: "+ เพิ่มค่าใช้จ่ายประจำ",
    teams_section: "ทีมและผู้รับผิดชอบ",
    members_section: "สมาชิกในทีม",
    rooms_section: "ห้องและโซนทำงาน",
    quick_templates: "เทมเพลตด่วน",
    tpl_ac: "ล้างแอร์ & ซ่อมบำรุง",
    tpl_pm25: "ไส้กรอง PM2.5 & เครื่องฟอก",
    tpl_tm30: "แจ้งที่พัก ตม.30 & รายงาน 90 วัน",
    tpl_coffee: "สั่งกาแฟดอยช้าง & ของใช้ 7-11",
    tpl_pea: "ชำระค่าไฟ PEA & AIS Fibre",
    local_data_saved: "บันทึกในเบราว์เซอร์แล้ว",
    live: "ออนไลน์",
    export: "ส่งออก JSON",
    import: "นำเข้า JSON",
    page_title: "ระบบจัดการสำนักงานเชียงใหม่",
    page_subtitle: "ศูนย์รวมงาน ของใช้แยกตามทีมและห้อง ตารางนัดหมาย และติดตามพัสดุ",
    load_demo: "โหลดข้อมูลเริ่มต้น",
    filter_all_teams: "ทุกทีม / ผู้รับผิดชอบ",
    filter_all_members: "สมาชิกทุกคน",
    filter_all_priorities: "ทุกระดับความสำคัญ",
    prio_urgent: "🔥 ด่วนที่สุด (Urgent)",
    prio_high: "🔴 สำคัญมาก (High)",
    prio_medium: "🟡 ปานกลาง (Medium)",
    prio_low: "🟢 ปกติทั่วไป (Low)",
    stat_open: "รอดำเนินการ:",
    stat_inprogress: "กำลังทำ:",
    stat_done: "เสร็จสิ้น:",
    col_task: "ชื่องาน / รายการ",
    col_team: "ทีม / สมาชิก",
    col_contact: "เบอร์ติดต่อ (AIS/True/Agent)",
    col_status: "สถานะ",
    col_priority: "ความสำคัญ",
    col_due: "กำหนดส่ง",
    col_budget: "งบประมาณ (฿)",
    col_actions: "จัดการ",
    add_row: "เพิ่มรายการใหม่",
    // Notifications & Reminders
    notif_center_title: "การแจ้งเตือนและสิ่งที่ต้องทำด่วน",
    enable_push: "เปิดการแจ้งเตือนบนเบราว์เซอร์",
    // Appointments & Calendar
    appt_view_title: "ตารางนัดหมายและการนัดพบ (Appointments & RDV)",
    appt_view_subtitle: "นัดหมายช่าง AIS, True, เอเจนซี่ที่พัก และซิงค์กับ Google Calendar หรือ Apple Calendar ใน 1 คลิก",
    add_new_appt: "+ สร้างการนัดหมายใหม่",
    upcoming_appts: "การนัดหมายเร็วๆ นี้ (Upcoming RDV)",
    modal_appt_header: "บันทึกการนัดหมาย / RDV",
    lbl_appt_title: "หัวข้อนัดหมาย / เรื่องที่ประชุม",
    lbl_appt_date: "วันที่นัดหมาย",
    lbl_appt_time: "เวลาเริ่ม",
    lbl_appt_endtime: "เวลาสิ้นสุด",
    lbl_appt_attendees: "สมาชิกในทีมที่เกี่ยวข้อง",
    lbl_appt_contact: "เบอร์ติดต่อภายนอก (AIS, True, Agent)",
    lbl_appt_room: "ห้องหรือโซนที่นัดพบ",
    lbl_appt_notes: "บันทึกและรายละเอียดการนัดหมาย",
    // Supplies
    tracking_banner_title: "พัสดุและคำสั่งซื้อที่อยู่ระหว่างจัดส่ง (Active Shipments)",
    room_all: "ทุกห้อง / โซน",
    beneficiary_all: "ทุกทีม / ผู้รับของ",
    supply_status_all: "ทุกสถานะสต็อก",
    add_new_supply: "+ สั่งของใช้เข้าออฟฟิศ",
    modal_supply_header: "รายการของใช้และรายละเอียดราคา",
    lbl_supply_name: "ชื่อของใช้และยี่ห้อ",
    lbl_supply_room: "สำหรับห้องใดในออฟฟิศ",
    lbl_supply_beneficiary: "สำหรับทีมใด / ใครเป็นผู้ใช้",
    lbl_supply_photo: "รูปถ่ายสินค้า",
    click_photo: "อัปโหลด",
    upload_local_photo: "เลือกไฟล์จาก Mac",
    lbl_supply_store: "แหล่งซื้อ (Shopee, Lazada, Makro...)",
    lbl_supply_link: "ลิงก์สั่งซื้อ (URL)",
    lbl_supply_status: "สถานะสต็อก",
    tracking_details_title: "ข้อมูลติดตามพัสดุ",
    btn_track_live: "เช็คพัสดุออนไลน์",
    lbl_carrier: "บริษัทขนส่ง (Flash, Kerry...)",
    lbl_tracking_number: "เลขพัสดุ (Tracking Number)",
    lbl_order_date: "วันที่สั่ง",
    lbl_est_delivery: "กำหนดวันส่งถึง",
    lbl_supply_notes: "บันทึกเพิ่มเติม",
    mark_delivered: "ได้รับของแล้ว & นำเข้าสต็อก",
    // Key contacts
    key_contacts_title: "เบอร์ติดต่อหลัก (AIS • True • Agent)",
    key_contacts_subtitle: "กดโทรออกทันทีใน 1 คลิก พร้อมไอดีไลน์สำหรับทีมช่าง AIS Fibre, True และเอเจนซี่ที่พัก/วีซ่า",
    add_handworker: "+ เพิ่มเบอร์ติดต่อ",
    modal_hw_header: "ข้อมูลเบอร์ติดต่อ (AIS / True / Agent)",
    // Tasks
    modal_title_ph: "ชื่องาน (เช่น นัดช่าง AIS ตรวจความเร็วเน็ตให้ทีม SEO)",
    prop_status: "สถานะ",
    prop_priority: "ความสำคัญ",
    prop_due: "กำหนดส่ง",
    prop_cost: "ค่าใช้จ่าย (฿)",
    status_todo: "ยังไม่เริ่ม",
    status_in_progress: "กำลังดำเนินการ",
    status_waiting: "รอติดต่อภายนอก",
    status_done: "เสร็จสิ้นแล้ว",
    subtasks_title: "รายการสิ่งที่ต้องทำ (Checklist)",
    add_item: "เพิ่มรายการ",
    task_photos_title: "รูปภาพและไฟล์แนบ",
    upload_photo: "อัปโหลดรูปภาพ",
    add_photo_url: "ใส่ URL รูป",
    notes_title: "บันทึกและรายละเอียด",
    notes_placeholder: "ใส่บันทึกรายละเอียดสำหรับทีม...",
    btn_delete: "ลบรายการ",
    btn_cancel: "ยกเลิก",
    btn_save: "บันทึกข้อมูล",
    btn_call: "โทรทันที",
    add_card: "+ เพิ่มการ์ด",
    // Routine
    routine_title: "ตารางงานประจำเดือนสำหรับ Office Manager เชียงใหม่",
    routine_1: "วันที่ 1-5: จ่ายบิลค่าไฟ PEA และค่าน้ำประปา",
    routine_2: "ทุกสัปดาห์: สั่งน้ำดื่มสิงห์ และสั่งเมล็ดกาแฟดอยช้าง",
    routine_3: "ทุกเดือน: ตรวจเช็คฟิลเตอร์แอร์ ถังดับเพลิง และไฟฉุกเฉิน",
    routine_4: "ทุก 3 เดือน: ล้างแอร์ระบบฉีดน้ำแรงดัน และตรวจเช็ครายงานตัว 90 วัน",
    routine_5: "ธ.ค. - เม.ย.: ฤดูฝุ่น PM2.5 เปิดเครื่องฟอกอากาศ 24 ชม. และสต็อกหน้ากาก N95",
    wiki_emergency_title: "เบอร์โทรศัพท์ฉุกเฉินในเชียงใหม่",
    contact_tourist_police: "ตำรวจท่องเที่ยว (อังกฤษ/ไทย)",
    contact_pea: "ศูนย์บริการไฟฟ้า PEA เชียงใหม่",
    contact_hospital: "โรงพยาบาลเชียงใหม่ราม (ฉุกเฉิน 24 ชม.)",
    contact_immigration: "สำนักงานตรวจคนเข้าเมืองเชียงใหม่ (ตม.)",
    sop_title: "ขั้นตอนการปฏิบัติงานมาตรฐาน (SOP)",
    sop_tm30_title: "การแจ้งที่พักคนต่างด้าวตาม ม.30 (TM30)",
    sop_tm30_desc: "ต้องแจ้งภายใน 24 ชั่วโมงเมื่อพนักงานต่างชาติเดินทางถึงที่พัก",
    sop_ac_title: "ระเบียบการดูแลเครื่องปรับอากาศ",
    sop_ac_desc: "ตั้งอุณหภูมิที่ 25°C ล้างฟิลเตอร์ทุก 2 สัปดาห์ ล้างใหญ่ทุก 3 เดือน",
    renovations_title: "โครงการปรับปรุงสำนักงาน",
    renovations_subtitle: "ติดตามงานซ่อมบำรุง ปรับปรุง และงานผู้รับเหมาทุกห้อง",
    add_new_renovation: "+ เพิ่มโครงการปรับปรุง",
    modal_reno_header: "โครงการปรับปรุงสำนักงาน",
    it_total_devices: "อุปกรณ์ทั้งหมด",
    it_total_value: "มูลค่ารวม",
    it_assigned: "มอบหมายให้ทีม",
    it_warranties: "ประกันที่ใช้ได้",
    it_filter_members: "สมาชิกทั้งหมด",
    it_filter_categories: "ทุกหมวดหมู่",
    it_filter_rooms: "ทุกห้อง",
    budget_print: "พิมพ์รายงาน",
    budget_total_spend: "ค่าใช้จ่ายทั้งหมด",
    budget_supplies_orders: "วัสดุและคำสั่งซื้อ",
    budget_fixed_bills: "ค่าใช้จ่ายประจำ",
    budget_top_team: "ทีมที่ใช้งบมากที่สุด",
    budget_distribution: "การกระจายค่าใช้จ่ายตามทีม (%)",
    budget_currency: "สกุลเงิน: บาท (฿)",
    bills_monthly_commit: "ค่าใช้จ่ายรายเดือน",
    bills_paid_month: "จ่ายแล้วเดือนนี้",
    bills_remaining: "ยังค้างจ่าย",
    bills_next_due: "บิลถัดไป",
    bills_mark_paid: "จ่ายแล้ว",
    bills_mark_unpaid: "ยังไม่จ่าย",
    bills_to_pay: "ต้องจ่ายก่อนวันที่",
    wiki_expat_emergency: "เหตุฉุกเฉินสำหรับชาวต่างชาติ",
    wiki_pea_center: "ศูนย์บริการ PEA เชียงใหม่",
    wiki_accident_24h: "อุบัติเหตุและฉุกเฉิน 24 ชม.",
    wiki_immigration_branch: "สาขาพรอมเมนาดา / สนามบิน",
    modal_contact_name: "ชื่อผู้ติดต่อ / ผู้ให้บริการ",
    modal_provider_type: "ประเภทผู้ให้บริการ",
    modal_phone: "เบอร์โทรศัพท์",
    modal_line_id: "Line ID / WhatsApp",
    modal_contract_ref: "เลขที่บัญชี / สัญญา",
    modal_reno_title: "ชื่อโครงการ",
    modal_reno_stage: "ขั้นตอน",
    modal_reno_room: "ห้องที่ปรับปรุง",
    modal_reno_budget: "งบประมาณ (฿)",
    modal_reno_contractor: "ผู้รับเหมา / ช่าง",
    modal_reno_photos: "รูปถ่ายก่อน/หลัง",
    modal_reno_notes: "ขอบเขตงานและหมายเหตุ",
    modal_it_header: "รายละเอียดอุปกรณ์ IT",
    modal_device_name: "ชื่อและรุ่นอุปกรณ์",
    modal_device_category: "หมวดหมู่",
    modal_device_assignee: "ผู้ใช้งาน",
    modal_device_team: "ทีม / แผนก",
    modal_device_room: "ห้อง",
    modal_device_serial: "หมายเลขเครื่อง (S/N)",
    modal_device_cost: "ราคาซื้อ (฿)",
    modal_device_purchase_date: "วันที่ซื้อ",
    modal_device_warranty: "วันหมดประกัน",
    modal_device_status: "สถานะ",
    modal_device_photo: "รูปภาพ / ลิงก์",
    modal_device_notes: "สเปคและหมายเหตุ",
    modal_bill_header: "บิลค่าใช้จ่ายประจำ",
    modal_bill_name_en: "ชื่อบิล (ภาษาอังกฤษ)",
    modal_bill_name_th: "ชื่อบิล (ภาษาไทย)",
    modal_bill_category: "หมวดหมู่",
    modal_bill_amount: "จำนวนเงินรายเดือน (฿)",
    modal_bill_due_day: "วันครบกำหนดชำระ",
    modal_bill_provider: "ผู้ให้บริการ / เบอร์ติดต่อ",
    modal_bill_payment: "วิธีการชำระเงิน",
    modal_bill_ref: "เลขที่ลูกค้า / อ้างอิง",
    modal_bill_room: "ห้อง",
    modal_bill_notes: "วิธีชำระและหมายเหตุภาษี",
    supply_pricing_title: "ราคา ส่วนลด และจำนวน",
    supply_regular_price: "ราคาปกติ (฿)",
    supply_discount_price: "ราคาส่วนลด (฿)",
    supply_quantity: "จำนวน",
    supply_total: "งบประมาณรวม:",
    supply_paste_url: "หรือวาง URL รูปภาพ:",
    calendar_download_ics: "ดาวน์โหลด .ICS (Apple)",
    calendar_add_to: "เพิ่มในปฏิทิน:",
    calendar_google: "Google Calendar",
    calendar_apple: "Apple Calendar (.ics)",
    table_showing: "แสดง",
    table_tasks: "รายการ",
    team_edition: "เวอร์ชันทีม",
    btn_save_project: "บันทึกโครงการ",
    btn_save_equipment: "บันทึกอุปกรณ์",
    btn_save_bill: "บันทึกบิล",
    confirm_delete_task: "ลบงานนี้?",
    confirm_delete_appt: "ลบนัดหมายนี้?",
    confirm_delete_contact: "ลบผู้ติดต่อนี้?",
    confirm_delete_reno: "ลบโครงการปรับปรุงนี้?",
    confirm_delete_asset: "ลบอุปกรณ์นี้?",
    confirm_delete_bill: "ลบบิลนี้?",
    group_main: "หลัก",
    group_finance: "การเงินและบิล",
    group_reference: "ข้อมูลอ้างอิง",
    overdue_label: "เลยกำหนด",
    overdue_days: "วันที่เลยกำหนด",
    low_stock_alert: "แจ้งเตือนสต็อกต่ำ",
    low_stock_items: "รายการต้องสั่งเพิ่ม",
    exchange_rate: "EUR/THB",
    rate_updated: "อัปเดต",
    // Room names
    room_exterieur: "ภายนอก (Outdoor)",
    room_private: "ห้องทำงานส่วนตัว",
    room_common: "ห้องทำงานส่วนกลาง",
    room_kitchen: "ห้องครัว",
    room_bathroom: "ห้องน้ำ",
    room_rooftop: "ดาดฟ้า",
    room_playground: "ห้องพักผ่อน / สนามเด็กเล่น",
    room_subtitle_exterieur: "ระเบียงและสวน",
    room_subtitle_private: "พื้นที่ทำงานส่วนตัว",
    room_subtitle_common: "พื้นที่ทำงานร่วม",
    room_subtitle_kitchen: "กาแฟและของว่าง",
    room_subtitle_bathroom: "สุขภัณฑ์",
    room_subtitle_rooftop: "ชมวิวพระอาทิตย์ตก",
    room_subtitle_playground: "พักผ่อนและประชุม"
  }
};

// --- 2. ESSENTIAL CONTACTS: AIS, TRUE, AGENT ONLY ---
const defaultCMHandworkers = [
  {
    id: "hw-ais",
    name: "AIS Fibre Business Tech Support (ช่างเทคนิค AIS)",
    specialty: "ais",
    phone: "1175",
    line: "@aiscontact",
    location: "Chiang Mai",
    rate: "Enterprise SLA, Fiber optic splicing & ONT router repair. Ref: 880293819"
  },
  {
    id: "hw-true",
    name: "True Fibre & TrueMove H Enterprise (ช่างเทคนิค True)",
    specialty: "true",
    phone: "1242",
    line: "@truebusiness",
    location: "Chiang Mai",
    rate: "Backup 5G router & corporate SIM accounts. Direct CM: 053-222-100"
  },
  {
    id: "hw-agent",
    name: "Landlord & Visa Agent (เอเจนซี่ที่พัก & ตม.)",
    specialty: "agent",
    phone: "081-882-9900",
    line: "@cm-agent",
    location: "Nimman",
    rate: "Rental lease agreements, TM30 receipts, landlord power-of-attorney & 90-day reports"
  }
];

// --- 3. APPOINTMENTS (RDV) ---
const defaultCMAppointments = [
  {
    id: "appt-001",
    title: "Deep Cleaning Villa KK",
    date: "2026-10-07",
    time: "09:00",
    endTime: "19:00",
    attendees: "Kibo",
    contact: "",
    room: "Private office",
    notes: "Cleaning Staff coming"
  }
];

// --- 4. SUPPLIES WITH DISCOUNTS, QUANTITIES, ROOMS & BENEFICIARIES ---
const defaultCMSupplies = [
  {
    id: "sup-001",
    name: "Ergonomic Chairs",
    photo: "",
    store: "Shopee",
    url: "https://shopee.co.th",
    regularPrice: 11163,
    price: 18195,
    quantity: 1,
    room: "Common Office",
    beneficiary: "Office Common",
    status: "ordered",
    carrier: "ShopeeXpress",
    trackingNumber: "",
    orderDate: "2026-10-04",
    estDelivery: "2026-10-10",
    notes: ""
  },
  {
    id: "sup-002",
    name: "Table Ergonomic",
    photo: "",
    store: "Shopee",
    url: "https://shopee.co.th",
    regularPrice: 9200,
    price: 2422,
    quantity: 4,
    room: "Common Office",
    beneficiary: "Office Common",
    status: "ordered",
    carrier: "ShopeeXpress",
    trackingNumber: "",
    orderDate: "2026-10-04",
    estDelivery: "2026-10-10",
    notes: ""
  }
];

// --- 5. TASKS WITH BENEFICIARIES & ASSIGNEES ---
const defaultCMTasks = [
  {
    id: "cm-001",
    title: "Chair Order",
    titleTh: "สั่งซื้อเก้าอี้",
    icon: "🪑",
    status: "in_progress",
    priority: "high",
    team: "Office Common",
    assignee: "Kibo",
    dueDate: "2026-10-10",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "",
    checklist: []
  },
  {
    id: "cm-002",
    title: "Table shoppee coming today for Team GMB",
    titleTh: "โต๊ะจาก Shopee มาถึงวันนี้สำหรับ Team GMB",
    icon: "🪑",
    status: "in_progress",
    priority: "high",
    team: "Team GMB",
    assignee: "Mailys",
    dueDate: "2026-10-08",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "",
    checklist: []
  },
  {
    id: "cm-003",
    title: "Prepare spreadsheet w Mailys & her girlfriend - Marketplace",
    titleTh: "เตรียมสเปรดชีทกับ Mailys และแฟนสาว - Marketplace",
    icon: "📊",
    status: "todo",
    priority: "high",
    team: "General Team",
    assignee: "Mailys",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "All the marketplace items to compare and track",
    checklist: []
  },
  {
    id: "cm-004",
    title: "Order Office Cleaner - Deep Cleaning ONE TIME",
    titleTh: "สั่งแม่บ้าน - ทำความสะอาดใหญ่ครั้งเดียว",
    icon: "🧹",
    status: "todo",
    priority: "urgent",
    team: "Office Common",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "",
    checklist: []
  },
  {
    id: "cm-005",
    title: "Order Stuff: Marvin, Matthieu, Alex, Mailys",
    titleTh: "สั่งของ: Marvin, Matthieu, Alex, Mailys",
    icon: "🖥️",
    status: "todo",
    priority: "urgent",
    team: "General Team",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "Desk + chair setup for each team member",
    checklist: [
      { text: "Pierre", textTh: "Pierre", done: true },
      { text: "Jérémy", textTh: "Jérémy", done: true },
      { text: "Matthieu: bureau + chaise", textTh: "Matthieu: โต๊ะ + เก้าอี้", done: false },
      { text: "Maïlys: bureau + chaise + ??", textTh: "Maïlys: โต๊ะ + เก้าอี้ + ??", done: false },
      { text: "Marvin: bureau + chaise + ecran", textTh: "Marvin: โต๊ะ + เก้าอี้ + จอ", done: false },
      { text: "Alexandre: bureau + chaise + ecran + clavier", textTh: "Alexandre: โต๊ะ + เก้าอี้ + จอ + คีย์บอร์ด", done: false }
    ]
  },
  {
    id: "cm-006",
    title: "Go w agent to see what need renovation etc",
    titleTh: "ไปกับเอเจนต์ดูว่าต้องปรับปรุงอะไรบ้าง",
    icon: "🏗️",
    status: "todo",
    priority: "high",
    team: "Office Common",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "",
    checklist: []
  },
  {
    id: "cm-007",
    title: "Order Office Cleaner - Deep Cleaning WEEKLY",
    titleTh: "สั่งแม่บ้าน - ทำความสะอาดใหญ่รายสัปดาห์",
    icon: "🧹",
    status: "todo",
    priority: "high",
    team: "Office Common",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "Set up recurring weekly cleaning service",
    checklist: []
  },
  {
    id: "cm-008",
    title: "Water Heater Shower & Sink",
    titleTh: "เครื่องทำน้ำอุ่นฝักบัวและอ่างล้างมือ",
    icon: "🚿",
    status: "todo",
    priority: "high",
    team: "Office Common",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "",
    checklist: [
      { text: "WATER HEATER SHOWER *1", textTh: "เครื่องทำน้ำอุ่นฝักบัว *1", done: false },
      { text: "SINK * 1/2", textTh: "อ่างล้างมือ * 1/2", done: false }
    ]
  },
  {
    id: "cm-009",
    title: "Electrician & Handyman",
    titleTh: "ช่างไฟฟ้าและช่างซ่อม",
    icon: "🔧",
    status: "todo",
    priority: "high",
    team: "Office Common",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "",
    checklist: [
      { text: "ELECTRICIAN", textTh: "ช่างไฟฟ้า", done: false },
      { text: "HANDYMAN FOR DESKS & CHAIR INSTALLATION ETC", textTh: "ช่างติดตั้งโต๊ะและเก้าอี้", done: false },
      { text: "CHECK AC", textTh: "ตรวจแอร์", done: false },
      { text: "CHECK LIGHTS", textTh: "ตรวจไฟ", done: false },
      { text: "CHECK WALL OUTLET (Prise murale)", textTh: "ตรวจปลั๊กไฟผนัง", done: false }
    ]
  },
  {
    id: "cm-010",
    title: "Book Phrew Monk Blessing Ceremony",
    titleTh: "จองพระสงฆ์ทำพิธีเจิมสำนักงาน",
    icon: "🙏",
    status: "todo",
    priority: "medium",
    team: "Office Common",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "",
    checklist: []
  },
  {
    id: "cm-011",
    title: "Buy Kitchen & Bathroom Supplies",
    titleTh: "ซื้อของใช้ครัวและห้องน้ำ",
    icon: "🍽️",
    status: "todo",
    priority: "high",
    team: "Office Common",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "",
    checklist: [
      { text: "Spoons, glasses, couverts, Plates, mugs etc", textTh: "ช้อน, แก้ว, มีดส้อม, จาน, แก้วมัค ฯลฯ", done: false },
      { text: "BINS", textTh: "ถังขยะ", done: false },
      { text: "TOILET PAPER", textTh: "กระดาษชำระ", done: false },
      { text: "HAND SOAP", textTh: "สบู่ล้างมือ", done: false },
      { text: "TOWELS", textTh: "ผ้าเช็ดตัว", done: false }
    ]
  },
  {
    id: "cm-012",
    title: "Curtains - where and what?",
    titleTh: "ผ้าม่าน - ห้องไหนและแบบไหน?",
    icon: "🪟",
    status: "todo",
    priority: "medium",
    team: "Office Common",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "Decide which rooms need curtains and what type",
    checklist: []
  },
  {
    id: "cm-013",
    title: "LATER: Order Office Outside Cleaning",
    titleTh: "ทีหลัง: สั่งทำความสะอาดภายนอกสำนักงาน",
    icon: "🌿",
    status: "todo",
    priority: "low",
    team: "Office Common",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "",
    checklist: []
  },
  {
    id: "cm-014",
    title: "LATER: Kitchen Appliances",
    titleTh: "ทีหลัง: เครื่องใช้ไฟฟ้าในครัว",
    icon: "🍳",
    status: "todo",
    priority: "low",
    team: "Office Common",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "",
    checklist: [
      { text: "FRIDGE", textTh: "ตู้เย็น", done: false },
      { text: "Microwave", textTh: "ไมโครเวฟ", done: false }
    ]
  },
  {
    id: "cm-015",
    title: "LATER: Office Comfort & Fun",
    titleTh: "ทีหลัง: ความสะดวกสบายและสนุกในออฟฟิศ",
    icon: "🛋️",
    status: "todo",
    priority: "low",
    team: "Office Common",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "",
    checklist: [
      { text: "Canapé / Couch", textTh: "โซฟา", done: false },
      { text: "Extra lights?", textTh: "ไฟเพิ่ม?", done: false },
      { text: "Meme jeu que dinkys BBQ in office garden", textTh: "เกมเหมือน dinkys บาร์บีคิวในสวนออฟฟิศ", done: false },
      { text: "Petanque etc", textTh: "เปตอง ฯลฯ", done: false }
    ]
  },
  {
    id: "cm-016",
    title: "LATER: BOI - Big branding name in front of building",
    titleTh: "ทีหลัง: BOI - ป้ายชื่อบริษัทใหญ่หน้าตึก",
    icon: "🏢",
    status: "todo",
    priority: "low",
    team: "General Team",
    assignee: "Kibo",
    dueDate: "",
    cost: 0,
    contactId: "",
    contactName: "",
    contactPhone: "",
    photos: [],
    notes: "",
    checklist: []
  }
];

// --- 6. RENOVATIONS ---
const defaultCMRenovations = [];

// --- 6.1 SAMPLE IT HARDWARE ASSETS REGISTRY ---
const defaultCMAssets = [
  {
    id: "asset-001",
    name: "MacBook Pro 16\" M3 Pro (36GB / 512GB Space Black)",
    category: "Laptop",
    assignedTo: "Marvin",
    team: "Team Ad",
    serialNumber: "C02K9820M3P1",
    purchaseDate: "2024-02-15",
    warrantyExpiry: "2027-02-15",
    cost: 89900,
    room: "Common Office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    notes: "Main workstation for video editing and client ads. AppleCare+ active."
  },
  {
    id: "asset-002",
    name: "Dell UltraSharp 27\" 4K USB-C Hub Monitor (U2723QE)",
    category: "Monitor",
    assignedTo: "Marvin",
    team: "Team Ad",
    serialNumber: "CN-0Y839X-72872",
    purchaseDate: "2024-02-20",
    warrantyExpiry: "2027-02-20",
    cost: 21500,
    room: "Common Office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    notes: "IPS Black 4K panel with 90W USB-C charging."
  },
  {
    id: "asset-003",
    name: "MacBook Pro 14\" M3 Pro (18GB / 1TB Space Gray)",
    category: "Laptop",
    assignedTo: "Jérémy",
    team: "Team SEO",
    serialNumber: "C02J4491M3P2",
    purchaseDate: "2024-01-10",
    warrantyExpiry: "2027-01-10",
    cost: 79900,
    room: "Common Office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80",
    notes: "SEO crawler & cloud console machine. AppleCare+ until 2027."
  },
  {
    id: "asset-004",
    name: "Écran 4K Dell UltraSharp 27\" (U2723QE)",
    category: "Monitor",
    assignedTo: "Jérémy",
    team: "Team SEO",
    serialNumber: "CN-0Y839X-72885",
    purchaseDate: "2024-01-15",
    warrantyExpiry: "2027-01-15",
    cost: 21500,
    room: "Common Office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    notes: "Paired with Jérémy's MacBook."
  },
  {
    id: "asset-005",
    name: "MacBook Pro 14\" M3 (16GB / 512GB Silver)",
    category: "Laptop",
    assignedTo: "Matthieu",
    team: "Team GMB",
    serialNumber: "C02L7712M3S1",
    purchaseDate: "2024-03-01",
    warrantyExpiry: "2025-03-01",
    cost: 69900,
    room: "Common Office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    notes: "GMB listings & data operations."
  },
  {
    id: "asset-006",
    name: "Clavier Keychron Q1 Pro Wireless Custom Mechanical Keyboard",
    category: "Keyboard",
    assignedTo: "Matthieu",
    team: "Team GMB",
    serialNumber: "KC-Q1P-99210",
    purchaseDate: "2024-03-10",
    warrantyExpiry: "2025-03-10",
    cost: 7490,
    room: "Common Office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    notes: "Gateron Brown tactile switches. Bluetooth & USB-C."
  },
  {
    id: "asset-007",
    name: "Sony WH-1000XM5 Noise Cancelling Headphones",
    category: "Audio",
    assignedTo: "Matthieu",
    team: "Team GMB",
    serialNumber: "SN-XM5-88219",
    purchaseDate: "2024-03-15",
    warrantyExpiry: "2025-03-15",
    cost: 13990,
    room: "Common Office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    notes: "For focus work in open Common Office."
  },
  {
    id: "asset-008",
    name: "MacBook Pro 16\" M3 Max (64GB / 1TB Space Black)",
    category: "Laptop",
    assignedTo: "Pierre",
    team: "Pierre",
    serialNumber: "C02P1190M3M3",
    purchaseDate: "2024-01-05",
    warrantyExpiry: "2027-01-05",
    cost: 129900,
    room: "Private office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    notes: "Executive workstation with AppleCare+ 3-Year."
  },
  {
    id: "asset-009",
    name: "Apple Studio Display 27\" 5K Retina (Nano-Texture)",
    category: "Monitor",
    assignedTo: "Pierre",
    team: "Pierre",
    serialNumber: "F4HG9901M932",
    purchaseDate: "2024-01-10",
    warrantyExpiry: "2027-01-10",
    cost: 65900,
    room: "Private office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    notes: "Nano-texture anti-reflective glass in Private Office."
  },
  {
    id: "asset-010",
    name: "MacBook Pro 14\" M3 (18GB / 512GB Space Gray)",
    category: "Laptop",
    assignedTo: "Alexandre",
    team: "Team SEO",
    serialNumber: "C02A8820M3P4",
    purchaseDate: "2024-04-10",
    warrantyExpiry: "2027-04-10",
    cost: 74900,
    room: "Common Office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80",
    notes: "Assigned to Alexandre for SEO campaign management."
  },
  {
    id: "asset-011",
    name: "LG 27\" UltraFine 4K UHD Ergo Monitor (27UN880)",
    category: "Monitor",
    assignedTo: "Alexandre",
    team: "Team SEO",
    serialNumber: "LG-4K-990123",
    purchaseDate: "2024-04-15",
    warrantyExpiry: "2027-04-15",
    cost: 17900,
    room: "Common Office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    notes: "Ergonomic C-clamp arm mount."
  },
  {
    id: "asset-012",
    name: "MacBook Air 15\" M3 (16GB / 512GB Midnight)",
    category: "Laptop",
    assignedTo: "Kibo",
    team: "Office Common",
    serialNumber: "C02M1192M3A1",
    purchaseDate: "2024-03-20",
    warrantyExpiry: "2027-03-20",
    cost: 54900,
    room: "Common Office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80",
    notes: "Office Manager primary setup with label printer."
  },
  {
    id: "asset-013",
    name: "MacBook Air 13\" M3 (16GB / 512GB Starlight)",
    category: "Laptop",
    assignedTo: "Mailys",
    team: "Team Ad",
    serialNumber: "C02ML991M3S5",
    purchaseDate: "2024-05-10",
    warrantyExpiry: "2027-05-10",
    cost: 47900,
    room: "Common Office",
    status: "in_use",
    photo: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80",
    notes: "Primary workstation assigned to Mailys."
  }
];

// --- 6.2 SAMPLE RECURRING OFFICE OVERHEAD BILLS ---
const defaultCMRecurringBills = [
  {
    id: "bill-rent",
    name: "Loyer Bureaux Nimman (Commercial Lease)",
    nameTh: "ค่าเช่าสำนักงาน นิมมานเหมินท์",
    category: "Rent",
    provider: "Landlord / Visa Agent (081-882-9900)",
    amount: 45000,
    dueDay: 1,
    status: "paid",
    paidDate: "2026-10-01",
    paymentMethod: "Bangkok Bank Transfer (BBL)",
    refNumber: "LEASE-NM-2026/28",
    room: "Common Office",
    notes: "Monthly commercial lease. Verified signed receipt archived."
  },
  {
    id: "bill-pea",
    name: "Électricité PEA (Provincial Electricity Authority)",
    nameTh: "ค่าไฟฟ้า PEA การไฟฟ้าส่วนภูมิภาค เชียงใหม่",
    category: "Electricity",
    provider: "PEA Chiang Mai 1 (Superhighway)",
    amount: 14850,
    dueDay: 10,
    status: "pending",
    paidDate: "",
    paymentMethod: "PEA Smart Plus App / QR PromptPay",
    refNumber: "CA 02003884192 / Meter 910283",
    room: "Common Office",
    notes: "Peak rate with 4 AC units running during working hours. Pay before 10th."
  },
  {
    id: "bill-mwa",
    name: "Eau MWA (Chiang Mai Water Authority)",
    nameTh: "ค่าน้ำประปาเชียงใหม่ (กปภ.)",
    category: "Water",
    provider: "Provincial Waterworks Authority Chiang Mai",
    amount: 720,
    dueDay: 15,
    status: "pending",
    paidDate: "",
    paymentMethod: "Mobile Banking K PLUS / SCB",
    refNumber: "Cust 5001-9281-01",
    room: "Bathroom",
    notes: "Meter located in front ground box near main gate."
  },
  {
    id: "bill-ais",
    name: "Fibre Optique AIS Business Dedicated 1000/1000",
    nameTh: "ค่าบริการอินเทอร์เน็ตไฟเบอร์ AIS Fibre ธุรกิจ",
    category: "Internet",
    provider: "AIS Fibre Support (1175)",
    amount: 2139,
    dueDay: 18,
    status: "pending",
    paidDate: "",
    paymentMethod: "myAIS Corporate Portal / Credit Card",
    refNumber: "Acc 8800192831 / Tax ID 0107535000257",
    room: "Common Office",
    notes: "Primary 1Gbps dedicated line. e-Tax invoice received via email."
  },
  {
    id: "bill-true",
    name: "Routeur de secours True 5G Business Failover",
    nameTh: "ค่าบริการซิมสำรองฉุกเฉิน True 5G",
    category: "Internet",
    provider: "True Telecom Support (1242)",
    amount: 899,
    dueDay: 20,
    status: "pending",
    paidDate: "",
    paymentMethod: "True iService / QR PromptPay",
    refNumber: "SIM 095-882-1920",
    room: "Common Office",
    notes: "Emergency backup SIM inside GL.iNet failover router."
  },
  {
    id: "bill-cleaning",
    name: "Ménage hebdomadaire & Entretien bureaux (P'Noi)",
    nameTh: "ค่าแม่บ้านทำความสะอาดประจำสัปดาห์ (ป้าน้อย)",
    category: "Cleaning",
    provider: "Mae Baan P'Noi (082-190-7765)",
    amount: 6000,
    dueDay: 28,
    status: "pending",
    paidDate: "",
    paymentMethod: "PromptPay Transfer to 0821907765",
    refNumber: "Every Friday (1,500฿ x 4 weeks)",
    room: "Common Office",
    notes: "Includes trash removal, fridge deep clean, balcony sweep and sanitization."
  }
];

// --- 7. STATE ---
let currentLang = localStorage.getItem('cm_office_lang') || 'en';
let currentTheme = localStorage.getItem('cm_office_theme') || 'light';
let activeView = 'kanban';

let tasks = [];
let supplies = [];
let handworkers = [];
let appointments = [];
let renovations = [];
let assets = [];
let recurringBills = [];

let editingTaskId = null;
let editingSupplyId = null;
let editingApptId = null;
let editingHwId = null;
let editingRenoId = null;
let editingAssetId = null;
let editingBillId = null;

let modalTaskPhotos = [];
let modalRenoPhotos = [];
let currentSupplyPhotoData = '';

function showNotification(title, message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'fixed bottom-4 right-4 z-[9999] space-y-2 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const colors = type === 'error'
    ? 'bg-rose-600 text-white'
    : type === 'warning'
      ? 'bg-amber-500 text-white'
      : 'bg-emerald-600 text-white';

  toast.className = `pointer-events-auto px-4 py-3 rounded-xl shadow-2xl ${colors} text-xs flex items-start space-x-2.5 max-w-xs animate-slide-in backdrop-blur`;
  toast.innerHTML = `
    <div class="flex-1">
      <div class="font-bold">${title}</div>
      ${message ? `<div class="text-white/80 mt-0.5">${message}</div>` : ''}
    </div>
    <button onclick="this.parentElement.remove()" class="text-white/60 hover:text-white p-0.5">✕</button>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function closeMobileSidebar() {
  document.getElementById('sidebar')?.classList.remove('sidebar-open');
  document.getElementById('sidebarOverlay')?.classList.remove('active');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function initData() {
  const sTasks = localStorage.getItem('cm_office_tasks_v4');
  tasks = sTasks ? JSON.parse(sTasks) : [...defaultCMTasks];

  const sSupplies = localStorage.getItem('cm_office_supplies_v4');
  supplies = sSupplies ? JSON.parse(sSupplies) : [...defaultCMSupplies];

  const sHw = localStorage.getItem('cm_office_handworkers_v4');
  handworkers = sHw ? JSON.parse(sHw) : [...defaultCMHandworkers];

  const sAppt = localStorage.getItem('cm_office_appointments_v4');
  appointments = sAppt ? JSON.parse(sAppt) : [...defaultCMAppointments];

  const sReno = localStorage.getItem('cm_office_renovations_v4');
  renovations = sReno ? JSON.parse(sReno) : [...defaultCMRenovations];

  const sAssets = localStorage.getItem('cm_office_assets_v1');
  assets = sAssets ? JSON.parse(sAssets) : [...defaultCMAssets];

  const sBills = localStorage.getItem('cm_office_bills_v1');
  recurringBills = sBills ? JSON.parse(sBills) : [...defaultCMRecurringBills];

  saveAllStorage();
}

function saveAllStorage() {
  localStorage.setItem('cm_office_tasks_v4', JSON.stringify(tasks));
  localStorage.setItem('cm_office_supplies_v4', JSON.stringify(supplies));
  localStorage.setItem('cm_office_handworkers_v4', JSON.stringify(handworkers));
  localStorage.setItem('cm_office_appointments_v4', JSON.stringify(appointments));
  localStorage.setItem('cm_office_renovations_v4', JSON.stringify(renovations));
  localStorage.setItem('cm_office_assets_v1', JSON.stringify(assets));
  localStorage.setItem('cm_office_bills_v1', JSON.stringify(recurringBills));
  renderBadges();
  renderNotifications();
}

function resetDefaultTasks() {
  if (confirm(currentLang === 'th' ? 'ต้องการโหลดข้อมูลเริ่มต้นสำหรับเชียงใหม่ใช่หรือไม่?' : 'Restore default office data?')) {
    tasks = JSON.parse(JSON.stringify(defaultCMTasks));
    supplies = JSON.parse(JSON.stringify(defaultCMSupplies));
    handworkers = JSON.parse(JSON.stringify(defaultCMHandworkers));
    appointments = JSON.parse(JSON.stringify(defaultCMAppointments));
    renovations = JSON.parse(JSON.stringify(defaultCMRenovations));
    assets = JSON.parse(JSON.stringify(defaultCMAssets));
    recurringBills = JSON.parse(JSON.stringify(defaultCMRecurringBills));
    saveAllStorage();
    renderCurrentView();
  }
}

// --- 8. LANGUAGE & THEME ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('cm_office_lang', lang);

  const enBtn = document.getElementById('langENBtn');
  const thBtn = document.getElementById('langTHBtn');

  if (lang === 'th') {
    thBtn.classList.add('bg-white', 'dark:bg-neutral-700', 'shadow-sm', 'text-gray-900', 'dark:text-white');
    thBtn.classList.remove('text-gray-500', 'dark:text-neutral-400');
    enBtn.classList.remove('bg-white', 'dark:bg-neutral-700', 'shadow-sm', 'text-gray-900', 'dark:text-white');
    enBtn.classList.add('text-gray-500', 'dark:text-neutral-400');
    document.documentElement.lang = 'th';
  } else {
    enBtn.classList.add('bg-white', 'dark:bg-neutral-700', 'shadow-sm', 'text-gray-900', 'dark:text-white');
    enBtn.classList.remove('text-gray-500', 'dark:text-neutral-400');
    thBtn.classList.remove('bg-white', 'dark:bg-neutral-700', 'shadow-sm', 'text-gray-900', 'dark:text-white');
    thBtn.classList.add('text-gray-500', 'dark:text-neutral-400');
    document.documentElement.lang = 'en';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });

  translateRoomOptions();
  renderSidebarFilters();
  populateTaskModalContacts();
  renderCurrentView();
}

function t(key) {
  return translations[currentLang][key] || key;
}

const roomKeyMap = {
  'Exterieur': 'room_exterieur',
  'Private office': 'room_private',
  'Common Office': 'room_common',
  'Kitchen': 'room_kitchen',
  'Bathroom': 'room_bathroom',
  'Rooftop': 'room_rooftop',
  'Common Space/Playground': 'room_playground'
};

function tRoom(roomId) {
  const key = roomKeyMap[roomId];
  return key ? t(key) : roomId;
}

function translateRoomOptions() {
  document.querySelectorAll('select').forEach(sel => {
    sel.querySelectorAll('option').forEach(opt => {
      const key = roomKeyMap[opt.value];
      if (key) {
        const icon = opt.textContent.match(/^[^\w]*/)?.[0]?.trim() || '';
        opt.textContent = (icon ? icon + ' ' : '') + t(key);
      }
    });
  });
}

function initTheme() {
  if (currentTheme === 'dark' || (!('cm_office_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    currentTheme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    currentTheme = 'light';
  }
}

function toggleDarkMode() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    currentTheme = 'light';
  } else {
    document.documentElement.classList.add('dark');
    currentTheme = 'dark';
  }
  localStorage.setItem('cm_office_theme', currentTheme);
}

// --- 9. METADATA: CARRIERS & STORES ---
const carrierData = {
  Flash: { name: 'Flash Express', icon: '⚡', trackUrl: (code) => `https://flashexpress.co.th/tracking/?se=${encodeURIComponent(code)}` },
  Kerry: { name: 'Kerry Express (KEX)', icon: '📦', trackUrl: (code) => `https://th.kerryexpress.com/th/track/?track=${encodeURIComponent(code)}` },
  ThaiPost: { name: 'Thailand Post', icon: '📮', trackUrl: (code) => `https://track.thailandpost.co.th/?trackNumber=${encodeURIComponent(code)}` },
  JT: { name: 'J&T Express', icon: '🚚', trackUrl: (code) => `https://www.jtexpress.co.th/index/query/gzquery.html` },
  ShopeeXpress: { name: 'Shopee Xpress (SPX)', icon: '🛍️', trackUrl: (code) => `https://spx.co.th` },
  Grab: { name: 'Grab Express', icon: '🛵', trackUrl: (code) => `https://www.grab.com/th/` },
  Lalamove: { name: 'Lalamove Chiang Mai', icon: '🚐', trackUrl: (code) => `https://www.lalamove.com/th-th/` },
  MakroDelivery: { name: 'Makro Delivery', icon: '🛒', trackUrl: (code) => `https://www.makro.pro` },
  Other: { name: 'Courier', icon: '📦', trackUrl: (code) => `https://www.google.com/search?q=${encodeURIComponent(code + ' tracking thailand')}` }
};

const priorities = {
  urgent: { labelEn: '🔥 Urgent', labelTh: '🔥 ด่วนที่สุด', badge: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 border-rose-200 dark:border-rose-900' },
  high: { labelEn: '🔴 High', labelTh: '🔴 สูง', badge: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-900' },
  medium: { labelEn: '🟡 Medium', labelTh: '🟡 ปานกลาง', badge: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-900' },
  low: { labelEn: '🟢 Low', labelTh: '🟢 ทั่วไป', badge: 'bg-gray-100 text-gray-700 dark:bg-neutral-800 dark:text-neutral-300 border-gray-200 dark:border-neutral-700' }
};

// --- 10. SIDEBAR FILTERS ---
function renderSidebarFilters() {
  // Teams filter
  const teamContainer = document.getElementById('teamFilterList');
  const teams = [
    { id: 'General Team', icon: '🌐', color: 'text-cyan-500' },
    { id: 'Team GMB', icon: '📍', color: 'text-blue-500' },
    { id: 'Team SEO', icon: '🔍', color: 'text-emerald-500' },
    { id: 'Team Ad', icon: '📊', color: 'text-purple-500' },
    { id: 'Pierre', icon: '👤', color: 'text-amber-500' },
    { id: 'Office Common', icon: '🏢', color: 'text-gray-500' }
  ];
  if (teamContainer) {
    teamContainer.innerHTML = teams.map(tm => `
      <button onclick="setFilterTeam('${tm.id}')" class="w-full text-left px-2 py-1 rounded hover:bg-gray-200/50 dark:hover:bg-neutral-800 flex items-center justify-between group transition">
        <div class="flex items-center space-x-1.5 truncate">
          <span>${tm.icon}</span>
          <span class="text-gray-700 dark:text-neutral-300 truncate">${tm.id}</span>
        </div>
        <span class="text-[10px] text-gray-400 group-hover:text-amber-600 font-mono">
          ${tasks.filter(t => t.team === tm.id).length}
        </span>
      </button>
    `).join('');
  }

  // Members filter
  const memberContainer = document.getElementById('memberFilterList');
  const members = ['Kibo', 'Pierre', 'Jérémy', 'Matthieu', 'Marvin', 'Alexandre', 'Mailys'];
  if (memberContainer) {
    memberContainer.innerHTML = members.map(m => `
      <button onclick="setFilterMember('${m}')" class="w-full text-left px-2 py-1 rounded hover:bg-gray-200/50 dark:hover:bg-neutral-800 flex items-center justify-between group transition">
        <div class="flex items-center space-x-1.5 truncate">
          <span class="w-4 h-4 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-[10px] font-bold">${m[0]}</span>
          <span class="text-gray-700 dark:text-neutral-300 truncate">${m}</span>
        </div>
        <span class="text-[10px] text-gray-400 group-hover:text-amber-600 font-mono">
          ${tasks.filter(t => t.assignee === m).length}
        </span>
      </button>
    `).join('');
  }

  // Rooms filter
  const roomContainer = document.getElementById('roomFilterList');
  const rooms = [
    { id: 'Exterieur', icon: '🌿' },
    { id: 'Private office', icon: '💼' },
    { id: 'Common Office', icon: '🖥️' },
    { id: 'Kitchen', icon: '☕' },
    { id: 'Bathroom', icon: '🚿' },
    { id: 'Rooftop', icon: '🌇' },
    { id: 'Common Space/Playground', icon: '🎯' }
  ];
  if (roomContainer) {
    roomContainer.innerHTML = rooms.map(rm => `
      <button onclick="setFilterRoom('${rm.id}')" class="w-full text-left px-2 py-1 rounded hover:bg-gray-200/50 dark:hover:bg-neutral-800 flex items-center justify-between group transition">
        <div class="flex items-center space-x-1.5 truncate">
          <span>${rm.icon}</span>
          <span class="text-gray-700 dark:text-neutral-300 truncate">${tRoom(rm.id)}</span>
        </div>
        <span class="text-[10px] text-gray-400 group-hover:text-amber-600 font-mono">
          ${supplies.filter(s => s.room === rm.id).length}
        </span>
      </button>
    `).join('');
  }
}

function renderBadges() {
  const openCount = tasks.filter(t => t.status === 'todo').length;
  const inProgCount = tasks.filter(t => t.status === 'in_progress' || t.status === 'waiting').length;
  const doneCount = tasks.filter(t => t.status === 'done').length;

  document.getElementById('statOpenCount').textContent = openCount;
  document.getElementById('statInProgressCount').textContent = inProgCount;
  document.getElementById('statDoneCount').textContent = doneCount;

  document.getElementById('badgeKanbanCount').textContent = tasks.length;
  document.getElementById('badgeTableCount').textContent = tasks.length;
  document.getElementById('badgeSuppliesCount').textContent = supplies.length;
  document.getElementById('badgeApptCount').textContent = appointments.length;
  document.getElementById('badgeHandworkersCount').textContent = handworkers.length;
  document.getElementById('badgeRenovationsCount').textContent = renovations.length;

  const itBadge = document.getElementById('badgeItCount');
  if (itBadge) itBadge.textContent = assets.length;

  const budgetBadge = document.getElementById('badgeBudgetTotal');
  if (budgetBadge) {
    const totalSpend = calculateTotalMonthlySpend();
    budgetBadge.textContent = `฿${Math.round(totalSpend).toLocaleString()}`;
  }

  const billsBadge = document.getElementById('badgeBillsDue');
  if (billsBadge) {
    const pendingCount = recurringBills.filter(b => b.status !== 'paid').length;
    billsBadge.textContent = pendingCount;
  }

  const trackingCount = supplies.filter(s => s.status === 'ordered').length;
  const trackBadge = document.getElementById('badgeTrackOrdersCount');
  if (trackBadge) {
    if (trackingCount > 0) {
      trackBadge.textContent = `🚚 ${trackingCount}`;
      trackBadge.classList.remove('hidden');
    } else {
      trackBadge.classList.add('hidden');
    }
  }
}

// --- 11. NOTIFICATIONS & REMINDERS SYSTEM ---
function renderNotifications() {
  const container = document.getElementById('notifListContainer');
  const badge = document.getElementById('notifBadge');
  if (!container) return;

  const todayStr = new Date().toISOString().split('T')[0];
  const items = [];

  // Appointments today / tomorrow
  appointments.forEach(a => {
    if (a.date >= todayStr) {
      items.push({
        type: 'appt',
        title: a.title,
        date: a.date,
        time: a.time,
        icon: '📅',
        color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/60 border-purple-200'
      });
    }
  });

  // Incoming Shipments
  supplies.filter(s => s.status === 'ordered').forEach(s => {
    items.push({
      type: 'delivery',
      title: `${s.name} (${s.carrier || 'Courier'})`,
      date: s.estDelivery || 'In Transit',
      time: s.trackingNumber ? `Track: ${s.trackingNumber}` : '',
      icon: '🚚',
      color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/60 border-blue-200'
    });
  });

  // Urgent tasks
  tasks.filter(t => t.priority === 'urgent' && t.status !== 'done').forEach(t => {
    items.push({
      type: 'urgent',
      title: t.title,
      date: t.dueDate || 'Urgent',
      time: t.assignee ? `Assigned: ${t.assignee}` : '',
      icon: '🔥',
      color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/60 border-rose-200'
    });
  });

  if (items.length > 0) {
    if (badge) badge.classList.remove('hidden');
  } else {
    if (badge) badge.classList.add('hidden');
  }

  if (items.length === 0) {
    container.innerHTML = `<div class="text-center py-4 text-gray-400 text-xs">No pending reminders for today.</div>`;
    return;
  }

  container.innerHTML = items.map(it => `
    <div class="p-2.5 rounded-xl border ${it.color} flex items-start space-x-2.5">
      <span class="text-base select-none">${it.icon}</span>
      <div class="flex-1 truncate">
        <div class="font-semibold text-gray-900 dark:text-gray-100 text-xs truncate">${it.title}</div>
        <div class="text-[10px] text-gray-500 dark:text-neutral-400 flex items-center space-x-2 mt-0.5">
          <span>📅 ${it.date}</span>
          ${it.time ? `<span>• ${it.time}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function toggleNotifDropdown() {
  const dd = document.getElementById('notifDropdown');
  dd.classList.toggle('hidden');
  renderNotifications();
}

function requestBrowserNotifications() {
  if (!("Notification" in window)) {
    showNotification('Not Supported', 'This browser does not support desktop notifications.', 'warning');
    return;
  }
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("Chiang Mai Office Hub", {
        body: "Reminders active! You will receive alerts for appointments & deliveries.",
        icon: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=128&q=80"
      });
    }
  });
}

// --- 12. FILTER HANDLERS ---
function setFilterTeam(teamId) {
  const sel = document.getElementById('teamFilterSelect');
  if (sel) {
    sel.value = teamId;
    if (activeView !== 'kanban' && activeView !== 'table') switchView('kanban');
    renderCurrentView();
  }
}

function setFilterMember(member) {
  const sel = document.getElementById('memberFilterSelect');
  if (sel) {
    sel.value = member;
    if (activeView !== 'kanban' && activeView !== 'table') switchView('kanban');
    renderCurrentView();
  }
}

function setFilterRoom(roomId) {
  const sel = document.getElementById('supplyRoomFilterSelect');
  if (sel) {
    sel.value = roomId;
    if (activeView !== 'supplies') switchView('supplies');
    renderCurrentView();
  }
}

function getFilteredTasks() {
  const query = (document.getElementById('globalSearchInput')?.value || '').toLowerCase().trim();
  const teamFilter = document.getElementById('teamFilterSelect')?.value || 'ALL';
  const memberFilter = document.getElementById('memberFilterSelect')?.value || 'ALL';
  const priorityFilter = document.getElementById('priorityFilterSelect')?.value || 'ALL';

  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    if (teamFilter !== 'ALL' || memberFilter !== 'ALL' || priorityFilter !== 'ALL' || query !== '') {
      resetBtn.classList.remove('hidden');
    } else {
      resetBtn.classList.add('hidden');
    }
  }

  return tasks.filter(task => {
    if (teamFilter !== 'ALL' && task.team !== teamFilter) return false;
    if (memberFilter !== 'ALL' && task.assignee !== memberFilter) return false;
    if (priorityFilter !== 'ALL' && task.priority !== priorityFilter) return false;
    if (query) {
      const displayTitle = (currentLang === 'th' && task.titleTh) ? task.titleTh : task.title;
      const matchTitle = (displayTitle || '').toLowerCase().includes(query) || (task.title || '').toLowerCase().includes(query);
      const matchNotes = (task.notes || '').toLowerCase().includes(query);
      const matchAssignee = (task.assignee || '').toLowerCase().includes(query);
      const matchTeam = (task.team || '').toLowerCase().includes(query);
      return matchTitle || matchNotes || matchAssignee || matchTeam;
    }
    return true;
  });
}

// --- 13. VIEW NAVIGATION ---
function switchView(viewName) {
  activeView = viewName;
  document.querySelectorAll('.view-nav-btn').forEach(btn => {
    if (btn.getAttribute('data-view') === viewName) {
      btn.className = "view-nav-btn active w-full flex items-center justify-between px-2.5 py-1.5 rounded-md font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200";
    } else {
      btn.className = "view-nav-btn w-full flex items-center justify-between px-2.5 py-1.5 rounded-md font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-200/50 dark:hover:bg-neutral-800 transition";
    }
  });

  ['viewKanban', 'viewTable', 'viewSupplies', 'viewCalendar', 'viewHandworkers', 'viewRenovations', 'viewItInventory', 'viewBudget', 'viewRecurringBills', 'viewWiki', 'viewTutorial'].forEach(id => {
    document.getElementById(id)?.classList.add('hidden');
  });

  const filterBar = document.getElementById('filterBarContainer');
  if (viewName === 'supplies' || viewName === 'calendar' || viewName === 'handworkers' || viewName === 'renovations' || viewName === 'it_inventory' || viewName === 'budget' || viewName === 'recurring_bills' || viewName === 'wiki' || viewName === 'tutorial') {
    filterBar.classList.add('hidden');
  } else {
    filterBar.classList.remove('hidden');
  }

  if (viewName === 'kanban') document.getElementById('viewKanban').classList.remove('hidden');
  if (viewName === 'table') document.getElementById('viewTable').classList.remove('hidden');
  if (viewName === 'supplies') document.getElementById('viewSupplies').classList.remove('hidden');
  if (viewName === 'calendar') document.getElementById('viewCalendar').classList.remove('hidden');
  if (viewName === 'handworkers') document.getElementById('viewHandworkers').classList.remove('hidden');
  if (viewName === 'renovations') document.getElementById('viewRenovations').classList.remove('hidden');
  if (viewName === 'it_inventory') document.getElementById('viewItInventory').classList.remove('hidden');
  if (viewName === 'budget') document.getElementById('viewBudget').classList.remove('hidden');
  if (viewName === 'recurring_bills') document.getElementById('viewRecurringBills').classList.remove('hidden');
  if (viewName === 'wiki') document.getElementById('viewWiki').classList.remove('hidden');
  if (viewName === 'tutorial') document.getElementById('viewTutorial').classList.remove('hidden');

  renderCurrentView();
  lucide.createIcons();
}

function renderCurrentView() {
  renderBadges();
  renderNotifications();
  if (activeView === 'kanban') renderKanban();
  else if (activeView === 'table') renderTable();
  else if (activeView === 'supplies') renderSuppliesCatalog();
  else if (activeView === 'calendar') renderAppointments();
  else if (activeView === 'handworkers') renderHandworkers();
  else if (activeView === 'renovations') renderRenovationsList();
  else if (activeView === 'it_inventory') renderItInventory();
  else if (activeView === 'budget') renderBudgetDashboard();
  else if (activeView === 'recurring_bills') renderRecurringBills();
  else if (activeView === 'tutorial') renderKiboTutorial();
  lucide.createIcons();
}

// --- KANBAN DRAG AND DROP ---
let draggedTaskId = null;

function handleDragStart(e, taskId) {
  draggedTaskId = taskId;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', taskId);
  requestAnimationFrame(() => {
    e.target.style.opacity = '0.4';
    e.target.style.transform = 'rotate(2deg) scale(0.95)';
  });
}

function handleDragEnd(e) {
  e.target.style.opacity = '1';
  e.target.style.transform = '';
  draggedTaskId = null;
  document.querySelectorAll('.kanban-drop-active').forEach(el => {
    el.classList.remove('kanban-drop-active');
  });
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  const col = e.currentTarget;
  if (!col.classList.contains('kanban-drop-active')) {
    col.classList.add('kanban-drop-active');
  }
}

function handleDragLeave(e) {
  if (!e.currentTarget.contains(e.relatedTarget)) {
    e.currentTarget.classList.remove('kanban-drop-active');
  }
}

function handleDrop(e, newStatus) {
  e.preventDefault();
  e.currentTarget.classList.remove('kanban-drop-active');
  const taskId = e.dataTransfer.getData('text/plain') || draggedTaskId;
  if (!taskId) return;

  const task = tasks.find(t => t.id === taskId);
  if (task && task.status !== newStatus) {
    task.status = newStatus;
    saveAllStorage();
    renderCurrentView();
    if (typeof showNotification === 'function') {
      const statusLabels = { todo: 'To Do', in_progress: 'In Progress', waiting: 'Waiting', done: 'Done' };
      const displayTitle = (currentLang === 'th' && task.titleTh) ? task.titleTh : task.title;
      showNotification('Task Moved', `"${displayTitle.substring(0, 40)}..." → ${statusLabels[newStatus] || newStatus}`);
    }
  }
}

// --- 14. RENDER KANBAN WITH BENEFICIARY & ASSIGNEE ---
function renderKanban() {
  const container = document.getElementById('viewKanban');
  const filtered = getFilteredTasks();

  const statuses = [
    { id: 'todo', nameEn: 'To Do', nameTh: 'ยังไม่เริ่ม', dot: 'bg-gray-400' },
    { id: 'in_progress', nameEn: 'In Progress', nameTh: 'กำลังดำเนินการ', dot: 'bg-blue-500' },
    { id: 'waiting', nameEn: 'Waiting / External', nameTh: 'รอติดต่อภายนอก', dot: 'bg-amber-500' },
    { id: 'done', nameEn: 'Done', nameTh: 'เสร็จสิ้น', dot: 'bg-emerald-500' }
  ];

  container.innerHTML = statuses.map(status => {
    const colTasks = filtered.filter(t => t.status === status.id);
    const statusName = currentLang === 'th' ? status.nameTh : status.nameEn;

    return `
      <div ondragover="handleDragOver(event)" ondrop="handleDrop(event, '${status.id}')" ondragleave="handleDragLeave(event)" class="flex-1 min-w-[280px] max-w-[320px] bg-gray-100/70 dark:bg-[#202020] rounded-xl flex flex-col p-2.5 max-h-full border border-gray-200/70 dark:border-neutral-800">
        <div class="flex items-center justify-between px-2 py-1.5 mb-2">
          <div class="flex items-center space-x-2">
            <span class="w-2.5 h-2.5 rounded-full ${status.dot}"></span>
            <span class="font-semibold text-xs text-gray-800 dark:text-gray-200">${statusName}</span>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-gray-200 dark:bg-neutral-700 text-gray-600 dark:text-gray-300">
              ${colTasks.length}
            </span>
          </div>
          <button onclick="openTaskModal(null, '${status.id}')" title="Add Card" class="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1 rounded hover:bg-gray-200/60 dark:hover:bg-neutral-700 transition">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto space-y-2 pr-1">
          ${colTasks.map(task => renderKanbanCard(task)).join('')}
          ${colTasks.length === 0 ? `
            <div class="text-center py-6 border border-dashed border-gray-200 dark:border-neutral-800 rounded-lg text-gray-400 text-xs">
              No tasks
            </div>
          ` : ''}
        </div>

        <button onclick="openTaskModal(null, '${status.id}')" class="mt-2 text-left w-full px-2.5 py-1.5 rounded-lg text-xs text-gray-500 hover:bg-gray-200/60 dark:hover:bg-neutral-800/80 hover:text-gray-800 dark:hover:text-gray-200 flex items-center space-x-1.5 transition">
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          <span>${t('add_card')}</span>
        </button>
      </div>
    `;
  }).join('');
}

function renderKanbanCard(task) {
  const prio = priorities[task.priority] || priorities.medium;
  const prioText = currentLang === 'th' ? prio.labelTh : prio.labelEn;
  const totalCheck = task.checklist ? task.checklist.length : 0;
  const completedCheck = task.checklist ? task.checklist.filter(c => c.done).length : 0;
  const hasPhone = task.contactPhone && task.contactPhone.trim().length > 0;
  const isOverdue = task.dueDate && task.status !== 'Done' && new Date(task.dueDate) < new Date();

  return `
    <div draggable="true" ondragstart="handleDragStart(event, '${task.id}')" ondragend="handleDragEnd(event)" onclick="openTaskModal('${task.id}')" class="notion-card bg-white dark:bg-[#252525] rounded-xl p-3 border border-gray-200/80 dark:border-neutral-700/80 shadow-sm hover:shadow hover:border-amber-400 dark:hover:border-amber-600 transition-all cursor-pointer group space-y-2 select-none">

      <!-- Top Pills: Team & Priority -->
      <div class="flex items-center justify-between gap-1">
        <div class="flex items-center gap-1 min-w-0">
          <span class="text-[10px] px-2 py-0.5 rounded-md font-semibold bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-900 truncate">
            ${task.team || 'Office'}
          </span>
          ${isOverdue ? `<span class="bg-rose-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">${t('overdue_label')}</span>` : ''}
        </div>
        <span class="text-[10px] px-1.5 py-0.5 rounded border ${prio.badge} font-medium flex-shrink-0">
          ${prioText}
        </span>
      </div>

      <!-- Title & Icon -->
      <div class="font-medium text-xs leading-snug text-gray-900 dark:text-gray-100 flex items-start space-x-1.5">
        <span class="text-sm select-none">${task.icon || '📋'}</span>
        <span class="flex-1">${escapeHtml((currentLang === 'th' && task.titleTh) ? task.titleTh : task.title)}</span>
      </div>

      <!-- Quick Call Button if Handworker / Contact Linked -->
      ${hasPhone ? `
        <div class="flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-lg p-1.5" onclick="event.stopPropagation()">
          <div class="flex items-center space-x-1.5 truncate text-[11px] text-emerald-900 dark:text-emerald-200">
            <i data-lucide="phone-outgoing" class="w-3 h-3 text-emerald-600 flex-shrink-0"></i>
            <span class="truncate font-medium">${escapeHtml(task.contactName) || 'Contact'}</span>
          </div>
          <a href="tel:${task.contactPhone.replace(/[^0-9+]/g, '')}" class="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold flex items-center space-x-1 shadow-sm transition">
            <span>${task.contactPhone}</span>
          </a>
        </div>
      ` : ''}

      <!-- Checklist preview -->
      ${totalCheck > 0 ? `
        <div class="flex items-center space-x-2 text-[10px] text-gray-500 dark:text-neutral-400 bg-gray-50 dark:bg-neutral-800/60 px-2 py-1 rounded">
          <i data-lucide="check-square" class="w-3 h-3 text-amber-600"></i>
          <span>${completedCheck}/${totalCheck} done</span>
          <div class="flex-1 bg-gray-200 dark:bg-neutral-700 h-1.5 rounded-full overflow-hidden">
            <div class="bg-emerald-500 h-full rounded-full" style="width: ${(completedCheck / totalCheck) * 100}%"></div>
          </div>
        </div>
      ` : ''}

      <!-- Footer Info -->
      <div class="pt-1 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between text-[10px] text-gray-400">
        <span class="font-medium text-gray-700 dark:text-neutral-300">👤 ${task.assignee || 'Unassigned'}</span>
        ${task.dueDate ? `<span>📅 ${task.dueDate}</span>` : ''}
      </div>
    </div>
  `;
}

// --- 15. RENDER TABLE VIEW ---
function renderTable() {
  const tbody = document.getElementById('tableBody');
  const filtered = getFilteredTasks();

  document.getElementById('tableSummaryText').textContent = `${t('table_showing')} ${filtered.length} ${t('table_tasks')}`;

  tbody.innerHTML = filtered.map((task, index) => {
    const prio = priorities[task.priority] || priorities.medium;
    const isOverdue = task.dueDate && task.status !== 'Done' && new Date(task.dueDate) < new Date();
    return `
      <tr class="hover:bg-gray-50 dark:hover:bg-neutral-800/50 cursor-pointer transition text-xs" onclick="openTaskModal('${task.id}')">
        <td class="py-2.5 px-4 text-center font-mono text-gray-400 text-[11px]">${index + 1}</td>

        <td class="py-2.5 px-4 font-medium text-gray-900 dark:text-gray-100">
          <div class="flex items-center space-x-2">
            <span>${task.icon || '📋'}</span>
            <span class="hover:underline">${escapeHtml((currentLang === 'th' && task.titleTh) ? task.titleTh : task.title)}</span>
            ${isOverdue ? `<span class="bg-rose-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">${t('overdue_label')}</span>` : ''}
          </div>
        </td>

        <td class="py-2.5 px-3">
          <span class="px-2 py-0.5 rounded-md font-semibold bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300 text-[10px]">
            ${task.team || 'Office'} (${task.assignee || '-'})
          </span>
        </td>

        <td class="py-2.5 px-3" onclick="event.stopPropagation()">
          ${task.contactPhone ? `
            <a href="tel:${task.contactPhone.replace(/[^0-9+]/g, '')}" class="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold hover:bg-emerald-100">
              <i data-lucide="phone" class="w-3 h-3 text-emerald-600"></i>
              <span>${task.contactPhone}</span>
              <span class="text-[9px] font-normal">(${task.contactName || 'Tech'})</span>
            </a>
          ` : `<span class="text-gray-400">-</span>`}
        </td>

        <td class="py-2.5 px-3">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-gray-300">
            ${task.status}
          </span>
        </td>

        <td class="py-2.5 px-3">
          <span class="px-1.5 py-0.5 rounded border text-[10px] font-medium ${prio.badge}">
            ${currentLang === 'th' ? prio.labelTh : prio.labelEn}
          </span>
        </td>

        <td class="py-2.5 px-3 font-mono text-gray-500 text-[11px]">
          ${task.dueDate || '-'}
        </td>

        <td class="py-2.5 px-3 font-mono font-semibold text-gray-700 dark:text-neutral-200">
          ${task.cost ? `฿${task.cost.toLocaleString()}` : '-'}
        </td>

        <td class="py-2.5 px-4 text-right" onclick="event.stopPropagation()">
          <button onclick="deleteTaskDirect('${task.id}')" class="p-1 text-gray-400 hover:text-rose-600 rounded">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function deleteTaskDirect(taskId) {
  if (confirm(t('confirm_delete_task'))) {
    tasks = tasks.filter(t => t.id !== taskId);
    saveAllStorage();
    renderCurrentView();
  }
}

// --- 16. RENDER SUPPLIES (WITH DISCOUNT, QUANTITY, ROOM & BENEFICIARY) ---
function renderSuppliesCatalog() {
  const grid = document.getElementById('suppliesGalleryGrid');
  const roomFilter = document.getElementById('supplyRoomFilterSelect')?.value || 'ALL';
  const beneficiaryFilter = document.getElementById('supplyBeneficiaryFilterSelect')?.value || 'ALL';
  const statusFilter = document.getElementById('supplyStatusFilterSelect')?.value || 'ALL';
  const query = (document.getElementById('globalSearchInput')?.value || '').toLowerCase().trim();

  renderActiveTrackingBanner();

  // Low stock alert banner
  const lowStockCount = supplies.filter(s => s.status === 'Low Stock' || s.status === 'Need to Order').length;
  let lowStockBannerEl = document.getElementById('lowStockAlertBanner');
  if (!lowStockBannerEl) {
    lowStockBannerEl = document.createElement('div');
    lowStockBannerEl.id = 'lowStockAlertBanner';
    grid.parentNode.insertBefore(lowStockBannerEl, grid);
  }
  if (lowStockCount > 0) {
    lowStockBannerEl.innerHTML = `
      <div class="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-xl p-3 flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2 text-amber-800 dark:text-amber-200 text-xs font-medium">
          <span>⚠️</span>
          <span>${lowStockCount} ${t('low_stock_items')}</span>
        </div>
      </div>
    `;
  } else {
    lowStockBannerEl.innerHTML = '';
  }

  const filtered = supplies.filter(item => {
    if (roomFilter !== 'ALL' && item.room !== roomFilter) return false;
    if (beneficiaryFilter !== 'ALL' && item.beneficiary !== beneficiaryFilter) return false;
    if (statusFilter !== 'ALL' && item.status !== statusFilter) return false;
    if (query) {
      const matchName = (item.name || '').toLowerCase().includes(query);
      const matchRoom = (item.room || '').toLowerCase().includes(query);
      const matchBen = (item.beneficiary || '').toLowerCase().includes(query);
      const matchNotes = (item.notes || '').toLowerCase().includes(query);
      return matchName || matchRoom || matchBen || matchNotes;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-gray-400 dark:text-neutral-500 border-2 border-dashed border-gray-200 dark:border-neutral-800 rounded-2xl">
        <i data-lucide="shopping-bag" class="w-8 h-8 mx-auto mb-2 opacity-50"></i>
        <div class="text-sm font-medium">No supply items match your filter.</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const carrier = carrierData[item.carrier] || carrierData.Other;
    const isOrdered = item.status === 'ordered';
    const qty = item.quantity || 1;
    const finalPrice = item.price || 0;
    const regularPrice = item.regularPrice || 0;
    const totalPrice = qty * finalPrice;
    const hasDiscount = regularPrice > finalPrice && finalPrice > 0;
    const savingsPercent = hasDiscount ? Math.round(((regularPrice - finalPrice) / regularPrice) * 100) : 0;

    return `
      <div onclick="openSupplyModal('${item.id}')" class="bg-white dark:bg-[#252525] border border-gray-200 dark:border-neutral-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-amber-500 transition-all cursor-pointer flex flex-col group">
        
        <!-- Photo Container -->
        <div class="h-36 bg-gray-100 dark:bg-neutral-800 relative overflow-hidden group/img">
          ${item.photo ? `
            <img src="${item.photo}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
            <button onclick="event.stopPropagation(); openPhotoLightbox('${item.photo}', '${item.name.replace(/'/g, "\\'")}')" class="absolute bottom-2 right-2 bg-black/60 hover:bg-black/80 text-white p-1 rounded text-xs opacity-0 group-hover/img:opacity-100 transition">
              <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
            </button>
          ` : `
            <div class="w-full h-full flex flex-col items-center justify-center text-gray-400">
              <i data-lucide="package" class="w-8 h-8 mb-1"></i>
              <span class="text-[10px]">No Photo</span>
            </div>
          `}

          <!-- Discount Pill if any -->
          ${hasDiscount ? `
            <div class="absolute top-2 right-2">
              <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-rose-600 text-white shadow-sm">
                -${savingsPercent}%
              </span>
            </div>
          ` : ''}

          <!-- Room Pill Overlay -->
          <div class="absolute bottom-2 left-2">
            <span class="text-[10px] px-2 py-0.5 rounded-md font-medium border backdrop-blur bg-white/90 dark:bg-neutral-900/90 shadow-sm flex items-center space-x-1">
              <span>🚪 ${item.room || 'Common Office'}</span>
            </span>
          </div>
        </div>

        <!-- Body Details -->
        <div class="p-3.5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-center justify-between text-[10px] mb-1.5">
              <span class="px-2 py-0.5 rounded font-bold bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
                ${item.beneficiary || 'Office'}
              </span>
              <span class="font-mono text-gray-500 font-semibold">Qty: ${qty}x</span>
            </div>

            <h4 class="font-semibold text-xs leading-snug text-gray-900 dark:text-gray-100 group-hover:text-amber-600 transition">
              ${item.name}
            </h4>

            <!-- Live Tracking Box if Ordered -->
            ${isOrdered && item.trackingNumber ? `
              <div class="mt-2 p-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 rounded-lg text-[10px] space-y-1.5" onclick="event.stopPropagation()">
                <div class="flex items-center justify-between font-medium text-blue-900 dark:text-blue-200">
                  <span>${carrier.icon} ${carrier.name}</span>
                  ${item.estDelivery ? `<span>ETA: ${item.estDelivery}</span>` : ''}
                </div>
                <div class="flex items-center justify-between font-mono bg-white dark:bg-neutral-800 px-2 py-1 rounded border border-blue-100 dark:border-neutral-700">
                  <span class="font-bold text-gray-800 dark:text-gray-200 truncate">${item.trackingNumber}</span>
                  <a href="${carrier.trackUrl(item.trackingNumber)}" target="_blank" class="text-blue-600 hover:text-blue-700 font-semibold ml-1">Track</a>
                </div>
                <button onclick="markSupplyDelivered('${item.id}')" class="w-full text-center py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px]">
                  ✓ Received
                </button>
              </div>
            ` : ''}
          </div>

          <!-- Bottom Footer: Pricing (Regular vs Discounted & Total) -->
          <div class="pt-2 border-t border-gray-100 dark:border-neutral-800 flex items-end justify-between text-xs">
            <div>
              ${hasDiscount ? `
                <div class="text-[10px] text-gray-400 line-through">฿${regularPrice.toLocaleString()}</div>
              ` : ''}
              <div class="font-bold text-gray-900 dark:text-white font-mono text-sm">
                ฿${finalPrice.toLocaleString()} <span class="text-[10px] text-gray-400 font-normal">/ unit</span>
              </div>
            </div>

            <div class="text-right">
              <div class="text-[10px] text-gray-400">Total:</div>
              <div class="font-bold text-amber-600 dark:text-amber-400 font-mono text-sm">
                ฿${totalPrice.toLocaleString()}
              </div>
            </div>
          </div>

        </div>

      </div>
    `;
  }).join('');
}

function renderActiveTrackingBanner() {
  const container = document.getElementById('activeTrackingCardsList');
  const section = document.getElementById('activeTrackingSection');
  const countBadge = document.getElementById('activeTrackingCountBadge');

  const orderedItems = supplies.filter(s => s.status === 'ordered');
  if (countBadge) countBadge.textContent = `${orderedItems.length} in transit`;

  if (orderedItems.length === 0) {
    if (section) section.classList.add('hidden');
    return;
  }
  if (section) section.classList.remove('hidden');

  container.innerHTML = orderedItems.map(item => {
    const carrier = carrierData[item.carrier] || carrierData.Other;
    return `
      <div class="bg-white dark:bg-neutral-800 p-3 rounded-lg border border-blue-200 dark:border-neutral-700 shadow-sm flex flex-col justify-between space-y-2">
        <div class="flex items-start justify-between">
          <div class="truncate mr-2">
            <div class="font-bold text-xs text-gray-900 dark:text-white truncate">${item.name}</div>
            <div class="text-[10px] text-gray-500 flex items-center space-x-1.5 mt-0.5">
              <span>${carrier.icon} ${carrier.name}</span>
              <span>•</span>
              <span>🚪 ${item.room || 'Common Office'}</span>
              <span>•</span>
              <span>👤 ${item.beneficiary || 'Team'}</span>
            </div>
          </div>
          <span class="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400">
            ${item.estDelivery ? `ETA: ${item.estDelivery}` : 'In Transit'}
          </span>
        </div>

        <div class="flex items-center justify-between text-xs pt-1 border-t border-gray-100 dark:border-neutral-700">
          <span class="font-mono text-[11px] text-gray-600 dark:text-gray-300 font-semibold truncate mr-2">
            ${item.trackingNumber || 'No tracking code'}
          </span>
          <div class="flex items-center space-x-1.5 flex-shrink-0">
            ${item.trackingNumber ? `
              <a href="${carrier.trackUrl(item.trackingNumber)}" target="_blank" class="px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px] flex items-center space-x-1 hover:bg-blue-700">
                <i data-lucide="external-link" class="w-3 h-3"></i>
                <span>Track</span>
              </a>
            ` : ''}
            <button onclick="markSupplyDelivered('${item.id}')" class="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] hover:bg-emerald-700">
              ✓ Received
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function markSupplyDelivered(supplyId) {
  const item = supplies.find(s => s.id === supplyId);
  if (item) {
    item.status = 'in_stock';
    saveAllStorage();
    renderCurrentView();
  }
}

// --- 17. RENDER APPOINTMENTS & CALENDAR ---
function renderAppointments() {
  const container = document.getElementById('appointmentsList');
  const sorted = [...appointments].sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`));

  if (sorted.length === 0) {
    container.innerHTML = `<div class="p-6 text-center text-gray-400 border border-dashed rounded-xl text-xs">No appointments scheduled. Click "+ New Appointment" to schedule one.</div>`;
    return;
  }

  container.innerHTML = sorted.map(appt => {
    return `
      <div onclick="openAppointmentModal('${appt.id}')" class="p-4 bg-white dark:bg-neutral-800 border border-purple-100 dark:border-neutral-700 rounded-xl hover:border-purple-400 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer transition">
        <div class="flex items-start space-x-3.5">
          <div class="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex flex-col items-center justify-center flex-shrink-0 font-bold font-mono">
            <span class="text-xs leading-none">${appt.time || '10:00'}</span>
          </div>
          <div>
            <h4 class="font-bold text-sm text-gray-900 dark:text-white leading-snug">${appt.title}</h4>
            <div class="text-[11px] text-gray-500 dark:text-neutral-400 flex flex-wrap items-center gap-2 mt-1">
              <span>📅 ${appt.date} (${appt.time} - ${appt.endTime || '11:00'})</span>
              <span>•</span>
              <span>🚪 ${appt.room || 'Common Office'}</span>
              <span>•</span>
              <span class="font-semibold text-purple-700 dark:text-purple-300">👥 ${appt.attendees || 'Team'}</span>
              ${appt.contact ? `<span>• 📞 ${appt.contact}</span>` : ''}
            </div>
            ${appt.notes ? `<p class="text-[11px] text-gray-600 dark:text-neutral-400 mt-1">${appt.notes}</p>` : ''}
          </div>
        </div>

        <!-- 1-Click Sync Buttons -->
        <div class="flex items-center space-x-2 flex-shrink-0 self-end sm:self-center" onclick="event.stopPropagation()">
          <a href="${getGoogleCalendarUrl(appt)}" target="_blank" class="px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 text-blue-700 dark:text-blue-300 text-[11px] font-semibold flex items-center space-x-1 transition border border-blue-200 dark:border-blue-900" title="Add to Google Calendar">
            <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
            <span>Google Cal</span>
          </a>
          <button onclick="downloadSingleIcs('${appt.id}')" class="px-2.5 py-1 rounded bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 text-purple-700 dark:text-purple-300 text-[11px] font-semibold flex items-center space-x-1 transition border border-purple-200 dark:border-purple-900" title="Export to Apple Calendar (.ics)">
            <i data-lucide="download" class="w-3.5 h-3.5"></i>
            <span>Apple Cal</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Google Calendar URL generator
function getGoogleCalendarUrl(appt) {
  const title = encodeURIComponent(appt.title || 'Office Meeting');
  const details = encodeURIComponent(`${appt.notes || ''}\nAttendees: ${appt.attendees || ''}\nContact: ${appt.contact || ''}`);
  const location = encodeURIComponent(`${appt.room || 'Common Office'}, Chiang Mai Office Hub`);

  // Format dates: YYYYMMDDTHHMMSS
  const d = (appt.date || new Date().toISOString().split('T')[0]).replace(/-/g, '');
  const st = (appt.time || '10:00').replace(':', '') + '00';
  const et = (appt.endTime || '11:00').replace(':', '') + '00';
  const dates = `${d}T${st}/${d}T${et}`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}

// Apple Calendar .ICS generator
function generateIcsContent(appts) {
  let ics = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Chiang Mai Office Hub//EN\nCALSCALE:GREGORIAN\n";
  appts.forEach(a => {
    const d = (a.date || new Date().toISOString().split('T')[0]).replace(/-/g, '');
    const st = (a.time || '10:00').replace(':', '') + '00';
    const et = (a.endTime || '11:00').replace(':', '') + '00';
    ics += "BEGIN:VEVENT\n";
    ics += `UID:${a.id || Date.now()}@chiangmai-office\n`;
    ics += `DTSTAMP:${d}T${st}Z\n`;
    ics += `DTSTART:${d}T${st}\n`;
    ics += `DTEND:${d}T${et}\n`;
    ics += `SUMMARY:${a.title}\n`;
    ics += `DESCRIPTION:${(a.notes || '').replace(/\n/g, '\\n')}\\nAttendees: ${a.attendees || ''}\n`;
    ics += `LOCATION:${a.room || 'Chiang Mai Office'}\n`;
    ics += "END:VEVENT\n";
  });
  ics += "END:VCALENDAR";
  return ics;
}

function downloadSingleIcs(apptId) {
  const appt = appointments.find(a => a.id === apptId);
  if (!appt) return;
  const content = generateIcsContent([appt]);
  downloadBlob(content, `${appt.title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`, 'text/calendar');
}

function exportAllAppointmentsIcs() {
  if (appointments.length === 0) {
    alert('No appointments to export.');
    return;
  }
  const content = generateIcsContent(appointments);
  downloadBlob(content, `Chiang_Mai_Office_Appointments.ics`, 'text/calendar');
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// --- 18. APPOINTMENT MODAL LOGIC ---
function openAppointmentModal(apptId = null) {
  editingApptId = apptId;
  const modal = document.getElementById('appointmentModal');
  const deleteBtn = document.getElementById('apptDeleteBtn');

  if (apptId) {
    const a = appointments.find(it => it.id === apptId);
    if (!a) return;
    document.getElementById('apptTitleInput').value = a.title || '';
    document.getElementById('apptDateInput').value = a.date || '';
    document.getElementById('apptTimeInput').value = a.time || '10:00';
    document.getElementById('apptEndTimeInput').value = a.endTime || '11:00';
    document.getElementById('apptAttendeeSelect').value = a.attendees || 'Kibo';
    document.getElementById('apptContactSelect').value = a.contact || '';
    document.getElementById('apptRoomSelect').value = a.room || 'Common Office';
    document.getElementById('apptNotesInput').value = a.notes || '';
    deleteBtn.classList.remove('hidden');
  } else {
    document.getElementById('apptTitleInput').value = '';
    document.getElementById('apptDateInput').value = new Date().toISOString().split('T')[0];
    document.getElementById('apptTimeInput').value = '10:00';
    document.getElementById('apptEndTimeInput').value = '11:00';
    document.getElementById('apptAttendeeSelect').value = 'Kibo';
    document.getElementById('apptContactSelect').value = '';
    document.getElementById('apptRoomSelect').value = 'Common Office';
    document.getElementById('apptNotesInput').value = '';
    deleteBtn.classList.add('hidden');
  }

  modal.classList.remove('hidden');
  document.getElementById('apptTitleInput').focus();
  lucide.createIcons();
}

function closeAppointmentModal() {
  document.getElementById('appointmentModal').classList.add('hidden');
  editingApptId = null;
}

function saveCurrentAppointment() {
  const title = document.getElementById('apptTitleInput').value.trim();
  const date = document.getElementById('apptDateInput').value;

  if (!title || !date) {
    alert('Please provide meeting title and date.');
    return;
  }

  const apptData = {
    title,
    date,
    time: document.getElementById('apptTimeInput').value,
    endTime: document.getElementById('apptEndTimeInput').value,
    attendees: document.getElementById('apptAttendeeSelect').value,
    contact: document.getElementById('apptContactSelect').value,
    room: document.getElementById('apptRoomSelect').value,
    notes: document.getElementById('apptNotesInput').value.trim()
  };

  if (editingApptId) {
    const idx = appointments.findIndex(a => a.id === editingApptId);
    if (idx !== -1) appointments[idx] = { ...appointments[idx], ...apptData };
  } else {
    apptData.id = 'appt-' + Date.now();
    appointments.unshift(apptData);
  }

  saveAllStorage();
  closeAppointmentModal();
  renderCurrentView();
}

function deleteCurrentAppointment() {
  if (!editingApptId) return;
  if (confirm(t('confirm_delete_appt'))) {
    appointments = appointments.filter(a => a.id !== editingApptId);
    saveAllStorage();
    closeAppointmentModal();
    renderCurrentView();
  }
}

function previewAddGoogleCalendar() {
  const appt = {
    title: document.getElementById('apptTitleInput').value || 'Meeting',
    date: document.getElementById('apptDateInput').value || new Date().toISOString().split('T')[0],
    time: document.getElementById('apptTimeInput').value || '10:00',
    endTime: document.getElementById('apptEndTimeInput').value || '11:00',
    attendees: document.getElementById('apptAttendeeSelect').value,
    contact: document.getElementById('apptContactSelect').value,
    room: document.getElementById('apptRoomSelect').value,
    notes: document.getElementById('apptNotesInput').value
  };
  window.open(getGoogleCalendarUrl(appt), '_blank');
}

function previewDownloadIcs() {
  const appt = {
    id: 'appt-preview',
    title: document.getElementById('apptTitleInput').value || 'Meeting',
    date: document.getElementById('apptDateInput').value || new Date().toISOString().split('T')[0],
    time: document.getElementById('apptTimeInput').value || '10:00',
    endTime: document.getElementById('apptEndTimeInput').value || '11:00',
    attendees: document.getElementById('apptAttendeeSelect').value,
    room: document.getElementById('apptRoomSelect').value,
    notes: document.getElementById('apptNotesInput').value
  };
  const content = generateIcsContent([appt]);
  downloadBlob(content, `${appt.title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`, 'text/calendar');
}

// --- 19. HANDWORKERS / ESSENTIAL CONTACTS (AIS, TRUE, AGENT) ---
function renderHandworkers() {
  const grid = document.getElementById('handworkersGrid');
  grid.innerHTML = handworkers.map(hw => {
    return `
      <div class="bg-white dark:bg-[#252525] border border-gray-200 dark:border-neutral-700 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-emerald-500 transition flex flex-col justify-between space-y-3">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] px-2 py-0.5 rounded font-bold uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              ${hw.specialty || 'Support'}
            </span>
            <span class="text-[10px] text-gray-400">📍 ${hw.location || 'Chiang Mai'}</span>
          </div>

          <h3 class="font-bold text-sm text-gray-900 dark:text-white leading-tight">
            ${escapeHtml(hw.name)}
          </h3>

          ${hw.rate ? `
            <p class="text-[11px] text-gray-500 dark:text-neutral-400 mt-1.5">
              ${escapeHtml(hw.rate)}
            </p>
          ` : ''}
        </div>

        <div class="pt-3 border-t border-gray-100 dark:border-neutral-800 space-y-2">
          <a href="tel:${hw.phone.replace(/[^0-9+]/g, '')}" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 shadow-sm transition">
            <i data-lucide="phone-call" class="w-3.5 h-3.5"></i>
            <span>${hw.phone}</span>
          </a>

          <div class="flex items-center justify-between text-[11px]">
            ${hw.line ? `
              <button onclick="copyToClipboard('${hw.line}', 'Line ID copied!')" class="text-gray-600 dark:text-neutral-300 hover:text-emerald-600 flex items-center space-x-1 truncate">
                <i data-lucide="message-circle" class="w-3.5 h-3.5 text-emerald-500"></i>
                <span class="truncate">Line: ${hw.line}</span>
              </button>
            ` : '<span class="text-gray-400">No Line ID</span>'}

            <button onclick="openHandworkerModal('${hw.id}')" class="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1">
              <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openHandworkerModal(hwId = null) {
  editingHwId = hwId;
  const modal = document.getElementById('handworkerModal');
  const deleteBtn = document.getElementById('hwDeleteBtn');

  if (hwId) {
    const hw = handworkers.find(h => h.id === hwId);
    if (!hw) return;
    document.getElementById('hwNameInput').value = hw.name || '';
    document.getElementById('hwSpecialtySelect').value = hw.specialty || 'ais';
    document.getElementById('hwPhoneInput').value = hw.phone || '';
    document.getElementById('hwLineInput').value = hw.line || '';
    document.getElementById('hwRateInput').value = hw.rate || '';
    deleteBtn.classList.remove('hidden');
  } else {
    document.getElementById('hwNameInput').value = '';
    document.getElementById('hwSpecialtySelect').value = 'ais';
    document.getElementById('hwPhoneInput').value = '';
    document.getElementById('hwLineInput').value = '';
    document.getElementById('hwRateInput').value = '';
    deleteBtn.classList.add('hidden');
  }

  modal.classList.remove('hidden');
  document.getElementById('hwNameInput').focus();
  lucide.createIcons();
}

function closeHandworkerModal() {
  document.getElementById('handworkerModal').classList.add('hidden');
  editingHwId = null;
}

function saveCurrentHandworker() {
  const name = document.getElementById('hwNameInput').value.trim();
  const phone = document.getElementById('hwPhoneInput').value.trim();

  if (!name || !phone) {
    alert('Please provide contact name and phone number.');
    return;
  }

  const hwData = {
    name,
    specialty: document.getElementById('hwSpecialtySelect').value,
    location: 'Chiang Mai',
    phone,
    line: document.getElementById('hwLineInput').value.trim(),
    rate: document.getElementById('hwRateInput').value.trim()
  };

  if (editingHwId) {
    const idx = handworkers.findIndex(h => h.id === editingHwId);
    if (idx !== -1) handworkers[idx] = { ...handworkers[idx], ...hwData };
  } else {
    hwData.id = 'hw-' + Date.now();
    handworkers.unshift(hwData);
  }

  saveAllStorage();
  populateTaskModalContacts();
  closeHandworkerModal();
  renderCurrentView();
}

function deleteCurrentHandworker() {
  if (!editingHwId) return;
  if (confirm(t('confirm_delete_contact'))) {
    handworkers = handworkers.filter(h => h.id !== editingHwId);
    saveAllStorage();
    populateTaskModalContacts();
    closeHandworkerModal();
    renderCurrentView();
  }
}

// Populate Contacts inside Task Modal
function populateTaskModalContacts() {
  const select = document.getElementById('modalHandworkerSelect');
  if (!select) return;
  const currentVal = select.value;
  select.innerHTML = `<option value="">-- No contact linked --</option>` +
    handworkers.map(h => `<option value="${h.id}">${h.name} (${h.phone})</option>`).join('');
  select.value = currentVal;
}

function onTaskHandworkerChange(hwId) {
  const hw = handworkers.find(h => h.id === hwId);
  const phoneInput = document.getElementById('modalHandworkerPhoneInput');
  const actionsDiv = document.getElementById('modalHandworkerQuickActions');
  const callBtn = document.getElementById('modalCallHandworkerBtn');

  if (hw) {
    phoneInput.value = hw.phone;
    actionsDiv.classList.remove('hidden');
    callBtn.href = `tel:${hw.phone.replace(/[^0-9+]/g, '')}`;
  } else {
    actionsDiv.classList.add('hidden');
  }
}

function copyHandworkerLine() {
  const select = document.getElementById('modalHandworkerSelect');
  const hw = handworkers.find(h => h.id === select.value);
  if (hw && hw.line) {
    copyToClipboard(hw.line, `Line ID (${hw.line}) copied!`);
  }
}

function copyToClipboard(text, msg) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification(msg || 'Copied!', '');
  });
}

// --- 20. TASK MODAL LOGIC ---
function openTaskModal(taskId = null, defaultStatus = 'todo') {
  editingTaskId = taskId;
  populateTaskModalContacts();

  const modal = document.getElementById('taskModal');
  const deleteBtn = document.getElementById('modalDeleteBtn');

  if (taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    document.getElementById('modalTitleInput').value = task.title || '';
    document.getElementById('modalIconBtn').textContent = task.icon || '📋';
    document.getElementById('modalStatusSelect').value = task.status || 'todo';
    document.getElementById('modalPrioritySelect').value = task.priority || 'medium';
    document.getElementById('modalTeamSelect').value = task.team || 'Team GMB';
    document.getElementById('modalAssigneeSelect').value = task.assignee || 'Kibo';
    document.getElementById('modalDueDateInput').value = task.dueDate || '';
    document.getElementById('modalCostInput').value = task.cost || '';
    document.getElementById('modalNotesInput').value = task.notes || '';

    document.getElementById('modalHandworkerSelect').value = task.contactId || '';
    document.getElementById('modalHandworkerPhoneInput').value = task.contactPhone || '';
    onTaskHandworkerChange(task.contactId);

    modalTaskPhotos = task.photos ? JSON.parse(JSON.stringify(task.photos)) : [];
    renderModalPhotos(modalTaskPhotos);
    renderModalChecklist(task.checklist || []);
    deleteBtn.classList.remove('hidden');
  } else {
    document.getElementById('modalTitleInput').value = '';
    document.getElementById('modalIconBtn').textContent = '📋';
    document.getElementById('modalStatusSelect').value = defaultStatus;
    document.getElementById('modalPrioritySelect').value = 'medium';
    document.getElementById('modalTeamSelect').value = 'Team GMB';
    document.getElementById('modalAssigneeSelect').value = 'Kibo';
    document.getElementById('modalDueDateInput').value = new Date().toISOString().split('T')[0];
    document.getElementById('modalCostInput').value = '';
    document.getElementById('modalNotesInput').value = '';

    document.getElementById('modalHandworkerSelect').value = '';
    document.getElementById('modalHandworkerPhoneInput').value = '';
    onTaskHandworkerChange('');

    modalTaskPhotos = [];
    renderModalPhotos(modalTaskPhotos);
    renderModalChecklist([]);
    deleteBtn.classList.add('hidden');
  }

  modal.classList.remove('hidden');
  document.getElementById('modalTitleInput').focus();
  lucide.createIcons();
}

function closeTaskModal() {
  document.getElementById('taskModal').classList.add('hidden');
  document.getElementById('emojiPickerPopup').classList.add('hidden');
  editingTaskId = null;
}

function renderModalPhotos(photoList) {
  const container = document.getElementById('modalPhotosContainer');
  if (photoList.length === 0) {
    container.innerHTML = `<div class="col-span-full text-[11px] text-gray-400 py-2">No photos attached yet.</div>`;
    return;
  }
  container.innerHTML = photoList.map((p, idx) => `
    <div class="relative group/pic rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 h-20">
      <img src="${p.url}" alt="${p.caption || 'Photo'}" class="w-full h-full object-cover cursor-pointer" onclick="openPhotoLightbox('${p.url}', '${p.caption || ''}')">
      <button type="button" onclick="removeModalPhoto(${idx})" class="absolute top-1 right-1 bg-black/70 hover:bg-rose-600 text-white p-1 rounded-full text-[10px] opacity-0 group/pic:opacity-100 transition">
        <i data-lucide="x" class="w-3 h-3"></i>
      </button>
    </div>
  `).join('');
  lucide.createIcons();
}

function removeModalPhoto(idx) {
  modalTaskPhotos.splice(idx, 1);
  renderModalPhotos(modalTaskPhotos);
}

function handleModalPhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    const caption = prompt('Caption:') || '';
    modalTaskPhotos.push({ url: evt.target.result, caption });
    renderModalPhotos(modalTaskPhotos);
  };
  reader.readAsDataURL(file);
}

function promptAddPhotoUrl() {
  const url = prompt('Paste image URL:');
  if (url && url.startsWith('http')) {
    const caption = prompt('Caption:') || '';
    modalTaskPhotos.push({ url, caption });
    renderModalPhotos(modalTaskPhotos);
  }
}

function renderModalChecklist(items) {
  const container = document.getElementById('modalChecklistContainer');
  container.innerHTML = items.map((item, idx) => `
    <div class="flex items-center space-x-2 text-xs bg-white dark:bg-neutral-800 p-1.5 rounded-lg border border-gray-200 dark:border-neutral-700">
      <input type="checkbox" ${item.done ? 'checked' : ''} class="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 cursor-pointer checklist-check-item">
      <input type="text" value="${((currentLang === 'th' && item.textTh) ? item.textTh : item.text).replace(/"/g, '&quot;')}" placeholder="Checklist step..." class="flex-1 bg-transparent border-0 focus:outline-none dark:text-gray-200 checklist-text-item">
      <button type="button" onclick="this.parentElement.remove()" class="text-gray-400 hover:text-rose-500 p-1">
        <i data-lucide="x" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  `).join('');
  lucide.createIcons();
}

function addChecklistItem() {
  const container = document.getElementById('modalChecklistContainer');
  const div = document.createElement('div');
  div.className = "flex items-center space-x-2 text-xs bg-white dark:bg-neutral-800 p-1.5 rounded-lg border border-gray-200 dark:border-neutral-700";
  div.innerHTML = `
    <input type="checkbox" class="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 cursor-pointer checklist-check-item">
    <input type="text" placeholder="Checklist step..." class="flex-1 bg-transparent border-0 focus:outline-none dark:text-gray-200 checklist-text-item">
    <button type="button" onclick="this.parentElement.remove()" class="text-gray-400 hover:text-rose-500 p-1">
      <i data-lucide="x" class="w-3.5 h-3.5"></i>
    </button>
  `;
  container.appendChild(div);
  lucide.createIcons();
  div.querySelector('.checklist-text-item').focus();
}

function saveCurrentTask() {
  const title = document.getElementById('modalTitleInput').value.trim();
  if (!title) {
    alert('Please provide task title.');
    return;
  }

  const checklistItems = [];
  document.querySelectorAll('#modalChecklistContainer > div').forEach(row => {
    const isChecked = row.querySelector('.checklist-check-item')?.checked;
    const txt = row.querySelector('.checklist-text-item')?.value.trim();
    if (txt) checklistItems.push({ text: txt, done: isChecked });
  });

  const cId = document.getElementById('modalHandworkerSelect').value;
  const hw = handworkers.find(h => h.id === cId);
  const phoneEntered = document.getElementById('modalHandworkerPhoneInput').value.trim();

  const taskData = {
    title,
    icon: document.getElementById('modalIconBtn').textContent.trim() || '📋',
    status: document.getElementById('modalStatusSelect').value,
    priority: document.getElementById('modalPrioritySelect').value,
    team: document.getElementById('modalTeamSelect').value,
    assignee: document.getElementById('modalAssigneeSelect').value,
    dueDate: document.getElementById('modalDueDateInput').value,
    cost: parseFloat(document.getElementById('modalCostInput').value) || 0,
    notes: document.getElementById('modalNotesInput').value.trim(),
    contactId: cId,
    contactName: hw ? hw.name : '',
    contactPhone: phoneEntered || (hw ? hw.phone : ''),
    photos: modalTaskPhotos,
    checklist: checklistItems
  };

  if (editingTaskId) {
    const idx = tasks.findIndex(t => t.id === editingTaskId);
    if (idx !== -1) tasks[idx] = { ...tasks[idx], ...taskData };
  } else {
    taskData.id = 'cm-' + Date.now();
    tasks.unshift(taskData);
  }

  saveAllStorage();
  closeTaskModal();
  renderCurrentView();
}

function deleteCurrentTask() {
  if (!editingTaskId) return;
  if (confirm(t('confirm_delete_task'))) {
    tasks = tasks.filter(t => t.id !== editingTaskId);
    saveAllStorage();
    closeTaskModal();
    renderCurrentView();
  }
}

// --- 21. SUPPLY MODAL (WITH REGULAR VS DISCOUNT PRICING & QUANTITY) ---
function calculateSupplyPricing() {
  const regPrice = parseFloat(document.getElementById('supplyRegularPriceInput').value) || 0;
  const discPrice = parseFloat(document.getElementById('supplyPriceInput').value) || 0;
  const qty = parseInt(document.getElementById('supplyQuantityInput').value) || 1;
  const savingsPill = document.getElementById('supplySavingsPill');
  const totalDisplay = document.getElementById('supplyTotalPriceDisplay');

  const total = qty * (discPrice > 0 ? discPrice : regPrice);
  totalDisplay.textContent = `฿${total.toLocaleString()}`;

  if (regPrice > discPrice && discPrice > 0) {
    const pct = Math.round(((regPrice - discPrice) / regPrice) * 100);
    const saveAmt = (regPrice - discPrice) * qty;
    savingsPill.textContent = `-${pct}% (Save ฿${saveAmt.toLocaleString()})`;
    savingsPill.classList.remove('hidden');
  } else {
    savingsPill.classList.add('hidden');
  }
}

function openSupplyModal(supplyId = null) {
  editingSupplyId = supplyId;
  const modal = document.getElementById('supplyModal');
  const deleteBtn = document.getElementById('supplyDeleteBtn');

  if (supplyId) {
    const s = supplies.find(it => it.id === supplyId);
    if (!s) return;

    document.getElementById('supplyNameInput').value = s.name || '';
    document.getElementById('supplyRoomSelect').value = s.room || 'Common Office';
    document.getElementById('supplyBeneficiarySelect').value = s.beneficiary || 'Team GMB';
    document.getElementById('supplyRegularPriceInput').value = s.regularPrice || '';
    document.getElementById('supplyPriceInput').value = s.price || '';
    document.getElementById('supplyQuantityInput').value = s.quantity || 1;
    document.getElementById('supplyStoreSelect').value = s.store || 'Shopee';
    document.getElementById('supplyUrlInput').value = s.url || '';
    document.getElementById('supplyStatusSelect').value = s.status || 'in_stock';
    document.getElementById('supplyCarrierSelect').value = s.carrier || 'Flash';
    document.getElementById('supplyTrackingNumInput').value = s.trackingNumber || '';
    document.getElementById('supplyOrderDateInput').value = s.orderDate || '';
    document.getElementById('supplyEstDeliveryInput').value = s.estDelivery || '';
    document.getElementById('supplyNotesInput').value = s.notes || '';

    currentSupplyPhotoData = s.photo || '';
    document.getElementById('supplyPhotoUrlInput').value = (s.photo && s.photo.startsWith('http')) ? s.photo : '';
    updateSupplyPreview(currentSupplyPhotoData);
    calculateSupplyPricing();
    toggleSupplyTrackingFields(s.status);
    updateLiveTrackButton();
    deleteBtn.classList.remove('hidden');
  } else {
    document.getElementById('supplyNameInput').value = '';
    document.getElementById('supplyRoomSelect').value = 'Common Office';
    document.getElementById('supplyBeneficiarySelect').value = 'Team GMB';
    document.getElementById('supplyRegularPriceInput').value = '';
    document.getElementById('supplyPriceInput').value = '';
    document.getElementById('supplyQuantityInput').value = 1;
    document.getElementById('supplyStoreSelect').value = 'Shopee';
    document.getElementById('supplyUrlInput').value = '';
    document.getElementById('supplyStatusSelect').value = 'need_order';
    document.getElementById('supplyCarrierSelect').value = 'Flash';
    document.getElementById('supplyTrackingNumInput').value = '';
    document.getElementById('supplyOrderDateInput').value = new Date().toISOString().split('T')[0];
    document.getElementById('supplyEstDeliveryInput').value = '';
    document.getElementById('supplyNotesInput').value = '';

    currentSupplyPhotoData = '';
    document.getElementById('supplyPhotoUrlInput').value = '';
    updateSupplyPreview('');
    calculateSupplyPricing();
    toggleSupplyTrackingFields('need_order');
    updateLiveTrackButton();
    deleteBtn.classList.add('hidden');
  }

  modal.classList.remove('hidden');
  document.getElementById('supplyNameInput').focus();
  lucide.createIcons();
}

function closeSupplyModal() {
  document.getElementById('supplyModal').classList.add('hidden');
  editingSupplyId = null;
}

function toggleSupplyTrackingFields(status) {
  const container = document.getElementById('supplyTrackingFieldsContainer');
  if (status === 'ordered') {
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
  }
}

function updateLiveTrackButton() {
  const carrierKey = document.getElementById('supplyCarrierSelect').value;
  const trackNum = document.getElementById('supplyTrackingNumInput').value.trim();
  const trackBtn = document.getElementById('supplyLiveTrackLinkBtn');

  if (trackNum && carrierData[carrierKey]) {
    trackBtn.href = carrierData[carrierKey].trackUrl(trackNum);
    trackBtn.classList.remove('hidden');
  } else {
    trackBtn.classList.add('hidden');
  }
}

function updateSupplyPreview(src) {
  const container = document.getElementById('supplyPhotoPreview');
  if (src) {
    container.innerHTML = `<img src="${src}" class="w-full h-full object-cover">`;
  } else {
    container.innerHTML = `
      <div class="text-center p-2 text-gray-400">
        <i data-lucide="image" class="w-6 h-6 mx-auto mb-1"></i>
        <span class="text-[10px] block">Upload</span>
      </div>
    `;
    lucide.createIcons();
  }
}

function updateSupplyPreviewFromUrl(url) {
  currentSupplyPhotoData = url;
  updateSupplyPreview(url);
}

function handleSupplyPhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    currentSupplyPhotoData = evt.target.result;
    updateSupplyPreview(currentSupplyPhotoData);
  };
  reader.readAsDataURL(file);
}

function saveCurrentSupply() {
  const name = document.getElementById('supplyNameInput').value.trim();
  if (!name) {
    alert('Please provide item name.');
    return;
  }

  const regPrice = parseFloat(document.getElementById('supplyRegularPriceInput').value) || 0;
  const discPrice = parseFloat(document.getElementById('supplyPriceInput').value) || 0;
  const qty = parseInt(document.getElementById('supplyQuantityInput').value) || 1;

  const supplyData = {
    name,
    photo: currentSupplyPhotoData,
    room: document.getElementById('supplyRoomSelect').value,
    beneficiary: document.getElementById('supplyBeneficiarySelect').value,
    regularPrice: regPrice,
    price: discPrice > 0 ? discPrice : regPrice,
    quantity: qty,
    store: document.getElementById('supplyStoreSelect').value,
    url: document.getElementById('supplyUrlInput').value.trim(),
    status: document.getElementById('supplyStatusSelect').value,
    carrier: document.getElementById('supplyCarrierSelect').value,
    trackingNumber: document.getElementById('supplyTrackingNumInput').value.trim(),
    orderDate: document.getElementById('supplyOrderDateInput').value,
    estDelivery: document.getElementById('supplyEstDeliveryInput').value,
    notes: document.getElementById('supplyNotesInput').value.trim()
  };

  if (editingSupplyId) {
    const idx = supplies.findIndex(s => s.id === editingSupplyId);
    if (idx !== -1) supplies[idx] = { ...supplies[idx], ...supplyData };
  } else {
    supplyData.id = 'sup-' + Date.now();
    supplies.unshift(supplyData);
  }

  saveAllStorage();
  closeSupplyModal();
  renderCurrentView();
}

function deleteCurrentSupply() {
  if (!editingSupplyId) return;
  if (confirm(t('confirm_delete_task'))) {
    supplies = supplies.filter(s => s.id !== editingSupplyId);
    saveAllStorage();
    closeSupplyModal();
    renderCurrentView();
  }
}

// --- 22. RENOVATIONS LOGIC ---
function renderRenovationsList() {
  const grid = document.getElementById('renovationsGrid');
  grid.innerHTML = renovations.map(r => `
    <div onclick="openRenovationModal('${r.id}')" class="bg-white dark:bg-[#252525] border border-gray-200 dark:border-neutral-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition">
      <div class="h-36 bg-gray-100 dark:bg-neutral-800 relative">
        ${r.photos && r.photos.length > 0 ? `
          <img src="${r.photos[0].url}" class="w-full h-full object-cover">
        ` : `<div class="w-full h-full flex items-center justify-center text-gray-400">🔨 No Photo</div>`}
      </div>
      <div class="p-3.5 space-y-1.5 text-xs">
        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">${r.location}</span>
        <h4 class="font-bold text-gray-900 dark:text-white leading-snug">${r.title}</h4>
        <div class="text-gray-500 font-mono text-[11px]">Budget: ฿${r.budget ? r.budget.toLocaleString() : '0'}</div>
      </div>
    </div>
  `).join('');
}

function openRenovationModal(rId = null) {
  editingRenoId = rId;
  const modal = document.getElementById('renovationModal');
  const deleteBtn = document.getElementById('renoDeleteBtn');

  if (rId) {
    const r = renovations.find(it => it.id === rId);
    if (!r) return;
    document.getElementById('renoTitleInput').value = r.title || '';
    document.getElementById('renoStatusSelect').value = r.status || 'planning';
    document.getElementById('renoLocationSelect').value = r.location || 'Common Office';
    document.getElementById('renoBudgetInput').value = r.budget || '';
    document.getElementById('renoContractorInput').value = r.contractor || '';
    document.getElementById('renoNotesInput').value = r.notes || '';
    modalRenoPhotos = r.photos ? JSON.parse(JSON.stringify(r.photos)) : [];
    renderRenoPhotos(modalRenoPhotos);
    deleteBtn.classList.remove('hidden');
  } else {
    document.getElementById('renoTitleInput').value = '';
    document.getElementById('renoStatusSelect').value = 'planning';
    document.getElementById('renoLocationSelect').value = 'Common Office';
    document.getElementById('renoBudgetInput').value = '';
    document.getElementById('renoContractorInput').value = '';
    document.getElementById('renoNotesInput').value = '';
    modalRenoPhotos = [];
    renderRenoPhotos(modalRenoPhotos);
    deleteBtn.classList.add('hidden');
  }

  modal.classList.remove('hidden');
  document.getElementById('renoTitleInput').focus();
  lucide.createIcons();
}

function closeRenovationModal() {
  document.getElementById('renovationModal').classList.add('hidden');
  editingRenoId = null;
}

function renderRenoPhotos(photoList) {
  const container = document.getElementById('renoPhotosContainer');
  if (photoList.length === 0) {
    container.innerHTML = `<div class="col-span-full text-[11px] text-gray-400 py-2">No site photos.</div>`;
    return;
  }
  container.innerHTML = photoList.map((p, idx) => `
    <div class="relative rounded-lg overflow-hidden border border-gray-200 h-20">
      <img src="${p.url}" class="w-full h-full object-cover cursor-pointer" onclick="openPhotoLightbox('${p.url}')">
      <button type="button" onclick="modalRenoPhotos.splice(${idx}, 1); renderRenoPhotos(modalRenoPhotos)" class="absolute top-1 right-1 bg-black/70 text-white p-1 rounded-full">
        <i data-lucide="x" class="w-3 h-3"></i>
      </button>
    </div>
  `).join('');
  lucide.createIcons();
}

function handleRenoPhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    modalRenoPhotos.push({ url: evt.target.result });
    renderRenoPhotos(modalRenoPhotos);
  };
  reader.readAsDataURL(file);
}

function promptAddRenoPhotoUrl() {
  const url = prompt('Image URL:');
  if (url && url.startsWith('http')) {
    modalRenoPhotos.push({ url });
    renderRenoPhotos(modalRenoPhotos);
  }
}

function saveCurrentRenovation() {
  const title = document.getElementById('renoTitleInput').value.trim();
  if (!title) return;

  const data = {
    title,
    status: document.getElementById('renoStatusSelect').value,
    location: document.getElementById('renoLocationSelect').value,
    budget: parseFloat(document.getElementById('renoBudgetInput').value) || 0,
    contractor: document.getElementById('renoContractorInput').value.trim(),
    notes: document.getElementById('renoNotesInput').value.trim(),
    photos: modalRenoPhotos
  };

  if (editingRenoId) {
    const idx = renovations.findIndex(r => r.id === editingRenoId);
    if (idx !== -1) renovations[idx] = { ...renovations[idx], ...data };
  } else {
    data.id = 'reno-' + Date.now();
    renovations.unshift(data);
  }

  saveAllStorage();
  closeRenovationModal();
  renderCurrentView();
}

function deleteCurrentRenovation() {
  if (!editingRenoId) return;
  if (confirm(t('confirm_delete_reno'))) {
    renovations = renovations.filter(r => r.id !== editingRenoId);
    saveAllStorage();
    closeRenovationModal();
    renderCurrentView();
  }
}

// --- 22.1 IT HARDWARE ASSET REGISTRY ---
function renderItInventory() {
  const container = document.getElementById('itInventoryContainer');
  if (!container) return;

  const memberFilter = document.getElementById('itMemberFilterSelect')?.value || 'ALL';
  const categoryFilter = document.getElementById('itCategoryFilterSelect')?.value || 'ALL';
  const roomFilter = document.getElementById('itRoomFilterSelect')?.value || 'ALL';

  // Stats calculation
  const totalCount = assets.length;
  const totalValue = assets.reduce((sum, a) => sum + (parseFloat(a.cost) || 0), 0);
  const assignedCount = assets.filter(a => a.assignedTo && a.assignedTo !== 'Unassigned').length;

  const todayStr = new Date().toISOString().split('T')[0];
  const activeWarranties = assets.filter(a => !a.warrantyExpiry || a.warrantyExpiry >= todayStr).length;

  document.getElementById('itTotalDevicesCount').textContent = totalCount;
  document.getElementById('itTotalValueDisplay').textContent = `฿${Math.round(totalValue).toLocaleString()}`;
  document.getElementById('itAssignedCount').textContent = assignedCount;
  document.getElementById('itWarrantiesActiveCount').textContent = activeWarranties;

  // Filter items
  let filtered = assets.filter(item => {
    if (memberFilter !== 'ALL' && item.assignedTo !== memberFilter) return false;
    if (categoryFilter !== 'ALL' && item.category !== categoryFilter) return false;
    if (roomFilter !== 'ALL' && item.room !== roomFilter) return false;
    return true;
  });

  // Group by person
  const teamMembers = ['Kibo', 'Marvin', 'Jérémy', 'Matthieu', 'Pierre', 'Alexandre', 'Mailys', 'Unassigned'];
  const groups = {};
  teamMembers.forEach(m => groups[m] = []);

  filtered.forEach(item => {
    const person = item.assignedTo || 'Unassigned';
    if (!groups[person]) groups[person] = [];
    groups[person].push(item);
  });

  const memberColors = {
    Kibo: { bg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900', text: 'text-amber-700 dark:text-amber-300', badge: 'bg-amber-600' },
    Marvin: { bg: 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900', text: 'text-purple-700 dark:text-purple-300', badge: 'bg-purple-500' },
    Jérémy: { bg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900', text: 'text-emerald-700 dark:text-emerald-300', badge: 'bg-emerald-500' },
    Matthieu: { bg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900', text: 'text-blue-700 dark:text-blue-300', badge: 'bg-blue-500' },
    Pierre: { bg: 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900', text: 'text-indigo-700 dark:text-indigo-300', badge: 'bg-indigo-500' },
    Alexandre: { bg: 'bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-900', text: 'text-teal-700 dark:text-teal-300', badge: 'bg-teal-500' },
    Mailys: { bg: 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900', text: 'text-rose-700 dark:text-rose-300', badge: 'bg-rose-500' },
    Unassigned: { bg: 'bg-gray-50 dark:bg-neutral-800/60 border-gray-200 dark:border-neutral-700', text: 'text-gray-700 dark:text-neutral-300', badge: 'bg-gray-500' }
  };

  const html = teamMembers.map(member => {
    const items = groups[member] || [];
    if (memberFilter !== 'ALL' && member !== memberFilter) return '';
    if (items.length === 0 && memberFilter === 'ALL') return '';

    const colors = memberColors[member] || memberColors.Unassigned;
    const memberSubtotal = items.reduce((sum, it) => sum + (parseFloat(it.cost) || 0), 0);

    return `
      <div class="bg-white dark:bg-neutral-800 rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden shadow-sm">
        <div class="px-5 py-3.5 border-b border-gray-200 dark:border-neutral-700 flex flex-wrap items-center justify-between gap-2 ${colors.bg}">
          <div class="flex items-center space-x-2.5">
            <span class="w-7 h-7 rounded-full ${colors.badge} text-white flex items-center justify-center font-bold text-xs shadow-sm">
              ${member[0]}
            </span>
            <div>
              <div class="font-bold text-sm ${colors.text} flex items-center space-x-2">
                <span>${member === 'Unassigned' ? '🏢 Office Reserve & Unassigned Pool' : member}</span>
                ${member === 'Kibo' ? '<span class="text-[10px] bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 px-1.5 py-0.5 rounded font-medium">Office Manager</span>' : ''}
              </div>
              <div class="text-[11px] text-gray-500">${items.length} assigned device${items.length > 1 ? 's' : ''}</div>
            </div>
          </div>

          <div class="flex items-center space-x-3 text-xs">
            <span class="text-gray-500">Equipment Value:</span>
            <span class="font-bold font-mono text-gray-900 dark:text-white">฿${Math.round(memberSubtotal).toLocaleString()}</span>
          </div>
        </div>

        <div class="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          ${items.map(dev => {
            const isWarrantyActive = dev.warrantyExpiry && dev.warrantyExpiry >= todayStr;
            const diffDays = dev.warrantyExpiry ? Math.ceil((new Date(dev.warrantyExpiry) - new Date(todayStr)) / (1000 * 60 * 60 * 24)) : null;

            let warrantyBadgeHtml = '';
            if (dev.warrantyExpiry) {
              if (isWarrantyActive) {
                if (diffDays <= 60) {
                  warrantyBadgeHtml = `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">⚠️ Warranty Expiring (${diffDays}d)</span>`;
                } else {
                  warrantyBadgeHtml = `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">🛡️ Active (${dev.warrantyExpiry})</span>`;
                }
              } else {
                warrantyBadgeHtml = `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">❌ Warranty Expired</span>`;
              }
            }

            return `
              <div class="bg-gray-50 dark:bg-neutral-900/60 rounded-xl p-3 border border-gray-200/80 dark:border-neutral-700/80 flex flex-col justify-between space-y-3 hover:border-blue-400 transition">
                <div>
                  <div class="flex items-start justify-between gap-2">
                    <div class="flex items-center space-x-2">
                      <span class="text-lg">${dev.category === 'Laptop' ? '💻' : dev.category === 'Monitor' ? '🖥️' : dev.category === 'Keyboard' ? '⌨️' : dev.category === 'Audio' ? '🎧' : '🔌'}</span>
                      <div class="font-bold text-xs text-gray-900 dark:text-white leading-tight">${dev.name}</div>
                    </div>
                  </div>

                  <div class="mt-2.5 space-y-1 text-[11px] text-gray-600 dark:text-neutral-400">
                    <div class="flex items-center justify-between">
                      <span class="text-gray-400">S/N:</span>
                      <span class="font-mono font-bold text-gray-800 dark:text-gray-200">${dev.serialNumber || 'N/A'}</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-gray-400">Room:</span>
                      <span class="font-medium text-gray-800 dark:text-gray-200">🚪 ${dev.room || 'Common Office'}</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-gray-400">Cost:</span>
                      <span class="font-mono font-bold text-gray-900 dark:text-white">฿${(parseFloat(dev.cost) || 0).toLocaleString()}</span>
                    </div>
                    ${dev.notes ? `<div class="text-[10px] text-gray-500 pt-1 italic line-clamp-1">${dev.notes}</div>` : ''}
                  </div>
                </div>

                <div class="pt-2 border-t border-gray-200/60 dark:border-neutral-700/60 flex items-center justify-between text-xs">
                  <div>${warrantyBadgeHtml}</div>
                  <button onclick="openAssetModal('${dev.id}')" class="p-1 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded text-gray-500 transition">
                    <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).filter(Boolean).join('');

  container.innerHTML = html || `
    <div class="text-center py-12 text-gray-400">
      <i data-lucide="laptop" class="w-10 h-10 mx-auto mb-2 opacity-40"></i>
      <p>No IT equipment matching your criteria.</p>
    </div>
  `;
}

// --- 22.2 TEAM BUDGET & SPEND BREAKDOWN DASHBOARD ---
function calculateTotalMonthlySpend() {
  const recurringTotal = recurringBills.reduce((sum, b) => sum + (parseFloat(b.amount) || 0), 0);
  const suppliesTotal = supplies.reduce((sum, s) => {
    const p = parseFloat(s.price) || parseFloat(s.regularPrice) || 0;
    const q = parseInt(s.quantity) || 1;
    return sum + (p * q);
  }, 0);
  const tasksTotal = tasks.reduce((sum, t) => sum + (parseFloat(t.cost) || 0), 0);
  return recurringTotal + suppliesTotal + tasksTotal;
}

function renderBudgetDashboard() {
  const container = document.getElementById('budgetTeamsGrid');
  if (!container) return;

  const teams = [
    { id: 'General Team', color: 'cyan', barColor: 'bg-cyan-500', textColor: 'text-cyan-600', borderColor: 'border-cyan-200 dark:border-cyan-900', bgLight: 'bg-cyan-50 dark:bg-cyan-950/40' },
    { id: 'Team GMB', color: 'blue', barColor: 'bg-blue-500', textColor: 'text-blue-600', borderColor: 'border-blue-200 dark:border-blue-900', bgLight: 'bg-blue-50 dark:bg-blue-950/40' },
    { id: 'Team SEO', color: 'emerald', barColor: 'bg-emerald-500', textColor: 'text-emerald-600', borderColor: 'border-emerald-200 dark:border-emerald-900', bgLight: 'bg-emerald-50 dark:bg-emerald-950/40' },
    { id: 'Team Ad', color: 'purple', barColor: 'bg-purple-500', textColor: 'text-purple-600', borderColor: 'border-purple-200 dark:border-purple-900', bgLight: 'bg-purple-50 dark:bg-purple-950/40' },
    { id: 'Pierre', color: 'amber', barColor: 'bg-amber-500', textColor: 'text-amber-600', borderColor: 'border-amber-200 dark:border-amber-900', bgLight: 'bg-amber-50 dark:bg-amber-950/40' },
    { id: 'Office Common', color: 'rose', barColor: 'bg-rose-500', textColor: 'text-rose-600', borderColor: 'border-rose-200 dark:border-rose-900', bgLight: 'bg-rose-50 dark:bg-rose-950/40' }
  ];

  // Aggregation per team
  const teamData = {};
  teams.forEach(t => {
    teamData[t.id] = {
      team: t,
      supplies: [],
      tasks: [],
      recurringBills: [],
      assets: [],
      total: 0
    };
  });

  supplies.forEach(s => {
    const tm = s.beneficiary || 'Office Common';
    const cost = (parseFloat(s.price) || parseFloat(s.regularPrice) || 0) * (parseInt(s.quantity) || 1);
    if (teamData[tm]) {
      teamData[tm].supplies.push({ name: s.name, cost, qty: s.quantity || 1 });
      teamData[tm].total += cost;
    }
  });

  tasks.forEach(t => {
    const tm = t.team || 'Office Common';
    const cost = parseFloat(t.cost) || 0;
    if (cost > 0 && teamData[tm]) {
      teamData[tm].tasks.push({ name: (currentLang === 'th' && t.titleTh) ? t.titleTh : t.title, cost });
      teamData[tm].total += cost;
    }
  });

  recurringBills.forEach(b => {
    const cost = parseFloat(b.amount) || 0;
    if (teamData['Office Common']) {
      teamData['Office Common'].recurringBills.push({ name: b.name, cost });
      teamData['Office Common'].total += cost;
    }
  });

  assets.forEach(a => {
    const tm = a.team || 'Office Common';
    const cost = parseFloat(a.cost) || 0;
    if (teamData[tm]) {
      teamData[tm].assets.push({ name: a.name, cost, person: a.assignedTo });
    }
  });

  // Calculate global totals
  let globalTotal = 0;
  teams.forEach(t => globalTotal += teamData[t.id].total);
  if (globalTotal === 0) globalTotal = 1;

  const recurringTotal = recurringBills.reduce((sum, b) => sum + (parseFloat(b.amount) || 0), 0);
  const suppliesTotal = supplies.reduce((sum, s) => sum + ((parseFloat(s.price) || parseFloat(s.regularPrice) || 0) * (parseInt(s.quantity) || 1)), 0);

  // Top team
  let topTeamName = 'Office Common';
  let maxSpend = -1;
  teams.forEach(t => {
    if (teamData[t.id].total > maxSpend) {
      maxSpend = teamData[t.id].total;
      topTeamName = t.id;
    }
  });

  document.getElementById('budgetTotalGlobalDisplay').textContent = `฿${Math.round(globalTotal).toLocaleString()}`;
  document.getElementById('budgetSuppliesSpendDisplay').textContent = `฿${Math.round(suppliesTotal).toLocaleString()}`;
  document.getElementById('budgetRecurringSpendDisplay').textContent = `฿${Math.round(recurringTotal).toLocaleString()}`;
  document.getElementById('budgetTopTeamDisplay').textContent = `${topTeamName} (฿${Math.round(maxSpend).toLocaleString()})`;

  // Render Proportional Multi-color Bar
  const barContainer = document.getElementById('budgetDistributionBar');
  const legendContainer = document.getElementById('budgetLegendGrid');

  if (barContainer) {
    barContainer.innerHTML = teams.map(t => {
      const sharePct = Math.round((teamData[t.id].total / globalTotal) * 100);
      if (sharePct <= 0) return '';
      return `<div class="${t.barColor} h-full transition-all duration-300 relative group cursor-pointer" style="width: ${sharePct}%" title="${t.id}: ${sharePct}% (฿${Math.round(teamData[t.id].total).toLocaleString()})"></div>`;
    }).join('');
  }

  if (legendContainer) {
    legendContainer.innerHTML = teams.map(t => {
      const sharePct = Math.round((teamData[t.id].total / globalTotal) * 100);
      return `
        <div class="flex items-center space-x-2">
          <span class="w-3 h-3 rounded-full ${t.barColor} flex-shrink-0"></span>
          <div class="truncate">
            <div class="font-bold text-gray-900 dark:text-white truncate">${t.id}</div>
            <div class="text-[10px] text-gray-500 font-mono">฿${Math.round(teamData[t.id].total).toLocaleString()} (${sharePct}%)</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Detailed Team Cards
  container.innerHTML = teams.map(t => {
    const data = teamData[t.id];
    const sharePct = Math.round((data.total / globalTotal) * 100);
    const hwTotal = data.assets.reduce((sum, a) => sum + (parseFloat(a.cost) || 0), 0);

    return `
      <div class="bg-white dark:bg-neutral-800 rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden shadow-sm flex flex-col justify-between">
        <div>
          <!-- Card Header -->
          <div class="p-4 border-b border-gray-200 dark:border-neutral-700 ${t.bgLight} flex items-center justify-between">
            <div>
              <h3 class="font-bold text-sm ${t.textColor}">${t.id}</h3>
              <div class="text-[11px] text-gray-500 font-mono">${sharePct}% of total office spend</div>
            </div>
            <div class="text-right">
              <div class="text-base font-bold font-mono text-gray-900 dark:text-white">฿${Math.round(data.total).toLocaleString()}</div>
              <div class="text-[10px] text-gray-400">Monthly Operational</div>
            </div>
          </div>

          <!-- Items Breakdown -->
          <div class="p-4 space-y-3 text-xs">
            <!-- Supplies items -->
            <div>
              <div class="font-semibold text-gray-700 dark:text-gray-300 text-[11px] uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>📦 Supplies & Gear</span>
                <span class="font-mono text-gray-500">฿${data.supplies.reduce((s, it) => s + it.cost, 0).toLocaleString()}</span>
              </div>
              ${data.supplies.length > 0 ? `
                <div class="space-y-1 text-[11px]">
                  ${data.supplies.slice(0, 4).map(it => `
                    <div class="flex items-center justify-between text-gray-600 dark:text-neutral-400">
                      <span class="truncate mr-2">• ${it.name} (x${it.qty})</span>
                      <span class="font-mono text-gray-900 dark:text-white flex-shrink-0">฿${it.cost.toLocaleString()}</span>
                    </div>
                  `).join('')}
                </div>
              ` : '<div class="text-[11px] text-gray-400 italic">No supply orders yet</div>'}
            </div>

            <!-- Tasks / Services -->
            ${data.tasks.length > 0 ? `
              <div class="pt-2 border-t border-gray-100 dark:border-neutral-700">
                <div class="font-semibold text-gray-700 dark:text-gray-300 text-[11px] uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>🔨 Services & Repairs</span>
                  <span class="font-mono text-gray-500">฿${data.tasks.reduce((s, it) => s + it.cost, 0).toLocaleString()}</span>
                </div>
                <div class="space-y-1 text-[11px]">
                  ${data.tasks.map(it => `
                    <div class="flex items-center justify-between text-gray-600 dark:text-neutral-400">
                      <span class="truncate mr-2">• ${it.name}</span>
                      <span class="font-mono text-gray-900 dark:text-white flex-shrink-0">฿${it.cost.toLocaleString()}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Recurring Bills (if Office Common) -->
            ${data.recurringBills.length > 0 ? `
              <div class="pt-2 border-t border-gray-100 dark:border-neutral-700">
                <div class="font-semibold text-gray-700 dark:text-gray-300 text-[11px] uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>⚡ Fixed Monthly Bills</span>
                  <span class="font-mono text-gray-500">฿${data.recurringBills.reduce((s, it) => s + it.cost, 0).toLocaleString()}</span>
                </div>
                <div class="space-y-1 text-[11px]">
                  ${data.recurringBills.slice(0, 4).map(it => `
                    <div class="flex items-center justify-between text-gray-600 dark:text-neutral-400">
                      <span class="truncate mr-2">• ${it.name}</span>
                      <span class="font-mono text-gray-900 dark:text-white flex-shrink-0">฿${it.cost.toLocaleString()}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Hardware Capital Investment -->
            ${hwTotal > 0 ? `
              <div class="pt-2 border-t border-gray-100 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900/50 -mx-4 -mb-4 p-3 rounded-b-xl flex items-center justify-between text-[11px]">
                <span class="text-gray-500 flex items-center space-x-1">
                  <i data-lucide="laptop" class="w-3.5 h-3.5"></i>
                  <span>IT Hardware Portfolio:</span>
                </span>
                <span class="font-bold font-mono text-blue-600 dark:text-blue-400">฿${Math.round(hwTotal).toLocaleString()}</span>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- 22.3 RECURRING MONTHLY OVERHEAD BILLS ---
function renderRecurringBills() {
  const container = document.getElementById('recurringBillsList');
  if (!container) return;

  const totalCommitment = recurringBills.reduce((sum, b) => sum + (parseFloat(b.amount) || 0), 0);
  const paidTotal = recurringBills.filter(b => b.status === 'paid').reduce((sum, b) => sum + (parseFloat(b.amount) || 0), 0);
  const remainingTotal = totalCommitment - paidTotal;

  // Next bill due
  const pendingBills = recurringBills.filter(b => b.status !== 'paid').sort((a, b) => (a.dueDay || 31) - (b.dueDay || 31));
  const nextBillText = pendingBills.length > 0 ? `Day ${pendingBills[0].dueDay} (${pendingBills[0].name.split(' ')[0]})` : 'All Paid! 🎉';

  document.getElementById('billsTotalCommitmentDisplay').textContent = `฿${Math.round(totalCommitment).toLocaleString()}`;
  document.getElementById('billsPaidDisplay').textContent = `฿${Math.round(paidTotal).toLocaleString()}`;
  document.getElementById('billsRemainingDisplay').textContent = `฿${Math.round(remainingTotal).toLocaleString()}`;
  document.getElementById('billsNextDueDisplay').textContent = nextBillText;

  const catIcons = {
    Rent: '🏢',
    Electricity: '⚡',
    Water: '💧',
    Internet: '📶',
    Cleaning: '🧹',
    Other: '📄'
  };

  container.innerHTML = recurringBills.map(bill => {
    const isPaid = bill.status === 'paid';
    const icon = catIcons[bill.category] || '⚡';

    return `
      <div class="bg-white dark:bg-neutral-800 rounded-2xl border ${isPaid ? 'border-gray-200 dark:border-neutral-700' : 'border-rose-300 dark:border-rose-900/80 ring-1 ring-rose-400/30'} p-4 shadow-sm flex flex-col justify-between space-y-3 transition">
        <div>
          <!-- Header -->
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-start space-x-2.5">
              <span class="w-8 h-8 rounded-xl ${isPaid ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600' : 'bg-rose-100 dark:bg-rose-950 text-rose-600'} flex items-center justify-center text-base flex-shrink-0 font-bold">
                ${icon}
              </span>
              <div>
                <h4 class="font-bold text-xs text-gray-900 dark:text-white leading-tight">${bill.name}</h4>
                ${bill.nameTh ? `<div class="text-[10px] text-gray-400 mt-0.5">${bill.nameTh}</div>` : ''}
              </div>
            </div>

            <button onclick="openBillModal('${bill.id}')" class="p-1 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded text-gray-400 transition">
              <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
            </button>
          </div>

          <!-- Price & Due Date -->
          <div class="mt-3 p-2.5 rounded-xl bg-gray-50 dark:bg-neutral-900/60 border border-gray-100 dark:border-neutral-700 flex items-center justify-between">
            <div>
              <div class="text-[10px] text-gray-400 uppercase font-semibold">Monthly Amount</div>
              <div class="text-base font-bold font-mono text-gray-900 dark:text-white">฿${(parseFloat(bill.amount) || 0).toLocaleString()}</div>
            </div>
            <div class="text-right">
              <div class="text-[10px] text-gray-400 uppercase font-semibold">Due Day</div>
              <div class="text-xs font-bold font-mono text-amber-600 dark:text-amber-400 flex items-center justify-end space-x-1">
                <i data-lucide="calendar" class="w-3 h-3"></i>
                <span>Every ${bill.dueDay || '1st'}</span>
              </div>
            </div>
          </div>

          <!-- Provider & Reference Details -->
          <div class="mt-2.5 space-y-1 text-[11px] text-gray-600 dark:text-neutral-400">
            ${bill.provider ? `<div class="truncate"><strong>Provider:</strong> ${bill.provider}</div>` : ''}
            ${bill.refNumber ? `<div class="truncate font-mono"><strong>Ref / CA:</strong> ${bill.refNumber}</div>` : ''}
            ${bill.paymentMethod ? `<div class="truncate"><strong>Method:</strong> ${bill.paymentMethod}</div>` : ''}
            ${bill.notes ? `<div class="text-[10px] text-gray-400 italic pt-1 line-clamp-1">${bill.notes}</div>` : ''}
          </div>
        </div>

        <!-- Action / Status Button -->
        <div class="pt-2 border-t border-gray-100 dark:border-neutral-700 flex items-center justify-between text-xs">
          <div>
            ${isPaid ? `
              <span class="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                <i data-lucide="check-circle" class="w-3 h-3"></i>
                <span>Paid (${bill.paidDate || 'Oct 2026'})</span>
              </span>
            ` : `
              <span class="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 animate-pulse">
                <i data-lucide="clock" class="w-3 h-3"></i>
                <span>To Pay before Day ${bill.dueDay}</span>
              </span>
            `}
          </div>

          <button onclick="toggleBillPaid('${bill.id}')" class="px-2.5 py-1 rounded-lg text-xs font-semibold transition ${isPaid ? 'bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-neutral-700 dark:text-neutral-300' : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'}">
            ${isPaid ? 'Mark Unpaid' : '✅ Mark Paid'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function toggleBillPaid(billId) {
  const b = recurringBills.find(it => it.id === billId);
  if (!b) return;
  if (b.status === 'paid') {
    b.status = 'pending';
    b.paidDate = '';
  } else {
    b.status = 'paid';
    b.paidDate = new Date().toISOString().split('T')[0];
  }
  saveAllStorage();
  renderCurrentView();
}

// --- 22.4 MODAL HANDLERS FOR ASSETS & BILLS ---
function openAssetModal(assetId = null) {
  editingAssetId = assetId;
  const modal = document.getElementById('assetModal');
  const deleteBtn = document.getElementById('assetDeleteBtn');

  if (assetId) {
    const a = assets.find(it => it.id === assetId);
    if (!a) return;
    document.getElementById('assetNameInput').value = a.name || '';
    document.getElementById('assetCategorySelect').value = a.category || 'Laptop';
    document.getElementById('assetAssigneeSelect').value = a.assignedTo || 'Unassigned';
    document.getElementById('assetTeamSelect').value = a.team || 'Team GMB';
    document.getElementById('assetRoomSelect').value = a.room || 'Common Office';
    document.getElementById('assetSerialInput').value = a.serialNumber || '';
    document.getElementById('assetCostInput').value = a.cost || '';
    document.getElementById('assetPurchaseDateInput').value = a.purchaseDate || '';
    document.getElementById('assetWarrantyDateInput').value = a.warrantyExpiry || '';
    document.getElementById('assetStatusSelect').value = a.status || 'in_use';
    document.getElementById('assetPhotoInput').value = a.photo || '';
    document.getElementById('assetNotesInput').value = a.notes || '';
    deleteBtn.classList.remove('hidden');
  } else {
    document.getElementById('assetNameInput').value = '';
    document.getElementById('assetCategorySelect').value = 'Laptop';
    document.getElementById('assetAssigneeSelect').value = 'Marvin';
    document.getElementById('assetTeamSelect').value = 'Team Ad';
    document.getElementById('assetRoomSelect').value = 'Common Office';
    document.getElementById('assetSerialInput').value = '';
    document.getElementById('assetCostInput').value = '';
    document.getElementById('assetPurchaseDateInput').value = new Date().toISOString().split('T')[0];
    document.getElementById('assetWarrantyDateInput').value = '';
    document.getElementById('assetStatusSelect').value = 'in_use';
    document.getElementById('assetPhotoInput').value = '';
    document.getElementById('assetNotesInput').value = '';
    deleteBtn.classList.add('hidden');
  }
  modal.classList.remove('hidden');
}

function closeAssetModal() {
  document.getElementById('assetModal').classList.add('hidden');
  editingAssetId = null;
}

function saveCurrentAsset() {
  const name = document.getElementById('assetNameInput').value.trim();
  if (!name) return;

  const data = {
    name,
    category: document.getElementById('assetCategorySelect').value,
    assignedTo: document.getElementById('assetAssigneeSelect').value,
    team: document.getElementById('assetTeamSelect').value,
    room: document.getElementById('assetRoomSelect').value,
    serialNumber: document.getElementById('assetSerialInput').value.trim(),
    cost: parseFloat(document.getElementById('assetCostInput').value) || 0,
    purchaseDate: document.getElementById('assetPurchaseDateInput').value,
    warrantyExpiry: document.getElementById('assetWarrantyDateInput').value,
    status: document.getElementById('assetStatusSelect').value,
    photo: document.getElementById('assetPhotoInput').value.trim(),
    notes: document.getElementById('assetNotesInput').value.trim()
  };

  if (editingAssetId) {
    const idx = assets.findIndex(a => a.id === editingAssetId);
    if (idx !== -1) assets[idx] = { ...assets[idx], ...data };
  } else {
    data.id = 'asset-' + Date.now();
    assets.unshift(data);
  }

  saveAllStorage();
  closeAssetModal();
  renderCurrentView();
}

function deleteCurrentAsset() {
  if (!editingAssetId) return;
  if (confirm(t('confirm_delete_asset'))) {
    assets = assets.filter(a => a.id !== editingAssetId);
    saveAllStorage();
    closeAssetModal();
    renderCurrentView();
  }
}

function openBillModal(billId = null) {
  editingBillId = billId;
  const modal = document.getElementById('billModal');
  const deleteBtn = document.getElementById('billDeleteBtn');

  if (billId) {
    const b = recurringBills.find(it => it.id === billId);
    if (!b) return;
    document.getElementById('billNameInput').value = b.name || '';
    document.getElementById('billNameThInput').value = b.nameTh || '';
    document.getElementById('billCategorySelect').value = b.category || 'Electricity';
    document.getElementById('billAmountInput').value = b.amount || '';
    document.getElementById('billDueDayInput').value = b.dueDay || 1;
    document.getElementById('billProviderInput').value = b.provider || '';
    document.getElementById('billPaymentMethodInput').value = b.paymentMethod || '';
    document.getElementById('billRefNumberInput').value = b.refNumber || '';
    document.getElementById('billRoomSelect').value = b.room || 'Common Office';
    document.getElementById('billNotesInput').value = b.notes || '';
    deleteBtn.classList.remove('hidden');
  } else {
    document.getElementById('billNameInput').value = '';
    document.getElementById('billNameThInput').value = '';
    document.getElementById('billCategorySelect').value = 'Electricity';
    document.getElementById('billAmountInput').value = '';
    document.getElementById('billDueDayInput').value = 10;
    document.getElementById('billProviderInput').value = '';
    document.getElementById('billPaymentMethodInput').value = '';
    document.getElementById('billRefNumberInput').value = '';
    document.getElementById('billRoomSelect').value = 'Common Office';
    document.getElementById('billNotesInput').value = '';
    deleteBtn.classList.add('hidden');
  }
  modal.classList.remove('hidden');
}

function closeBillModal() {
  document.getElementById('billModal').classList.add('hidden');
  editingBillId = null;
}

function saveCurrentBill() {
  const name = document.getElementById('billNameInput').value.trim();
  if (!name) return;

  const data = {
    name,
    nameTh: document.getElementById('billNameThInput').value.trim(),
    category: document.getElementById('billCategorySelect').value,
    amount: parseFloat(document.getElementById('billAmountInput').value) || 0,
    dueDay: parseInt(document.getElementById('billDueDayInput').value) || 1,
    provider: document.getElementById('billProviderInput').value.trim(),
    paymentMethod: document.getElementById('billPaymentMethodInput').value.trim(),
    refNumber: document.getElementById('billRefNumberInput').value.trim(),
    room: document.getElementById('billRoomSelect').value,
    notes: document.getElementById('billNotesInput').value.trim(),
    status: 'pending'
  };

  if (editingBillId) {
    const idx = recurringBills.findIndex(b => b.id === editingBillId);
    if (idx !== -1) {
      data.status = recurringBills[idx].status || 'pending';
      data.paidDate = recurringBills[idx].paidDate || '';
      recurringBills[idx] = { ...recurringBills[idx], ...data };
    }
  } else {
    data.id = 'bill-' + Date.now();
    recurringBills.push(data);
  }

  saveAllStorage();
  closeBillModal();
  renderCurrentView();
}

function deleteCurrentBill() {
  if (!editingBillId) return;
  if (confirm(t('confirm_delete_bill'))) {
    recurringBills = recurringBills.filter(b => b.id !== editingBillId);
    saveAllStorage();
    closeBillModal();
    renderCurrentView();
  }
}

// --- 23. PHOTO LIGHTBOX & EMOJI ---
function openPhotoLightbox(url, caption = '') {
  const modal = document.getElementById('photoLightboxModal');
  document.getElementById('lightboxImage').src = url;
  document.getElementById('lightboxCaption').textContent = caption;
  modal.classList.remove('hidden');
}

function closePhotoLightbox() {
  document.getElementById('photoLightboxModal').classList.add('hidden');
}

const popularEmojis = ['📋', '❄️', '😷', '🛂', '⚡', '☕', '🧹', '🏢', '💧', '🌐', '🚗', '🔑', '🧾', '🏥', '🇹🇭', '📦', '🖨️', '🔨', '🛒', '🛍️', '📶', '🔴'];
function toggleEmojiPicker() {
  const popup = document.getElementById('emojiPickerPopup');
  const btn = document.getElementById('modalIconBtn');
  if (!popup.classList.contains('hidden')) {
    popup.classList.add('hidden');
    return;
  }
  const rect = btn.getBoundingClientRect();
  popup.style.top = `${rect.bottom + 6}px`;
  popup.style.left = `${rect.left}px`;
  popup.innerHTML = popularEmojis.map(emo => `
    <button type="button" onclick="selectEmoji('${emo}')" class="p-1 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded transition">${emo}</button>
  `).join('');
  popup.classList.remove('hidden');
}

function selectEmoji(emo) {
  document.getElementById('modalIconBtn').textContent = emo;
  document.getElementById('emojiPickerPopup').classList.add('hidden');
}

// --- 24. EXPORT & IMPORT ---
function exportData() {
  const exportPayload = {
    version: "4.5",
    exportedAt: new Date().toISOString(),
    tasks,
    supplies,
    handworkers,
    appointments,
    renovations,
    assets,
    recurringBills
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
  const a = document.createElement('a');
  a.setAttribute("href", dataStr);
  a.setAttribute("download", `chiangmai_office_hub_backup_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function handleImportData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const imp = JSON.parse(evt.target.result);
      if (imp.tasks) tasks = imp.tasks;
      if (imp.supplies) supplies = imp.supplies;
      if (imp.handworkers) handworkers = imp.handworkers;
      if (imp.appointments) appointments = imp.appointments;
      if (imp.renovations) renovations = imp.renovations;
      if (imp.assets) assets = imp.assets;
      if (imp.recurringBills) recurringBills = imp.recurringBills;
      saveAllStorage();
      renderCurrentView();
      showNotification('Import Complete', 'Data imported successfully.');
    } catch (err) {
      showNotification('Import Error', 'Could not parse JSON backup file.', 'error');
    }
  };
  reader.readAsText(file);
}

// --- EUR/THB EXCHANGE RATE ---
async function fetchExchangeRate() {
  const CACHE_KEY = 'cm_office_eur_thb';
  const CACHE_DURATION = 4 * 60 * 60 * 1000; // 4 hours

  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_DURATION) {
        return parsed;
      }
    }
  } catch (e) { /* ignore parse errors */ }

  try {
    const resp = await fetch('https://open.er-api.com/v6/latest/EUR');
    const data = await resp.json();
    if (data && data.rates && data.rates.THB) {
      const result = { rate: data.rates.THB, timestamp: Date.now() };
      try { localStorage.setItem(CACHE_KEY, JSON.stringify(result)); } catch (e) {}
      return result;
    }
  } catch (e) {
    // Network error - try returning cached data even if expired
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) return JSON.parse(cached);
    } catch (e2) {}
  }
  return null;
}

async function renderExchangeWidget() {
  const widget = document.getElementById('eurThbWidget');
  if (!widget) return;

  const data = await fetchExchangeRate();
  if (!data || !data.rate) {
    widget.classList.add('hidden');
    return;
  }

  const rateStr = data.rate.toFixed(2);
  const updatedDate = new Date(data.timestamp);
  const timeStr = updatedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  widget.classList.remove('hidden');
  widget.classList.add('flex');
  widget.innerHTML = `
    <div class="flex items-center space-x-1.5 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 rounded-lg px-2.5 py-1">
      <span class="text-indigo-600 dark:text-indigo-400 font-semibold">${t('exchange_rate')}:</span>
      <span class="font-bold text-indigo-900 dark:text-indigo-200">฿${rateStr}</span>
      <span class="text-[9px] text-indigo-400 dark:text-indigo-500">${t('rate_updated')} ${timeStr}</span>
    </div>
  `;
}

// --- 25. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initData();
  setLanguage(currentLang);
  renderExchangeWidget();

  document.querySelectorAll('.view-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchView(btn.getAttribute('data-view'));
      if (window.innerWidth < 768) closeMobileSidebar();
    });
  });

  document.getElementById('langENBtn')?.addEventListener('click', () => setLanguage('en'));
  document.getElementById('langTHBtn')?.addEventListener('click', () => setLanguage('th'));
  document.getElementById('darkModeToggle')?.addEventListener('click', toggleDarkMode);

  document.getElementById('globalSearchInput')?.addEventListener('input', () => renderCurrentView());
  document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
    document.getElementById('teamFilterSelect').value = 'ALL';
    document.getElementById('memberFilterSelect').value = 'ALL';
    document.getElementById('priorityFilterSelect').value = 'ALL';
    document.getElementById('globalSearchInput').value = '';
    renderCurrentView();
  });

  document.getElementById('exportDataBtn')?.addEventListener('click', exportData);
  document.getElementById('importFileInput')?.addEventListener('change', handleImportData);

  document.getElementById('toggleSidebarBtn')?.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (window.innerWidth < 768) {
      sidebar.classList.toggle('sidebar-open');
      overlay?.classList.toggle('active');
    } else {
      sidebar.classList.toggle('-ml-64');
    }
  });

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      document.getElementById('globalSearchInput')?.focus();
    }
    if (e.key === 'Escape') {
      closeTaskModal();
      closeSupplyModal();
      closeAppointmentModal();
      closeHandworkerModal();
      closeRenovationModal();
      closeAssetModal();
      closeBillModal();
      closePhotoLightbox();
      closeKiboTutorialModal();
      document.getElementById('notifDropdown')?.classList.add('hidden');
    }
  });

  window.addEventListener('click', (e) => {
    const notifBtn = document.getElementById('notifBellBtn');
    const notifDd = document.getElementById('notifDropdown');
    if (notifDd && !notifDd.contains(e.target) && !notifBtn.contains(e.target)) {
      notifDd.classList.add('hidden');
    }

    const popup = document.getElementById('emojiPickerPopup');
    const iconBtn = document.getElementById('modalIconBtn');
    if (popup && !popup.contains(e.target) && e.target !== iconBtn) {
      popup.classList.add('hidden');
    }
  });
});

// --- 24. KIBO'S OFFICE MANAGER TUTORIAL & INTERACTIVE ONBOARDING ---

const defaultKiboMorningChecklist = [
  { id: 'm-1', textEn: 'Check Chiang Mai AQI / PM2.5 & turn on Xiaomi Air Purifiers', textTh: 'ตรวจเช็คค่าฝุ่น PM2.5 และเปิดเครื่องฟอกอากาศ Xiaomi', done: true },
  { id: 'm-2', textEn: 'Refill Doi Chang espresso coffee beans & check water cooler bottles', textTh: 'เติมเมล็ดกาแฟดอยช้าง & ตรวจเช็คถังน้ำดื่ม 20L', done: true },
  { id: 'm-3', textEn: 'Verify AIS Fibre dedicated 1Gbps speed & Wi-Fi mesh nodes', textTh: 'ทดสอบสปีดเน็ต AIS Fibre & สัญญาณ Mesh Wi-Fi 6', done: true },
  { id: 'm-4', textEn: 'Restock restroom paper towels, foaming soap & facial tissues', textTh: 'ตรวจเช็คกระดาษทิชชู่ สบู่เหลวล้างมือในห้องน้ำ', done: false }
];

const defaultKiboWeeklyChecklist = [
  { id: 'w-1', textEn: 'Coordinate Friday 17:00 deep office clean with P\'Noi (082-190-7765)', textTh: 'ประสานงานแม่บ้านพี่น้อย ทำความสะอาดรอบใหญ่ 17:00 น.', done: true },
  { id: 'w-2', textEn: 'Send weekly cleaning PromptPay transfer to P\'Noi & store payment slip', textTh: 'โอนเงินค่าจ้างแม่บ้านพี่น้อยผ่านพร้อมเพย์ & แนบสลิป', done: true },
  { id: 'w-3', textEn: 'Organize recyclable plastic/cans & empty desk wastebaskets', textTh: 'แยกขยะพลาสติก/กระป๋อง และเทถังขยะใต้โต๊ะทำงาน', done: false },
  { id: 'w-4', textEn: 'Water indoor office plants, terrace greenery & rooftop planters', textTh: 'รดน้ำต้นไม้ในห้องทำงาน ระเบียง และรูฟท็อป', done: false }
];

let kiboChecklistState = JSON.parse(localStorage.getItem('cm_kibo_checklist') || 'null');
if (!kiboChecklistState) {
  kiboChecklistState = {
    morning: defaultKiboMorningChecklist,
    weekly: defaultKiboWeeklyChecklist
  };
}

const kiboThaiPhrases = [
  {
    category: "Aircon Servicing / แจ้งซ่อมแอร์",
    icon: "❄️",
    badge: "Aircon / แอร์",
    thai: "แอร์ชั้น 2 ไม่ค่อยเย็น มีน้ำหยด ช่างสะดวกเข้ามาดูวันไหนครับ",
    phonetic: "Air chan song mai khoi yen, mee nam yot. Chang sa-duak khao ma doo wan nai khrap?",
    english: "The 2nd floor aircon isn't cooling well and is dripping water. When is the technician available to come inspect it?"
  },
  {
    category: "Tax Invoice / ขอใบกำกับภาษี",
    icon: "🧾",
    badge: "Finance / ภาษี",
    thai: "ขอใบกำกับภาษีเต็มรูป ในนามบริษัทด้วยครับ ออกเป็น e-Tax invoice ได้ไหมครับ",
    phonetic: "Khor bai gam-gab pha-see tem roop nai naam borisat duay khrap. Ok pen e-Tax invoice dai mai khrap?",
    english: "Please issue a full corporate tax invoice under our company name. Can it be issued as an e-Tax invoice?"
  },
  {
    category: "Courier Delivery / พัสดุมาส่ง",
    icon: "📦",
    badge: "Delivery / พัสดุ",
    thai: "พัสดุมาส่ง สามารถวางไว้ที่โต๊ะล็อบบี้ชั้น 1 ได้เลยครับ เดี๋ยวลงไปรับ ขอบคุณครับ",
    phonetic: "Patsadu ma song, sa-mart wang wai thee toh lobby chan neung dai loei khrap. Diao long pai rap, khob khun khrap.",
    english: "For parcel delivery, you can leave it on the 1st floor lobby table. I will go down to collect it, thank you."
  },
  {
    category: "Landlord TM30 / เอกสารแจ้ง ตม.30",
    icon: "🏢",
    badge: "Landlord / ตม.",
    thai: "รบกวนขอสำเนาทะเบียนบ้านและบัตรประชาชนเจ้าบ้าน สำหรับทำแจ้งที่พักคนต่างชาติ TM30 ครับ",
    phonetic: "Rop kuan khor sam-nao thabian baan lae bat prachachon chao baan sam-rap tham TM30 khrap.",
    english: "Could you please provide a signed copy of the house registration and landlord ID card for expat TM30 immigration filing?"
  },
  {
    category: "PEA Electricity / แจ้งไฟดับ PEA",
    icon: "⚡",
    badge: "Electricity / ไฟฟ้า",
    thai: "ไฟที่ออฟฟิศนิมมานดับครับ หมายเลขผู้ใช้ไฟ 02003884192 รบกวนส่งเจ้าหน้าที่มาตรวจสอบหน่อยครับ",
    phonetic: "Fai thee office Nimman dap khrap. Mai-lekh phoo-chai fai 02003884192, rop kuan song jao-na-thee ma truad sop noi khrap.",
    english: "The power is out at our Nimman office. Customer CA 02003884192. Please send a technician to inspect."
  },
  {
    category: "Cleaning Staff / สั่งงานแม่บ้าน",
    icon: "🧹",
    badge: "Cleaning / แม่บ้าน",
    thai: "พี่น้อยครับ สัปดาห์นี้รบกวนช่วยเน้นเช็ดกระจกและล้างห้องน้ำชั้น 2 เพิ่มเติมด้วยนะครับ",
    phonetic: "P'Noi khrap, sap-daah nee rop kuan chuay nen ched kra-jok lae laang hong nam chan song phoem-toem duay na khrap.",
    english: "P'Noi, this week could you please focus on wiping the glass windows and deep cleaning the 2nd floor restroom?"
  }
];

function speakThaiPhrase(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'th-TH';
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  } else {
    alert("Speech synthesis is not supported in this browser.");
  }
}

function copyPhraseToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification("Copied to Clipboard!", "Thai phrase copied ready to paste in Line or SMS.");
  });
}

function toggleKiboChecklistItem(type, id) {
  const list = type === 'morning' ? kiboChecklistState.morning : kiboChecklistState.weekly;
  const item = list.find(it => it.id === id);
  if (item) {
    item.done = !item.done;
    localStorage.setItem('cm_kibo_checklist', JSON.stringify(kiboChecklistState));
    renderKiboTutorial();
  }
}

function renderKiboTutorial() {
  const morningContainer = document.getElementById('kiboMorningChecklist');
  const weeklyContainer = document.getElementById('kiboWeeklyChecklist');
  const progressBadge = document.getElementById('kiboChecklistProgress');

  const totalItems = kiboChecklistState.morning.length + kiboChecklistState.weekly.length;
  const doneItems = kiboChecklistState.morning.filter(it => it.done).length + kiboChecklistState.weekly.filter(it => it.done).length;
  const pct = Math.round((doneItems / totalItems) * 100);

  if (progressBadge) {
    progressBadge.textContent = `${pct}% Complete (${doneItems}/${totalItems})`;
    progressBadge.className = pct === 100 
      ? 'text-xs font-bold font-mono text-white bg-emerald-600 px-2.5 py-0.5 rounded-full shadow-xs'
      : 'text-xs font-bold font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded';
  }

  if (morningContainer) {
    morningContainer.innerHTML = kiboChecklistState.morning.map(it => `
      <label class="flex items-start space-x-2.5 p-2 rounded-lg hover:bg-white dark:hover:bg-neutral-800 cursor-pointer transition border ${it.done ? 'border-emerald-200 dark:border-emerald-900 bg-emerald-50/40 dark:bg-emerald-950/20' : 'border-gray-200/60 dark:border-neutral-700 bg-white/70 dark:bg-neutral-800/60'}">
        <input type="checkbox" ${it.done ? 'checked' : ''} onchange="toggleKiboChecklistItem('morning', '${it.id}')" class="mt-0.5 rounded text-amber-600 focus:ring-amber-500">
        <div class="flex-1">
          <div class="font-medium ${it.done ? 'line-through text-gray-400 dark:text-neutral-500' : 'text-gray-900 dark:text-white'}">${it.textEn}</div>
          <div class="text-[10px] text-gray-500 dark:text-neutral-400 mt-0.5">${it.textTh}</div>
        </div>
      </label>
    `).join('');
  }

  if (weeklyContainer) {
    weeklyContainer.innerHTML = kiboChecklistState.weekly.map(it => `
      <label class="flex items-start space-x-2.5 p-2 rounded-lg hover:bg-white dark:hover:bg-neutral-800 cursor-pointer transition border ${it.done ? 'border-emerald-200 dark:border-emerald-900 bg-emerald-50/40 dark:bg-emerald-950/20' : 'border-gray-200/60 dark:border-neutral-700 bg-white/70 dark:bg-neutral-800/60'}">
        <input type="checkbox" ${it.done ? 'checked' : ''} onchange="toggleKiboChecklistItem('weekly', '${it.id}')" class="mt-0.5 rounded text-purple-600 focus:ring-purple-500">
        <div class="flex-1">
          <div class="font-medium ${it.done ? 'line-through text-gray-400 dark:text-neutral-500' : 'text-gray-900 dark:text-white'}">${it.textEn}</div>
          <div class="text-[10px] text-gray-500 dark:text-neutral-400 mt-0.5">${it.textTh}</div>
        </div>
      </label>
    `).join('');
  }

  // Render Thai Phrases
  const phrasesContainer = document.getElementById('kiboThaiPhrasesList');
  if (phrasesContainer) {
    phrasesContainer.innerHTML = kiboThaiPhrases.map(p => `
      <div class="p-3.5 bg-gray-50 dark:bg-neutral-900/60 rounded-xl border border-gray-200/80 dark:border-neutral-700 space-y-2 relative group hover:border-purple-300 dark:hover:border-purple-700 transition">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/60 px-2 py-0.5 rounded">
            ${p.icon} ${p.badge}
          </span>
          <div class="flex items-center space-x-1.5">
            <button onclick="speakThaiPhrase('${p.thai.replace(/'/g, "\\'")}')" class="p-1 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900 transition flex items-center space-x-1 text-[11px] font-semibold px-2" title="Listen / ฟังเสียงพูด">
              <span>🔊</span>
              <span>Listen</span>
            </button>
            <button onclick="copyPhraseToClipboard('${p.thai.replace(/'/g, "\\'")}')" class="p-1 rounded-lg bg-gray-200/70 dark:bg-neutral-700 text-gray-700 dark:text-neutral-300 hover:bg-gray-300 transition text-[11px] px-2" title="Copy Thai text">
              📋 Copy
            </button>
          </div>
        </div>

        <div class="text-sm font-bold text-gray-900 dark:text-white tracking-wide">
          "${p.thai}"
        </div>

        <div class="text-[11px] text-purple-800/80 dark:text-purple-300 font-mono italic">
          🗣️ ${p.phonetic}
        </div>

        <div class="text-[11px] text-gray-600 dark:text-neutral-400 pt-1 border-t border-gray-200/60 dark:border-neutral-700">
          🇬🇧 ${p.english}
        </div>
      </div>
    `).join('');
  }
}

// --- 25. KIBO'S INTERACTIVE 6-STEP WALKTHROUGH MODAL ---
let tutorialCurrentStep = 0;

const tutorialSteps = [
  {
    step: 1,
    titleEn: "Welcome Kibo! Your Mission as Office Manager",
    titleTh: "ยินดีต้อนรับ Kibo สู่บทบาท Office Manager",
    icon: "👑",
    badge: "Introduction / แนะนำตัว",
    targetView: "tutorial",
    targetViewBtnText: "Explore Handbook / ดูคู่มือฉบับเต็ม",
    contentHtml: `
      <div class="space-y-3.5">
        <p class="text-xs leading-relaxed text-gray-600 dark:text-neutral-300">
          Welcome to the Chiang Mai Office Hub! As our <strong>Office Manager</strong>, you are the backbone of our workplace operations in Chiang Mai. You ensure everything runs like clockwork for the team.
        </p>
        <div class="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl space-y-1.5 text-xs">
          <div class="font-bold text-amber-900 dark:text-amber-200 flex items-center space-x-1.5">
            <span>👥 Who You Support:</span>
          </div>
          <div class="text-[11px] text-amber-800 dark:text-amber-300">
            <strong>Pierre</strong> (Executive/Legal), <strong>Jérémy</strong> (Tech/Network), <strong>Matthieu</strong> (Team GMB), <strong>Marvin</strong> (Design/Setup), <strong>Alexandre</strong> (Team SEO), and <strong>Mailys</strong> (Team Ad).
          </div>
        </div>
        <div class="p-3 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl space-y-1 text-xs">
          <div class="font-bold text-gray-900 dark:text-white">🏢 The 7 Official Office Rooms in Chiang Mai:</div>
          <div class="text-[11px] text-gray-600 dark:text-neutral-400">
            🌿 Exterieur • 💼 Private office • 🖥️ Common Office • ☕ Kitchen • 🚿 Bathroom • 🌇 Rooftop • 🎯 Common Space/Playground.
          </div>
        </div>
      </div>
    `
  },
  {
    step: 2,
    titleEn: "Kanban Board & 1-Click Handworker Quick Dial",
    titleTh: "บอร์ดงานคัมบัง & โทรหาช่างใน 1 คลิก",
    icon: "📋",
    badge: "Tasks & Phone / งานและเบอร์โทร",
    targetView: "kanban",
    targetViewBtnText: "👉 Try Kanban Board / ไปที่บอร์ดคัมบัง",
    contentHtml: `
      <div class="space-y-3.5">
        <p class="text-xs leading-relaxed text-gray-600 dark:text-neutral-300">
          Track all office tasks by moving cards across <strong>To Do</strong>, <strong>In Progress</strong>, and <strong>Done</strong>. Filter cards instantly by team or team member.
        </p>
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl space-y-2 text-xs">
          <div class="font-bold text-emerald-900 dark:text-emerald-200 flex items-center space-x-1.5">
            <span>📞 1-Click Phone Quick Dial:</span>
          </div>
          <p class="text-[11px] text-emerald-800 dark:text-emerald-300">
            Whenever a task is linked to a handworker or utility, a green phone button appears right on the card. Click it to call instantly!
          </p>
          <div class="grid grid-cols-3 gap-1.5 text-[10px] text-center pt-1">
            <div class="p-1 bg-white dark:bg-neutral-800 rounded border border-emerald-200 font-bold">📶 AIS (1175)</div>
            <div class="p-1 bg-white dark:bg-neutral-800 rounded border border-emerald-200 font-bold">🔴 True (1242)</div>
            <div class="p-1 bg-white dark:bg-neutral-800 rounded border border-emerald-200 font-bold">🏢 Agent (081-882-9900)</div>
          </div>
        </div>
      </div>
    `
  },
  {
    step: 3,
    titleEn: "Supplies Ordering, Dual Pricing & Courier Tracking",
    titleTh: "การสั่งของใช้ คำนวณส่วนลด & ติดตามพัสดุสด",
    icon: "📦",
    badge: "Supplies & Parcels / พัสดุและของใช้",
    targetView: "supplies",
    targetViewBtnText: "👉 Try Supplies View / ไปที่หน้าของใช้",
    contentHtml: `
      <div class="space-y-3.5">
        <p class="text-xs leading-relaxed text-gray-600 dark:text-neutral-300">
          Easily reorder coffee, paper towels, snacks, and tech accessories for any room in the office.
        </p>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="p-2.5 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 rounded-lg space-y-1">
            <div class="font-bold text-orange-900 dark:text-orange-200">💰 Dual Pricing (฿)</div>
            <div class="text-[11px] text-orange-800 dark:text-orange-300">Enter Regular Price & Discount Price. The app automatically calculates total money saved for the company!</div>
          </div>
          <div class="p-2.5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 rounded-lg space-y-1">
            <div class="font-bold text-blue-900 dark:text-blue-200">🚚 Live Tracking Portal</div>
            <div class="text-[11px] text-blue-800 dark:text-blue-300">Supports Flash Express, Kerry (KEX), Thai Post, Shopee Xpress, and Grab with 1-click live online tracking.</div>
          </div>
        </div>
        <p class="text-[11px] text-gray-500 bg-gray-50 dark:bg-neutral-900 p-2 rounded border border-gray-200 dark:border-neutral-700">
          📦 When a package arrives at the office, click <strong>"Mark Received & Stocked"</strong> to update stock in 1 click!
        </p>
      </div>
    `
  },
  {
    step: 4,
    titleEn: "Monthly Recurring Bills Cadence in Thailand",
    titleTh: "กำหนดการชำระบิลรายเดือนในไทย",
    icon: "⚡",
    badge: "Overhead Bills / บิลสาธารณูปโภค",
    targetView: "recurring_bills",
    targetViewBtnText: "👉 Try Monthly Bills / ไปที่หน้าบิลรายเดือน",
    contentHtml: `
      <div class="space-y-3.5">
        <p class="text-xs leading-relaxed text-gray-600 dark:text-neutral-300">
          Never miss an office utility bill deadline. The schedule is structured as follows:
        </p>
        <div class="space-y-1.5 text-[11px]">
          <div class="flex items-center justify-between p-2 bg-gray-50 dark:bg-neutral-900 rounded border border-gray-200 dark:border-neutral-700">
            <span>🏢 <strong>1st</strong>: Office Rent (Loyer Nimman)</span>
            <span class="font-mono text-gray-500">Bangkok Bank (BBL)</span>
          </div>
          <div class="flex items-center justify-between p-2 bg-gray-50 dark:bg-neutral-900 rounded border border-gray-200 dark:border-neutral-700">
            <span>⚡ <strong>10th</strong>: PEA Electricity (การไฟฟ้า)</span>
            <span class="font-mono text-gray-500">Scan QR via PEA Smart Plus App</span>
          </div>
          <div class="flex items-center justify-between p-2 bg-gray-50 dark:bg-neutral-900 rounded border border-gray-200 dark:border-neutral-700">
            <span>💧 <strong>15th</strong>: MWA Water (การประปา)</span>
            <span class="font-mono text-gray-500">Mobile Banking (SCB / K PLUS)</span>
          </div>
          <div class="flex items-center justify-between p-2 bg-gray-50 dark:bg-neutral-900 rounded border border-gray-200 dark:border-neutral-700">
            <span>📶 <strong>18th & 20th</strong>: AIS Fibre & True 5G SIM</span>
            <span class="font-mono text-gray-500">Corporate QR / e-Tax invoice</span>
          </div>
          <div class="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-950/30 rounded border border-purple-200 dark:border-purple-800">
            <span>🧹 <strong>Every Friday 17:00</strong>: P'Noi Cleaning</span>
            <span class="font-mono text-purple-700 dark:text-purple-300">PromptPay 082-190-7765</span>
          </div>
        </div>
      </div>
    `
  },
  {
    step: 5,
    titleEn: "IT Hardware Inventory & Warranty Tracking",
    titleTh: "ทะเบียนอุปกรณ์ IT และติดตามประกัน AppleCare+",
    icon: "💻",
    badge: "Hardware & AppleCare / อุปกรณ์ไอที",
    targetView: "it_inventory",
    targetViewBtnText: "👉 Try IT Inventory / ไปที่หน้าทะเบียนไอที",
    contentHtml: `
      <div class="space-y-3.5">
        <p class="text-xs leading-relaxed text-gray-600 dark:text-neutral-300">
          Maintain full visibility on all company computers, 4K monitors, and mechanical keyboards assigned to team members.
        </p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl space-y-2 text-xs">
          <div class="font-bold text-blue-900 dark:text-blue-200 flex items-center space-x-1.5">
            <span>🛡️ AppleCare & Hardware Warranties:</span>
          </div>
          <p class="text-[11px] text-blue-800 dark:text-blue-300 leading-relaxed">
            The app automatically calculates warranty expiration dates and displays real-time countdown alerts (<span class="font-bold text-emerald-600">Active</span>, <span class="font-bold text-amber-600">Expiring in X days</span>, or <span class="font-bold text-red-600">Expired</span>) so repairs can be sent to Apple Service (iStudio / Central Airport) on time.
          </p>
        </div>
      </div>
    `
  },
  {
    step: 6,
    titleEn: "Appointments & Google/Apple Calendar Sync",
    titleTh: "การนัดหมาย & ซิงค์ปฏิทิน Google/Apple",
    icon: "📅",
    badge: "Calendar & RDV / ปฏิทินนัดหมาย",
    targetView: "calendar",
    targetViewBtnText: "👉 Try Calendar / ไปที่หน้าปฏิทิน",
    contentHtml: `
      <div class="space-y-3.5">
        <p class="text-xs leading-relaxed text-gray-600 dark:text-neutral-300">
          Book meetings with the AIS technician, lease discussions with Khun Somchai (Landlord), or operations syncs with Pierre and the team.
        </p>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="p-2.5 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 rounded-lg space-y-1">
            <div class="font-bold text-purple-900 dark:text-purple-200">🍎 Apple Calendar (.ICS)</div>
            <div class="text-[11px] text-purple-800 dark:text-purple-300">1-click direct download to import event into Mac or iPhone Calendar!</div>
          </div>
          <div class="p-2.5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 rounded-lg space-y-1">
            <div class="font-bold text-blue-900 dark:text-blue-200">🌐 Google Calendar</div>
            <div class="text-[11px] text-blue-800 dark:text-blue-300">1-click direct link to open Google Calendar with pre-filled title, room and time.</div>
          </div>
        </div>
        <div class="text-center pt-2">
          <button onclick="closeKiboTutorialModal(); switchView('tutorial');" class="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-md hover:scale-105 transition">
            🎉 You're Ready, Kibo! Open Full Handbook
          </button>
        </div>
      </div>
    `
  }
];

function openKiboTutorialModal(step = 0) {
  tutorialCurrentStep = step;
  document.getElementById('kiboTutorialModal')?.classList.remove('hidden');
  renderTutorialStep(tutorialCurrentStep);
  lucide.createIcons();
}

function closeKiboTutorialModal() {
  document.getElementById('kiboTutorialModal')?.classList.add('hidden');
}

function nextTutorialStep() {
  if (tutorialCurrentStep < tutorialSteps.length - 1) {
    tutorialCurrentStep++;
    renderTutorialStep(tutorialCurrentStep);
  } else {
    closeKiboTutorialModal();
    switchView('tutorial');
  }
}

function prevTutorialStep() {
  if (tutorialCurrentStep > 0) {
    tutorialCurrentStep--;
    renderTutorialStep(tutorialCurrentStep);
  }
}

function jumpFromTutorialToView(viewName) {
  closeKiboTutorialModal();
  switchView(viewName);
}

function renderTutorialStep(stepIndex) {
  const step = tutorialSteps[stepIndex];
  if (!step) return;

  document.getElementById('tutorialStepNumber').textContent = (stepIndex + 1).toString();
  const progressBar = document.getElementById('tutorialProgressBar');
  if (progressBar) {
    const pct = ((stepIndex + 1) / tutorialSteps.length) * 100;
    progressBar.style.width = `${pct}%`;
  }

  // Dots
  const dotsContainer = document.getElementById('tutorialStepDots');
  if (dotsContainer) {
    dotsContainer.innerHTML = tutorialSteps.map((s, idx) => `
      <button onclick="openKiboTutorialModal(${idx})" class="w-2.5 h-2.5 rounded-full transition-all ${idx === stepIndex ? 'bg-amber-500 w-5' : 'bg-gray-300 dark:bg-neutral-600'}"></button>
    `).join('');
  }

  // Content
  const contentContainer = document.getElementById('tutorialModalContent');
  if (contentContainer) {
    contentContainer.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-2xl">${step.icon}</span>
            <div>
              <h4 class="text-base font-extrabold text-gray-900 dark:text-white">${step.titleEn}</h4>
              <div class="text-[11px] text-amber-600 dark:text-amber-400 font-medium">${step.titleTh}</div>
            </div>
          </div>
          <span class="text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded-full uppercase">
            ${step.badge}
          </span>
        </div>

        <div class="pt-2">
          ${step.contentHtml}
        </div>

        ${step.targetView ? `
          <div class="pt-2 flex justify-end">
            <button onclick="jumpFromTutorialToView('${step.targetView}')" class="text-xs bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-800 dark:text-neutral-200 font-semibold px-3 py-1.5 rounded-lg border border-gray-300 dark:border-neutral-600 flex items-center space-x-1.5 transition">
              <span>${step.targetViewBtnText}</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  // Buttons text
  const nextBtn = document.getElementById('tutorialNextBtn');
  if (nextBtn) {
    if (stepIndex === tutorialSteps.length - 1) {
      nextBtn.innerHTML = `<span>Finish / เสร็จสิ้น 🎉</span>`;
    } else {
      nextBtn.innerHTML = `<span>Next / ถัดไป</span><i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>`;
    }
  }

  const prevBtn = document.getElementById('tutorialPrevBtn');
  if (prevBtn) {
    if (stepIndex === 0) {
      prevBtn.classList.add('invisible');
    } else {
      prevBtn.classList.remove('invisible');
    }
  }

  lucide.createIcons();
}

// --- CALCULATOR WIDGET ---
let calcExpression = '';
let calcNewNumber = true;

function toggleCalcWidget() {
  const w = document.getElementById('calcWidget');
  if (w) w.classList.toggle('hidden');
}

function calcInput(val) {
  const display = document.getElementById('calcDisplay');
  if ('0123456789.'.includes(val)) {
    if (calcNewNumber) { calcExpression += val; calcNewNumber = false; }
    else { calcExpression += val; }
  } else {
    calcExpression += ' ' + val + ' ';
    calcNewNumber = true;
  }
  display.value = calcExpression.trim();
}

function calcResult() {
  const display = document.getElementById('calcDisplay');
  try {
    const result = Function('"use strict"; return (' + calcExpression + ')')();
    display.value = parseFloat(result.toFixed(8));
    calcExpression = String(display.value);
    calcNewNumber = true;
  } catch (e) {
    display.value = 'Error';
    calcExpression = '';
    calcNewNumber = true;
  }
}

function clearCalc() {
  calcExpression = '';
  calcNewNumber = true;
  const display = document.getElementById('calcDisplay');
  if (display) display.value = '0';
}

function convertEurThb() {
  const input = document.getElementById('calcEurInput');
  const result = document.getElementById('calcThbResult');
  const rateEl = document.getElementById('eurThbRate');
  if (!input || !result || !rateEl) return;
  const eur = parseFloat(input.value);
  const rateText = rateEl.textContent;
  const rate = parseFloat(rateText.replace('EUR/THB: ₿', '').replace('฿', ''));
  if (!isNaN(eur) && !isNaN(rate) && rate > 0) {
    result.textContent = '฿ ' + (eur * rate).toLocaleString('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  } else {
    result.textContent = '฿ --';
  }
}

document.addEventListener('click', function(e) {
  const w = document.getElementById('calcWidget');
  const btn = document.getElementById('calcToggleBtn');
  if (w && !w.contains(e.target) && !btn.contains(e.target)) {
    w.classList.add('hidden');
  }
});
