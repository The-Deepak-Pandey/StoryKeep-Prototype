// StoryKeep — Supporter Screens (Module 3)
const SUPPORTER_SCREENS = {
'supporter-home': {id:'3.1',title:'Supporter Home Dashboard',html:`
<div class="screen-body">
<div class="wire-heading">Good Morning, Rajesh 👋</div>
<div class="nudge-card"><div style="font-size:11px;font-weight:600;color:#e65100">⚠️ No story recorded in 3 days</div><div class="wire-text" style="font-size:10px;margin:4px 0 0">Send a prompt to encourage Dadaji</div><div class="wire-btn small" style="margin-top:6px" onclick="nav('supporter-send-prompt')">Send a Prompt →</div></div>
<div class="wire-card"><div class="wire-subheading" style="margin-top:0">👴 Dadaji's Status <span class="wire-tag uc07">UC-07</span></div><div style="display:flex;justify-content:space-between;font-size:10px;color:#555"><span>Last active: 2h ago</span><span>❤️ 72 BPM</span></div><div style="display:flex;justify-content:space-between;font-size:10px;color:#555;margin-top:4px"><span>🚶 3,200 / 5,000 steps</span><span>📖 2 unheard<span class="wire-badge">2</span></span></div></div>
<div class="wire-subheading">Quick Actions</div>
<div style="display:flex;gap:6px"><div class="wire-btn small" style="flex:1;text-align:center;font-size:10px" onclick="nav('supporter-send-prompt')">📨 Send Prompt</div><div class="wire-btn small" style="flex:1;text-align:center;font-size:10px">📷 Upload Photo</div><div class="wire-btn small" style="flex:1;text-align:center;font-size:10px" onclick="nav('supporter-record-reaction')">🎤 React</div></div>
<div class="wire-subheading">Activity Feed</div>
<div class="wire-feed-item"><div class="feed-dot new"></div><div class="feed-text">📖 New story: "My first bicycle ride"</div><div class="feed-time">2h</div></div>
<div class="wire-feed-item"><div class="feed-dot new"></div><div class="feed-text">⚠️ Health alert: Heart rate 115 BPM</div><div class="feed-time">5h</div></div>
<div class="wire-feed-item"><div class="feed-dot"></div><div class="feed-text">🎧 Dadaji listened to your reaction</div><div class="feed-time">1d</div></div>
<div class="wire-feed-item"><div class="feed-dot"></div><div class="feed-text">📷 Photo memory response received</div><div class="feed-time">2d</div></div>
</div>`,bottomNav:'supporter',activeNav:'home'},

'supporter-send-prompt': {id:'3.2.1',title:'Send New Prompt',back:'supporter-home',navTitle:'📨 New Prompt',html:`
<div class="screen-body">
<div class="wire-subheading">Write your prompt <span class="wire-tag">F2</span></div>
<textarea class="wire-input filled" style="min-height:50px;resize:none">"What was your favourite meal that Amma used to cook?"</textarea>
<div class="wire-subheading" style="font-size:10px">Choose album/theme</div>
<select class="wire-input"><option>Select album...</option><option>Childhood</option><option>Recipes</option></select>
<div class="wire-subheading" style="font-size:10px">Attach photo (optional)</div>
<div class="wire-btn small">📷 Add Photo</div>
<hr class="wire-divider">
<div style="display:flex;gap:6px"><div class="wire-btn primary" style="flex:1" onclick="nav('supporter-prompt-sent')">📤 Send Now</div><div class="wire-btn" style="flex:1">📅 Schedule</div></div>
<div class="wire-text" style="font-size:9px;text-align:center;margin-top:6px;color:#999;cursor:pointer" onclick="nav('supporter-templates')">Or choose from template library →</div>
</div>`},

'supporter-prompt-sent': {id:'3.2.1c',title:'Prompt Sent ✓',back:'supporter-send-prompt',html:`
<div class="screen-body" style="text-align:center;padding-top:50px">
<div class="wire-success"><div class="success-icon">✓</div><div class="wire-heading" style="font-size:14px">Prompt Sent!</div><div class="wire-text" style="text-align:center">"Prompt sent to Dadaji"</div></div>
<div style="height:20px"></div>
<div class="wire-btn primary" onclick="nav('supporter-send-prompt')">← Back to Prompts</div>
<div class="wire-btn" onclick="nav('supporter-home')">🏠 Go Home</div>
</div>`},

'supporter-templates': {id:'3.2.2',title:'Prompt Templates',back:'supporter-send-prompt',navTitle:'📚 Template Library',html:`
<div class="screen-body">
<div class="wire-text">Choose a category:</div>
<div class="wire-list-item"><div class="icon-placeholder">🧒</div><div class="item-text"><div class="item-title">Childhood & Early Life</div><div class="item-sub">12 prompts</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder">💼</div><div class="item-text"><div class="item-title">Career & Work</div><div class="item-sub">8 prompts</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder">👨‍👩‍👧</div><div class="item-text"><div class="item-title">Family Traditions</div><div class="item-sub">10 prompts</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder">🍳</div><div class="item-text"><div class="item-title">Recipes & Food</div><div class="item-sub">9 prompts</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder">✈️</div><div class="item-text"><div class="item-title">Travel & Adventure</div><div class="item-sub">7 prompts</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder">💡</div><div class="item-text"><div class="item-title">Values & Life Advice</div><div class="item-sub">8 prompts</div></div><div class="chevron">→</div></div>
</div>`},

'supporter-prompt-history': {id:'3.2.3',title:'Prompt History',back:'supporter-home',navTitle:'📋 Prompt History',html:`
<div class="screen-body">
<div class="wire-list-item"><div style="flex-shrink:0"><div class="status-dot green"></div></div><div class="item-text"><div class="item-title">"Tell me about your first bicycle ride"</div><div class="item-sub">✅ Answered · 2:34 min · Today</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div style="flex-shrink:0"><div class="status-dot yellow"></div></div><div class="item-text"><div class="item-title">"What was your wedding day like?"</div><div class="item-sub">⏳ Waiting · Sent 2 days ago</div></div><div class="chevron">🔄</div></div>
<div class="wire-list-item" style="opacity:0.6"><div style="flex-shrink:0"><div class="status-dot grey"></div></div><div class="item-text"><div class="item-title">"Favourite childhood game?"</div><div class="item-sub">⌛ Expired · 7 days ago</div></div><div class="chevron">🔄</div></div>
<div class="wire-list-item"><div style="flex-shrink:0"><div class="status-dot green"></div></div><div class="item-text"><div class="item-title">"How did you and Amma meet?"</div><div class="item-sub">✅ Answered · 5:12 min · 2 weeks ago</div></div><div class="chevron">→</div></div>
</div>`},

'supporter-archive': {id:'3.3.1',title:'All Stories View',back:'supporter-home',navTitle:'📖 Memory Archive',html:`
<div class="screen-body">
<input class="wire-input" placeholder="🔍 Search memories..." style="font-size:9px;padding:6px 8px">
<div style="display:flex;gap:6px;margin-bottom:6px"><div class="wire-btn small" style="flex:1;text-align:center;background:#ddd">List View</div><div class="wire-btn small" style="flex:1;text-align:center" onclick="nav('supporter-albums')">📁 Albums</div></div>
<div class="wire-list-item" onclick="nav('supporter-story-detail')"><div class="icon-placeholder" style="background:#c8e6c9">🎙️</div><div class="item-text"><div class="item-title">"My first bicycle ride"</div><div class="item-sub">📨 Prompt response · 2:34 · Today</div><div style="font-size:9px;color:#888;margin-top:2px"><i>AI: A nostalgic recount of...</i></div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder">🎙️</div><div class="item-text"><div class="item-title">"The day I retired"</div><div class="item-sub">🎙️ Personal story · 4:12 · Yesterday</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder" style="background:#e3f2fd">📷</div><div class="item-text"><div class="item-title">"Wedding day photo story"</div><div class="item-sub">📷 Photo story · 5:45 · 3 days ago</div></div><div class="chevron">→</div></div>
</div>`,bottomNav:'supporter',activeNav:'archive'},

'supporter-albums': {id:'3.3.2',title:'Themed Albums',back:'supporter-archive',navTitle:'📁 Albums',html:`
<div class="screen-body">
<div class="wire-btn small" style="display:block;text-align:center;margin-bottom:8px">+ Create New Album <span class="wire-tag">F6</span></div>
<div class="wire-list-item"><div class="icon-placeholder" style="background:#e8eaf6">📁</div><div class="item-text"><div class="item-title">Childhood Memories</div><div class="item-sub">8 stories · ▶ Play all</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder" style="background:#fce4ec">📁</div><div class="item-text"><div class="item-title">Family Recipes</div><div class="item-sub">5 stories · ▶ Play all</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder" style="background:#e8f5e9">📁</div><div class="item-text"><div class="item-title">Travel Adventures</div><div class="item-sub">3 stories · ▶ Play all</div></div><div class="chevron">→</div></div>
</div>`},

'supporter-story-detail': {id:'3.3.3',title:'Story Detail + AI Summary',back:'supporter-archive',navTitle:'Story Detail',html:`
<div class="screen-body">
<div class="wire-heading" style="font-size:14px">"My first bicycle ride"</div>
<div class="wire-text">📨 Prompt response · 2:34 · Today</div>
<div style="background:#f0f0f0;border-radius:8px;padding:8px;margin:6px 0"><div style="display:flex;align-items:center;gap:8px"><span style="font-size:16px;cursor:pointer">▶</span><div style="flex:1;background:#ddd;height:4px;border-radius:2px"><div style="background:#888;height:100%;width:30%;border-radius:2px"></div></div><span style="font-size:9px;color:#999">1:02/2:34</span></div></div>
<div class="wire-subheading">🤖 AI Summary <span class="wire-tag">F9</span></div>
<div class="wire-card"><div class="wire-text" style="font-style:italic;font-size:10px;margin:0">"Dadaji recalls learning to ride a bicycle at age 8 in their village. His father held the seat while he pedalled through dusty lanes."</div></div>
<div class="wire-subheading" style="font-size:10px">Auto Tags</div>
<div style="display:flex;gap:4px;flex-wrap:wrap"><span class="wire-tag">childhood</span><span class="wire-tag">1960s</span><span class="wire-tag">village</span><span class="wire-tag">father</span></div>
<div style="display:flex;gap:6px;margin-top:10px"><div class="wire-btn small" style="flex:1;text-align:center">📁 File to Album</div><div class="wire-btn small" style="flex:1;text-align:center">💾 Download</div></div>
</div>`},

'supporter-listening-queue': {id:'3.4.1',title:'Story Listening Queue',back:'supporter-home',navTitle:'🎧 Listening Queue',html:`
<div class="screen-body">
<div class="wire-subheading">Unlistened <span class="wire-badge">2</span></div>
<div class="wire-list-item" style="background:#fafafa"><div class="icon-placeholder" style="background:#ffecb3">🔔</div><div class="item-text"><div class="item-title">"My first bicycle ride"</div><div class="item-sub">2:34 · Today · <b>NEW</b></div></div><div class="chevron">▶</div></div>
<div class="wire-list-item" style="background:#fafafa"><div class="icon-placeholder" style="background:#ffecb3">🔔</div><div class="item-text"><div class="item-title">"The day I retired"</div><div class="item-sub">4:12 · Yesterday · <b>NEW</b></div></div><div class="chevron">▶</div></div>
<div class="wire-subheading">Previously Listened</div>
<div class="wire-list-item"><div class="icon-placeholder">✓</div><div class="item-text"><div class="item-title">"The train journey to Delhi"</div><div class="item-sub">3:45 · 5 days ago</div></div><div class="chevron">▶</div></div>
</div>`,bottomNav:'supporter',activeNav:'react'},

'supporter-record-reaction': {id:'3.4.2',title:'Record Audio Reaction',back:'supporter-listening-queue',navTitle:'🎤 Record Reaction',html:`
<div class="screen-body">
<div class="wire-subheading">Reacting to:</div>
<div class="wire-card"><div class="wire-text" style="font-weight:600;color:#333;margin:0">"My first bicycle ride"</div><div class="wire-text" style="margin:2px 0 0">by Dadaji · 2:34</div></div>
<div class="elder-record-btn" style="width:80px;height:80px;font-size:24px">🎤</div>
<div class="wire-text" style="text-align:center;font-size:12px;font-weight:600">Tap to record your reaction</div>
<div class="waveform"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>
<div style="display:flex;gap:6px;margin-top:8px"><div class="wire-btn" style="flex:1">▶ Play Back</div><div class="wire-btn primary" style="flex:1">📤 Send to Dadaji</div></div>
</div>`},

'supporter-analytics': {id:'3.4.4',title:'Engagement Analytics',back:'supporter-home',navTitle:'📊 Analytics',html:`
<div class="screen-body">
<div class="wire-subheading">Stories Per Month</div>
<div class="wire-chart-placeholder">[ Bar chart: Jan–Apr stories ]</div>
<div class="wire-subheading">Prompts vs Answers</div>
<div style="display:flex;gap:8px;text-align:center"><div style="flex:1;background:#f0f0f0;padding:8px;border-radius:6px"><div style="font-size:18px;font-weight:700">12</div><div style="font-size:9px;color:#888">Sent</div></div><div style="flex:1;background:#f0f0f0;padding:8px;border-radius:6px"><div style="font-size:18px;font-weight:700">9</div><div style="font-size:9px;color:#888">Answered</div></div><div style="flex:1;background:#f0f0f0;padding:8px;border-radius:6px"><div style="font-size:18px;font-weight:700">75%</div><div style="font-size:9px;color:#888">Rate</div></div></div>
<div class="wire-subheading">Avg Response Time</div>
<div class="wire-card" style="text-align:center"><div style="font-size:16px;font-weight:700">~4 hours</div><div class="wire-text" style="margin:2px 0 0">from prompt sent to story recorded</div></div>
</div>`},

'supporter-health': {id:'3.5.1',title:'Real-Time Vitals Dashboard',back:'supporter-home',navTitle:'❤️ Health Dashboard',html:`
<div class="screen-body">
<div class="wire-text" style="font-size:9px;text-align:right">Last sync: 2 min ago</div>
<div style="display:flex;gap:6px;margin-bottom:4px"><div class="wire-card" style="flex:1;text-align:center;padding:8px"><div style="font-size:14px">❤️</div><div style="font-size:16px;font-weight:700">72</div><div style="font-size:9px;color:#4caf50">● Normal</div><div style="font-size:8px;color:#aaa">BPM</div></div><div class="wire-card" style="flex:1;text-align:center;padding:8px"><div style="font-size:14px">🫁</div><div style="font-size:16px;font-weight:700">97%</div><div style="font-size:9px;color:#4caf50">● Good</div><div style="font-size:8px;color:#aaa">SpO₂</div></div></div>
<div style="display:flex;gap:6px;margin-bottom:4px"><div class="wire-card" style="flex:1;text-align:center;padding:8px"><div style="font-size:14px">🚶</div><div style="font-size:16px;font-weight:700">3,200</div><div style="font-size:8px;color:#aaa">/ 5,000 steps</div><div style="background:#ddd;height:4px;border-radius:2px;margin-top:4px"><div style="background:#888;height:100%;width:64%;border-radius:2px"></div></div></div><div class="wire-card" style="flex:1;text-align:center;padding:8px"><div style="font-size:14px">⏱️</div><div style="font-size:16px;font-weight:700">22</div><div style="font-size:8px;color:#aaa">Active min</div></div></div>
<div class="wire-card" style="text-align:center;padding:6px"><div style="font-size:14px;font-weight:700">😴 7h 15m sleep last night</div></div>
<div class="wire-card" style="text-align:center;padding:6px"><div style="font-size:12px">🔥 Est. 180 kcal burned today</div></div>
<div class="wire-btn small" style="display:block;text-align:center" onclick="nav('supporter-health-alerts')">🔔 Alert Settings</div>
</div>`,bottomNav:'supporter',activeNav:'health'},

'supporter-health-alerts': {id:'3.5.5',title:'Alerts & Thresholds',back:'supporter-health',navTitle:'🔔 Health Alerts',html:`
<div class="screen-body">
<div class="wire-toggle" onclick="togSwitch(this)"><span>❤️ High HR (>110 BPM)</span><div class="toggle-switch on"><div class="knob"></div></div></div>
<div class="wire-toggle" onclick="togSwitch(this)"><span>❤️ Low HR (<50 BPM)</span><div class="toggle-switch on"><div class="knob"></div></div></div>
<div class="wire-toggle" onclick="togSwitch(this)"><span>🫁 Low SpO₂ (<90%)</span><div class="toggle-switch on"><div class="knob"></div></div></div>
<div class="wire-toggle" onclick="togSwitch(this)"><span>🪑 Inactivity (>2 hrs)</span><div class="toggle-switch on"><div class="knob"></div></div></div>
<div class="wire-toggle" onclick="togSwitch(this)"><span>🤸 Fall detection</span><div class="toggle-switch on"><div class="knob"></div></div></div>
<div class="wire-toggle" onclick="togSwitch(this)"><span>🔋 Band battery <20%</span><div class="toggle-switch on"><div class="knob"></div></div></div>
<hr class="wire-divider">
<div class="wire-text" style="font-size:9px">All alerts send push notifications to your device.</div>
</div>`},

'supporter-music': {id:'3.6.1',title:'Manage Playlists',back:'supporter-settings',navTitle:'🎵 Elder Playlists',html:`
<div class="screen-body">
<div class="wire-btn small" style="display:block;text-align:center;margin-bottom:8px">+ Create New Playlist</div>
<div class="wire-list-item"><div class="icon-placeholder" style="background:#e8eaf6">🎶</div><div class="item-text"><div class="item-title">Dadaji's Favourites</div><div class="item-sub">12 songs · ⭐ Default</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder" style="background:#fce4ec">🙏</div><div class="item-text"><div class="item-title">Morning Bhajans</div><div class="item-sub">8 songs</div></div><div class="chevron">→</div></div>
<hr class="wire-divider">
<div class="wire-text" style="font-size:9px">Add/remove songs · Drag to reorder · Set default</div>
</div>`},

'supporter-family': {id:'3.7.1',title:'Members Management',back:'supporter-settings',navTitle:'👤 Family Members',html:`
<div class="screen-body">
<div class="wire-list-item"><div class="icon-placeholder" style="background:#e8f5e9">👴</div><div class="item-text"><div class="item-title">Dadaji</div><div class="item-sub">Elder · Active 2h ago</div></div></div>
<div class="wire-list-item"><div class="icon-placeholder" style="background:#e3f2fd">👤</div><div class="item-text"><div class="item-title">Rajesh (You)</div><div class="item-sub">Supporter · Admin ⭐</div></div><div class="chevron">✏️</div></div>
<div class="wire-list-item"><div class="icon-placeholder" style="background:#f3e5f5">👤</div><div class="item-text"><div class="item-title">Priya</div><div class="item-sub">Supporter</div></div><div class="chevron">✏️</div></div>
<div class="wire-btn small" style="display:block;text-align:center;margin-top:8px">+ Invite Member (Code/Link)</div>
</div>`},

'supporter-settings': {id:'3.8.1',title:'Settings Menu',back:'supporter-home',navTitle:'⚙️ Settings & More',html:`
<div class="screen-body">
<div class="wire-subheading">Features</div>
<div class="wire-list-item" onclick="nav('supporter-music')"><div class="icon-placeholder">🎵</div><div class="item-text"><div class="item-title">Music Curation</div></div><div class="chevron">→</div></div>
<div class="wire-list-item" onclick="nav('supporter-family')"><div class="icon-placeholder">👨‍👩‍👧</div><div class="item-text"><div class="item-title">Family Group Management</div></div><div class="chevron">→</div></div>
<div class="wire-subheading" style="margin-top:12px">App Settings</div>
<div class="wire-list-item" onclick="nav('supporter-notifications')"><div class="icon-placeholder">🔔</div><div class="item-text"><div class="item-title">Notification Preferences</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder">👤</div><div class="item-text"><div class="item-title">Account Settings</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder">💾</div><div class="item-text"><div class="item-title">Archive Management</div></div><div class="chevron">→</div></div>
</div>`,bottomNav:'supporter',activeNav:'more'},

'supporter-notifications': {id:'3.8.2',title:'Notification Preferences',back:'supporter-settings',navTitle:'🔔 Notifications',html:`
<div class="screen-body">
<div class="wire-toggle" onclick="togSwitch(this)"><span>New story recorded</span><div class="toggle-switch on"><div class="knob"></div></div></div>
<div class="wire-toggle" onclick="togSwitch(this)"><span>Health alerts</span><div class="toggle-switch on"><div class="knob"></div></div></div>
<div class="wire-toggle" onclick="togSwitch(this)"><span>Engagement nudges</span><div class="toggle-switch on"><div class="knob"></div></div></div>
<hr class="wire-divider">
<div class="wire-subheading" style="font-size:10px">Quiet Hours</div>
<div style="display:flex;gap:8px"><div style="flex:1"><div class="wire-text" style="font-size:9px">From</div><input class="wire-input filled" style="text-align:center" value="10:00 PM"></div><div style="flex:1"><div class="wire-text" style="font-size:9px">To</div><input class="wire-input filled" style="text-align:center" value="7:00 AM"></div></div>
<div class="wire-btn primary">Save Preferences</div>
</div>`}
};
