
(()=>{'use strict';
const search=document.getElementById('feature-search'),type=document.getElementById('scope-filter'),area=document.getElementById('area-filter');
const details=Array.from(document.querySelectorAll('.scopeitem[data-feature]')),groups=Array.from(document.querySelectorAll('.catalog-section'));
const output=document.getElementById('result-count'),empty=document.getElementById('no-results');
const norm=s=>s.toLowerCase().normalize('NFKD');
function update(){const q=norm(search.value.trim()),tokens=q.split(/\s+/).filter(Boolean);let visible=0;
 details.forEach(el=>{const text=norm(el.textContent),ok=tokens.every(t=>text.includes(t))&&(!type.value||el.dataset.tier===type.value)&&(!area.value||el.dataset.area===area.value);el.hidden=!ok;if(ok){visible++;if(q)el.open=true;}});
 groups.forEach(el=>el.hidden=!Array.from(el.querySelectorAll('[data-feature]')).some(x=>!x.hidden));
 output.textContent=visible+' of '+details.length+' feature summaries shown · product intent, not completed-feature counts';empty.hidden=visible!==0;
 const shown=details.filter(x=>!x.hidden);document.getElementById('expand-features').textContent=shown.length&&shown.every(x=>x.open)?'Collapse details':'Expand details';
}
search.addEventListener('input',update);type.addEventListener('change',update);area.addEventListener('change',update);
document.getElementById('reset-filters').addEventListener('click',()=>{search.value='';type.value='';area.value='';details.forEach(x=>x.open=false);update();search.focus();});
document.getElementById('expand-features').addEventListener('click',e=>{const visible=details.filter(x=>!x.hidden),open=visible.some(x=>!x.open);visible.forEach(x=>x.open=open);e.currentTarget.textContent=open?'Collapse details':'Expand details';});
document.querySelectorAll('a[data-jump]').forEach(a=>a.addEventListener('click',()=>{search.value='';type.value='';area.value='';update();const target=document.getElementById(a.hash.slice(1));if(target&&target.matches('details'))target.open=true;}));
update();
})();

/* Ambient color motion: user pause, system reduced motion, and hidden-tab pause.
   Storage is a local appearance preference only; no analytics or network calls. */
(() => {
 'use strict';
 const root = document.documentElement;
 const button = document.getElementById('motion-toggle');
 if (!button) return;
 const label = button.querySelector('.motion-label');
 const storageKey = 'lovefm.portal.backgroundMotion.v1';
 const reduced = typeof window.matchMedia === 'function'
   ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
 let userPaused = false;
 try { userPaused = localStorage.getItem(storageKey) === 'paused'; } catch (_) { /* Storage is optional. */ }
 function sync() {
   const systemReduced = Boolean(reduced && reduced.matches);
   const paused = systemReduced || userPaused;
   root.dataset.ambientMotion = paused ? 'paused' : 'running';
   root.dataset.ambientVisibility = document.hidden ? 'hidden' : 'visible';
   button.disabled = systemReduced;
   const action = systemReduced ? 'Background motion disabled by your reduced-motion setting'
     : paused ? 'Play animated background' : 'Pause animated background';
   button.setAttribute('aria-label', action);
   button.title = action;
   if (label) label.textContent = systemReduced ? 'Motion reduced' : paused ? 'Play colors' : 'Pause colors';
 }
 button.addEventListener('click', () => {
   if (reduced && reduced.matches) return;
   userPaused = !userPaused;
   try { localStorage.setItem(storageKey, userPaused ? 'paused' : 'running'); } catch (_) { /* Keep session choice. */ }
   sync();
 });
 document.addEventListener('visibilitychange', sync);
 if (reduced) {
   if (typeof reduced.addEventListener === 'function') reduced.addEventListener('change', sync);
   else if (typeof reduced.addListener === 'function') reduced.addListener(sync);
 }
 sync();
 button.hidden = false;
})();

/* Wide-screen helpers only. Existing mobile layout and feature filtering stay intact.
   No polling, provider connections, analytics, or background rendering loop. */
(() => {
 'use strict';
 const desktop = window.matchMedia('(min-width: 1180px)');
 const rightRail = document.querySelector('.companion-rail');
 const links = Array.from(document.querySelectorAll('[data-explore-link]'));
 if (!links.length || !rightRail) return;
 const targets = Array.from(document.querySelectorAll('#top,#listening-tools,#features,.catalog-section,#roadmap,#progress'));
 const buttons = Array.from(rightRail.querySelectorAll('[data-scene]'));
 const views = Array.from(rightRail.querySelectorAll('[data-scene-view]'));
 const tabGroup = rightRail.querySelector('.scene-tabs');
 const copy = {
  history: { label:'LISTENING HISTORY', title:'A listen becomes part of your story.', description:'Listening time, original dates and source context belong together. External scrobbles remain a separate choice.', href:'#history', link:'Explore listening history' },
  pulse: { label:'PULSE · PLANNED EXPERIENCE', title:'One room. Everyone brings a song.', description:'A shared queue keeps contributor names. Pause just for yourself, while the room continues through each person’s permitted music access.', href:'#pulse', link:'Explore Pulse rooms' },
  merge: { label:'MERGE · FICTIONAL EXAMPLE', title:'Two playlists. One considered mix.', description:'This example combines 8 and 6 recordings with 3 in common. The result keeps 11 unique recordings and leaves the originals alone.', href:'#merge', link:'Explore playlist Merge' }
 };
 function showScene(name) {
  const item=copy[name]; if(!item) return;
  views.forEach(view=>{view.hidden=view.dataset.sceneView!==name;});
  buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.scene===name)));
  rightRail.querySelector('#companion-label').textContent=item.label;
  rightRail.querySelector('#companion-title').textContent=item.title;
  rightRail.querySelector('#companion-description').textContent=item.description;
  const link=rightRail.querySelector('#companion-link');
  link.href=item.href; link.replaceChildren(document.createTextNode(item.link+' '));
  const arrow=document.createElement('span');arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';link.append(arrow);
 }
 buttons.forEach(button=>button.addEventListener('click',()=>showScene(button.dataset.scene)));
 tabGroup.hidden=false;
 let activeId='', scheduled=0, observing=false;
 const observer=typeof IntersectionObserver==='function'
   ? new IntersectionObserver(schedule,{rootMargin:'-104px 0px -55% 0px',threshold:[0,.05]}) : null;
 function mark(id) {
  if(id===activeId) return;
  activeId=id;
  links.forEach(link=>{
   const active=link.hash==='#'+id;
   link.classList.toggle('is-current',active);
   if(active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current');
  });
  if(['pulse','social'].includes(id)) showScene('pulse');
  else if(['merge','transfers'].includes(id)) showScene('merge');
  else showScene('history');
 }
 function update() {
  scheduled=0;if(!desktop.matches) return;
  const edge=Math.min(window.innerHeight*.3,230);
  let current='top';
  for(const target of targets) {
   if(target.hidden) continue;
   if(target.getBoundingClientRect().top<=edge) current=target.id;
  }
  mark(current);
 }
 function schedule() {
  if(desktop.matches&&!scheduled) scheduled=requestAnimationFrame(update);
 }
 function syncDesktop() {
  if(desktop.matches&&!observing) {
   if(observer) targets.forEach(target=>observer.observe(target));
   window.addEventListener('scroll',schedule,{passive:true});
   window.addEventListener('resize',schedule,{passive:true});
   observing=true;schedule();
  } else if(!desktop.matches&&observing) {
   if(observer) observer.disconnect();
   window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);
   if(scheduled) cancelAnimationFrame(scheduled);
   scheduled=0;observing=false;
  }
 }
 document.getElementById('feature-search')?.addEventListener('input',schedule);
 document.getElementById('scope-filter')?.addEventListener('change',schedule);
 document.getElementById('area-filter')?.addEventListener('change',schedule);
 if(typeof desktop.addEventListener==='function') desktop.addEventListener('change',syncDesktop);
 else desktop.addListener(syncDesktop);
 syncDesktop();
})();
