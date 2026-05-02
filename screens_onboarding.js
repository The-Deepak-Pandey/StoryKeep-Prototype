// StoryKeep — Onboarding Screens (Module 1)
const ONBOARDING_SCREENS = {

'onboard-welcome': {id:'1.1-A', title:'Welcome Screen', html:`
<div class="screen-body" style="text-align:center;padding-top:40px">
  <div style="width:80px;height:80px;border-radius:50%;background:#e8e8e8;border:2px dashed #ccc;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:32px">📖</div>
  <div class="wire-heading">Welcome to StoryKeep</div>
  <div class="wire-text" style="text-align:center">Help your loved ones preserve their stories, stay connected, and live well.</div>
  <div style="height:20px"></div>
  <div class="wire-btn primary" onclick="nav('onboard-register')">Get Started — Create Account</div>
  <div style="height:8px"></div>
  <div class="wire-text" style="text-align:center;font-size:10px">Already have an account? <u style="cursor:pointer">Sign In</u></div>
</div>`},

'onboard-register': {id:'1.1-B', title:'Registration', back:'onboard-welcome', navTitle:'Create Account', html:`
<div class="screen-body">
  <div class="wire-step-indicator"><div class="step active"></div><div class="step"></div><div class="step"></div></div>
  <div class="wire-subheading">Your Details</div>
  <input class="wire-input" placeholder="Full Name">
  <input class="wire-input" placeholder="Email address or phone number">
  <input class="wire-input" type="password" placeholder="Create password">
  <input class="wire-input" type="password" placeholder="Confirm password">
  <hr class="wire-divider">
  <div class="wire-subheading">Name Your Family Group</div>
  <input class="wire-input filled" value='The Sharma Family'>
  <div class="wire-text">This is how the group will appear on all devices.</div>
  <div class="wire-btn primary" onclick="nav('onboard-privacy')">Continue →</div>
</div>`},

'onboard-privacy': {id:'1.1-C', title:'Privacy & Terms', back:'onboard-register', navTitle:'Privacy & Terms', html:`
<div class="screen-body">
  <div class="wire-step-indicator"><div class="step done"></div><div class="step active"></div><div class="step"></div></div>
  <div class="wire-subheading">Privacy Policy & Data Terms</div>
  <div class="wire-img-placeholder" style="height:100px">[ Scrollable privacy policy text ]<br>Your stories are private to your family group...</div>
  <div class="wire-checkbox checked" onclick="this.classList.toggle('checked')"><div class="checkbox-box">✓</div><span>I accept the Privacy Policy and Data Terms</span></div>
  <hr class="wire-divider">
  <div class="wire-subheading">Your Role</div>
  <div class="wire-text">You will be assigned as the <b>Group Admin</b>.</div>
  <div class="wire-radio-group"><div class="wire-radio selected"><div class="radio-dot"></div>I am the primary Supporter (Admin)</div></div>
  <div class="wire-btn primary" onclick="nav('onboard-account-done')">Create My Account →</div>
</div>`},

'onboard-account-done': {id:'1.1-D', title:'Account Created ✓', back:'onboard-privacy', html:`
<div class="screen-body" style="text-align:center;padding-top:30px">
  <div class="wire-step-indicator"><div class="step done"></div><div class="step done"></div><div class="step active"></div></div>
  <div style="height:20px"></div>
  <div class="wire-success"><div class="success-icon">✓</div><div class="wire-heading" style="font-size:14px">Account Created!</div><div class="wire-text" style="text-align:center">"The Sharma Family" group is ready.<br>You are the Group Admin.</div></div>
  <div class="wire-text" style="text-align:center">Next: Set up the elder's device.</div>
  <div class="wire-btn primary" onclick="nav('onboard-language')">Set Up Elder's Device →</div>
</div>`},

'onboard-language': {id:'1.2-A', title:'Language', back:'onboard-account-done', navTitle:'Elder Device Setup', html:`
<div class="screen-body">
  <div class="wire-step-indicator"><div class="step active"></div><div class="step"></div><div class="step"></div><div class="step"></div></div>
  <div class="wire-subheading">Display Language</div>
  <div class="wire-text">Choose the language the elder is most comfortable with.</div>
  <div class="wire-radio-group" id="rg-lang">
    <div class="wire-radio selected" onclick="selRadio(this)"><div class="radio-dot"></div>हिन्दी (Hindi)</div>
    <div class="wire-radio" onclick="selRadio(this)"><div class="radio-dot"></div>English</div>
    <div class="wire-radio" onclick="selRadio(this)"><div class="radio-dot"></div>தமிழ் (Tamil)</div>
    <div class="wire-radio" onclick="selRadio(this)"><div class="radio-dot"></div>বাংলা (Bengali)</div>
    <div class="wire-radio" onclick="selRadio(this)"><div class="radio-dot"></div>मराठी (Marathi)</div>
  </div>
  <div class="wire-btn primary" onclick="nav('onboard-display')">Continue →</div>
</div>`},

'onboard-display': {id:'1.2-B', title:'Display Settings', back:'onboard-language', navTitle:'Display Settings', html:`
<div class="screen-body">
  <div class="wire-step-indicator"><div class="step done"></div><div class="step active"></div><div class="step"></div><div class="step"></div></div>
  <div class="wire-subheading">Text Size <span class="wire-tag">F7</span></div>
  <div class="wire-radio-group">
    <div class="wire-radio" onclick="selRadio(this)"><div class="radio-dot"></div><span style="font-size:14px">Large</span></div>
    <div class="wire-radio selected" onclick="selRadio(this)"><div class="radio-dot"></div><span style="font-size:17px">Extra Large</span></div>
    <div class="wire-radio" onclick="selRadio(this)"><div class="radio-dot"></div><span style="font-size:20px">Huge</span></div>
  </div>
  <div class="wire-img-placeholder" style="height:40px;font-size:11px">[ Live preview of text size ]</div>
  <hr class="wire-divider">
  <div class="wire-subheading">Contrast Mode <span class="wire-tag">F7</span></div>
  <div class="wire-radio-group">
    <div class="wire-radio selected" onclick="selRadio(this)"><div class="radio-dot"></div>Normal Contrast</div>
    <div class="wire-radio" onclick="selRadio(this)"><div class="radio-dot"></div>High Contrast</div>
  </div>
  <div class="wire-btn primary" onclick="nav('onboard-voice')">Continue →</div>
</div>`},

'onboard-voice': {id:'1.2-C', title:'Voice & Input', back:'onboard-display', navTitle:'Voice & Input', html:`
<div class="screen-body">
  <div class="wire-step-indicator"><div class="step done"></div><div class="step done"></div><div class="step active"></div><div class="step"></div></div>
  <div class="wire-subheading">Microphone Access <span class="wire-tag">F1</span></div>
  <div class="wire-btn small">🎤 Test Microphone</div>
  <div class="wire-img-placeholder" style="height:30px;font-size:10px">[ Audio level indicator ]</div>
  <hr class="wire-divider">
  <div class="wire-subheading">Voice Wake-Word</div>
  <div class="wire-text">Set a word to activate hands-free mode.</div>
  <input class="wire-input filled" value='"Hey StoryKeep"'>
  <hr class="wire-divider">
  <div class="wire-subheading">Audio Feedback</div>
  <div class="wire-toggle" onclick="togSwitch(this)"><span>Play sound on every tap</span><div class="toggle-switch on"><div class="knob"></div></div></div>
  <hr class="wire-divider">
  <div class="wire-subheading">Dwell Gesture</div>
  <div class="wire-text">Hold duration: 1.5 s</div>
  <div class="wire-slider"><div class="thumb" style="left:40%"></div></div>
  <div class="wire-btn primary" onclick="nav('onboard-device-done')">Continue →</div>
</div>`},

'onboard-device-done': {id:'1.2-D', title:'Device Ready ✓', back:'onboard-voice', html:`
<div class="screen-body" style="text-align:center;padding-top:30px">
  <div class="wire-step-indicator"><div class="step done"></div><div class="step done"></div><div class="step done"></div><div class="step active"></div></div>
  <div class="wire-success"><div class="success-icon">📱</div><div class="wire-heading" style="font-size:14px">Elder Device Configured!</div><div class="wire-text" style="text-align:center">Language: Hindi<br>Text: Extra Large<br>Contrast: Normal<br>Wake-word: "Hey StoryKeep"<br>Audio feedback: On</div></div>
  <div class="wire-text" style="text-align:center">Next: Link both devices together.</div>
  <div class="wire-btn primary" onclick="nav('onboard-link-code')">Link Family Devices →</div>
</div>`},

'onboard-link-code': {id:'1.3-A', title:'Generate Code (Supporter)', back:'onboard-device-done', navTitle:'Link Family Devices', html:`
<div class="screen-body">
  <div class="wire-subheading">Family Linking Code</div>
  <div class="wire-text">A 6-digit code has been generated. Share this code with the elder's device.</div>
  <div class="wire-code-display">7 3 8 4 2 1</div>
  <div class="wire-text" style="text-align:center;font-size:10px">Code expires in 10:00 minutes</div>
  <hr class="wire-divider">
  <div class="wire-text" style="text-align:center">Now enter this code on the elder's device →</div>
  <div class="wire-btn primary" onclick="nav('onboard-link-enter')">Continue to Elder Device →</div>
  <div class="wire-btn small" style="display:block;text-align:center">🔄 Generate New Code</div>
</div>`},

'onboard-link-enter': {id:'1.3-B', title:'Enter Code (Elder Device)', back:'onboard-link-code', navTitle:'Join Family Group', html:`
<div class="screen-body">
  <div class="wire-subheading">Enter Family Code</div>
  <div class="wire-text">Enter the 6-digit code shown on the supporter's device.</div>
  <div style="display:flex;gap:6px;justify-content:center;margin:16px 0">
    <div class="wire-input filled" style="width:38px;text-align:center;font-size:20px;font-weight:700;padding:10px 4px">7</div>
    <div class="wire-input filled" style="width:38px;text-align:center;font-size:20px;font-weight:700;padding:10px 4px">3</div>
    <div class="wire-input filled" style="width:38px;text-align:center;font-size:20px;font-weight:700;padding:10px 4px">8</div>
    <div class="wire-input filled" style="width:38px;text-align:center;font-size:20px;font-weight:700;padding:10px 4px">4</div>
    <div class="wire-input filled" style="width:38px;text-align:center;font-size:20px;font-weight:700;padding:10px 4px">2</div>
    <div class="wire-input" style="width:38px;text-align:center;font-size:20px;padding:10px 4px">_</div>
  </div>
  <div class="wire-img-placeholder" style="height:80px">[ Large numeric keypad ]</div>
  <div class="wire-btn primary" onclick="nav('onboard-link-done')">Confirm Link →</div>
</div>`},

'onboard-link-done': {id:'1.3-C', title:'Linked ✓', back:'onboard-link-enter', html:`
<div class="screen-body" style="text-align:center;padding-top:20px">
  <div class="wire-success"><div class="success-icon">🔗</div><div class="wire-heading" style="font-size:14px">Devices Linked!</div></div>
  <div class="wire-list-item" style="justify-content:center;border:none"><div class="icon-placeholder">👤</div><div class="item-text"><div class="item-title">Rajesh (Supporter / Admin)</div><div class="item-sub">📱 Connected</div></div></div>
  <div class="wire-list-item" style="justify-content:center;border:none"><div class="icon-placeholder">👴</div><div class="item-text"><div class="item-title">Dadaji (Elder)</div><div class="item-sub">📱 Connected</div></div></div>
  <hr class="wire-divider">
  <div class="wire-btn small" style="display:block;text-align:center">+ Invite Another Supporter</div>
  <div style="height:10px"></div>
  <div class="wire-btn primary" onclick="nav('onboard-band-scan')">Continue Setup →</div>
</div>`},

'onboard-band-scan': {id:'1.4-A', title:'Bluetooth Scan', back:'onboard-link-done', navTitle:'Health Band Setup', html:`
<div class="screen-body">
  <div class="wire-subheading">Scanning for Devices <span class="wire-tag uc07">UC-07</span></div>
  <div class="wire-text">Make sure the health band is turned on and nearby.</div>
  <div class="wire-img-placeholder" style="height:50px">🔄 Searching...</div>
  <div class="wire-subheading" style="font-size:11px">Found Devices:</div>
  <div class="wire-list-item" onclick="nav('onboard-band-setup')"><div class="icon-placeholder">⌚</div><div class="item-text"><div class="item-title">StoryKeep Band v2</div><div class="item-sub">Signal: Strong</div></div><div class="chevron">→</div></div>
  <div class="wire-list-item" style="opacity:0.5"><div class="icon-placeholder">⌚</div><div class="item-text"><div class="item-title">Unknown Device</div><div class="item-sub">Signal: Weak</div></div></div>
  <div class="wire-btn small" style="display:block;text-align:center">🔄 Scan Again</div>
</div>`},

'onboard-band-setup': {id:'1.4-B', title:'Pair & Name Band', back:'onboard-band-scan', navTitle:'Pair Band', html:`
<div class="screen-body">
  <div class="wire-success" style="padding:12px"><div class="success-icon" style="font-size:22px">⌚</div><div class="wire-text" style="text-align:center;margin:0">StoryKeep Band v2 — Connected ✓</div></div>
  <div class="wire-subheading">Name This Band</div>
  <input class="wire-input filled" value="Dadaji's Health Band">
  <hr class="wire-divider">
  <div class="wire-subheading">Daily Step Goal</div>
  <input class="wire-input filled" value="5,000 steps">
  <div class="wire-slider"><div class="thumb" style="left:35%"></div></div>
  <hr class="wire-divider">
  <div class="wire-subheading">Sleep Target</div>
  <input class="wire-input filled" value="7 hours">
  <div class="wire-btn primary" onclick="nav('onboard-band-alerts')">Continue →</div>
</div>`},

'onboard-band-alerts': {id:'1.4-C', title:'Alert Thresholds', back:'onboard-band-setup', navTitle:'Health Alerts', html:`
<div class="screen-body">
  <div class="wire-subheading">Heart Rate Alerts <span class="wire-tag uc07">UC-07</span></div>
  <div style="display:flex;gap:10px"><div style="flex:1"><div class="wire-text" style="font-size:10px">Upper (BPM)</div><input class="wire-input filled" style="text-align:center" value="110"></div><div style="flex:1"><div class="wire-text" style="font-size:10px">Lower (BPM)</div><input class="wire-input filled" style="text-align:center" value="50"></div></div>
  <hr class="wire-divider">
  <div class="wire-subheading">Fall Detection</div>
  <div class="wire-toggle" onclick="togSwitch(this)"><span>Enable fall detection alert</span><div class="toggle-switch on"><div class="knob"></div></div></div>
  <div class="wire-toggle" onclick="togSwitch(this)"><span>Inactivity alert (2+ hrs)</span><div class="toggle-switch on"><div class="knob"></div></div></div>
  <div class="wire-toggle" onclick="togSwitch(this)"><span>Low SpO₂ alert (<90%)</span><div class="toggle-switch on"><div class="knob"></div></div></div>
  <div class="wire-btn primary" onclick="nav('onboard-band-done')">Save & Continue →</div>
</div>`},

'onboard-band-done': {id:'1.4-D', title:'Band Ready ✓', back:'onboard-band-alerts', html:`
<div class="screen-body" style="text-align:center;padding-top:20px">
  <div class="wire-success"><div class="success-icon">⌚✓</div><div class="wire-heading" style="font-size:14px">Health Band Paired!</div><div class="wire-text" style="text-align:center">"Dadaji's Health Band"<br>Step goal: 5,000/day<br>Sleep target: 7 hours<br>Heart rate alerts: 50–110 BPM<br>Fall detection: On</div></div>
  <div class="wire-text" style="text-align:center">Next: Set up the music library.</div>
  <div class="wire-btn primary" onclick="nav('onboard-music-lib')">Set Up Music →</div>
</div>`},

'onboard-music-lib': {id:'1.5-A', title:'Browse Music Library', back:'onboard-band-done', navTitle:'Music Library', html:`
<div class="screen-body">
  <div class="wire-subheading">Curated Library <span class="wire-tag uc06">UC-06</span></div>
  <div class="wire-text">Browse our collection of classic favorites.</div>
  <div class="wire-list-item" onclick="nav('onboard-music-playlist')"><div class="icon-placeholder">🎵</div><div class="item-text"><div class="item-title">Golden Classics</div><div class="item-sub">42 songs · 1960s–1980s</div></div><div class="chevron">→</div></div>
  <div class="wire-list-item"><div class="icon-placeholder">🎵</div><div class="item-text"><div class="item-title">Devotional Bhajans</div><div class="item-sub">28 songs · All eras</div></div><div class="chevron">→</div></div>
  <div class="wire-list-item"><div class="icon-placeholder">🎵</div><div class="item-text"><div class="item-title">Classical Ragas</div><div class="item-sub">35 songs · Instrumental</div></div><div class="chevron">→</div></div>
  <div class="wire-list-item"><div class="icon-placeholder">🎵</div><div class="item-text"><div class="item-title">Old Hindi Film Songs</div><div class="item-sub">56 songs · 1950s–1990s</div></div><div class="chevron">→</div></div>
</div>`},

'onboard-music-playlist': {id:'1.5-B', title:'Create Playlist', back:'onboard-music-lib', navTitle:'Create Playlist', html:`
<div class="screen-body">
  <div class="wire-subheading">Elder's First Playlist <span class="wire-tag uc06">UC-06</span></div>
  <input class="wire-input filled" value="Dadaji's Favourites">
  <div class="wire-text">Add songs from the library:</div>
  <div class="wire-list-item"><div class="icon-placeholder" style="background:#ccc">✓</div><div class="item-text"><div class="item-title">Lag Jaa Gale</div><div class="item-sub">Lata Mangeshkar · 3:42</div></div></div>
  <div class="wire-list-item"><div class="icon-placeholder" style="background:#ccc">✓</div><div class="item-text"><div class="item-title">Mere Sapno Ki Rani</div><div class="item-sub">Kishore Kumar · 4:15</div></div></div>
  <div class="wire-list-item"><div class="icon-placeholder" style="background:#eee">+</div><div class="item-text"><div class="item-title" style="color:#999">Add more songs...</div></div></div>
  <div class="wire-text" style="text-align:center;font-size:10px">2 songs added</div>
  <div class="wire-btn primary" onclick="nav('onboard-music-prefs')">Save Playlist →</div>
</div>`},

'onboard-music-prefs': {id:'1.5-C', title:'Music Preferences', back:'onboard-music-playlist', navTitle:'Music Preferences', html:`
<div class="screen-body">
  <div class="wire-subheading">Preferred Genre & Era</div>
  <div class="wire-checkbox checked" onclick="this.classList.toggle('checked')"><div class="checkbox-box">✓</div><span>Old Hindi Film Songs</span></div>
  <div class="wire-checkbox checked" onclick="this.classList.toggle('checked')"><div class="checkbox-box">✓</div><span>Devotional / Bhajans</span></div>
  <div class="wire-checkbox" onclick="this.classList.toggle('checked')"><div class="checkbox-box"></div><span>Classical Instrumental</span></div>
  <div class="wire-checkbox" onclick="this.classList.toggle('checked')"><div class="checkbox-box"></div><span>Folk / Regional</span></div>
  <hr class="wire-divider">
  <div class="wire-subheading">Default Volume</div>
  <div class="wire-text">🔊 Volume: 70%</div>
  <div class="wire-slider"><div class="thumb" style="left:68%"></div></div>
  <div class="wire-btn primary" onclick="nav('onboard-complete')">Finish Music Setup →</div>
</div>`},

'onboard-complete': {id:'1.5-D', title:'Music Ready ✓', html:`
<div class="screen-body" style="text-align:center;padding-top:20px">
  <div class="wire-success"><div class="success-icon">🎵✓</div><div class="wire-heading" style="font-size:14px">Music Library Ready!</div><div class="wire-text" style="text-align:center">Playlist: "Dadaji's Favourites" (2 songs)<br>Genre: Hindi Film, Bhajans<br>Era: 1960s–1980s<br>Volume: 70%</div></div>
  <div class="wire-success" style="border-color:#888;background:#e8e8e8"><div class="wire-heading" style="font-size:13px">🎉 Onboarding Complete!</div><div class="wire-text" style="text-align:center;margin:0">Account created ✓<br>Device configured ✓<br>Family linked ✓<br>Health band paired ✓<br>Music set up ✓</div></div>
  <div class="wire-btn primary" onclick="switchRole('supporter');nav('supporter-home')">Go to Supporter Home →</div>
  <div class="wire-btn" onclick="switchRole('elder');nav('elder-home')">Go to Elder Home →</div>
</div>`},

// === ELDER ONBOARDING (simplified first-use tutorial) ===
'elder-onboard-welcome': {id:'1.6-A', title:'Elder First Use', html:`
<div class="screen-body" style="text-align:center;padding-top:30px">
  <div style="font-size:48px;margin-bottom:16px">👋</div>
  <div class="wire-heading" style="font-size:20px">Hello, Dadaji!</div>
  <div class="wire-text" style="text-align:center;font-size:13px">Welcome to StoryKeep.<br>Let's learn how to use your new app.</div>
  <div style="height:20px"></div>
  <div class="wire-btn large-elder" onclick="nav('elder-onboard-record')">Let's Start! →</div>
</div>`},

'elder-onboard-record': {id:'1.6-B', title:'Learn to Record', back:'elder-onboard-welcome', html:`
<div class="screen-body" style="text-align:center;padding-top:20px">
  <div class="wire-step-indicator"><div class="step active"></div><div class="step"></div><div class="step"></div></div>
  <div class="wire-heading" style="font-size:16px">🎤 Recording Stories</div>
  <div class="wire-text" style="text-align:center;font-size:12px">Tap the big button to record your voice.<br>Share any memory or story!</div>
  <div class="elder-record-btn" style="width:100px;height:100px">🎤</div>
  <div class="wire-text" style="text-align:center;font-size:14px;font-weight:600">Try tapping here!</div>
  <div style="height:20px"></div>
  <div class="wire-btn large-elder" onclick="nav('elder-onboard-prompts')">Next →</div>
</div>`},

'elder-onboard-prompts': {id:'1.6-C', title:'Answer Prompts', back:'elder-onboard-record', html:`
<div class="screen-body" style="text-align:center;padding-top:20px">
  <div class="wire-step-indicator"><div class="step done"></div><div class="step active"></div><div class="step"></div></div>
  <div class="wire-heading" style="font-size:16px">📨 Answering Prompts</div>
  <div class="wire-text" style="text-align:center;font-size:12px">Your family will send you questions.<br>They appear on your home screen!</div>
  <div class="wire-prompt-card" style="margin:16px 0"><div style="font-size:14px;font-weight:700">"Tell me about your school days"</div><div class="wire-text" style="margin-top:6px">🔊 This will be read aloud for you</div></div>
  <div class="wire-btn large-elder" onclick="nav('elder-onboard-done')">Next →</div>
</div>`},

'elder-onboard-done': {id:'1.6-D', title:'All Set!', back:'elder-onboard-prompts', html:`
<div class="screen-body" style="text-align:center;padding-top:30px">
  <div class="wire-step-indicator"><div class="step done"></div><div class="step done"></div><div class="step active"></div></div>
  <div style="height:20px"></div>
  <div class="wire-success"><div class="success-icon">🌟</div><div class="wire-heading" style="font-size:16px">You're All Set!</div><div class="wire-text" style="text-align:center">You can now record stories, listen to music, and check your health.</div></div>
  <div style="height:16px"></div>
  <div class="wire-btn large-elder" onclick="switchRole('elder');nav('elder-home')">🏠 Go to Home Screen</div>
</div>`}
};
