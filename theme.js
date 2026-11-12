// Colours live in base.css (60-30-10, light and dark). This adds the Home/Field/Spec switcher to every page.
(function(){
  const dark=matchMedia('(prefers-color-scheme: dark)');
  window.THEME={name:'amber',light:!dark.matches};
  dark.addEventListener('change',e=>{ window.THEME.light=!e.matches; dispatchEvent(new Event('themechange')); });
  const css=document.createElement('style'); css.textContent='.cs{display:flex;gap:4px;flex-wrap:wrap}.cs a{color:var(--dim);text-decoration:none;border:1px solid var(--line);border-radius:999px;padding:2px 11px;font-size:12px}.cs a:hover,.cs a:focus-visible{color:var(--acc-ink);border-color:var(--acc);outline:0}.cs a[aria-current]{color:var(--on-acc);background:var(--acc);border-color:var(--acc)}'; document.head.appendChild(css);
  document.addEventListener('DOMContentLoaded',()=>{
    const bar=document.querySelector('.top'); if(!bar) return;
    const p=location.pathname, cur=/spec\.html$/.test(p)?'spec':/field\.html$/.test(p)?'field':'home';
    const nav=document.createElement('nav'); nav.className='cs'; nav.setAttribute('aria-label','Switch view');
    [['home','./','Home'],['field','field.html','Field'],['spec','spec.html','Spec']].forEach(([k,h,l])=>{ const a=document.createElement('a'); a.href=h; a.textContent=l; if(k===cur) a.setAttribute('aria-current','page'); nav.appendChild(a); });
    bar.appendChild(nav); });
})();
