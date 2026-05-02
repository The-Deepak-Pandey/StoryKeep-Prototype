// StoryKeep — Core Engine + Elder Screens (Module 2)
const ELDER_SCREENS = {
'elder-home': {id:'2.1',title:'Elder Home Screen',html:`
<div class="screen-body">
<div class="wire-heading" style="font-size:20px;text-align:center">Good Morning! 🌞</div>
<div class="wire-text" style="text-align:center;font-size:12px">Friday, 18 April</div>
<div class="wire-prompt-card"><div style="display:flex;justify-content:space-between;align-items:center"><div class="wire-subheading" style="margin:0">📨 New Prompt!</div><span class="wire-tag">F2</span></div><div class="wire-text" style="font-size:13px;color:#333;margin:6px 0 4px">"Tell me about your first bicycle ride"</div><div class="wire-text" style="font-size:10px;color:#999">🔊 Auto read-aloud</div><div class="wire-btn large-elder" style="margin-top:8px" onclick="nav('elder-prompt-answer')">🎤 Answer This Prompt</div><div class="wire-btn small" style="margin-top:8px;width:100%;text-align:center" onclick="nav('elder-prompt-queue')">📋 View All Prompts (3)</div></div>
<div class="elder-tile" style="margin-top:10px" onclick="nav('elder-record')"><div class="tile-icon">🎙️</div><div class="tile-label">Record a Memory</div><div class="tile-sub">Quick action <span class="wire-tag">F1</span></div></div>
<div style="display:flex;gap:6px;margin-top:8px">
<div class="elder-tile" style="flex:1;padding:10px 4px" onclick="nav('elder-music-playlists')"><div class="tile-icon">🎵</div><div class="tile-label" style="font-size:11px">Music</div></div>
<div class="elder-tile" style="flex:1;padding:10px 4px" onclick="nav('elder-memories')"><div class="tile-icon">📖</div><div class="tile-label" style="font-size:11px">Memories</div></div>
<div class="elder-tile" style="flex:1;padding:10px 4px" onclick="nav('elder-health')"><div class="tile-icon">❤️</div><div class="tile-label" style="font-size:11px">Health</div></div>
<div class="elder-tile" style="flex:1;padding:10px 4px" onclick="nav('elder-games')"><div class="tile-icon">🎲</div><div class="tile-label" style="font-size:11px">Games</div></div>
</div>
<div class="wire-reaction-card" style="margin-top:10px"><div class="wire-subheading" style="font-size:12px;margin:0">💬 Family Reactions <span class="wire-tag">F8</span></div><div class="wire-text" style="margin:4px 0 0">Rajesh loved your story about the train ride! 🎧 Tap to listen.</div></div>
</div>`,bottomNav:'elder',activeNav:'home'},

'elder-prompt-answer': {id:'2.2.1',title:'Text Prompt → Audio Answer',back:'elder-home',navTitle:'Answer Prompt',html:`
<div class="screen-body">
<div class="wire-prompt-card" style="background:#e8e8e8"><div style="font-size:18px;font-weight:700;color:#333;line-height:1.3">"Tell me about your first bicycle ride"</div><div class="wire-text" style="margin-top:6px;font-size:10px">🔊 Read aloud automatically</div></div>
<div class="elder-record-btn" id="rec-btn" onclick="toggleRec(this)">🎤</div>
<div class="wire-text" style="text-align:center;font-size:14px;font-weight:600" id="rec-label">Tap to Record</div>
<div class="waveform" id="waveform" style="display:none"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>
<div style="display:flex;gap:8px;margin-top:10px"><div class="wire-btn" style="flex:1">🔄 Replay</div><div class="wire-btn primary" style="flex:1" onclick="nav('elder-prompt-sent')">📤 Send</div></div>
</div>`},

'elder-prompt-sent': {id:'2.2.1c',title:'Answer Sent ✓',back:'elder-home',html:`
<div class="screen-body" style="text-align:center;padding-top:40px">
<div class="wire-success"><div class="success-icon">✓</div><div class="wire-heading" style="font-size:16px">Story Sent!</div><div class="wire-text" style="text-align:center">🔊 "Your story has been shared with the family!"</div></div>
<div style="height:20px"></div>
<div class="wire-btn large-elder" onclick="nav('elder-home')">🏠 Back to Home</div>
</div>`},

'elder-prompt-queue': {id:'2.2.3',title:'Prompt Queue',back:'elder-home',navTitle:'My Prompts',html:`
<div class="screen-body">
<div class="wire-subheading">Prompt Queue</div>
<div class="wire-list-item" onclick="nav('elder-prompt-answer')"><div class="icon-placeholder" style="background:#ffe0b2;color:#e65100">📨</div><div class="item-text"><div class="item-title">"What was your wedding day like?"</div><div class="item-sub">⏳ Pending — from Priya</div></div><div class="chevron">→</div></div>
<div class="wire-list-item"><div class="icon-placeholder" style="background:#c8e6c9;color:#2e7d32">✓</div><div class="item-text"><div class="item-title">"Tell me about your first bicycle ride"</div><div class="item-sub">✅ Answered — 2:34 min</div></div></div>
<div class="wire-list-item" style="opacity:0.5"><div class="icon-placeholder" style="background:#eee;color:#999">⏰</div><div class="item-text"><div class="item-title">"Favourite childhood game?"</div><div class="item-sub">⌛ Expired</div></div></div>
<hr class="wire-divider">
<div class="wire-btn large-elder" onclick="nav('elder-prompt-answer')">🎤 Answer First Prompt</div>
</div>`},

'elder-record': {id:'2.3.1',title:'Quick Audio Story',back:'elder-home',navTitle:'Record a Memory',html:`
<div class="screen-body">
<div class="wire-btn" style="margin-bottom:14px;display:flex;align-items:center;justify-content:center;gap:8px" onclick="nav('elder-photo-story')"><span>📷</span> Choose a Photo Instead</div>
<div class="wire-text" style="text-align:center;font-size:14px;font-weight:600">What would you like to share today?</div>
<div class="elder-record-btn" style="width:120px;height:120px;font-size:36px;border-width:5px" id="rec-btn2" onclick="toggleRec(this)">🎤</div>
<div class="wire-text" style="text-align:center;font-size:16px;font-weight:700">Hold to Record</div>
<div class="waveform" id="waveform2" style="display:none"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>
<div style="display:flex;gap:8px;margin-top:6px"><div class="wire-btn" style="flex:1;font-size:14px">🔄 Retake</div><div class="wire-btn" style="flex:1;font-size:14px">▶️ Replay</div></div>
<div style="height:10px"></div>
<div class="wire-btn large-elder" onclick="nav('elder-save-dest')">✓ Save Story</div>
</div>`,bottomNav:'elder',activeNav:'record'},

'elder-photo-story': {id:'2.3.2',title:'Story Behind My Photo',back:'elder-record',navTitle:'Photo Story',html:`
<div class="screen-body">
<div class="wire-subheading">Choose a Photo <span class="wire-tag">F3</span></div>
<div style="display:flex;gap:6px;flex-wrap:wrap"><div class="wire-img-placeholder" style="width:85px;height:85px;margin:0;border-color:#999;font-size:9px">Photo 1</div><div class="wire-img-placeholder" style="width:85px;height:85px;margin:0;font-size:9px">Photo 2</div><div class="wire-img-placeholder" style="width:85px;height:85px;margin:0;font-size:9px">Photo 3</div></div>
<hr class="wire-divider">
<div class="wire-subheading">Record Your Story</div>
<div class="wire-img-placeholder" style="height:80px;border-color:#999">[ Selected photo displayed large ]</div>
<div class="elder-record-btn" style="width:70px;height:70px;font-size:22px">🎤</div>
<div class="wire-text" style="text-align:center">Record the story behind this photo</div>
<div class="wire-btn large-elder" onclick="nav('elder-save-dest')">✓ Save Photo Story</div>
</div>`},

'elder-save-dest': {id:'2.3.3',title:'Choose Save Destination',back:'elder-record',navTitle:'Save Story',html:`
<div class="screen-body">
<div class="wire-heading" style="font-size:16px;text-align:center">Where should we save this?</div>
<div class="wire-text" style="text-align:center">Choose one:</div>
<div class="elder-tile" style="text-align:left;display:flex;gap:12px;align-items:center"><div style="font-size:28px">🔒</div><div><div class="tile-label" style="font-size:14px">Private Vault</div><div class="tile-sub">Only you can see this</div></div></div>
<div class="elder-tile" style="text-align:left;display:flex;gap:12px;align-items:center;border-color:#999;background:#ddd" onclick="nav('elder-home')"><div style="font-size:28px">👨‍👩‍👧</div><div><div class="tile-label" style="font-size:14px">Family Archive</div><div class="tile-sub">Shared with family</div></div></div>
<div class="elder-tile" style="text-align:left;display:flex;gap:12px;align-items:center"><div style="font-size:28px">📝</div><div><div class="tile-label" style="font-size:14px">Save as Draft</div><div class="tile-sub">Finish later</div></div></div>
<div class="wire-btn" style="text-align:center" onclick="goBack()">← Go Back</div>
</div>`},

'elder-memories': {id:'2.4',title:'My Memories Library',back:'elder-home',navTitle:'My Memories',html:`
<div class="screen-body">
<div class="wire-subheading">📨 Prompt Responses</div>
<div class="wire-list-item"><div class="icon-placeholder" style="background:#c8e6c9">📨</div><div class="item-text"><div class="item-title">"My first bicycle ride"</div><div class="item-sub">2:34 · Answered today</div></div><div class="chevron">▶</div></div>
<hr class="wire-divider">
<div class="wire-subheading">🎙️ Personal Stories</div>
<div class="wire-list-item"><div class="icon-placeholder">🎙️</div><div class="item-text"><div class="item-title">"The day I retired"</div><div class="item-sub">4:12 · Yesterday</div></div><div class="chevron">▶</div></div>
<hr class="wire-divider">
<div class="wire-subheading">📷 Photo Stories</div>
<div style="display:flex;gap:6px"><div class="wire-img-placeholder" style="width:70px;height:70px;margin:0;font-size:9px">📷</div><div class="wire-img-placeholder" style="width:70px;height:70px;margin:0;font-size:9px">📷</div><div class="wire-img-placeholder" style="width:70px;height:70px;margin:0;font-size:9px">📷</div></div>
<hr class="wire-divider">
<div class="wire-subheading">🔒 Private Vault</div>
<div class="elder-tile" style="padding:10px;background:#f5f5f5"><div style="font-size:14px;font-weight:600">🔒 Locked — Tap to view</div><div class="tile-sub">3 private stories</div></div>
</div>`,bottomNav:'elder',activeNav:'memories'},

'elder-music-playlists': {id:'2.5-A',title:'Music — Playlist Tiles',back:'elder-home',navTitle:'🎵 My Music',html:`
<div class="screen-body">
<div class="elder-tile" style="background:#ddd;border-color:#999;padding:20px" onclick="nav('elder-music-playing')"><div class="tile-icon" style="font-size:36px">🎶</div><div class="tile-label" style="font-size:18px">Dadaji's Favourites</div><div class="tile-sub">12 songs</div></div>
<div class="elder-tile" style="padding:20px" onclick="nav('elder-music-playing')"><div class="tile-icon" style="font-size:36px">🙏</div><div class="tile-label" style="font-size:18px">Morning Bhajans</div><div class="tile-sub">8 songs</div></div>
<div class="elder-tile" style="padding:20px" onclick="nav('elder-music-playing')"><div class="tile-icon" style="font-size:36px">🎬</div><div class="tile-label" style="font-size:18px">Old Film Songs</div><div class="tile-sub">24 songs</div></div>
<div class="wire-text" style="text-align:center;font-size:10px;color:#9b59b6;margin-top:8px">🎤 "Play my favourites"</div>
</div>`},

'elder-music-playing': {id:'2.5-B',title:'Now Playing',back:'elder-music-playlists',navTitle:'Now Playing',html:`
<div class="screen-body" style="text-align:center">
<div class="wire-img-placeholder" style="height:140px;width:140px;margin:10px auto;border-radius:14px;border-color:#999">[ Album Art ]<br>🎵</div>
<div style="font-size:18px;font-weight:700;color:#333;margin-top:8px">Lag Jaa Gale</div>
<div class="wire-text" style="text-align:center;font-size:13px">Lata Mangeshkar</div>
<div style="background:#ddd;height:6px;border-radius:3px;margin:12px 0;position:relative"><div style="background:#999;height:100%;width:40%;border-radius:3px"></div></div>
<div style="display:flex;justify-content:space-between;font-size:10px;color:#999"><span>1:28</span><span>3:42</span></div>
<div class="wire-music-control"><div class="ctrl-btn">⏮</div><div class="ctrl-btn play" id="play-btn" onclick="this.textContent=this.textContent==='⏸'?'▶':'⏸'">▶</div><div class="ctrl-btn">⏭</div></div>
<div style="display:flex;align-items:center;gap:8px;margin-top:10px"><span style="font-size:16px">🔉</span><div style="flex:1;background:#ddd;height:8px;border-radius:4px"><div style="background:#999;height:100%;width:70%;border-radius:4px"></div></div><span style="font-size:16px">🔊</span></div>
</div>`},

'elder-health': {id:'2.6',title:'Health Snapshot',back:'elder-home',navTitle:'❤️ My Health',html:`
<div class="screen-body" style="text-align:center">
<div class="wire-progress-ring"><div class="ring-fill"></div><div><div style="font-size:20px;font-weight:700">3,200</div><div style="font-size:9px;color:#888">of 5,000</div></div></div>
<div class="wire-text" style="text-align:center;font-size:14px;font-weight:600">🚶 Steps Today</div>
<hr class="wire-divider">
<div style="display:flex;gap:10px;text-align:center"><div style="flex:1;background:#f5f5f5;border-radius:10px;padding:10px;border:1.5px solid #ddd"><div style="font-size:22px">❤️</div><div style="font-size:18px;font-weight:700">72</div><div style="font-size:10px;color:#888">BPM · Normal</div></div><div style="flex:1;background:#f5f5f5;border-radius:10px;padding:10px;border:1.5px solid #ddd"><div style="font-size:22px">🫁</div><div style="font-size:18px;font-weight:700">97%</div><div style="font-size:10px;color:#888">SpO₂ · Good</div></div></div>
<hr class="wire-divider">
<div class="wire-subheading" style="text-align:center">😴 Last Night's Sleep</div>
<div style="background:#f5f5f5;border-radius:10px;padding:10px;border:1.5px solid #ddd"><div style="font-size:16px;font-weight:700">7h 15m</div></div>
<div style="background:#f0f0f0;border-radius:10px;padding:12px;margin-top:8px;border:1.5px dashed #ccc"><div style="font-size:14px">🌟 "Great job walking today!"</div></div>
</div>`},

'elder-settings': {id:'2.7',title:'Elder Settings',back:'elder-home',navTitle:'⚙️ Settings',html:`
<div class="screen-body">
<div class="wire-subheading">Display <span class="wire-tag">F7</span></div>
<div class="wire-toggle"><span style="font-size:13px">Text Size: Extra Large</span><span style="font-size:12px;color:#999">Aa</span></div>
<div class="wire-toggle" onclick="togSwitch(this)"><span>High Contrast</span><div class="toggle-switch"><div class="knob"></div></div></div>
<div class="wire-toggle"><span>Brightness</span><span style="font-size:12px;color:#999">☀️ 80%</span></div>
<hr class="wire-divider">
<div class="wire-subheading">Audio <span class="wire-tag">F7</span></div>
<div class="wire-toggle" onclick="togSwitch(this)"><span>Audio confirmations</span><div class="toggle-switch on"><div class="knob"></div></div></div>
<div class="wire-toggle" onclick="togSwitch(this)"><span>Read prompts aloud</span><div class="toggle-switch on"><div class="knob"></div></div></div>
<hr class="wire-divider">
<div class="wire-subheading">Quick Home</div>
<div class="wire-btn large-elder" onclick="nav('elder-home')">🏠 Go Home</div>
<hr class="wire-divider">
<div class="wire-subheading">Emergency <span class="wire-tag uc07">UC-07</span></div>
<div class="wire-btn large-elder" style="background:#e0e0e0;border-color:#999">🆘 Call Emergency Contact</div>
<div class="wire-text" style="text-align:center;font-size:10px">Calls Rajesh (Supporter) immediately</div>
</div>`,bottomNav:'elder',activeNav:'settings'},

'elder-games': {id:'2.8',title:'Games Collection',back:'elder-home',navTitle:'🎲 Games',html:`
<div class="screen-body">
<div class="wire-subheading">Play a Game</div>
<div class="elder-tile" style="margin-top:4px;padding:12px;display:flex;align-items:center;text-align:left;gap:12px"><div class="tile-icon" style="margin:0;font-size:24px">🃏</div><div><div class="tile-label">Solitaire</div></div></div>
<div class="elder-tile" style="margin-top:4px;padding:12px;display:flex;align-items:center;text-align:left;gap:12px"><div class="tile-icon" style="margin:0;font-size:24px">🔢</div><div><div class="tile-label">Sudoku</div></div></div>
<div class="elder-tile" style="margin-top:4px;padding:12px;display:flex;align-items:center;text-align:left;gap:12px"><div class="tile-icon" style="margin:0;font-size:24px">⭕</div><div><div class="tile-label">Tic-Tac-Toe</div></div></div>
<div class="elder-tile" style="margin-top:4px;padding:12px;display:flex;align-items:center;text-align:left;gap:12px"><div class="tile-icon" style="margin:0;font-size:24px">🔠</div><div><div class="tile-label">Word Search</div></div></div>
<hr class="wire-divider">
<div class="wire-subheading">Weekly Stats</div>
<div style="background:#f0f0f0;border:2px solid #ccc;border-radius:12px;padding:12px;text-align:center"><div style="font-size:24px;font-weight:700;color:#0f5f57">12</div><div style="font-size:11px;color:#555;margin-bottom:8px">Games Won This Week</div><div style="font-size:10px;color:#888">🔥 3-day streak! Keep it up!</div></div>
</div>`}
};

// ==================== NAVIGATION ENGINE ====================
let currentRole = 'elder';
let currentScreen = 'elder-home';
let history = [];

function getAllScreens() {
  return {...ONBOARDING_SCREENS, ...ELDER_SCREENS, ...SUPPORTER_SCREENS};
}

function nav(screenId) {
  const screens = getAllScreens();
  const screen = screens[screenId];
  if (!screen) return;
  history.push(currentScreen);
  currentScreen = screenId;
  render(screenId);
}

function goBack() {
  if (history.length > 0) {
    currentScreen = history.pop();
    render(currentScreen);
  }
}

function render(screenId) {
  const screens = getAllScreens();
  const screen = screens[screenId];
  if (!screen) return;
  const content = document.getElementById('screen-content');
  const bottomNav = document.getElementById('bottom-nav');
  const labelId = document.getElementById('screen-label-id');
  const labelText = document.getElementById('screen-label-text');

  // Build screen HTML
  let html = '<div class="screen-inner">';
  // Nav bar
  if (screen.navTitle || screen.back) {
    html += '<div class="nav-bar">';
    if (screen.back) html += `<button class="nav-back" onclick="goBack()">←</button>`;
    html += `<span class="nav-title">${screen.navTitle || screen.title}</span></div>`;
  }
  html += screen.html + '</div>';
  content.innerHTML = html;
  content.scrollTop = 0;

  // Label
  labelId.textContent = screen.id;
  labelText.textContent = screen.title;

  // Bottom nav
  if (screen.bottomNav === 'elder') renderElderNav(screen.activeNav);
  else if (screen.bottomNav === 'supporter') renderSupporterNav(screen.activeNav);
  else bottomNav.innerHTML = '';
}

function renderElderNav(active) {
  const nav = document.getElementById('bottom-nav');
  nav.className = 'bottom-nav';
  const items = [
    {id:'home',icon:'🏠',label:'Home',screen:'elder-home'},
    {id:'record',icon:'🎙️',label:'Record',screen:'elder-record'},
    {id:'memories',icon:'📖',label:'Memories',screen:'elder-memories'},
    {id:'settings',icon:'⚙️',label:'Settings',screen:'elder-settings'}
  ];
  nav.innerHTML = items.map(i =>
    `<button class="bnav-item ${i.id===active?'active':''}" onclick="nav('${i.screen}')">
      <span class="bnav-icon">${i.icon}</span>${i.label}</button>`
  ).join('');
}

function renderSupporterNav(active) {
  const nav = document.getElementById('bottom-nav');
  nav.className = 'bottom-nav supporter-nav';
  const items = [
    {id:'home',icon:'🏠',label:'Home',screen:'supporter-home'},
    {id:'prompts',icon:'📨',label:'Prompts',screen:'supporter-prompt-history'},
    {id:'archive',icon:'📖',label:'Archive',screen:'supporter-archive'},
    {id:'react',icon:'💬',label:'React',screen:'supporter-listening-queue'},
    {id:'health',icon:'❤️',label:'Health',screen:'supporter-health'},
    {id:'more',icon:'⚙️',label:'More',screen:'supporter-settings'}
  ];
  nav.innerHTML = items.map(i =>
    `<button class="bnav-item ${i.id===active?'active':''}" onclick="nav('${i.screen}')">
      <span class="bnav-icon">${i.icon}</span>${i.label}</button>`
  ).join('');
}

function switchRole(role) {
  currentRole = role;
  history = [];
  document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('role-btn-' + role).classList.add('active');
  if (role === 'elder') nav('elder-home');
  else nav('supporter-home');
}

// ==================== INTERACTIVE HELPERS ====================
function togSwitch(el) {
  const sw = el.querySelector('.toggle-switch');
  if (sw) sw.classList.toggle('on');
}

function selRadio(el) {
  const group = el.parentElement;
  group.querySelectorAll('.wire-radio').forEach(r => r.classList.remove('selected'));
  el.classList.add('selected');
}

function toggleRec(btn) {
  btn.classList.toggle('recording');
  const wf = btn.parentElement.querySelector('.waveform');
  const lbl = btn.parentElement.querySelector('#rec-label');
  if (btn.classList.contains('recording')) {
    if (wf) wf.style.display = 'flex';
    if (lbl) lbl.textContent = '⏺ Recording...';
  } else {
    if (wf) wf.style.display = 'none';
    if (lbl) lbl.textContent = 'Tap to Record';
  }
}

// ==================== INIT ====================
document.getElementById('role-btn-elder').addEventListener('click', () => switchRole('elder'));
document.getElementById('role-btn-supporter').addEventListener('click', () => switchRole('supporter'));
document.getElementById('btn-onboarding-supporter').addEventListener('click', () => {
  history = []; currentScreen = 'onboard-welcome'; render('onboard-welcome');
});
document.getElementById('btn-onboarding-elder').addEventListener('click', () => {
  history = []; currentScreen = 'elder-onboard-welcome'; render('elder-onboard-welcome');
});

// Update clock
function updateClock() {
  const now = new Date();
  document.getElementById('status-time').textContent =
    now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
}
updateClock();
setInterval(updateClock, 30000);

// Start
render('elder-home');
