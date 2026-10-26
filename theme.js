// Amber palette + the Guide/Map/Field/Spec view switcher shared by every page.
(function(){
  const root=document.documentElement;
  Object.entries({'--bg':'#0b0c0e','--fg':'#d6d3cb','--dim':'#7d7a72','--acc':'#ffb000','--ok':'#8ec07c','--line':'#26282c','--card':'#111316'}).forEach(([k,v])=>root.style.setProperty(k,v));
  root.dataset.theme='amber'; window.THEME={name:'amber',light:false};
  const css=document.createElement('style'); css.textContent='.cs{display:flex;gap:4px;flex-wrap:wrap}.cs a{color:var(--dim);text-decoration:none;border:1px solid var(--line);border-radius:4px;padding:1px 9px;font-size:12px}.cs a:hover,.cs a:focus-visible{color:var(--acc);border-color:var(--acc);outline:0}.cs a[aria-current]{color:var(--bg);background:var(--acc);border-color:var(--acc)}'; document.head.appendChild(css);
  document.addEventListener('DOMContentLoaded',()=>{
    const bar=document.querySelector('.top,.bar'); if(!bar) return;
    const cur=/spec\.html$/.test(location.pathname)?'spec':'field';
    const nav=document.createElement('nav'); nav.className='cs'; nav.setAttribute('aria-label','Switch view');
    [['field','./','Field'],['spec','spec.html','Spec']].forEach(([k,h,l])=>{ const a=document.createElement('a'); a.href=h; a.textContent=l; if(k===cur) a.setAttribute('aria-current','page'); nav.appendChild(a); });
    bar.insertBefore(nav,bar.children[1]||null); });
})();
