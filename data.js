const PROJECTS = [
 {id:'spec-driven-build', title:'Spec-driven build', line:'A reviewed spec as the single source of truth for design, build, tests, observability and ops.',
  body:['AI-assisted delivery fails when the process is vague, not when the model is weak. I built a skill-based method where one reviewed specification drives everything downstream, keeps deterministic logic deterministic, and uses the right-sized model per task so token cost stays predictable.'],
  facts:['60–70% less development time','Grew from 1 team to many; applied to 30+ functionalities and 70+ APIs and events','Packaged as reusable skills in a firm-wide repository','Presented to senior technology leadership for broader reuse'],
  stack:['AI agents','LLMs','Specs','Model right-sizing']},
 {id:'fast-prequal', title:'Sub-3-second decisioning', line:'Infrastructure lead on a latency-critical credit pre-qualification path.',
  body:['Partnered with a principal engineer to tune the application, database and API gateway layers. Around 2 seconds of the budget belonged to an external vendor, so everything else had to be lean. Reading platform teams’ own repositories exposed one more win: authorizer cold paths at high TPS.'],
  facts:['~3s end to end, 2x+ faster than the next-fastest competitor (7s)','Lambda authorizer latency down up to 50% by pre-loading certificates at init','One of the earliest teams on the public cloud; led EKS, API Gateway + WAF and managed Kafka adoption'],
  stack:['AWS EKS','API Gateway','Lambda','MSK','Terraform','Kubernetes']},
 {id:'self-healing-integrations', title:'Self-healing integrations', line:'Circuit breakers, scheduled retries and event replay instead of human intervention.',
  body:['Introduced the circuit-breaker pattern with scheduled retries across three teams, and won over downstream owners who initially pushed back. Producers on Kafka replay events after outages, and next-day batch jobs became real-time flows.'],
  facts:['100% of requests processed through a bureau outage, zero customer impact','External vendor replacement shipped with zero production issues','Reusable reference examples that sped up adoption elsewhere'],
  stack:['Kafka','Resilience patterns','Event replay','Avro']},
 {id:'observability-as-code', title:'Observability as code', line:'Alerts and metrics defined in version control, not in tickets.',
  body:['Led a multi-team move from hand-built, review-gated alerting to environment-as-code. Reviews that took two weeks became near real-time, and dashboards built on the same definitions made triage a pointed exercise.'],
  facts:['50+ alerts and 100+ metrics created the new way','Review lead time: 2 weeks → near real-time','Replaced an intermittent legacy alerting approach'],
  stack:['Prometheus','Grafana','Environment-as-code','Spring observability']},
 {id:'uuidv7-keys', title:'Challenging the primary key', line:'Why numeric sequences would have broken active-active.',
  body:['Before every entity, API and event inherited a numeric-sequence key standard, I showed it would not survive active-active Aurora PostgreSQL with write forwarding. I proposed and carried UUIDv7: globally unique for distributed writes, time-ordered for efficient indexing.'],
  facts:['Aligned the platform with the resiliency strategy','Avoided a costly cross-system redesign later'],
  stack:['Aurora PostgreSQL','UUIDv7','Active-active','Data modelling']},
 {id:'modular-ui-foundation', title:'Modular UI foundation', line:'Prototype-first UI that became the reference for every later screen.',
  body:['Started building while the design was still moving, then turned the prototype into modular components, a data-grid pattern approved with design and accessibility, contract-generated API clients, an end-to-end audit trail and consistent observability from day one.'],
  facts:['Later screens built ~50% faster','Excel-parsing flow cut manual program setup time by 90%','Audit pattern gives complete traceability for critical data changes'],
  stack:['React','Spring','Hibernate Envers','Contract-generated clients']},
 {id:'domain-black-box-tests', title:'Black-box testing for modernised domains', line:'Confidence that component tests alone can’t give.',
  body:['Built a domain-level black-box testing capability, then used LLM APIs to turn acceptance criteria into Gherkin scenarios and enabled the team through working sessions.'],
  facts:['150+ business scenarios, 30 field-level assertions','Domain regression-testing time down 70%','600+ generated scenarios across two domains'],
  stack:['Gherkin','LLM APIs','Test automation']},
 {id:'restage-all', title:'Restage all', line:'One action instead of a hundred.',
  body:['A Groovy capability that restages every application in a pool in one step, made mass vulnerability-driven build-pack upgrades practical. Merged into a global shared library and now reused across the technology org.'],
  facts:['Saves 10+ hours per 100-application pool','Practical at 10,000+ application scale'],
  stack:['Groovy','CI/CD','Platform tooling']},
 {id:'dattavani-app', featured:true, title:'Dattavani: a children\u2019s learning app, live on both stores', line:'Led the technical build of a mobile app that introduces children to Indic wisdom through stories, lessons and guided conversation.',
  body:['Dattavani helps children explore values, dharma and classic stories through three daily paths: asking the in-app guide questions, short daily lessons, and story time. Quizzes, streaks and rewards keep it a habit, and parents manage child profiles from one account.','I led the technical effort from first build to store release on iOS and Android, shipping v2.0 within months of launch.'],
  stats:[['4.9\u2605','App Store (India), 15 ratings'],['~4.9\u2605','Google Play, 37 ratings'],['1K+','Google Play installs'],['2','stores: iOS and Android']],
  facts:['Live on the App Store since August 2026; v2.0 shipped October 2026','Education category; parent-managed multi-child accounts','Store figures checked October 2026'],
  links:[['App Store','https://apps.apple.com/us/app/dattavani/id6760235948'],['Google Play','https://play.google.com/store/apps/details?id=ai.dattavani.app']],
  stack:['React Native','Expo','Firebase','Jest','Maestro','iOS','Android']}
];
const DATA={name:'Dattamber Jukanti',title:'Lead Software Engineer',gh:'dattamberj',
 about:['Lead software engineer at a global bank, working on the decisioning platforms behind auto lending. I own technical delivery for a core system where every design call carries real business impact.',
  'I’m a <span class="acc">generalising specialist</span>: deep in whatever problem I’m on, broad across infrastructure, SRE, performance, UI and AI-assisted delivery. Joined in 2018 through an early-career program; Lead in 2025.',
  'I question the status quo with evidence and make sure the right thing gets done. When in doubt, I ask: clarity early beats effort later. A problem well understood is half solved.'],
 roles:[{y:'2025 — now',t:'Lead Software Engineer',pts:['Technical lead for the platforms that own auto-lending decisioning and pre-qualification.','Led the technical build of a children’s learning app (Dattavani) from first commit to both app stores.','Go-to engineer for hard cross-cutting problems: infrastructure, observability, performance, quality and AI-assisted delivery.','Mentor engineers from first-year to senior.']},
  {y:'2018 — 2025',t:'Software Engineer → Lead',pts:['Led delivery of a pricing modernisation: platform foundation, reference UI, audit patterns and validated bulk-input flows.','Led one of the org’s first public-cloud journeys for its line of business, then taught it forward through workshops.','Drove a third-party vendor exit via a new integration, live with zero production issues.']}],
 skills:{cloud:['AWS','EKS','API Gateway','Lambda','MSK','Aurora PostgreSQL','Terraform','Kubernetes'],backend:['Java','Spring','Hibernate Envers','Kafka','Avro','Groovy','PostgreSQL'],frontend:['React','React Native','Expo','Data-heavy UIs','Accessibility'],reliability:['Prometheus','Grafana','Chaos testing','Performance testing','Circuit breakers','Observability as code'],ai:['Spec-driven build','Agent skills','LLM-assisted testing','Model right-sizing','Token economics'],leadership:['Mentoring','Cross-team alignment','Stakeholder buy-in','Technical strategy','Pattern sharing']},
 principles:['<b>Frame decisions commercially</b>: value delivered, cost avoided, risk reduced.','<b>Reuse beats rebuild</b>: share patterns and the reasoning behind them.','<b>Responsible AI is structure, not just tooling</b>: specs, determinism where it matters, the right model per task.','<b>Mentor the thinking, not the answer</b>: pair constructive feedback with recognition of effort.'],
 life:'Outside the day job: interviewing candidates, running internal hackathons, and leading teams for a tech-for-good program. I support my wife as she builds her own business from scratch, which reinforces what I value at work: ownership, resilience and learning by doing. We travel to recharge.'};
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ul=a=>`<ul>${a.map(x=>`<li>${x}</li>`).join('')}</ul>`, tags=a=>`<div class="tags">${a.map(t=>`<span>${t}</span>`).join('')}</div>`;
const projHTML=p=>`<h3>${p.title}</h3>${p.body.map(b=>`<p>${b}</p>`).join('')}${p.stats?`<div class="stats">${p.stats.map(([n,l])=>`<div><b>${n}</b><span>${l}</span></div>`).join('')}</div>`:''}${ul(p.facts)}${p.links?`<p>${p.links.map(([l,u])=>`<a href="${u}" target="_blank" rel="noopener">${l} ↗</a>`).join(' · ')}</p>`:''}${tags(p.stack)}`;
const aboutHTML=()=>DATA.about.map(x=>`<p>${x}</p>`).join(''), rolesHTML=()=>DATA.roles.map(r=>`<h3><span class="acc">${r.y}</span> · ${r.t}</h3>${ul(r.pts)}`).join('');
const skillsHTML=()=>Object.entries(DATA.skills).map(([k,v])=>`<h3>${k}</h3>${tags(v)}`).join(''), principlesHTML=()=>ul(DATA.principles), lifeHTML=()=>`<p>${DATA.life}</p>`;
const contactHTML=()=>`<p><a href="https://github.com/${DATA.gh}" target="_blank" rel="noopener">github.com/${DATA.gh}</a></p>`;
const ORDERED=[...PROJECTS].sort((a,b)=>!!b.featured-!!a.featured);
const toks=q=>q.toLowerCase().match(/[a-z0-9+-]+/g)||[], hit=(t,k)=>k.length<=3?t===k:t.startsWith(k);
const scoreOf=(q,words)=>{const T=toks(q);return words.filter(k=>T.some(t=>hit(t,k.toLowerCase()))).length;};
const kwOf=p=>[...new Set((p.id+' '+p.title+' '+p.line+' '+p.stack.join(' ')).toLowerCase().match(/[a-z0-9+-]{3,}/g))];
const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
