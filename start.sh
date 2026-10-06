#!/bin/bash
# Chiang Mai Office Hub - Notion Style App Launcher
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
PORT=8089

echo "🏯 Starting Chiang Mai Office Hub at http://localhost:$PORT ..."
# Open browser
(sleep 1 && open "http://localhost:$PORT") &
# Start python HTTP server
cd "$DIR" && python3 -m http.server $PORT
