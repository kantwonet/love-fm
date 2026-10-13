
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
