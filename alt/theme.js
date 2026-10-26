// Shared theme picker: palette via CSS variables, plus an ambient 2D canvas per theme.
(function(){
  const V=(bg,fg,dim,acc,ok,line,card)=>({'--bg':bg,'--fg':fg,'--dim':dim,'--acc':acc,'--ok':ok,'--line':line,'--card':card});
  const T={
   amber:{label:'Amber',light:false,v:V('#0b0c0e','#d6d3cb','#7d7a72','#ffb000','#8ec07c','#26282c','#111316')},
   sakura:{label:'Sakura',light:true,fx:'sakura',v:V('#fff0f5','#3d2030','#9a6b80','#d03f78','#b5457a','#f4cddb','#fffafc')},
   aurora:{label:'Aurora',light:false,fx:'aurora',v:V('#040c14','#dcf4ee','#78a09c','#4af0b0','#7bf1ff','#143038','#081a22')},
   glacier:{label:'Glacier',light:true,fx:'glacier',v:V('#e9f3f8','#10293a','#5b7a8c','#0a78a6','#1b8a6b','#c3dbe6','#f6fbfd')}
  };
  const root=document.documentElement; let name='amber';
  try{ name=localStorage.getItem('theme')||''; }catch(_){}
  if(!T[name]) name=matchMedia('(prefers-color-scheme: light)').matches?'glacier':'amber';
  const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let cv,ctx,W=0,H=0,raf=0,parts=[],dust=[],strips={};
  function apply(n){ name=n; const t=T[n]; Object.entries(t.v).forEach(([k,v])=>root.style.setProperty(k,v)); root.dataset.theme=n; window.THEME={name:n,light:t.light};
    try{ localStorage.setItem('theme',n); }catch(_){}
    initFx(t.fx); window.dispatchEvent(new Event('themechange')); }
  window.THEME={name,light:T[name].light};
  Object.entries(T[name].v).forEach(([k,v])=>root.style.setProperty(k,v)); root.dataset.theme=name;

  function size(){ if(!cv) return; W=cv.width=innerWidth; H=cv.height=innerHeight; }
  const rnd=(a,b)=>a+Math.random()*(b-a);
  function strip(c){ if(strips[c]) return strips[c]; const s=document.createElement('canvas'); s.width=1; s.height=256; const g=s.getContext('2d'), gr=g.createLinearGradient(0,0,0,256); gr.addColorStop(0,'rgba('+c+',0)'); gr.addColorStop(.25,'rgba('+c+',.55)'); gr.addColorStop(1,'rgba('+c+',0)'); g.fillStyle=gr; g.fillRect(0,0,1,256); return strips[c]=s; }
  function initFx(fx){ cancelAnimationFrame(raf); if(cv){ cv.remove(); cv=null; }
    if(!fx||root.hasAttribute('data-nofx')) return;
    cv=document.createElement('canvas'); cv.id='fx'; cv.setAttribute('aria-hidden','true'); document.body.prepend(cv); ctx=cv.getContext('2d'); size();
    parts=[]; const n=fx==='sakura'?46:fx==='glacier'?70:70;
    for(let i=0;i<n;i++) parts.push({x:rnd(0,W),y:rnd(0,H),s:fx==='sakura'?rnd(5,11):rnd(1,3.2),vy:fx==='sakura'?rnd(18,40):rnd(6,22),ph:rnd(0,6.3),r:rnd(0,6.3),rs:rnd(-1,1),a:rnd(.3,.9)});
    dust=fx==='sakura'?Array.from({length:Math.round(Math.min(110,W/11))},()=>({x:rnd(0,W),y:rnd(0,H),s:rnd(.7,2.4),ph:rnd(0,6.3),sp:rnd(.5,1.6),a:rnd(.25,.8)})):[];
    const draw={sakura,aurora,glacier}[fx]; let last=performance.now();
    const loop=t=>{ const dt=Math.min(.05,(t-last)/1000); last=t; if(!document.hidden){ ctx.clearRect(0,0,W,H); draw(t,dt); } if(!calm) raf=requestAnimationFrame(loop); };
    calm?loop(performance.now()):raf=requestAnimationFrame(loop); }
  function sakura(t,dt){ const wind=9+9*Math.sin(t*.0002);
    const g=ctx.createRadialGradient(W*.8,0,0,W*.8,0,Math.max(W,H)); g.addColorStop(0,'rgba(255,205,225,.55)'); g.addColorStop(1,'rgba(255,240,245,0)'); ctx.globalAlpha=1; ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    dust.forEach(d=>{ d.x+=(Math.cos(t*.0004*d.sp+d.ph)*16+wind)*dt; d.y+=(Math.sin(t*.0005*d.sp+d.ph*2)*12-3)*dt; if(d.x>W+10) d.x=-10; if(d.x<-10) d.x=W+10; if(d.y<-10) d.y=H+10; if(d.y>H+10) d.y=-10;
      const tw=.5+.5*Math.sin(t*.002*d.sp+d.ph); ctx.globalAlpha=d.a*.18*(.4+tw); ctx.fillStyle='#f06ea3'; ctx.beginPath(); ctx.arc(d.x,d.y,d.s*3.2,0,6.3); ctx.fill();
      ctx.globalAlpha=d.a*(.45+.55*tw); ctx.fillStyle='#e0508f'; ctx.beginPath(); ctx.arc(d.x,d.y,d.s*.8,0,6.3); ctx.fill(); });
    parts.forEach(p=>{ p.y+=p.vy*dt; p.x+=(Math.sin(t*.0007+p.ph)*18+12)*dt; p.r+=p.rs*dt; if(p.y>H+20){p.y=-20;p.x=rnd(0,W);} if(p.x>W+20) p.x=-20;
      const s=p.s; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.r); ctx.scale(1,.7+.3*Math.cos(t*.002+p.ph)); ctx.globalAlpha=p.a*.85; ctx.fillStyle='rgb(250,'+(140+p.s*4|0)+',180)';
      ctx.beginPath(); ctx.moveTo(0,-s); ctx.bezierCurveTo(s*.95,-s*.6,s*.7,s*.55,0,s); ctx.bezierCurveTo(-s*.7,s*.55,-s*.95,-s*.6,0,-s); ctx.fill(); ctx.restore(); }); }
  function aurora(t){ ctx.globalCompositeOperation='lighter'; const bands=[['60,255,170',0],['40,200,255',1],['150,110,255',2]];
    bands.forEach(([c,b])=>{ const s=strip(c); ctx.globalAlpha=.42-b*.08; for(let x=0;x<W;x+=6){ const y=H*(.16+.07*b)+Math.sin(x*.0042+t*.00028*(b+1)+b*2)*H*.075+Math.sin(x*.012+t*.0005)*H*.022, h=H*(.3+.06*Math.sin(x*.0065+t*.0004+b)); ctx.drawImage(s,0,0,1,256,x,y,6,h); } });
    ctx.globalCompositeOperation='source-over'; parts.forEach(p=>{ ctx.globalAlpha=.25+.5*Math.abs(Math.sin(t*.001*p.rs+p.ph)); ctx.fillStyle='#fff'; ctx.fillRect(p.x,p.y*.55,p.s*.6,p.s*.6); }); }
  function glacier(t,dt){ const g=ctx.createLinearGradient(0,0,0,H); g.addColorStop(0,'rgba(255,255,255,.7)'); g.addColorStop(.45,'rgba(255,255,255,0)'); g.addColorStop(1,'rgba(110,185,220,.22)'); ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    for(let i=0;i<6;i++){ const x=((i*.19+t*.000012*(i+1))%1.3-.15)*W, y=H*(.2+.11*i%.7), s=H*(.16+.05*i); ctx.globalAlpha=.07; ctx.fillStyle=i%2?'#5fb4d6':'#9fd4ea'; ctx.beginPath(); ctx.moveTo(x,y-s); ctx.lineTo(x+s*.9,y+s*.4); ctx.lineTo(x-s*.5,y+s*.7); ctx.closePath(); ctx.fill(); }
    parts.forEach(p=>{ p.y+=p.vy*dt*.5; p.x+=Math.sin(t*.0005+p.ph)*6*dt; if(p.y>H+5){p.y=-5;p.x=rnd(0,W);} ctx.globalAlpha=p.a*.7; ctx.fillStyle='#62b3d4'; ctx.beginPath(); ctx.arc(p.x,p.y,p.s,0,6.3); ctx.fill(); }); ctx.globalAlpha=1; }
  addEventListener('resize',size);
  const css=document.createElement('style'); css.textContent='#fx{position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none}.themesel{background:var(--card);color:var(--fg);border:1px solid var(--line);border-radius:4px;font:inherit;font-size:12px;padding:2px 6px}.themesel:focus-visible{outline:1px solid var(--acc)}.cs{display:flex;gap:4px;flex-wrap:wrap}.cs a{color:var(--dim);text-decoration:none;border:1px solid var(--line);border-radius:4px;padding:1px 9px;font-size:12px}.cs a:hover,.cs a:focus-visible{color:var(--acc);border-color:var(--acc);outline:0}.cs a[aria-current]{color:var(--bg);background:var(--acc);border-color:var(--acc)}'; document.head.appendChild(css);
  document.addEventListener('DOMContentLoaded',()=>{
    const sel=document.createElement('select'); sel.className='themesel'; sel.setAttribute('aria-label','Theme');
    Object.entries(T).forEach(([k,t])=>{ const o=document.createElement('option'); o.value=k; o.textContent=t.label; sel.appendChild(o); }); sel.value=name; sel.onchange=()=>apply(sel.value);
    const bar=document.querySelector('.top,.bar');
    if(bar){ const inAlt=location.pathname.includes('/alt/'), cur=(location.pathname.match(/(map|field|spec)\.html$/)||[])[1]||(inAlt?'':'guide'), pre=inAlt?'':'alt/';
      const nav=document.createElement('nav'); nav.className='cs'; nav.setAttribute('aria-label','Switch view');
      [['guide',inAlt?'../':'./','Guide'],['map',pre+'map.html','Map'],['field',pre+'field.html','Field'],['spec',pre+'spec.html','Spec']].forEach(([k,h,l])=>{ const a=document.createElement('a'); a.href=h; a.textContent=l; if(k===cur) a.setAttribute('aria-current','page'); nav.appendChild(a); });
      bar.insertBefore(nav,bar.children[1]||null);
      const w=document.createElement('span'); w.append('theme ',sel); bar.appendChild(w); } else { sel.style.cssText='position:fixed;right:12px;top:12px;z-index:9'; document.body.appendChild(sel); }
    initFx(T[name].fx); window.dispatchEvent(new Event('themechange')); });
})();
