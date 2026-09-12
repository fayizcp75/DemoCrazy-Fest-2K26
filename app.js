function contactPhoto(c){
  return c && c.photo
    ? `<div class="cc-avatar has-photo" style="background-image:url('${String(c.photo).replace(/'/g,"&#39;")}')"></div>`
    : `<div class="cc-avatar">${initials(c.name)}</div>`;
}

/* ============================= ICONS ============================= */
const ICONS = {
  home:'<path d="M4 11L12 4L20 11V19A1 1 0 0 1 19 20H15V14H9V20H5A1 1 0 0 1 4 19V11Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  events:'<rect x="4" y="5.5" width="16" height="15" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M8 3.5V7M16 3.5V7M4 10H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  results:'<path d="M8 21H16M12 17V21M6 4H18V9A6 6 0 0 1 6 9V4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M6 6H3V8A3 3 0 0 0 6 11M18 6H21V8A3 3 0 0 1 18 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  leaderboard:'<path d="M5 21V11M12 21V4M19 21V14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  more:'<circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="19" cy="12" r="1.6" fill="currentColor"/>',
  play:'<path d="M8 5L19 12L8 19V5Z" fill="currentColor"/>',
  share:'<path d="M12 16V4M8 8L12 4L16 8M5 13V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  chevronR:'<path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  back:'<path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  clock:'<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8"/><path d="M12 8V12L15 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  calendar:'<rect x="4" y="5.5" width="16" height="15" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M4 10H20M8 3.5V7M16 3.5V7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  search:'<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M21 21L16.5 16.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  team:'<circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 20A5.5 5.5 0 0 1 14.5 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="17" cy="9" r="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M15 20A5 5 0 0 1 21.2 16.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  megaphone:'<path d="M3 10V14A1 1 0 0 0 4 15H6L13 20V4L6 9H4A1 1 0 0 0 3 10Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M17 9A4 4 0 0 1 17 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  info:'<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8"/><path d="M12 11V16.5M12 8V8.05" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',
  shield:'<path d="M12 3L19 6V11C19 15.5 16 18.8 12 21C8 18.8 5 15.5 5 11V6L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  plus:'<path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  edit:'<path d="M4 20L4.6 16.7L15.4 5.9C15.9 5.4 16.7 5.4 17.2 5.9L18.1 6.8C18.6 7.3 18.6 8.1 18.1 8.6L7.3 19.4L4 20Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
  phone:'<path d="M6 3H9L10.5 7L8.5 8.5C9.2 10.5 10.5 11.8 12.5 12.5L14 10.5L18 12V15C18 16.1 17.1 17 16 17C9.9 16.6 5.4 12.1 5 6C5 4.9 5.9 3 6 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
  users:'<circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.8"/><path d="M2.5 19A5.5 5.5 0 0 1 13.5 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M15 4A3.5 3.5 0 0 1 15 11" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M16.5 13.2A5.5 5.5 0 0 1 21.5 18.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  award:'<circle cx="12" cy="8" r="5.2" stroke="currentColor" stroke-width="1.8"/><path d="M8.5 12.5L7 21L12 18.5L17 21L15.5 12.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  doc:'<path d="M6 3H14L18 7V21H6V3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3V7H18" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12H15M9 15.5H15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  check:'<path d="M5 12.5L10 17L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  x:'<path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  crown:'<path d="M4 8L8 11L12 5L16 11L20 8L18.5 18H5.5L4 8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
  trash:'<path d="M5 7H19M9 7V4.8C9 4.4 9.4 4 9.8 4H14.2C14.6 4 15 4.4 15 4.8V7M7 7L7.7 19C7.7 19.6 8.2 20 8.8 20H15.2C15.8 20 16.3 19.6 16.3 19L17 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
};
function ic(name,size=18){return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">${ICONS[name]||''}</svg>`;}

/* ============================= DATA ============================= */
let DB = {
  events:[],
  teams:[],
  participants:[],
  results:[],
  announcements:[],
  committee:[],
  contacts:[],
  eventParticipantVideos:[],
  aboutContent:''
};

/* ============================= ADMIN ACCOUNTS ============================= */
let ADMINS = [];
let CURRENT_ADMIN = null;
let SEQ_ADMIN = 10;
const adminUid = () => 'adm' + (SEQ_ADMIN++);

let SEQ = 100;
const uid = p => p + (SEQ++);

/* recompute participant + team points from results */
function recalc(){
  DB.participants.forEach(p=>p.points=0);
  DB.results.forEach(r=>{
    const p = DB.participants.find(x=>x.id===r.participantId);
    if(p) p.points += r.points;
  });
}
recalc();

function team(id){return DB.teams.find(t=>t.id===id);}
function participant(id){return DB.participants.find(p=>p.id===id);}
function event_(id){return DB.events.find(e=>e.id===id);}
function teamPoints(teamId){return DB.participants.filter(p=>p.teamId===teamId).reduce((s,p)=>s+p.points,0);}
function rankedTeams(){return [...DB.teams].map(t=>({...t,points:teamPoints(t.id)})).sort((a,b)=>b.points-a.points);}
function rankedParticipants(){return [...DB.participants].sort((a,b)=>b.points-a.points);}
function initials(name){return String(name||'').split(' ').map(w=>w[0]).filter(Boolean).slice(0,2).join('').toUpperCase();}
function esc(v){return String(v??'').replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[m]));}
function escAttr(v){return esc(v);}
function fmtDate(d){const dt=new Date(d+'T00:00:00');return dt.toLocaleDateString('en-IN',{day:'numeric',month:'short'});}
function fmtTime(t){const [h,m]=t.split(':').map(Number);const ap=h>=12?'PM':'AM';const hh=((h+11)%12)+1;return `${hh}:${String(m).padStart(2,'0')} ${ap}`;}
function fmtDateTime(iso){const dt=new Date(iso);return dt.toLocaleDateString('en-IN',{day:'numeric',month:'short'})+' · '+dt.toLocaleTimeString('en-IN',{hour:'numeric',minute:'2-digit'});}
function statusChip(s){
  if(s==='LIVE') return `<span class="chip chip-live"><span class="dot"></span>Live</span>`;
  if(s==='UPCOMING') return `<span class="chip chip-upcoming">Upcoming</span>`;
  return `<span class="chip chip-completed">Completed</span>`;
}
function medalIcon(pos){return pos===1?'g':pos===2?'s':'b';}
function medalLabel(pos){return pos===1?'1st':pos===2?'2nd':'3rd';}

/* ============================= STATE / ROUTER ============================= */
let STATE = {route:'home', params:{}, adminLoggedIn:false, resultsTab:null, leaderboardTab:'teams'};

function nav(route, params={}){
  STATE.route = route; STATE.params = params;
  toggleMenu(false);
  window.scrollTo({top:0,behavior:'instant'});
  render();
}
function toggleMenu(show){
  document.getElementById('overlay').classList.toggle('show', show);
  document.getElementById('sidemenu').classList.toggle('show', show);
}
function toast(msg){
  const t=document.getElementById('toast');
  t.innerHTML = ic('check',14)+`<span>${msg}</span>`;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer=setTimeout(()=>t.classList.remove('show'),2200);
}
function closeModal(){document.getElementById('modalWrap').classList.remove('show'); document.getElementById('modalBody').innerHTML='';}
function openModal(html){document.getElementById('modalBody').innerHTML=html; document.getElementById('modalWrap').classList.add('show');}

/* ============================= BOTTOM NAV + SIDE MENU ============================= */
const BOTTOM_TABS = [
  {id:'home', label:'Home', icon:'home'},
  {id:'events', label:'Events', icon:'events'},
  {id:'results', label:'Results', icon:'results'},
  {id:'leaderboard', label:'Leaderboard', icon:'leaderboard'},
  {id:'more', label:'More', icon:'more'},
];
function renderBottomNav(){
  const active = ['home','events','results','leaderboard'].includes(STATE.route) ? STATE.route :
    (['more','teams','team-detail','announcements','schedule','search','committee','admin','admin-dash','admin-participants','admin-teams','admin-events','admin-registrations','admin-results','admin-announcements','admin-committee','admin-contact','admin-about','admin-report','admin-management'].includes(STATE.route) ? 'more' : '');
  document.getElementById('bottomnav-inner').innerHTML = BOTTOM_TABS.map(t=>`
    <a class="nav-item ${active===t.id?'active':''}" onclick="nav('${t.id}')">
      ${ic(t.icon,21)}<span>${t.label}</span>
    </a>`).join('');
}
const SIDE_ITEMS = [
  {id:'committee', label:'Fest Committee', icon:'users'},
  {id:'contact', label:'Contact Us', icon:'phone'},
  {id:'teams', label:'Teams', icon:'team'},
  {id:'announcements', label:'Announcements', icon:'megaphone'},
  {id:'schedule', label:'Schedule', icon:'calendar'},
  {id:'search', label:'Search Participant', icon:'search'},
  {id:'about', label:'About', icon:'info'},
  {id:'admin', label:'Admin', icon:'shield'},
];
document.getElementById('sidemenu-items').innerHTML = SIDE_ITEMS.map(i=>`
  <a class="menu-item" onclick="nav('${i.id}')">${ic(i.icon,18)}${i.label}</a>`).join('');

/* ============================= RENDER ROOT ============================= */
function render(){
  renderBottomNav();
  const app = document.getElementById('app');
  const routes = {
    home: pageHome, events: pageEvents, 'event-details': pageEventDetails, results: pageResults, leaderboard: pageLeaderboard,
    more: pageMore, teams: pageTeams, 'team-detail': pageTeamDetail, announcements: pageAnnouncements,
    schedule: pageSchedule, search: pageSearch, committee: pageCommittee, contact: pageContact, about: pageAbout,
    admin: pageAdminLogin, 'admin-dash': pageAdminDash,
    'admin-participants': pageAdminParticipants, 'admin-teams': pageAdminTeams,
    'admin-events': pageAdminEvents, 'admin-registrations': pageAdminRegistrations,
    'admin-results': pageAdminResults, 'admin-announcements': pageAdminAnnouncements,
    'admin-committee': pageAdminCommittee, 'admin-contact': pageAdminContact, 'admin-about': pageAdminAbout, 'admin-report': pageAdminReport, 'admin-management': pageAdminManagement,
  };
  const fn = routes[STATE.route] || pageHome;
  app.innerHTML = `<div class="page">${fn()}</div>`;
}
function backHead(title, to){
  return `<div class="subpage-head"><button class="icon-btn" onclick="nav('${to}')">${ic('back',18)}</button><h1>${title}</h1></div>`;
}

/* ============================= HOME ============================= */
function pageHome(){
  const live = DB.events.find(e=>e.status==='LIVE');
  const upcoming = DB.events.filter(e=>e.status==='UPCOMING').sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time))[0];
  const topTeams = rankedTeams().slice(0,3);
  const topParts = rankedParticipants().slice(0,3);
  const latest = DB.results.slice().reverse().slice(0,3);
  const latestEventId = latest.length ? latest[0].eventId : null;
  const latestEvent = latestEventId ? event_(latestEventId) : null;
  const latestEventResults = latestEventId ? DB.results
    .filter(r=>r.eventId===latestEventId)
    .sort((a,b)=>{
      const rank = r => r.position ? Number(r.position) : 999;
      return rank(a)-rank(b);
    })
    .slice(0,6) : [];

  return `
  <p class="page-sub" style="margin-bottom:16px;">Welcome back — here's what's happening right now.</p>

  <div class="home-live-next-grid">
    <div>
      <div class="section-head home-card-head"><div><div class="eyebrow">Live now</div><h2>Live</h2></div></div>
      ${live ? `
      <div class="hero-live">
        <div class="eyebrow-row">${statusChip('LIVE')}<span style="font-size:11px;color:var(--text-dim);">Main Stage</span></div>
        <h3>${live.name}</h3>
        <p>In progress · started ${fmtTime(live.time)} today</p>
      </div>` : `<div class="hero-none">No event is live right now — check Events for what's next.</div>`}
    </div>

    <div>
      <div class="section-head home-card-head"><div><div class="eyebrow">Coming up</div><h2>Next</h2></div><a class="link-more" onclick="nav('events')">View All ${ic('chevronR',14)}</a></div>
      ${upcoming ? `
      <div class="hero-live next-as-live">
        <div class="eyebrow-row">${statusChip('UPCOMING')}<span style="font-size:11px;color:var(--text-dim);">${fmtDate(upcoming.date)}</span></div>
        <h3>${upcoming.name}</h3>
        <p>${ic('clock',14)} ${fmtTime(upcoming.time)}</p>
      </div>` : `<div class="hero-none">No upcoming event.</div>`}
    </div>
  </div>

  ${DB.announcements.length ? `
  <div class="latest-announcement-highlight">
    <div class="lah-top"><div class="eyebrow">Latest Announcement</div><span class="badge-new">New</span></div>
    <h3>${[...DB.announcements].sort((a,b)=>new Date(b.date)-new Date(a.date))[0].title}</h3>
    <p>${[...DB.announcements].sort((a,b)=>new Date(b.date)-new Date(a.date))[0].message}</p>
  </div>` : ''}

  <div class="section-head"><div><div class="eyebrow">Standings</div><h2>Top 3 Teams</h2></div>
  <a class="link-more" onclick="nav('leaderboard')">Full List ${ic('chevronR',14)}</a></div>
  ${topTeams.map((t,i)=>`
    <div class="rank-row" onclick="nav('team-detail',{id:'${t.id}'})">
      <div class="rank-num r${i+1}">${i+1}</div>
      <div class="rank-info"><div class="name">${t.name}</div><div class="sub">${DB.participants.filter(p=>p.teamId===t.id).length} members</div></div>
      <div class="rank-pts"><b>${t.points}</b><small>points</small></div>
    </div>`).join('')}

  <div class="section-head"><div><div class="eyebrow">Standings</div><h2>Top 3 Participants</h2></div>
  <a class="link-more" onclick="nav('leaderboard')">Full List ${ic('chevronR',14)}</a></div>
  ${topParts.map((p,i)=>`
    <div class="rank-row">
      <div class="rank-num r${i+1}">${i+1}</div>
      <div class="rank-info"><div class="name">${p.name}</div><div class="sub">#${p.chest} · ${team(p.teamId)?.name||'—'}</div></div>
      <div class="rank-pts"><b>${p.points}</b><small>points</small></div>
    </div>`).join('')}

  <div class="section-head"><div><div class="eyebrow">Just announced</div><h2>Latest Results</h2></div>
  <a class="link-more" onclick="nav('results')">All Results ${ic('chevronR',14)}</a></div>
  ${latestEventResults.length? `
    <div class="latest-event-title" style="font-size:16px;font-weight:800;color:var(--text);margin:-4px 0 10px;">
      ${latestEvent?.name || 'Latest Event'}
    </div>
    ${latestEventResults.map(r=>{
      const p=participant(r.participantId);
      return `<div class="podium-row p${r.position}">
        <div class="medal ${medalIcon(r.position)}">${r.position?medalLabel(r.position):'—'}</div>
        <div class="rank-info">
          <div class="name">${p.name} <span style="color:var(--text-faint);font-weight:600;">#${p.chest}</span></div>
          <div class="sub">${team(p.teamId)?.name} · ${r.position?medalLabel(r.position):'NO PRIZE'} · ${r.grade||'NO GRADE'}</div>
        </div>
        <div class="rank-pts"><b>${r.points}</b><small>pts</small></div>
      </div>`;
    }).join('')}
  ` : `<div class="empty"><b>No results yet</b>Results will appear here once posted.</div>`}
  `;
}

/* ============================= EVENTS ============================= */
function pageEvents(){
  const order={LIVE:0,UPCOMING:1,COMPLETED:2};
  const list = [...DB.events].sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
  return `
  <div class="page-title">Events</div>
  <p class="page-sub">Full festival schedule at a glance.</p>
  ${list.map(e=>`
    <div class="ticket" onclick="nav('event-details',{eventId:'${e.id}'})" style="cursor:pointer;">
      <div class="ticket-stub">
        <div class="mon">${new Date(e.date+'T00:00:00').toLocaleDateString('en-IN',{month:'short'})}</div>
        <div class="day">${new Date(e.date+'T00:00:00').getDate()}</div>
        <div class="time">${fmtTime(e.time)}</div>
      </div>
      <div class="ticket-perf"></div>
      <div class="ticket-body">
        <div class="trow"><div class="tname">${e.name}</div></div>
        <div class="trow">${statusChip(e.status)}</div>
      </div>
    </div>`).join('')}
  `;
}

/* ============================= EVENT DETAILS ============================= */
function pageEventDetails(){
  const ev=event_(STATE.params.eventId);
  if(!ev) return `${backHead('Events','events')}`;

  const regs=(window._registrations||[]).filter(r=>r.eid===ev.id);
  const people=regs.map(r=>{
    const p=participant(r.pid);
    return p ? {p,t:team(p.teamId)} : null;
  }).filter(Boolean).sort((a,b)=>String(a.p.chest).localeCompare(String(b.p.chest),undefined,{numeric:true}));

  return `
  ${backHead('Event Details','events')}
  <div class="card" style="padding:18px;margin-bottom:20px;">
    ${statusChip(ev.status)}
    <div class="next-card" style="padding:14px 0 0;background:none;border:0;">
      <h3 style="font-family:var(--ff-display);font-size:17px;margin:0 0 12px;">${ev.name}</h3>
      <div class="next-meta" style="margin-bottom:0;">
        <span>${ic('calendar',14)} ${fmtDate(ev.date)}</span>
        <span>${ic('clock',14)} ${fmtTime(ev.time)}</span>
      </div>
    </div>
    ${DB.results.some(r=>r.eventId===ev.id) ? `<button class="btn btn-primary btn-block" style="margin-top:16px;" onclick="openEventResult('${ev.id}')">${ic('award',16)} View Result</button>` : ''}
  </div>

  <div class="section-head">
    <div>
      <div class="eyebrow">Registered Participants</div>
      <h2 style="font-family:var(--ff-display);font-size:15px;margin:0;">${people.length} Participants</h2>
    </div>
  </div>

  ${people.length ? people.map(({p,t})=>`
    <div class="rank-row">
      <div class="avatar">${initials(p.name)}</div>
      <div class="rank-info">
        <div class="name">${p.name}</div>
        <div class="sub">Chest #${p.chest}${t ? ' · '+t.name : ''}</div>
      </div>
      ${eventParticipantVideo(ev.id,p.id) ? `<button class="mini-btn" type="button" onclick="event.stopPropagation();openVideo('${escAttr(eventParticipantVideo(ev.id,p.id))}')" title="Play video">${ic('play',13)} Play</button>` : ''}
    </div>
  `).join('') : `
    <div class="empty">${ic('users',40)}<b>No participants registered</b>Registrations for this event will appear here.</div>
  `}
  `;
}

/* ============================= RESULTS ============================= */
function pageResults(){
  const withResults = DB.events.filter(e=>DB.results.some(r=>r.eventId===e.id)).sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time));
  if(!STATE.resultsTab && withResults.length) STATE.resultsTab = withResults[0].id;
  return `
  <div class="page-title">Results</div>
  <p class="page-sub">Prizes are awarded to participants, event by event.</p>
  ${withResults.length===0 ? `<div class="empty">${ic('results',36)}<b>No results published</b>Check back once events wrap up.</div>` : `
  <div class="field" style="margin-bottom:18px;">
    <label>Choose Event</label>
    <select onchange="STATE.resultsTab=this.value;render();">
      ${withResults.map(e=>`<option value="${e.id}" ${STATE.resultsTab===e.id?'selected':''}>${e.name}</option>`).join('')}
    </select>
  </div>
  ${withResults.filter(e=>e.id===STATE.resultsTab).map(e=>renderEventPodium(e)).join('')}
  `}
  `;
}
function renderEventPodium(e){
  const res = DB.results.filter(r=>r.eventId===e.id).sort((a,b)=>{
    const rank = r => r.position ? Number(r.position) : 999;
    return rank(a)-rank(b);
  });
  return `
  <div class="result-block">
    <div class="ev-head"><h3>${e.name}</h3>${statusChip(e.status)}</div>
    ${res.map(r=>{
      const p=participant(r.participantId);
      return `<div class="podium-row p${r.position}">
        <div class="medal ${medalIcon(r.position)}">${r.position?medalLabel(r.position):'—'}</div>
        <div class="rank-info">
          <div class="name">${p.name} <span style="color:var(--text-faint);font-weight:600;">#${p.chest}</span></div>
          <div class="sub">${team(p.teamId)?.name} · ${r.position?medalLabel(r.position):'NO PRIZE'} · ${r.grade||'NO GRADE'}</div>
        </div>
        <div class="rank-pts" style="display:flex;align-items:center;gap:8px;"><b>${r.points}</b><small>pts</small><button class="mini-btn" type="button" onclick="event.stopPropagation();shareParticipantResult('${e.id}','${r.id}')" title="Share result">${ic('share',13)}</button></div>
      </div>`;
    }).join('')}
  </div>`;
}

function openEventResult(eventId){
  STATE.resultsTab=eventId;
  nav('results');
}
function eventParticipantVideo(eventId, participantId){
  const row=(DB.eventParticipantVideos||[]).find(x=>x.eventId===eventId && x.participantId===participantId);
  return row?.videoUrl||'';
}
function openVideo(url){
  const u=String(url||'').trim();
  if(!u) return;
  window.open(u,'_blank','noopener,noreferrer');
}
async function shareParticipantProfile(participantId){
  const p=participant(participantId);
  if(!p) return;
  const t=team(p.teamId)?.name||'—';
  const regs=(window._registrations||[]).filter(x=>x.pid===p.id);
  const events=regs.map(x=>event_(x.eid)).filter(Boolean).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
  const lines=[
    'DEMO CRAZY — PARTICIPANT RESULT',
    `Name: ${p.name}`,
    `Chest: #${p.chest}`,
    `Team: ${t}`,
    `Total Points: ${Number(p.points)||0}`,
    '',
    'PARTICIPATED EVENTS'
  ];
  events.forEach(ev=>{
    const r=DB.results.find(x=>x.eventId===ev.id && x.participantId===p.id);
    const result=r ? (r.position ? medalLabel(r.position) : 'NO PRIZE') : 'NO RESULT';
    const pts=r ? Number(r.points)||0 : 0;
    lines.push(`${ev.name} — ${result} · ${pts} pts`);
  });
  const text=lines.join('\n');
  try{
    if(navigator.share){ await navigator.share({title:`${p.name} — DEMO CRAZY`,text}); toast('Result shared'); return; }
  }catch(e){ if(e?.name==='AbortError') return; }
  try{ await navigator.clipboard.writeText(text); toast('Result copied to clipboard'); }
  catch(e){ toast('Could not share result'); }
}

async function shareParticipantResult(eventId,resultId){
  const ev=event_(eventId), r=DB.results.find(x=>x.id===resultId), p=r?participant(r.participantId):null;
  if(!ev||!r||!p) return;
  const t=team(p.teamId)?.name||'—';
  const lines=[
    `DEMO CRAZY — ${ev.name}`,
    `Participant: ${p.name}`,
    `Chest: #${p.chest}`,
    `Team: ${t}`,
    `Result: ${r.position?medalLabel(r.position):'NO PRIZE'}`,
    `Grade: ${r.grade||'NO GRADE'}`,
    `Points: ${r.points}`
  ];
  const text=lines.join('\n');
  try{
    if(navigator.share){ await navigator.share({title:`${p.name} — ${ev.name}`,text}); toast('Result shared'); return; }
  }catch(e){ if(e?.name==='AbortError') return; }
  try{
    await navigator.clipboard.writeText(text);
    toast('Result copied to clipboard');
  }catch(e){ toast('Could not share result'); }
}

/* ============================= LEADERBOARD ============================= */
function pageLeaderboard(){
  return `
  <div class="page-title">Leaderboard</div>
  <p class="page-sub">Complete standings, updated live.</p>
  <div class="tabs">
    <button class="tab-btn ${STATE.leaderboardTab==='teams'?'active':''}" onclick="STATE.leaderboardTab='teams';render();">Teams</button>
    <button class="tab-btn ${STATE.leaderboardTab==='participants'?'active':''}" onclick="STATE.leaderboardTab='participants';render();">Participants</button>
  </div>
  ${STATE.leaderboardTab==='teams' ? rankedTeams().map((t,i)=>`
    <div class="rank-row" onclick="nav('team-detail',{id:'${t.id}'})">
      <div class="rank-num ${i<3?'r'+(i+1):''}">${i+1}</div>
      <div class="rank-info"><div class="name">${t.name}</div><div class="sub">${DB.participants.filter(p=>p.teamId===t.id).length} members</div></div>
      <div class="rank-pts"><b>${t.points}</b><small>points</small></div>
    </div>`).join('') :
  rankedParticipants().map((p,i)=>`
    <div class="rank-row">
      <div class="rank-num ${i<3?'r'+(i+1):''}">${i+1}</div>
      <div class="rank-info"><div class="name">${p.name}</div><div class="sub">#${p.chest} · ${team(p.teamId)?.name||'—'}</div></div>
      <div class="rank-pts"><b>${p.points}</b><small>points</small></div>
    </div>`).join('')}
  `;
}

/* ============================= MORE ============================= */
function pageMore(){
  return `
  <div class="page-title">More</div>
  <p class="page-sub">Everything else about DEMO CRAZY.</p>
  <div class="more-list">
    ${SIDE_ITEMS.map(i=>`
    <a class="card more-item" onclick="nav('${i.id}')">
      <div class="mi-icon">${ic(i.icon,20)}</div>
      <div class="mi-text"><b>${i.label}</b><span>${moreDesc(i.id)}</span></div>
      <div class="mi-arrow">${ic('chevronR',18)}</div>
    </a>`).join('')}
  </div>`;
}
function moreDesc(id){
  return {teams:'Browse every participating team', announcements:'Latest fest updates', schedule:'Day-wise event timings',
    search:'Find a participant by chest number', committee:'Meet the fest committee', contact:'Contact the organizers', about:'About this fest',
    admin:'Organizer login & controls'}[id]||'';
}

/* ============================= TEAMS ============================= */
function pageTeams(){
  return `
  ${backHead('Teams','more')}
  <div class="team-grid">
    ${rankedTeams().map((t,i)=>`
    <a class="card team-card" onclick="nav('team-detail',{id:'${t.id}'})">
      <div class="tc-rank">#${i+1}</div>
      <div class="tc-badge" style="background:linear-gradient(145deg,${t.color},#0a0a0a)">${initials(t.name)}</div>
      <div class="tc-name">${t.name}</div>
      <div class="tc-pts">${t.points} pts · ${DB.participants.filter(p=>p.teamId===t.id).length} members</div>
    </a>`).join('')}
  </div>`;
}

function pageTeamDetail(){
  const t = team(STATE.params.id);
  if(!t) return backHead('Team','teams')+`<div class="empty">Team not found.</div>`;
  const ranked = rankedTeams();
  const rank = ranked.findIndex(x=>x.id===t.id)+1;
  const members = DB.participants.filter(p=>p.teamId===t.id).sort((a,b)=>String(a.chest).localeCompare(String(b.chest),undefined,{numeric:true}));
  const leaders = DB.participants.filter(p=>t.leaderIds.includes(p.id));
  const teamResults = DB.results.filter(r=>{const p=participant(r.participantId);return p && p.teamId===t.id;}).sort((a,b)=>{const ea=event_(a.eventId), eb=event_(b.eventId); return ((eb?.date||'')+(eb?.time||'')).localeCompare((ea?.date||'')+(ea?.time||''));});

  return `
  ${backHead(t.name,'teams')}
  <div class="card" style="padding:20px;text-align:center;margin-bottom:22px;">
    <div class="tc-badge" style="margin:0 auto 12px;background:linear-gradient(145deg,${t.color},#0a0a0a)">${initials(t.name)}</div>
    <div style="font-family:var(--ff-display);font-size:18px;font-weight:700;">${t.name}</div>
    <div style="color:var(--text-dim);font-size:12.5px;margin-top:4px;">Rank #${rank} · ${teamPoints(t.id)} total points</div>
  </div>

  <div class="section-head"><h2>${leaders.length>1?'Team Leaders':'Team Leader'}</h2></div>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:6px;">
    ${leaders.map(l=>`<div class="chip chip-upcoming" style="text-transform:none;font-size:11.5px;">${ic('crown',12)} ${l.name}</div>`).join('') || '<div class="empty" style="padding:14px;">No leaders assigned</div>'}
  </div>

  <div class="section-head"><h2>Team Members (${members.length})</h2></div>
  ${members.map(m=>`
    <div class="rank-row">
      <div class="avatar">${initials(m.name)}</div>
      <div class="rank-info"><div class="name">${m.name} ${t.leaderIds.includes(m.id)?ic('crown',13):''}</div><div class="sub">#${m.chest}</div></div>
      <div class="rank-pts"><b>${m.points}</b><small>points</small></div>
    </div>`).join('')}

  <div class="section-head"><h2>Team Results</h2></div>
  ${teamResults.length? teamResults.map(r=>{
    const p=participant(r.participantId), ev=event_(r.eventId);
    return `<div class="podium-row p${r.position}">
      <div class="medal ${medalIcon(r.position)}">${medalLabel(r.position)}</div>
      <div class="rank-info"><div class="name">${p.name} <span style="color:var(--text-faint);font-weight:600;">#${p.chest}</span></div><div class="sub">${ev.name}</div></div>
      <div class="rank-pts"><b>${r.points}</b><small>pts</small></div>
    </div>`;
  }).join('') : `<div class="empty">No results yet for this team.</div>`}
  `;
}

/* ============================= SEARCH ============================= */
function pageSearch(){
  const q = String(STATE.params.q || '').trim();
  const query=String(q||'').trim().toLowerCase();
  const found=query ? DB.participants.filter(p=>String(p.name||'').toLowerCase().includes(query) || String(p.chest||'').toLowerCase().includes(query)) : [];
  const shareBtn=found.length===1 ? `<button class="icon-btn" style="margin-left:auto;" onclick="shareParticipantProfile('${found[0].id}')" title="Share full result" aria-label="Share full result">${ic('share',18)}</button>` : '';
  return `
  <div class="subpage-head"><button class="icon-btn" onclick="nav('more')">${ic('back',18)}</button><h1>Search Participant</h1>${shareBtn}</div>
  <div class="searchbar">
    ${ic('search',18)}
    <input id="participantSearchInput" placeholder="Search name or chest number" value="${escAttr(q)}" inputmode="search" autocomplete="off" oninput="liveParticipantSearch(this.value)">
  </div>
  <div id="participantSearchResults">${renderParticipantSearchResults(q)}</div>
  `;
}
function renderParticipantSearchResults(q){
  const query=String(q||'').trim().toLowerCase();
  if(!query) return `<div class="empty">${ic('search',36)}<b>Search Participant</b>Type a name or chest number to search instantly.</div>`;
  const found=DB.participants.filter(p=>String(p.name||'').toLowerCase().includes(query) || String(p.chest||'').toLowerCase().includes(query)).sort((a,b)=>String(a.chest).localeCompare(String(b.chest),undefined,{numeric:true}));
  if(!found.length) return `<div class="empty">${ic('search',36)}<b>No participant found</b>Try another name or chest number.</div>`;
  return found.map(p=>{
    const regs=(window._registrations||[]).filter(r=>r.pid===p.id);
    const events=regs.map(r=>event_(r.eid)).filter(Boolean).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
    return `<div class="card" style="padding:18px;margin-bottom:18px;display:flex;align-items:center;gap:14px;">
      <div class="avatar" style="width:52px;height:52px;font-size:16px;">${initials(p.name)}</div>
      <div><div style="font-weight:700;font-size:15px;">${esc(p.name)}</div>
      <div style="color:var(--text-dim);font-size:12.5px;margin-top:3px;">#${esc(p.chest)} · ${esc(team(p.teamId)?.name||'—')}</div>
      <div style="margin-top:6px;"><span class="chip chip-upcoming">${Number(p.points)||0} total points</span></div></div>
    </div>
    <div class="section-head"><h2>Participated Events</h2></div>
    ${events.length ? events.map(ev=>{
      const r=DB.results.find(x=>x.eventId===ev.id && x.participantId===p.id);
      return `<div class="rank-row">
        <div class="medal ${r&&r.position?medalIcon(r.position):''}">${r&&r.position?medalLabel(r.position):'—'}</div>
        <div class="rank-info"><div class="name">${esc(ev.name)}</div><div class="sub">${r ? `${Number(r.points)||0} points` : '0 points'}</div></div>
        <div class="rank-pts"><b>${r ? Number(r.points)||0 : 0}</b><small>pts</small></div>
      </div>`;
    }).join('') : `<div class="empty">No participated events found.</div>`}`;
  }).join('');
}
function liveParticipantSearch(value){
  STATE.params.q=value||'';
  const box=document.getElementById('participantSearchResults');
  if(box) box.innerHTML=renderParticipantSearchResults(STATE.params.q);
}
function doSearch(){
  const el=document.getElementById('participantSearchInput');
  liveParticipantSearch(el?el.value:'');
}

/* ============================= SCHEDULE ============================= */
function pageSchedule(){
  const byDate = {};
  [...DB.events].sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time)).forEach(e=>{(byDate[e.date]=byDate[e.date]||[]).push(e);});
  return `
  ${backHead('Schedule','more')}
  ${Object.keys(byDate).sort().map(date=>`
    <div class="section-head"><h2>${new Date(date+'T00:00:00').toLocaleDateString('en-IN',{weekday:'long', day:'numeric', month:'long'})}</h2></div>
    ${byDate[date].map(e=>`
      <div class="rank-row">
        <div class="avatar" style="font-size:10px;">${fmtTime(e.time).replace(' ','')}</div>
        <div class="rank-info"><div class="name">${e.name}</div></div>
        ${statusChip(e.status)}
      </div>`).join('')}
  `).join('')}
  `;
}

/* ============================= ANNOUNCEMENTS ============================= */
function pageAnnouncements(){
  const list=[...DB.announcements].sort((a,b)=>new Date(b.date)-new Date(a.date));
  return `
  ${backHead('Announcements','more')}
  ${list.map((a,i)=>`
    <div class="card announce-card">
      <div class="a-top"><h4>${a.title}</h4>${i===0?'<span class="badge-new">New</span>':''}</div>
      <p>${a.message}</p>
      <div class="a-date" style="margin-top:8px;">${fmtDateTime(a.date)}</div>
    </div>`).join('')}
  `;
}

/* ============================= FEST COMMITTEE ============================= */
function pageCommittee(){
  const list=[...DB.committee].sort((a,b)=>(Number(a.sortOrder)||0)-(Number(b.sortOrder)||0));
  return `
  ${backHead('Fest Committee','more')}
  <p class="page-sub">Meet the people behind DEMO CRAZY.</p>
  ${list.map(c=>`
    <div class="card committee-card">
      <div class="role">${esc(c.role)}</div>
      <div class="cc-row">
        ${contactPhoto(c)}
        <div style="flex:1;min-width:0;">
          <div class="cc-name">${esc(c.name)}</div>
        </div>
      </div>
    </div>`).join('')}
  `;
}

/* ============================= CONTACT US ============================= */
function pageContact(){
  const list=[...DB.contacts].sort((a,b)=>(Number(a.sortOrder)||0)-(Number(b.sortOrder)||0));
  return `
  ${backHead('Contact Us','more')}
  <p class="page-sub">Contact the fest organizers.</p>
  ${list.map(c=>`
    <div class="card committee-card">
      <div class="role">${esc(c.role)}</div>
      <div class="cc-row">
        ${contactPhoto(c)}
        <div style="flex:1;min-width:0;">
          <div class="cc-name">${esc(c.name)}</div>
          <div class="cc-phone">${ic('phone',13)} ${esc(c.phone)}</div>
        </div>
        <a class="btn btn-primary" href="tel:${String(c.phone||'').replace(/[^+0-9]/g,'')}" style="padding:9px 12px;font-size:11px;">Call</a>
      </div>
    </div>`).join('')}
  `;
}

/* ============================= ABOUT ============================= */
function pageAbout(){
  const content=DB.aboutContent || 'DEMO CRAZY is a campus-wide festival bringing together music, dance, art and ideas over three days.';
  return `
  ${backHead('About','more')}
  <div class="card about-card" style="padding:20px;">
    <div class="brand-mark" style="margin-bottom:14px;"></div>
    <div style="font-family:var(--ff-display);font-size:17px;font-weight:700;margin-bottom:8px;">DEMO CRAZY</div>
    <p style="color:var(--text-dim);font-size:13px;line-height:1.7;margin:0;white-space:pre-wrap;">${esc(content)}</p>
  </div>`;
}

/* ============================= ADMIN: LOGIN ============================= */
function pageAdminLogin(){
  if(STATE.adminLoggedIn){ STATE.route='admin-dash'; return pageAdminDash(); }
  return `
  ${backHead('Admin','more')}
  <div class="login-wrap">
    <div class="login-logo"></div>
    <div class="card login-card">
      <div style="text-align:center;margin-bottom:18px;">
        <div style="font-family:var(--ff-display);font-size:16px;font-weight:700;">Organizer Login</div>
        <div style="color:var(--text-dim);font-size:12px;margin-top:4px;">Secure organizer access</div>
      </div>
      <form onsubmit="doAdminLogin(event)">
        <div class="field"><label>Username</label><input id="au" required autocomplete="username"></div>
        <div class="field"><label>Password</label><input id="ap" type="password" required autocomplete="current-password"></div>
        <button class="btn btn-primary btn-block" type="submit">${ic('shield',16)} Log in</button>
      </form>
    </div>
  </div>`;
}
function doAdminLogin(ev){
  ev.preventDefault();
  const u=document.getElementById('au').value.trim();
  const p=document.getElementById('ap').value;
  const account=ADMINS.find(a=>a.username===u && a.password===p);
  if(account){ CURRENT_ADMIN={...account}; STATE.adminLoggedIn=true; toast(`Welcome back, ${account.name}`); nav('admin-dash'); }
  else toast('Invalid credentials');
}
function adminLogout(){ CURRENT_ADMIN=null; STATE.adminLoggedIn=false; toast('Logged out'); nav('home'); }
function isSuperAdmin(){ return !!CURRENT_ADMIN && CURRENT_ADMIN.role==='SUPER'; }
function requireAdmin(body){ if(!STATE.adminLoggedIn || !CURRENT_ADMIN) return pageAdminLogin(); return body(); }
function requireSuperAdmin(body){
  if(!STATE.adminLoggedIn || !CURRENT_ADMIN) return pageAdminLogin();
  if(!isSuperAdmin()) return `${backHead('Access Denied','admin-dash')}<div class="card" style="padding:22px;text-align:center;"><div style="font-size:32px;margin-bottom:10px;">🔒</div><b>Super Admin access required</b><p style="color:var(--text-dim);font-size:12px;line-height:1.6;">Normal Admin accounts can manage Results and Announcements only.</p><button class="btn btn-primary btn-block" onclick="nav('admin-dash')">Back to Dashboard</button></div>`;
  return body();
}

/* ============================= ADMIN: DASHBOARD ============================= */
function pageAdminDash(){
  return requireAdmin(()=>`
  <div class="subpage-head"><button class="icon-btn" onclick="nav('more')">${ic('back',18)}</button><h1>Admin Dashboard</h1><button class="icon-btn" style="margin-left:auto;" onclick="adminLogout()" title="Log out">${ic('x',16)}</button></div>
  <div class="hint-box" style="margin-bottom:14px;"><b>${CURRENT_ADMIN.role==='SUPER'?'Super Admin':'Normal Admin'}</b> · ${CURRENT_ADMIN.name}</div>
  <div class="stat-grid"><div class="card stat-card"><div class="n">${DB.participants.length}</div><div class="l">Total Participants</div></div><div class="card stat-card"><div class="n">${DB.teams.length}</div><div class="l">Total Teams</div></div><div class="card stat-card"><div class="n">${DB.events.length}</div><div class="l">Total Events</div></div><div class="card stat-card"><div class="n">${DB.results.length}</div><div class="l">Total Results</div></div></div>
  <div class="admin-grid">
    ${isSuperAdmin()?`${adminTile('admin-participants','users','Participants','Add & edit participants')}${adminTile('admin-teams','team','Teams','Manage teams & leaders')}${adminTile('admin-events','events','Events','Create & update events')}${adminTile('admin-registrations','check','Registrations','Register by chest no.')}`:''}
    ${adminTile('admin-results','award','Results','Enter event results')}${adminTile('admin-announcements','megaphone','Announcements','Publish updates')}${isSuperAdmin()?adminTile('admin-about','info','About Fest','Edit fest information'):''}
    ${isSuperAdmin()?`${adminTile('admin-committee','users','Fest Committee','Manage names, roles & photos')}${adminTile('admin-contact','phone','Contact Us','Manage names, roles, phones & photos')}${adminTile('admin-report','doc','Final Report','Generate full report')}${adminTile('admin-management','shield','Admin Management','Add, edit & remove admins')}`:''}
  </div>`);
}
function adminTile(route,icon,title,sub){ return `<a class="card admin-tile" onclick="nav('${route}')"><div class="ai">${ic(icon,18)}</div><b>${title}</b><span>${sub}</span></a>`; }

/* ============================= ADMIN: ADMIN MANAGEMENT ============================= */
function pageAdminManagement(){
  return requireSuperAdmin(()=>`${backHead('Admin Management','admin-dash')}<div class="hint-box"><b>Super Admin only.</b> Create and manage organizer accounts. Normal Admin accounts have access to Results and Announcements only.</div><button class="btn btn-primary btn-block" style="margin:14px 0 16px;" onclick="openAdminForm()">${ic('plus',16)} Add Admin</button>${ADMINS.map(a=>`<div class="card" style="padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;gap:12px;"><div class="tc-badge" style="width:38px;height:38px;font-size:12px;margin:0;">${a.role==='SUPER'?'SA':'A'}</div><div style="flex:1;min-width:0;"><div style="font-weight:700;font-size:13.5px;">${a.name}</div><div style="font-size:11px;color:var(--text-dim);">@${a.username} · ${a.role==='SUPER'?'Super Admin':'Normal Admin'}</div></div><div class="row-actions"><button class="mini-btn" onclick="openAdminForm('${a.id}')">Edit</button>${a.id!=='sa1'&&a.id!==CURRENT_ADMIN.id?`<button class="mini-btn" onclick="deleteAdmin('${a.id}')">Delete</button>`:''}</div></div>`).join('')}`);
}
function openAdminForm(id){
  const a=id?ADMINS.find(x=>x.id===id):null;
  openModal(`<div class="modal-head"><h3>${a?'Edit Admin':'Add Admin'}</h3><button class="icon-btn" onclick="closeModal()">${ic('x',16)}</button></div><form onsubmit="saveAdmin(event,'${id||''}')"><div class="field"><label>Name</label><input id="ad-name" required value="${a?a.name:''}"></div><div class="field"><label>Username</label><input id="ad-user" required autocomplete="off" value="${a?a.username:''}"></div><div class="field"><label>Password</label><input id="ad-pass" type="password" required autocomplete="new-password" value="${a?a.password:''}"></div><div class="field"><label>Role</label><select id="ad-role"><option value="NORMAL" ${a&&a.role==='NORMAL'?'selected':''}>Normal Admin</option><option value="SUPER" ${a&&a.role==='SUPER'?'selected':''}>Super Admin</option></select></div><button class="btn btn-primary btn-block" type="submit">${ic('check',16)} Save Admin</button></form>`);
}
function saveAdmin(ev,id){
  ev.preventDefault(); const name=document.getElementById('ad-name').value.trim(), username=document.getElementById('ad-user').value.trim(), password=document.getElementById('ad-pass').value, role=document.getElementById('ad-role').value;
  if(ADMINS.some(a=>a.username===username&&a.id!==id)){toast('Username already exists');return;}
  if(id){const a=ADMINS.find(x=>x.id===id);a.name=name;a.username=username;a.password=password;a.role=role;if(CURRENT_ADMIN&&CURRENT_ADMIN.id===id)CURRENT_ADMIN={...a};toast('Admin updated');}
  else{ADMINS.push({id:adminUid(),name,username,password,role});toast('Admin added');}
  closeModal();render();
}
function deleteAdmin(id){if(id==='sa1'||(CURRENT_ADMIN&&CURRENT_ADMIN.id===id)){toast('This admin cannot be deleted');return;}const a=ADMINS.find(x=>x.id===id);if(!a)return;ADMINS=ADMINS.filter(x=>x.id!==id);toast(`${a.name} deleted`);render();}

/* ============================= ADMIN: PARTICIPANTS ============================= */
function pageAdminParticipants(){
  return requireSuperAdmin(()=>`
  ${backHead('Participants','admin-dash')}
  <div class="hint-box"><b>Team setup flow:</b> Create Team → Add Participants → Edit Team → Assign Leader(s). A leader is always an existing participant and can compete like everyone else.</div>
  <button class="btn btn-primary btn-block" style="margin-bottom:16px;" onclick="openParticipantForm()">${ic('plus',16)} Add Participant</button>
  <div class="card" style="padding:6px 10px;overflow-x:auto;">
  <table class="admin-table">
    <tr><th>Name</th><th>Chest</th><th>Team</th><th>Pts</th><th></th></tr>
    ${[...DB.participants].sort((a,b)=>String(a.chest).localeCompare(String(b.chest),undefined,{numeric:true})).map(p=>`
      <tr><td>${p.name}</td><td>#${p.chest}</td><td>${team(p.teamId)?.name||'—'}</td><td>${p.points}</td>
      <td><div class="row-actions"><button class="mini-btn" onclick="openParticipantForm('${p.id}')">Edit</button><button class="mini-btn danger" onclick="deleteParticipant('${p.id}')">Delete</button></div></td></tr>
    `).join('')}
  </table>
  </div>
  `);
}
function openParticipantForm(id){
  const p = id ? participant(id) : null;
  openModal(`
    <div class="modal-head"><h3>${p?'Edit Participant':'Add Participant'}</h3><button class="icon-btn" onclick="closeModal()">${ic('x',16)}</button></div>
    <form onsubmit="saveParticipant(event,'${id||''}')">
      <div class="field"><label>Name</label><input id="pf-name" required value="${p?p.name:''}"></div>
      <div class="form-row2">
        <div class="field"><label>Chest Number</label><input id="pf-chest" required value="${p?p.chest:''}"></div>
        <div class="field"><label>Team</label><select id="pf-team">${DB.teams.map(t=>`<option value="${t.id}" ${p&&p.teamId===t.id?'selected':''}>${t.name}</option>`).join('')}</select></div>
      </div>
      <button class="btn btn-primary btn-block" type="submit">${ic('check',16)} Save Participant</button>
    </form>
  `);
}
function saveParticipant(ev,id){
  ev.preventDefault();
  const name=document.getElementById('pf-name').value.trim();
  const chest=document.getElementById('pf-chest').value.trim();
  const teamId=document.getElementById('pf-team').value;
  if(id){
    const p=participant(id); p.name=name; p.chest=chest; p.teamId=teamId;
    toast('Participant updated');
  }else{
    DB.participants.push({id:uid('p'),name,chest,teamId,points:0});
    toast('Participant added');
  }
  closeModal(); render();
}

/* ============================= ADMIN: TEAMS ============================= */
function pageAdminTeams(){
  return requireSuperAdmin(()=>`
  ${backHead('Teams','admin-dash')}
  <button class="btn btn-primary btn-block" style="margin-bottom:16px;" onclick="openTeamForm()">${ic('plus',16)} Add Team</button>
  ${DB.teams.map(t=>`
    <div class="card" style="padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;gap:12px;">
      <div class="tc-badge" style="width:36px;height:36px;font-size:12px;margin:0;background:linear-gradient(145deg,${t.color},#0a0a0a)">${initials(t.name)}</div>
      <div style="flex:1;"><div style="font-weight:700;font-size:13.5px;">${t.name}</div>
      <div style="font-size:11px;color:var(--text-dim);">${DB.participants.filter(p=>p.teamId===t.id).length} members · ${t.leaderIds.length} leader(s)</div></div>
      <div class="row-actions"><button class="mini-btn" onclick="openTeamForm('${t.id}')">Edit</button><button class="mini-btn danger" onclick="deleteTeam('${t.id}')">Delete</button></div>
    </div>
  `).join('')}
  `);
}
function openTeamForm(id){
  const t = id ? team(id) : null;
  const members = t ? DB.participants.filter(p=>p.teamId===t.id).sort((a,b)=>String(a.chest).localeCompare(String(b.chest),undefined,{numeric:true})) : [];
  const leaderIds = t && Array.isArray(t.leaderIds) ? t.leaderIds : [];
  openModal(`
    <div class="modal-head"><h3>${t?'Edit Team':'Add Team'}</h3><button class="icon-btn" onclick="closeModal()">${ic('x',16)}</button></div>
    <form onsubmit="saveTeam(event,'${id||''}')">
      <div class="field"><label>Team Name</label><input id="tf-name" required value="${t?t.name:''}"></div>
      <div class="field"><label>Team Color</label><input id="tf-color" type="color" value="${t?t.color:'#8b5cf6'}" style="height:44px;padding:4px;"></div>
      ${id ? `<div class="field"><label>Team Leaders</label><select id="tf-leader" multiple size="4">${members.map(m=>`<option value="${m.id}" ${leaderIds.includes(m.id)?'selected':''}>${m.name} · #${m.chest}</option>`).join('')}</select><div class="hint">Select one or more leaders.</div></div>` : ''}
      <button class="btn btn-primary btn-block" type="submit">${ic('check',16)} Save Team</button>
    </form>
  `);
}
function saveTeam(ev,id){
  ev.preventDefault();
  const name=document.getElementById('tf-name').value.trim();
  const color=document.getElementById('tf-color').value;
  if(id){
    const t=team(id);
    t.name=name; t.color=color;
    toast('Team updated');
  }else{
    DB.teams.push({id:uid('t'),name,color,leaderIds:[]});
    toast('Team added');
  }
  closeModal(); render();
}

/* ============================= ADMIN: PARTICIPANT VIDEOS ============================= */
function openParticipantVideos(eventId){
  const ev=event_(eventId); if(!ev) return;
  const registered=(window._registrations||[]).filter(r=>r.eid===eventId).map(r=>participant(r.pid)).filter(Boolean).sort((a,b)=>String(a.chest).localeCompare(String(b.chest),undefined,{numeric:true}));
  const rows=registered.length ? registered.map(p=>{
    const url=eventParticipantVideo(eventId,p.id);
    return `<div class="card" style="padding:12px;margin-bottom:10px;">
      <div style="font-weight:800;font-size:13px;margin-bottom:8px;">${esc(p.name)} <span style="color:var(--text-faint);font-weight:600;">#${esc(p.chest)}</span></div>
      <div style="display:flex;gap:8px;align-items:center;">
        <input id="pv-${p.id}" type="url" placeholder="https://video-link..." value="${escAttr(url)}" style="flex:1;min-width:0;">
        <button class="mini-btn" type="button" onclick="saveParticipantVideo('${eventId}','${p.id}')">Save</button>
      </div>
      ${url?`<div style="margin-top:7px;font-size:10px;color:var(--text-dim);">Video link saved</div>`:''}
    </div>`;
  }).join('') : `<div class="empty">${ic('users',36)}<b>No registered participants</b>Register participants for this event first.</div>`;
  openModal(`<div class="modal-head"><h3>Participant Videos</h3><button class="icon-btn" onclick="closeModal()">${ic('x',16)}</button></div>
    <div class="hint-box" style="margin-bottom:12px;"><b>${esc(ev.name)}</b><br>Each participant can have a separate video link.</div>${rows}`);
}
async function saveParticipantVideo(eventId,participantId){
  const input=document.getElementById(`pv-${participantId}`); if(!input) return;
  const videoUrl=input.value.trim();
  if(videoUrl && !/^https?:\/\//i.test(videoUrl)){ toast('Enter a valid video URL'); return; }
  if(!videoUrl){
    const {error}=await sb.from('event_participant_videos').delete().eq('event_id',eventId).eq('participant_id',participantId);
    if(error){sbToastError(error,'Could not remove video');return;}
  }else{
    const payload={event_id:eventId,participant_id:participantId,video_url:videoUrl,updated_at:new Date().toISOString()};
    const {error}=await sb.from('event_participant_videos').upsert(payload,{onConflict:'event_id,participant_id'});
    if(error){sbToastError(error,'Could not save video');return;}
  }
  await loadRemoteDB(); openParticipantVideos(eventId); toast(videoUrl?'Video saved':'Video removed');
}

/* ============================= ADMIN: EVENTS ============================= */
function pageAdminEvents(){
  return requireSuperAdmin(()=>`
  ${backHead('Events','admin-dash')}
  <button class="btn btn-primary btn-block" style="margin-bottom:16px;" onclick="openEventForm()">${ic('plus',16)} Add Event</button>
  <div class="card" style="padding:6px 10px;overflow-x:auto;">
  <table class="admin-table">
    <tr><th>Event</th><th>Date</th><th>Time</th><th>Status</th><th></th></tr>
    ${DB.events.map(e=>`
      <tr><td>${e.name}</td><td>${fmtDate(e.date)}</td><td>${fmtTime(e.time)}</td><td>${statusChip(e.status)}</td>
      <td><div class="row-actions"><button class="mini-btn" onclick="openParticipantVideos('${e.id}')">Videos</button><button class="mini-btn" onclick="openEventForm('${e.id}')">Edit</button><button class="mini-btn danger" onclick="deleteEvent('${e.id}')">Delete</button></div></td></tr>
    `).join('')}
  </table>
  </div>
  `);
}
function openEventForm(id){
  const e = id ? event_(id) : null;
  openModal(`
    <div class="modal-head"><h3>${e?'Edit Event':'Add Event'}</h3><button class="icon-btn" onclick="closeModal()">${ic('x',16)}</button></div>
    <form onsubmit="saveEvent(event,'${id||''}')">
      <div class="field"><label>Event Name</label><input id="ef-name" required value="${e?e.name:''}"></div>
      <div class="form-row2">
        <div class="field"><label>Date</label><input id="ef-date" type="date" required value="${e?e.date:new Date().toISOString().slice(0,10)}"></div>
        <div class="field"><label>Time</label><input id="ef-time" type="time" required value="${e?e.time:'10:00'}"></div>
      </div>
      <div class="field"><label>Status</label><select id="ef-status">
        ${['LIVE','UPCOMING','COMPLETED'].map(s=>`<option value="${s}" ${e&&e.status===s?'selected':''}>${s}</option>`).join('')}
      </select></div>
      <button class="btn btn-primary btn-block" type="submit">${ic('check',16)} Save Event</button>
    </form>
  `);
}
function saveEvent(ev,id){
  ev.preventDefault();
  const name=document.getElementById('ef-name').value.trim();
  const date=document.getElementById('ef-date').value;
  const time=document.getElementById('ef-time').value;
  const status=document.getElementById('ef-status').value;
  if(id){ const e=event_(id); e.name=name; e.date=date; e.time=time; e.status=status; toast('Event updated'); }
  else{ DB.events.push({id:uid('e'),name,date,time,status}); toast('Event added'); }
  closeModal(); render();
}

/* ============================= ADMIN: REGISTRATIONS ============================= */
function pageAdminRegistrations(){
  const selected = (window._registrations||[]).filter(r=>r.eid===DB.events[0]?.id);
  return requireSuperAdmin(()=>{
    const selectedEventId = document.getElementById('reg-event')?.value || DB.events[0]?.id || '';
    return `
    ${backHead('Registrations','admin-dash')}
    <div class="card" style="padding:18px;">
      <div class="field">
        <label>Event</label>
        <select id="reg-event" onchange="renderSelectedEventRegistrations()">
          ${DB.events.map(e=>`<option value="${e.id}">${e.name}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label>Chest Number</label>
        <input id="reg-chest" placeholder="e.g. 101" oninput="regLookup()">
      </div>
      <div id="reg-preview"></div>
      <button class="btn btn-primary btn-block" onclick="doRegister()">${ic('check',16)} Register Participant</button>
    </div>

    <div class="section-head" style="margin-top:22px;">
      <div>
        <div class="eyebrow">Event Participants</div>
        <h2 id="selected-event-title">${DB.events[0]?.name||'Selected Event'}</h2>
      </div>
    </div>
    <div id="selected-event-participants">${renderSelectedEventList(DB.events[0]?.id||'')}</div>
    `;
  });
}

function renderSelectedEventList(eid){
  const e=event_(eid);
  const rows=(window._registrations||[]).filter(r=>r.eid===eid).map(r=>{
    const p=participant(r.pid);
    const t=p ? team(p.teamId) : null;
    return p ? `
      <div class="rank-row">
        <div class="avatar">${initials(p.name)}</div>
        <div class="rank-info">
          <div class="name">${p.name} <span style="color:var(--text-faint);font-weight:600;">#${p.chest}</span></div>
          <div class="sub">${t?.name||'No team'}</div>
        </div>
        <button class="mini-btn danger" onclick="deleteRegistration('${r.id}')">Delete</button>
      </div>` : '';
  }).join('');
  return rows || `<div class="empty">${ic('users',36)}<b>No participants registered</b>Select an event and register participants.</div>`;
}

function renderSelectedEventRegistrations(){
  const sel=document.getElementById('reg-event');
  if(!sel) return;
  const eid=sel.value;
  const title=document.getElementById('selected-event-title');
  const list=document.getElementById('selected-event-participants');
  const e=event_(eid);
  if(title) title.textContent=e?.name||'Selected Event';
  if(list) list.innerHTML=renderSelectedEventList(eid);
}

window._registrations = window._registrations || [];
function renderRegList(){
  if(!window._registrations.length) return `<div class="empty">No registrations yet.</div>`;
  return window._registrations.slice().reverse().map(r=>{
    const p=participant(r.pid), e=event_(r.eid);
    return `<div class="rank-row"><div class="avatar">${initials(p.name)}</div>
    <div class="rank-info"><div class="name">${p.name} · #${p.chest}</div><div class="sub">${e.name}</div></div></div>`;
  }).join('');
}
function regLookup(){
  const chest=document.getElementById('reg-chest').value.trim();
  const eid=document.getElementById('reg-event').value;
  const p=DB.participants.find(x=>x.chest===chest);
  const already=p && (window._registrations||[]).some(r=>r.eid===eid && r.pid===p.id);
  document.getElementById('reg-preview').innerHTML = p
    ? (already
      ? `<div class="hint-box" style="border-color:rgba(255,184,77,.35);"><b>${p.name}</b> · #${p.chest}<br><span style="color:var(--flare);">Already registered for this event.</span></div>`
      : `<div class="hint-box"><b>${p.name}</b> · ${team(p.teamId)?.name}</div>`)
    : (chest ? `<div class="hint-box">No participant found for chest #${chest}</div>` : '');
}

function doRegister(){
  const eid=document.getElementById('reg-event').value;
  const chest=document.getElementById('reg-chest').value.trim();
  const p=DB.participants.find(x=>x.chest===chest);
  if(!p){ toast('No participant with that chest number'); return; }

  const exists=(window._registrations||[]).some(r=>r.eid===eid && r.pid===p.id);
  if(exists){
    const box=document.getElementById('reg-preview');
    if(box) box.innerHTML=`<div class="hint-box" style="border-color:rgba(255,184,77,.35);"><b>${p.name}</b> · #${p.chest}<br><span style="color:var(--flare);">Already registered for this event.</span></div>`;
    toast('Already registered for this event');
    return;
  }

  window._registrations.push({eid,pid:p.id});
  toast('Registered '+p.name);
  document.getElementById('reg-chest').value='';
  document.getElementById('reg-preview').innerHTML='';
  renderSelectedEventRegistrations();
}

/* ============================= ADMIN: RESULTS ============================= */
function pageAdminResults(){
  return requireAdmin(()=>{
    const prizeLabel = (p) => p==='1'?'1ST':p==='2'?'2ND':p==='3'?'3RD':'NO PRIZE';
    return `
    ${backHead('Enter Results','admin-dash')}
    <div class="card" style="padding:18px;">
      <div class="field"><label>Event</label><select id="res-event">${DB.events.map(e=>`<option value="${e.id}">${e.name}</option>`).join('')}</select></div>
      <div class="field"><label>Chest Number</label><input id="res-chest" placeholder="e.g. 101" oninput="resLookup()"></div>
      <div id="res-preview"></div>

      <div class="field"><label>Prize</label><select id="res-prize" onchange="syncResultPoints()">
        <option value="">NO PRIZE</option>
        <option value="1ST">1ST</option>
        <option value="2">2ND</option>
        <option value="3">3RD</option>
      </select></div>

      <div class="field"><label>Grade</label><select id="res-grade">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="">NO GRADE</option>
      </select></div>

      <div class="field"><label>Points</label><input id="res-points" type="number" value="0"></div>
      <button class="btn btn-primary btn-block" onclick="doSaveResult()">${ic('check',16)} Save Result</button>
    </div>
    <div class="hint-box" style="margin-top:14px;">Prize is optional. Every participant can receive A, B, C or No Grade. Only 1st, 2nd and 3rd receive prize points.</div>

    <div class="section-head"><h2>All Results</h2></div>
    <div class="card" style="padding:6px 10px;overflow-x:auto;">
    <table class="admin-table">
      <tr><th>Event</th><th>Prize</th><th>Grade</th><th>Participant</th><th>Team</th><th>Pts</th><th></th></tr>
      ${DB.results.map(r=>{
        const p=participant(r.participantId);
        return `<tr>
          <td>${event_(r.eventId).name}</td>
          <td>${prizeLabel(r.position)}</td>
          <td>${r.grade || 'NO GRADE'}</td>
          <td>${p.name} #${p.chest}</td>
          <td>${team(p.teamId)?.name}</td>
          <td>${r.points}</td>
          <td><div class="row-actions"><button class="mini-btn" onclick="editResult('${r.id}')">Edit</button><button class="mini-btn danger" onclick="deleteResult('${r.id}')">Delete</button></div></td>
        </tr>`;
      }).join('')}
    </table>
    </div>
    `;
  });
}
function syncResultPoints(){
  const prize=document.getElementById('res-prize')?.value;
  const points=document.getElementById('res-points');
  if(!points) return;
  points.value = prize==='1ST' ? 10 : prize==='2' ? 7 : prize==='3' ? 5 : 0;
}
function resLookup(){
  const chest=document.getElementById('res-chest').value.trim();
  const p=DB.participants.find(x=>x.chest===chest);
  document.getElementById('res-preview').innerHTML = p
    ? `<div class="hint-box"><b>${p.name}</b> · ${team(p.teamId)?.name}</div>`
    : (chest ? `<div class="hint-box">No participant found for chest #${chest}</div>` : '');
}
function doSaveResult(){
  const eid=document.getElementById('res-event').value;
  const chest=document.getElementById('res-chest').value.trim();
  const prize=document.getElementById('res-prize').value;
  const grade=document.getElementById('res-grade').value || '';
  const position=prize ? Number(prize) : 0;
  const points=Number(document.getElementById('res-points').value)||0;
  const p=DB.participants.find(x=>x.chest===chest);
  if(!p){ toast('No participant with that chest number'); return; }

  const existing = DB.results.find(r=>r.eventId===eid && r.participantId===p.id);
  if(existing){
    existing.position=position;
    existing.prize=prize;
    existing.grade=grade;
    existing.points=points;
  } else {
    DB.results.push({id:uid('r'),eventId:eid,position,prize,grade,participantId:p.id,points});
  }

  recalc();
  toast('Result saved · leaderboards updated');
  document.getElementById('res-chest').value='';
  document.getElementById('res-preview').innerHTML='';
  render();
}

/* ============================= ADMIN: ANNOUNCEMENTS ============================= */
function pageAdminAnnouncements(){
  return requireAdmin(()=>`
  ${backHead('Announcements','admin-dash')}
  <button class="btn btn-primary btn-block" style="margin-bottom:16px;" onclick="openAnnForm()">${ic('plus',16)} Add Announcement</button>
  ${[...DB.announcements].sort((a,b)=>new Date(b.date)-new Date(a.date)).map(a=>`
    <div class="card announce-card">
      <div class="a-top"><h4>${a.title}</h4><div class="row-actions"><button class="mini-btn" onclick="openAnnForm('${a.id}')">Edit</button><button class="mini-btn danger" onclick="deleteAnnouncement('${a.id}')">Delete</button></div></div>
      <p>${a.message}</p><div class="a-date" style="margin-top:8px;">${fmtDateTime(a.date)}</div>
    </div>`).join('')}
  `);
}
function openAnnForm(id){
  const a = id ? DB.announcements.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h3>${a?'Edit Announcement':'Add Announcement'}</h3><button class="icon-btn" onclick="closeModal()">${ic('x',16)}</button></div>
    <form onsubmit="saveAnn(event,'${id||''}')">
      <div class="field"><label>Title</label><input id="an-title" required value="${a?a.title:''}"></div>
      <div class="field"><label>Message</label><textarea id="an-msg" required>${a?a.message:''}</textarea></div>
      <button class="btn btn-primary btn-block" type="submit">${ic('check',16)} Publish Announcement</button>
    </form>
  `);
}
function saveAnn(ev,id){
  ev.preventDefault();
  const title=document.getElementById('an-title').value.trim();
  const message=document.getElementById('an-msg').value.trim();
  if(id){ const a=DB.announcements.find(x=>x.id===id); a.title=title; a.message=message; toast('Announcement updated'); }
  else{ DB.announcements.push({id:uid('a'),title,message,date:new Date().toISOString()}); toast('Announcement published'); }
  closeModal(); render();
}

/* ============================= ADMIN: FEST COMMITTEE ============================= */
function pageAdminCommittee(){
  return requireSuperAdmin(()=>{
    const list=[...DB.committee].sort((a,b)=>(Number(a.sortOrder)||0)-(Number(b.sortOrder)||0));
    return `
    ${backHead('Fest Committee','admin-dash')}
    <p class="page-sub">Name, Role and Photo only. Drag profiles to change the public order.</p>
    <button class="btn btn-primary btn-block" style="margin-bottom:16px;" onclick="openCommForm()">${ic('plus',16)} Add Profile</button>
    <div id="committeeAdminList" class="drag-list">
    ${list.map(c=>`
      <div class="card committee-card drag-card" draggable="true" data-id="${c.id}" ondragstart="committeeDragStart(event)" ondragover="committeeDragOver(event)" ondrop="committeeDrop(event)" ondragend="committeeDragEnd(event)">
        <div class="a-top" style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <div class="role">${esc(c.role)}</div><div class="drag-handle" title="Drag to reorder" onpointerdown="committeePointerStart(event)">↕</div>
          <div class="row-actions"><button class="mini-btn" onclick="openCommForm('${c.id}')">Edit</button><button class="mini-btn danger" onclick="deleteCommittee('${c.id}')">Delete</button></div>
        </div>
        <div class="cc-row">${contactPhoto(c)}<div><div class="cc-name">${esc(c.name)}</div></div></div>
      </div>`).join('')}
    </div>`;
  });
}
let committeeDragId=null;
function committeeDragStart(ev){ committeeDragId=ev.currentTarget.dataset.id; ev.currentTarget.classList.add('dragging'); ev.dataTransfer.effectAllowed='move'; ev.dataTransfer.setData('text/plain',committeeDragId); }
function committeeDragOver(ev){ ev.preventDefault(); const card=ev.currentTarget; if(card.dataset.id!==committeeDragId){ card.classList.add('drag-over'); } }
function committeeDragEnd(ev){ ev.currentTarget.classList.remove('dragging'); document.querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over')); }
let committeePointerSource=null, committeePointerTarget=null;
function committeePointerStart(ev){
  const card=ev.currentTarget.closest('.drag-card'); if(!card) return;
  ev.preventDefault(); committeePointerSource=card; committeePointerTarget=null; card.classList.add('dragging');
  ev.currentTarget.setPointerCapture?.(ev.pointerId);
  const move=e=>{
    if(!committeePointerSource) return;
    const under=document.elementFromPoint(e.clientX,e.clientY)?.closest('.drag-card');
    document.querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over'));
    if(under && under!==committeePointerSource){ under.classList.add('drag-over'); committeePointerTarget=under; }
  };
  const up=async e=>{
    document.removeEventListener('pointermove',move); document.removeEventListener('pointerup',up);
    const source=committeePointerSource, target=committeePointerTarget; committeePointerSource=null; committeePointerTarget=null;
    source?.classList.remove('dragging'); document.querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over'));
    if(source&&target) await committeeReorder(source.dataset.id,target.dataset.id);
  };
  document.addEventListener('pointermove',move,{passive:false}); document.addEventListener('pointerup',up,{once:true});
}
async function committeeReorder(sourceId,targetId){
  if(!sourceId || !targetId || sourceId===targetId) return;
  const list=[...DB.committee].sort((a,b)=>(Number(a.sortOrder)||0)-(Number(b.sortOrder)||0));
  const from=list.findIndex(x=>x.id===sourceId), to=list.findIndex(x=>x.id===targetId); if(from<0||to<0) return;
  const [moved]=list.splice(from,1); list.splice(to,0,moved);
  try{
    const updates=list.map((c,i)=>sb.from('committee').update({sort_order:i}).eq('id',c.id));
    const results=await Promise.all(updates); const failed=results.find(r=>r.error); if(failed?.error) throw failed.error;
    await loadRemoteDB(); render(); toast('Committee order updated');
  }catch(e){sbToastError(e,'Could not update committee order');}
}
async function committeeDrop(ev){
  ev.preventDefault();
  const target=ev.currentTarget, targetId=target.dataset.id, sourceId=committeeDragId || ev.dataTransfer.getData('text/plain');
  document.querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over'));
  await committeeReorder(sourceId,targetId);
}
function openCommForm(id){
  const c = id ? DB.committee.find(x=>x.id===id) : null;
  pendingContactPhoto = c && c.photo ? c.photo : "";
  openModal(`
    <div class="modal-head"><h3>${c?'Edit Profile':'Add Committee Profile'}</h3><button class="icon-btn" onclick="closeModal()">${ic('x',16)}</button></div>
    <form onsubmit="saveComm(event,'${id||''}')">
      <div class="field"><label>Role</label><input id="cf-role" required value="${c?escAttr(c.role):''}"></div>
      <div class="field"><label>Name</label><input id="cf-name" required value="${c?escAttr(c.name):''}"></div>
      <div class="field"><label>Photo (Optional)</label><input class="contact-photo-input" id="commPhoto" type="file" accept="image/*" onchange="previewContactPhoto(event)"><img id="commPhotoPreview" class="contact-photo-preview" src="${c&&c.photo?c.photo:''}" alt="Committee photo preview" style="display:${c&&c.photo?'block':'none'}"></div>
      <button class="btn btn-primary btn-block" type="submit">${ic('check',16)} Save Profile</button>
    </form>`);
}

/* ============================= ADMIN: CONTACT US ============================= */
function pageAdminContact(){
  return requireSuperAdmin(()=>{
    const list=[...DB.contacts].sort((a,b)=>(Number(a.sortOrder)||0)-(Number(b.sortOrder)||0));
    return `
    ${backHead('Contact Us','admin-dash')}
    <p class="page-sub">Name, Role, Phone Number and Photo. Drag contacts to change the public order.</p>
    <button class="btn btn-primary btn-block" style="margin-bottom:16px;" onclick="openContactForm()">${ic('plus',16)} Add Contact</button>
    <div id="contactAdminList" class="drag-list">
    ${list.map(c=>`
      <div class="card committee-card drag-card contact-drag-card" draggable="true" data-id="${c.id}" ondragstart="contactDragStart(event)" ondragover="contactDragOver(event)" ondrop="contactDrop(event)" ondragend="contactDragEnd(event)">
        <div class="a-top" style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <div class="role">${esc(c.role)}</div><div class="drag-handle" title="Drag to reorder" onpointerdown="contactPointerStart(event)">↕</div>
          <div class="row-actions"><button class="mini-btn" onclick="openContactForm('${c.id}')">Edit</button><button class="mini-btn danger" onclick="deleteContact('${c.id}')">Delete</button></div>
        </div>
        <div class="cc-row">${contactPhoto(c)}<div><div class="cc-name">${esc(c.name)}</div><div class="cc-phone">${ic('phone',13)} ${esc(c.phone)}</div></div></div>
      </div>`).join('')}
    </div>`;
  });
}
let contactDragId=null;
function contactDragStart(ev){ contactDragId=ev.currentTarget.dataset.id; ev.currentTarget.classList.add('dragging'); ev.dataTransfer.effectAllowed='move'; ev.dataTransfer.setData('text/plain',contactDragId); }
function contactDragOver(ev){ ev.preventDefault(); const card=ev.currentTarget; if(card.dataset.id!==contactDragId){ card.classList.add('drag-over'); } }
function contactDragEnd(ev){ ev.currentTarget.classList.remove('dragging'); document.querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over')); }
let contactPointerSource=null, contactPointerTarget=null;
function contactPointerStart(ev){
  const card=ev.currentTarget.closest('.contact-drag-card'); if(!card) return;
  ev.preventDefault(); contactPointerSource=card; contactPointerTarget=null; card.classList.add('dragging');
  ev.currentTarget.setPointerCapture?.(ev.pointerId);
  const move=e=>{
    if(!contactPointerSource) return;
    const under=document.elementFromPoint(e.clientX,e.clientY)?.closest('.contact-drag-card');
    document.querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over'));
    if(under && under!==contactPointerSource){ under.classList.add('drag-over'); contactPointerTarget=under; }
  };
  const up=async e=>{
    document.removeEventListener('pointermove',move); document.removeEventListener('pointerup',up);
    const source=contactPointerSource, target=contactPointerTarget; contactPointerSource=null; contactPointerTarget=null;
    source?.classList.remove('dragging'); document.querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over'));
    if(source&&target) await contactReorder(source.dataset.id,target.dataset.id);
  };
  document.addEventListener('pointermove',move,{passive:false}); document.addEventListener('pointerup',up,{once:true});
}
async function contactReorder(sourceId,targetId){
  if(!sourceId || !targetId || sourceId===targetId) return;
  const list=[...DB.contacts].sort((a,b)=>(Number(a.sortOrder)||0)-(Number(b.sortOrder)||0));
  const from=list.findIndex(x=>x.id===sourceId), to=list.findIndex(x=>x.id===targetId); if(from<0||to<0) return;
  const [moved]=list.splice(from,1); list.splice(to,0,moved);
  try{
    const updates=list.map((c,i)=>sb.from('contacts').update({sort_order:i}).eq('id',c.id));
    const results=await Promise.all(updates); const failed=results.find(r=>r.error); if(failed?.error) throw failed.error;
    await loadRemoteDB(); render(); toast('Contact order updated');
  }catch(e){sbToastError(e,'Could not update contact order');}
}
async function contactDrop(ev){
  ev.preventDefault();
  const target=ev.currentTarget, targetId=target.dataset.id, sourceId=contactDragId || ev.dataTransfer.getData('text/plain');
  document.querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over'));
  await contactReorder(sourceId,targetId);
}
function openContactForm(id){
  const c = id ? DB.contacts.find(x=>x.id===id) : null;
  pendingContactPhoto = c && c.photo ? c.photo : "";
  openModal(`
    <div class="modal-head"><h3>${c?'Edit Contact':'Add Contact'}</h3><button class="icon-btn" onclick="closeModal()">${ic('x',16)}</button></div>
    <form onsubmit="saveContact(event,'${id||''}')">
      <div class="field"><label>Role</label><input id="ct-role" required value="${c?escAttr(c.role):''}"></div>
      <div class="field"><label>Name</label><input id="ct-name" required value="${c?escAttr(c.name):''}"></div>
      <div class="field"><label>Phone Number</label><input id="ct-phone" required value="${c?escAttr(c.phone):'+91 '}" inputmode="tel"></div>
      <div class="field"><label>Photo (Optional)</label><input class="contact-photo-input" id="contactPhoto" type="file" accept="image/*" onchange="previewContactPhoto(event)"><img id="contactPhotoPreview" class="contact-photo-preview" src="${c&&c.photo?c.photo:''}" alt="Contact photo preview" style="display:${c&&c.photo?'block':'none'}"></div>
      <button class="btn btn-primary btn-block" type="submit">${ic('check',16)} Save Contact</button>
    </form>`);
}

/* ============================= ADMIN: ABOUT FEST ============================= */
function pageAdminAbout(){
  return requireSuperAdmin(()=>`
  ${backHead('About Fest','admin-dash')}
  <p class="page-sub">Edit the About Fest content shown publicly.</p>
  <div class="card" style="padding:16px;">
    <form onsubmit="saveAbout(event)">
      <div class="field"><label>About Fest</label><textarea id="about-editor" rows="10" required>${esc(DB.aboutContent||'')}</textarea></div>
      <button class="btn btn-primary btn-block" type="submit">${ic('check',16)} Save About Fest</button>
    </form>
  </div>`);
}
async function saveAbout(ev){
  ev.preventDefault();
  const content=document.getElementById('about-editor').value.trim();
  const {error}=await sb.from('about_fest').upsert({id:'main',content,updated_at:new Date().toISOString()});
  if(error){sbToastError(error,'Could not save About Fest');return;}
  DB.aboutContent=content; toast('About Fest updated'); nav('about');
}

/* ============================= ADMIN: FINAL REPORT ============================= */
function pageAdminReport(){
  return requireSuperAdmin(()=>`
  ${backHead('Final Report','admin-dash')}
  <p class="page-sub">Compile the complete fest results into one printable report.</p>
  <button class="btn btn-primary btn-block" style="margin-bottom:18px;" onclick="renderReport()">${ic('doc',16)} Generate Final Report</button>
  <div id="reportOut"></div>
  `);
}
function renderReport(){
  const ranked = rankedTeams();
  const champion = ranked[0];
  const withResults = DB.events.filter(e=>DB.results.some(r=>r.eventId===e.id)).sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time));
  const html = `
  <div class="report-doc">
    <h1>DEMO CRAZY — Final Report</h1>
    <div class="rd-sub">Generated ${new Date().toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})}</div>
    ${withResults.map(e=>{
      const res=DB.results.filter(r=>r.eventId===e.id).sort((a,b)=>a.position-b.position);
      return `<h2>${e.name}</h2>${res.map(r=>{const p=participant(r.participantId);
        return `<div class="prize-line"><b>${medalLabel(r.position)} Prize</b> — ${p.name} · #${p.chest} · ${team(p.teamId)?.name}</div>`;}).join('')}`;
    }).join('')}
    <h2>Overall Team Ranking</h2>
    <table>
      <tr><th>Rank</th><th>Team</th><th>Points</th></tr>
      ${ranked.map((t,i)=>`<tr><td>${i+1}</td><td>${t.name}</td><td>${t.points}</td></tr>`).join('')}
    </table>
    <div class="champion-box">
      <div class="cb-label">Champion Team</div>
      <div class="cb-name">🏆 ${champion?champion.name:'—'}</div>
    </div>
  </div>`;
  document.getElementById('reportOut').innerHTML = html;
  toast('Final report generated');
}



/* ============================= ADMIN DELETE / EDIT ACTIONS ============================= */
async function deleteParticipant(id){
  const p=participant(id);
  if(!p) return;
  if(!confirm(`Delete participant "${p.name}" (#${p.chest})? This will also remove their registrations and results.`)) return;
  const {error:rerr}=await sb.from('registrations').delete().eq('participant_id',id);
  if(rerr){sbToastError(rerr,'Could not delete participant');return;}
  const {error:xerr}=await sb.from('results').delete().eq('participant_id',id);
  if(xerr){sbToastError(xerr,'Could not delete participant');return;}
  const {data:teams,error:terr}=await sb.from('teams').select('id,leader_ids');
  if(terr){sbToastError(terr,'Could not delete participant');return;}
  for(const t of (teams||[])){
    const leaders=Array.isArray(t.leader_ids)?t.leader_ids:[];
    if(leaders.includes(id)){
      const {error:ler}=await sb.from('teams').update({leader_ids:leaders.filter(x=>x!==id)}).eq('id',t.id);
      if(ler){sbToastError(ler,'Could not delete participant');return;}
    }
  }
  const {error}=await sb.from('participants').delete().eq('id',id);
  if(error){sbToastError(error,'Could not delete participant');return;}
  await loadRemoteDB(); render(); toast(`${p.name} deleted`);
}

async function deleteTeam(id){
  const t=team(id);
  if(!t) return;
  const count=DB.participants.filter(p=>p.teamId===id).length;
  if(!confirm(`Delete team "${t.name}"?${count?` ${count} participant(s) will be unassigned from this team.`:''}`)) return;
  if(count){
    const {error}=await sb.from('participants').update({team_id:null}).eq('team_id',id);
    if(error){sbToastError(error,'Could not delete team');return;}
  }
  const {error}=await sb.from('teams').delete().eq('id',id);
  if(error){sbToastError(error,'Could not delete team');return;}
  await loadRemoteDB(); render(); toast(`${t.name} deleted`);
}

async function deleteEvent(id){
  const e=event_(id);
  if(!e) return;
  if(!confirm(`Delete event "${e.name}"? This will also remove its registrations and results.`)) return;
  const {error:rr}=await sb.from('registrations').delete().eq('event_id',id);
  if(rr){sbToastError(rr,'Could not delete event');return;}
  const {error:xr}=await sb.from('results').delete().eq('event_id',id);
  if(xr){sbToastError(xr,'Could not delete event');return;}
  const {error}=await sb.from('events').delete().eq('id',id);
  if(error){sbToastError(error,'Could not delete event');return;}
  await loadRemoteDB(); render(); toast(`${e.name} deleted`);
}

async function deleteRegistration(id){
  const r=(window._registrations||[]).find(x=>x.id===id);
  if(!r) return;
  const p=participant(r.pid), e=event_(r.eid);
  if(!confirm(`Remove ${p?.name||'this participant'} from ${e?.name||'this event'}?`)) return;
  const {error}=await sb.from('registrations').delete().eq('id',id);
  if(error){sbToastError(error,'Could not delete registration');return;}
  await loadRemoteDB(); render(); toast('Registration deleted');
}

function editResult(id){
  const r=DB.results.find(x=>x.id===id);
  if(!r) return;
  const p=participant(r.participantId);
  if(!p) return;
  const ev=document.getElementById('res-event'), chest=document.getElementById('res-chest');
  const prize=document.getElementById('res-prize'), grade=document.getElementById('res-grade'), points=document.getElementById('res-points');
  if(ev) ev.value=r.eventId;
  if(chest) chest.value=p.chest;
  if(prize) prize.value=r.prize || (r.position===1?'1ST':r.position===2?'2':r.position===3?'3':'');
  if(grade) grade.value=r.grade||'';
  if(points) points.value=Number(r.points)||0;
  resLookup();
  document.getElementById('res-chest')?.scrollIntoView({behavior:'smooth',block:'center'});
  toast('Result loaded for editing');
}

async function deleteResult(id){
  const r=DB.results.find(x=>x.id===id);
  if(!r) return;
  const p=participant(r.participantId), e=event_(r.eventId);
  if(!confirm(`Delete result for ${p?.name||'participant'} in ${e?.name||'event'}?`)) return;
  const {error}=await sb.from('results').delete().eq('id',id);
  if(error){sbToastError(error,'Could not delete result');return;}
  await loadRemoteDB(); render(); toast('Result deleted');
}

async function deleteAnnouncement(id){
  const a=DB.announcements.find(x=>x.id===id);
  if(!a) return;
  if(!confirm(`Delete announcement "${a.title}"?`)) return;
  const {error}=await sb.from('announcements').delete().eq('id',id);
  if(error){sbToastError(error,'Could not delete announcement');return;}
  await loadRemoteDB(); render(); toast('Announcement deleted');
}

async function deleteCommittee(id){
  const c=DB.committee.find(x=>x.id===id);
  if(!c) return;
  if(!confirm(`Delete committee profile "${c.name}"?`)) return;
  const {error}=await sb.from('committee').delete().eq('id',id);
  if(error){sbToastError(error,'Could not delete committee profile');return;}
  await loadRemoteDB(); render(); toast('Committee profile deleted');
}

async function deleteContact(id){
  const c=DB.contacts.find(x=>x.id===id);
  if(!c) return;
  if(!confirm(`Delete contact "${c.name}"?`)) return;
  const {error}=await sb.from('contacts').delete().eq('id',id);
  if(error){sbToastError(error,'Could not delete contact');return;}
  await loadRemoteDB(); render(); toast('Contact deleted');
}
/* ============================= SUPABASE BACKEND ============================= */
const SUPABASE_URL = 'https://ygqdocutonsznbiriuht.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_vlvmaG47HbaAaS7T3kteoQ_9bIa-yxP';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
let SB_READY = false;
let SB_CHANNEL = null;

function sbToastError(err, fallback='Could not save data'){
  console.error(err); toast(err?.message || fallback);
}
async function sbLoadTable(table, order='created_at'){
  const q=sb.from(table).select('*');
  if(order) q.order(order,{ascending:true});
  const {data,error}=await q;
  if(error) throw error;
  return data||[];
}
async function loadRemoteDB(){
  // Load each public table independently so an optional/new table or policy
  // cannot make the entire public app report a backend failure.
  const names=[
    ['events','created_at'],['teams','created_at'],['participants','created_at'],['results','created_at'],
    ['announcements','date'],['event_participant_videos','created_at'],['committee','sort_order'],['contacts','sort_order'],['registrations','created_at'],['about_fest','updated_at']
  ];
  const settled=await Promise.all(names.map(async ([table,order])=>{
    try{ return {table,data:await sbLoadTable(table,order),error:null}; }
    catch(error){ console.error(`Supabase load failed: ${table}`,error); return {table,data:[],error}; }
  }));
  const get=(table)=>settled.find(x=>x.table===table)||{data:[],error:null};
  const core=['events','teams','participants','results'];
  const coreErrors=settled.filter(x=>core.includes(x.table)&&x.error);
  if(coreErrors.length) throw coreErrors[0].error;

  const events=get('events').data, teams=get('teams').data, participants=get('participants').data, results=get('results').data;
  const announcements=get('announcements').data, committee=get('committee').data, contacts=get('contacts').data;
  const registrations=get('registrations').data, aboutRows=get('about_fest').data;

  DB.events=events.map(e=>({id:e.id,name:e.name,date:e.event_date||'',time:e.event_time||'',status:e.status||'UPCOMING',details:e.details||'',venue:e.venue||'',videoUrl:e.video_url||''}));
  DB.teams=teams.map(t=>({id:t.id,name:t.name,color:t.color||'#d91f26',leaderIds:Array.isArray(t.leader_ids)?t.leader_ids:[]}));
  DB.participants=participants.map(p=>({id:p.id,name:p.name,chest:p.chest||'',teamId:p.team_id,points:Number(p.points)||0,phone:p.phone||''}));
  DB.results=results.map(r=>({id:r.id,eventId:r.event_id,position:Number(r.position)||0,participantId:r.participant_id,points:Number(r.points)||0,grade:r.grade||'',prize:r.prize||''}));
  DB.announcements=announcements.map(a=>({id:a.id,title:a.title,message:a.message||'',date:a.date}));
  DB.committee=committee.map(c=>({id:c.id,role:c.role,name:c.name,photo:c.photo||'',sortOrder:Number(c.sort_order)||0}));
  DB.contacts=contacts.map(c=>({id:c.id,role:c.role,name:c.name,phone:c.phone||'',photo:c.photo||'',sortOrder:Number(c.sort_order)||0}));
  DB.aboutContent=aboutRows.find(a=>a.id==='main')?.content||'';
  const eventVideos=get('event_participant_videos').data;
  DB.eventParticipantVideos=eventVideos.map(v=>({id:v.id,eventId:v.event_id,participantId:v.participant_id,videoUrl:v.video_url||''}));
  window._registrations=registrations.map(r=>({id:r.id,eid:r.event_id,pid:r.participant_id}));
  recalc();
}
function setupRealtime(){
  if(SB_CHANNEL) return;
  SB_CHANNEL=sb.channel('democrazy-live-data')
    .on('postgres_changes',{event:'*',schema:'public'},()=>refreshRemote())
    .subscribe();
}
let refreshTimer=null;
async function refreshRemote(){
  clearTimeout(refreshTimer);
  refreshTimer=setTimeout(async()=>{try{await loadRemoteDB(); if(SB_READY) render();}catch(e){console.error('Realtime refresh failed',e)}},250);
}
async function initRemote(){
  try{
    await loadRemoteDB(); SB_READY=true; setupRealtime(); render();
  }catch(e){
    console.error(e);
    toast('Backend connection failed');
    render();
  }
}
function rowForEvent(e,id){return {id:id||undefined,name:e.name,date:e.date,time:e.time,status:e.status,details:e.details||'',venue:e.venue||''};}

/* Remote CRUD overrides — UI/layout stays unchanged */
async function saveParticipant(ev,id){
  ev.preventDefault();
  const name=document.getElementById('pf-name').value.trim(), chest=document.getElementById('pf-chest').value.trim(), teamId=document.getElementById('pf-team').value;
  const payload={name,chest,team_id:teamId||null};
  const {data,error}=id?await sb.from('participants').update(payload).eq('id',id).select().single():await sb.from('participants').insert(payload).select().single();
  if(error){sbToastError(error);return;}
  closeModal(); await loadRemoteDB(); render(); toast(id?'Participant updated':'Participant added');
}
async function saveTeam(ev,id){
  ev.preventDefault(); const name=document.getElementById('tf-name').value.trim(), color=document.getElementById('tf-color').value;
  const leaderEl=document.getElementById('tf-leader');
  const leaderIds=leaderEl ? Array.from(leaderEl.selectedOptions).map(o=>o.value).filter(Boolean) : [];
  const payload={name,color};
  if(id) payload.leader_ids=leaderIds;
  const {error}=id?await sb.from('teams').update(payload).eq('id',id):await sb.from('teams').insert(payload);
  if(error){sbToastError(error);return;} closeModal(); await loadRemoteDB(); render(); toast(id?'Team updated':'Team added');
}
async function saveEvent(ev,id){
  ev.preventDefault(); const name=document.getElementById('ef-name').value.trim(), date=document.getElementById('ef-date').value, time=document.getElementById('ef-time').value, status=document.getElementById('ef-status').value, videoUrl=document.getElementById('ef-video')?.value.trim()||'';
  const payload={name,event_date:date,event_time:time,status,video_url:videoUrl||null};
  const {error}=id?await sb.from('events').update(payload).eq('id',id):await sb.from('events').insert(payload);
  if(error){sbToastError(error);return;} closeModal(); await loadRemoteDB(); render(); toast(id?'Event updated':'Event added');
}
async function doSaveResult(){
  const eid=document.getElementById('res-event').value, chest=document.getElementById('res-chest').value.trim(), prize=document.getElementById('res-prize').value, grade=document.getElementById('res-grade').value||'';
  const position=prize==='1ST'?1:prize==='2'?2:prize==='3'?3:0, points=Number(document.getElementById('res-points').value)||0;
  const p=DB.participants.find(x=>x.chest===chest); if(!p){toast('No participant with that chest number');return;}
  const payload={event_id:eid,participant_id:p.id,position,points,grade,prize};
  const {error}=await sb.from('results').upsert(payload,{onConflict:'event_id,participant_id'});
  if(error){sbToastError(error);return;}
  await loadRemoteDB(); toast('Result saved · leaderboards updated');
  const input=document.getElementById('res-chest'); if(input) input.value='';
  const preview=document.getElementById('res-preview'); if(preview) preview.innerHTML=''; render();
}
async function saveAnn(ev,id){
  ev.preventDefault(); const title=document.getElementById('an-title').value.trim(), message=document.getElementById('an-msg').value.trim();
  const payload={title,message};
  const {error}=id?await sb.from('announcements').update(payload).eq('id',id):await sb.from('announcements').insert(payload);
  if(error){sbToastError(error);return;} closeModal(); await loadRemoteDB(); render(); toast(id?'Announcement updated':'Announcement published');
}
async function saveComm(ev,id){
  ev.preventDefault(); const role=document.getElementById('cf-role').value.trim(), name=document.getElementById('cf-name').value.trim();
  const payload={role,name,photo:pendingContactPhoto||null};
  if(!id) payload.sort_order=DB.committee.reduce((m,c)=>Math.max(m,Number(c.sortOrder)||0),-1)+1;
  const {error}=id?await sb.from('committee').update(payload).eq('id',id):await sb.from('committee').insert(payload);
  if(error){sbToastError(error);return;} pendingContactPhoto=''; closeModal(); await loadRemoteDB(); render(); toast(id?'Committee profile updated':'Committee profile added');
}
async function saveContact(ev,id){
  ev.preventDefault(); const role=document.getElementById('ct-role').value.trim(), name=document.getElementById('ct-name').value.trim(), phone=document.getElementById('ct-phone').value.trim();
  const payload={role,name,phone,photo:pendingContactPhoto||null};
  if(!id) payload.sort_order=DB.contacts.reduce((m,c)=>Math.max(m,Number(c.sortOrder)||0),-1)+1;
  const {error}=id?await sb.from('contacts').update(payload).eq('id',id):await sb.from('contacts').insert(payload);
  if(error){sbToastError(error);return;} pendingContactPhoto=''; closeModal(); await loadRemoteDB(); render(); toast(id?'Contact updated':'Contact added');
}
async function doRegister(){
  const eid=document.getElementById('reg-event').value, chest=document.getElementById('reg-chest').value.trim(), p=DB.participants.find(x=>x.chest===chest);
  if(!p){toast('No participant with that chest number');return;}
  const {data,error}=await sb.rpc('register_participant',{p_event_id:eid,p_participant_id:p.id});
  if(error){sbToastError(error);return;}
  if(data?.status==='exists'){toast('Already registered for this event'); regLookup(); return;}
  await loadRemoteDB(); toast('Registered '+p.name); document.getElementById('reg-chest').value=''; document.getElementById('reg-preview').innerHTML=''; renderSelectedEventRegistrations();
}

/* Supabase Auth login. Username remains the visible field; it maps to the admin email. */
async function doAdminLogin(ev){
  ev.preventDefault();
  const u=document.getElementById('au').value.trim(), p=document.getElementById('ap').value;
  const email = u.includes('@') ? u : `${u}@democrazy.com`;
  const {data,error}=await sb.auth.signInWithPassword({email,password:p});
  if(error){toast('Invalid credentials');return;}
  const uid=data.user.id;
  const {data:profile,error:pe}=await sb.from('admin_profiles').select('*').eq('id',uid).maybeSingle();
  if(pe||!profile){await sb.auth.signOut();toast('Admin profile not found');return;}
  CURRENT_ADMIN={id:uid,name:profile.name,username:profile.username,role:profile.role}; STATE.adminLoggedIn=true; toast(`Welcome back, ${profile.name}`); nav('admin-dash');
}
async function adminLogout(){await sb.auth.signOut(); CURRENT_ADMIN=null; STATE.adminLoggedIn=false; toast('Logged out'); nav('home');}
async function restoreAdminSession(){
  const {data}=await sb.auth.getSession(); if(!data?.session) return false;
  const uid=data.session.user.id;
  const {data:profile}=await sb.from('admin_profiles').select('*').eq('id',uid).maybeSingle();
  if(!profile){await sb.auth.signOut();return false;}
  CURRENT_ADMIN={id:uid,name:profile.name,username:profile.username,role:profile.role}; STATE.adminLoggedIn=true; return true;
}


/* ============================= SUPABASE ADMIN MANAGEMENT ============================= */
async function loadRemoteAdmins(){
  if(!CURRENT_ADMIN || CURRENT_ADMIN.role!=='SUPER') return [];
  const {data,error}=await sb.functions.invoke('admin-management',{body:{action:'list'}});
  if(error){ console.error(error); return []; }
  ADMINS=(data?.data||[]).map(a=>({id:a.id,name:a.name,username:a.username,role:a.role}));
  return ADMINS;
}

function pageAdminManagement(){
  return requireSuperAdmin(()=>`${backHead('Admin Management','admin-dash')}<div class="hint-box"><b>Super Admin only.</b> Create and manage organizer accounts. Normal Admin accounts have access to Results and Announcements only.</div><button class="btn btn-primary btn-block" style="margin:14px 0 16px;" onclick="openAdminForm()">${ic('plus',16)} Add Admin</button>${ADMINS.map(a=>`<div class="card" style="padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;gap:12px;"><div class="tc-badge" style="width:38px;height:38px;font-size:12px;margin:0;">${a.role==='SUPER'?'SA':'A'}</div><div style="flex:1;min-width:0;"><div style="font-weight:700;font-size:13.5px;">${a.name}</div><div style="font-size:11px;color:var(--text-dim);">@${a.username} · ${a.role==='SUPER'?'Super Admin':'Normal Admin'}</div></div><div class="row-actions"><button class="mini-btn" onclick="openAdminForm('${a.id}')">Edit</button>${a.id!==CURRENT_ADMIN.id?`<button class="mini-btn" onclick="deleteAdmin('${a.id}')">Delete</button>`:''}</div></div>`).join('')}`);
}

function openAdminForm(id){
  const a=id?ADMINS.find(x=>x.id===id):null;
  openModal(`<div class="modal-head"><h3>${a?'Edit Admin':'Add Admin'}</h3><button class="icon-btn" onclick="closeModal()">${ic('x',16)}</button></div><form onsubmit="saveAdmin(event,'${id||''}')"><div class="field"><label>Name</label><input id="ad-name" required value="${a?a.name:''}"></div><div class="field"><label>Username</label><input id="ad-user" required autocomplete="off" value="${a?a.username:''}"></div><div class="field"><label>Password${a?' (leave blank to keep current)':''}</label><input id="ad-pass" type="password" ${a?'':'required'} autocomplete="new-password" value=""></div><div class="field"><label>Role</label><select id="ad-role"><option value="NORMAL" ${a&&a.role==='NORMAL'?'selected':''}>Normal Admin</option><option value="SUPER" ${a&&a.role==='SUPER'?'selected':''}>Super Admin</option></select></div><button class="btn btn-primary btn-block" type="submit">${ic('check',16)} Save Admin</button></form>`);
}

async function saveAdmin(ev,id){
  ev.preventDefault();
  const name=document.getElementById('ad-name').value.trim();
  const username=document.getElementById('ad-user').value.trim();
  const password=document.getElementById('ad-pass').value;
  const role=document.getElementById('ad-role').value;
  const action=id?'update':'create';
  const body={action,name,username,role};
  if(id) body.id=id;
  if(password) body.password=password;
  const {data,error}=await sb.functions.invoke('admin-management',{body});
  if(error){
    console.error(error);
    toast(data?.error || error.message || 'Could not save admin');
    return;
  }
  closeModal();
  await loadRemoteAdmins();
  if(id===CURRENT_ADMIN?.id){
    const a=ADMINS.find(x=>x.id===id);
    if(a) CURRENT_ADMIN={...CURRENT_ADMIN,...a};
  }
  render();
  toast(id?'Admin updated':'Admin added');
}

async function deleteAdmin(id){
  if(id===CURRENT_ADMIN?.id){toast('This admin cannot be deleted');return;}
  const a=ADMINS.find(x=>x.id===id);
  if(!a)return;
  const {data,error}=await sb.functions.invoke('admin-management',{body:{action:'delete',id}});
  if(error){
    console.error(error);
    toast(data?.error || error.message || 'Could not delete admin');
    return;
  }
  await loadRemoteAdmins();
  render();
  toast(`${a.name} deleted`);
}

/* Keep the admin list in sync whenever a Super Admin logs in/restores a session. */
const _dcDoAdminLogin = doAdminLogin;
doAdminLogin = async function(ev){
  await _dcDoAdminLogin(ev);
  if(CURRENT_ADMIN?.role==='SUPER') await loadRemoteAdmins();
  render();
};
const _dcRestoreAdminSession = restoreAdminSession;
restoreAdminSession = async function(){
  const ok=await _dcRestoreAdminSession();
  if(ok && CURRENT_ADMIN?.role==='SUPER') await loadRemoteAdmins();
  return ok;
};

/* ============================= INIT ============================= */
initRemote();

let pendingContactPhoto = "";
function previewContactPhoto(e){
  const f=e.target.files && e.target.files[0];
  if(!f) return;
  const r=new FileReader();
  r.onload=()=>{
    pendingContactPhoto=r.result;
    const img=document.getElementById("commPhotoPreview");
    if(img){ img.src=r.result; img.style.display="block"; }
  };
  r.readAsDataURL(f);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(()=>{}));
}
