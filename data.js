const PROJECTS = [
 {id:'spec-driven-build', metric:['60–70%','less development time'], title:'Spec-driven development, with a custom agentic workflow', line:'A reviewed spec as the single source of truth; agent skills carry it through design, build, tests and observability.',
  body:['AI-assisted delivery fails when the process is vague, not when the model is weak. I designed and lead a custom agentic workflow where one reviewed specification drives everything downstream, deterministic logic stays deterministic, and each task uses the right-sized model.','It started with sequence diagrams to code, then grew stage by stage to data models and NFRs, tuned on feedback from teams using it in greenfield and brownfield work. Verification checklists and evals gate each skill before it reaches the central registry.'],
  facts:['60–70% less development time','Grew from 1 team to many; applied to 30+ functionalities and 70+ APIs and events','Packaged as reusable skills in a firm-wide registry, validated with evals','Taught through AI accelerator workshops across the line of business','Presented to senior technology leadership for broader reuse'],
  stack:['AI agents','LLMs','Specs','Model right-sizing']},
 {id:'fast-prequal', metric:['~3s','pre-qualification, 2x+ faster than the next competitor'], title:'Sub-3-second decisioning', line:'Infrastructure lead on a latency-critical credit pre-qualification path.',
  body:['Partnered with a principal engineer to tune the application, database and API gateway layers. Around 2 seconds of the budget belonged to an external vendor, so everything else had to be lean. Reading platform teams’ own repositories exposed one more win: authorizer cold paths at high TPS.'],
  facts:['~3s end to end, 2x+ faster than the next-fastest competitor (7s)','Lambda authorizer latency down up to 50% by pre-loading certificates at init','One of the earliest teams on the public cloud; led EKS, API Gateway + WAF and managed Kafka adoption'],
  stack:['AWS EKS','API Gateway','Lambda','MSK','Terraform','Kubernetes']},
 {id:'self-healing-integrations', metric:['100%','of requests processed through a bureau outage'], title:'Self-healing integrations', line:'Circuit breakers, scheduled retries and event replay instead of human intervention.',
  body:['Introduced the circuit-breaker pattern with scheduled retries across three teams, and won over downstream owners who initially pushed back. Producers on Kafka replay events after outages, and next-day batch jobs became real-time flows.'],
  facts:['100% of requests processed through a bureau outage, zero customer impact','External vendor replacement shipped with zero production issues','Reusable reference examples that sped up adoption elsewhere'],
  stack:['Kafka','Resilience patterns','Event replay','Avro']},
 {id:'observability-as-code', metric:['50+','alerts as code; reviews from 2 weeks to near real-time'], title:'Observability as code', line:'Alerts and metrics defined in version control, not in tickets.',
  body:['Led a multi-team move from hand-built, review-gated alerting to environment-as-code. Reviews that took two weeks became near real-time, and dashboards built on the same definitions made triage a pointed exercise.'],
  facts:['50+ alerts and 100+ metrics created the new way','Review lead time: 2 weeks → near real-time','Replaced an intermittent legacy alerting approach'],
  stack:['Prometheus','Grafana','Environment-as-code','Spring observability']},
 {id:'uuidv7-keys', metric:['UUIDv7','keys ready for active-active writes'], title:'Challenging the primary key', line:'Why numeric sequences would have broken active-active.',
  body:['Before every entity, API and event inherited a numeric-sequence key standard, I showed it would not survive active-active Aurora PostgreSQL with write forwarding. I proposed and carried UUIDv7: globally unique for distributed writes, time-ordered for efficient indexing.'],
  facts:['Aligned the platform with the resiliency strategy','Avoided a costly cross-system redesign later'],
  stack:['Aurora PostgreSQL','UUIDv7','Active-active','Data modelling']},
 {id:'modular-ui-foundation', metric:['~50%','faster delivery of later screens'], title:'Modular UI foundation', line:'Prototype-first UI that became the reference for every later screen.',
  body:['Started building while the design was still moving, then turned the prototype into modular components, a data-grid pattern approved with design and accessibility, contract-generated API clients, an end-to-end audit trail and consistent observability from day one.'],
  facts:['Later screens built ~50% faster','Excel-parsing flow cut manual program setup time by 90%','Audit pattern gives complete traceability for critical data changes'],
  stack:['React','Spring','Hibernate Envers','Contract-generated clients']},
 {id:'domain-black-box-tests', metric:['−70%','domain regression-testing time'], title:'Black-box testing for modernised domains', line:'Confidence that component tests alone can’t give.',
  body:['Built a domain-level black-box testing capability, then used LLM APIs to turn acceptance criteria into Gherkin scenarios and enabled the team through working sessions.'],
  facts:['150+ business scenarios, 30 field-level assertions','Domain regression-testing time down 70%','600+ generated scenarios across two domains'],
  stack:['Gherkin','LLM APIs','Test automation']},
 {id:'restage-all', metric:['10+ hrs','saved per 100-application pool'], title:'Restage all', line:'One action instead of a hundred.',
  body:['A Groovy capability that restages every application in a pool in one step, made mass vulnerability-driven build-pack upgrades practical. Merged into a global shared library and now reused across the technology org.'],
  facts:['Saves 10+ hours per 100-application pool','Practical at 10,000+ application scale'],
  stack:['Groovy','CI/CD','Platform tooling']},
 {id:'educational-app', featured:true, title:'An educational app for children, live on the App Store and Google Play', line:'Led the technical build of a children\u2019s learning app: lessons, stories, quizzes, games and an AI tutor, on iOS and Android.',
  body:['The app helps children learn classic Indian stories and values through daily lessons, story time, quizzes and games, and an AI tutor they can talk to. Streaks and rewards keep it a habit, and parents manage child profiles from one account.'],
  role:['Led the technical effort from first build to App Store and Google Play release, and shipped v2.0 within months of launch.','Led a feature-sliced Clean Architecture, with layer boundaries enforced in lint, so the team could build features in parallel.','Built quality in: Jest unit tests and Maestro end-to-end journeys before every release.','Automated iOS releases to TestFlight through CI, with over-the-air updates for fast fixes.','Brought in real-time voice for the AI tutor, in-app subscriptions and a design-token-driven UI.'],
  stats:[['4.9\u2605','App Store (India), 15 ratings'],['~4.9\u2605','Google Play, 37 ratings'],['1K+','Google Play installs'],['2','stores: iOS and Android']],
  facts:['Live on the App Store since August 2026; v2.0 shipped October 2026','Education category; parent-managed multi-child accounts','Store figures checked October 2026'],
  stack:['React Native','Expo','TypeScript','Reanimated','Zustand','TanStack Query','Firebase','Jest','Maestro','iOS','Android']}
];
const DATA={name:'Dattamber Jukanti',title:'Lead Software Engineer',gh:'dattamberj',
 about:['Lead software engineer at a global bank, working on the decisioning platforms behind auto lending. I own technical delivery for a core system where every design call carries real business impact.',
  'I’m a <span class="acc">generalising specialist</span>: deep in whatever problem I’m on, broad across infrastructure, SRE, performance, UI and AI-assisted delivery. Joined in 2018 through an early-career program; Lead in 2025.',
  'I question the status quo with evidence and make sure the right thing gets done. When in doubt, I ask: clarity early beats effort later. A problem well understood is half solved.'],
 roles:[{y:'2025 — now',t:'Lead Software Engineer',pts:['Leading the modernisation of the core auto-lending decisioning platform, as technical lead for decisioning and pre-qualification.','Designed and lead a custom agentic workflow for spec-driven development, now used across teams.','Led the technical build of a children’s educational app, from first commit to the App Store and Google Play.','Go-to engineer for hard cross-cutting problems: infrastructure, observability, performance, quality and AI-assisted delivery.','Mentor engineers from first-year to senior.']},
  {y:'2018 — 2025',t:'Software Engineer → Lead',pts:['Led delivery of a pricing modernisation: platform foundation, reference UI, audit patterns and validated bulk-input flows.','Led one of the org’s first public-cloud journeys for its line of business, then taught it forward through workshops.','Drove a third-party vendor exit via a new integration, live with zero production issues.']}],
 skills:{ai:['Agentic engineering','Spec-driven development','Agent skills and evals','LLM-assisted testing','Model right-sizing'],cloud:['AWS','EKS','API Gateway','Lambda','MSK','Aurora PostgreSQL','Terraform','Kubernetes'],backend:['Java','Spring','Hibernate Envers','Kafka','Avro','Groovy','PostgreSQL'],frontend:['React','React Native','Expo','Data-heavy UIs','Accessibility'],reliability:['Prometheus','Grafana','Chaos testing','Performance testing','Circuit breakers','Observability as code'],leadership:['Mentoring','Cross-team alignment','Stakeholder buy-in','Technical strategy','Pattern sharing']},
 principles:['<b>Frame decisions commercially</b>: value delivered, cost avoided, risk reduced.','<b>Reuse beats rebuild</b>: share patterns and the reasoning behind them.','<b>Responsible AI is structure, not just tooling</b>: specs, determinism where it matters, the right model per task.','<b>Mentor the thinking, not the answer</b>: pair constructive feedback with recognition of effort.'],
 life:'Outside the day job: interviewing candidates, running internal hackathons, and leading teams for a tech-for-good program. I support my wife as she builds her own business from scratch, which reinforces what I value at work: ownership, resilience and learning by doing. We travel to recharge.'};
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ul=a=>`<ul>${a.map(x=>`<li>${x}</li>`).join('')}</ul>`, tags=a=>`<div class="tags">${a.map(t=>`<span>${t}</span>`).join('')}</div>`;
const projHTML=p=>`<h3>${p.title}</h3>${p.body.map(b=>`<p>${b}</p>`).join('')}${p.role?`<h3>My role</h3>${ul(p.role)}`:''}${p.stats?`<div class="stats">${p.stats.map(([n,l])=>`<div><b>${n}</b><span>${l}</span></div>`).join('')}</div>`:''}${ul(p.facts)}${p.links?`<p>${p.links.map(([l,u])=>`<a href="${u}" target="_blank" rel="noopener">${l} ↗</a>`).join(' · ')}</p>`:''}${tags(p.stack)}`;
const aboutHTML=()=>DATA.about.map(x=>`<p>${x}</p>`).join(''), rolesHTML=()=>DATA.roles.map(r=>`<h3><span class="acc">${r.y}</span> · ${r.t}</h3>${ul(r.pts)}`).join('');
const skillsHTML=()=>Object.entries(DATA.skills).map(([k,v])=>`<h3>${k}</h3>${tags(v)}`).join(''), principlesHTML=()=>ul(DATA.principles), lifeHTML=()=>`<p>${DATA.life}</p>`;
const contactHTML=()=>`<p><a href="https://github.com/${DATA.gh}" target="_blank" rel="noopener">github.com/${DATA.gh}</a></p>`;
const ORDERED=[...PROJECTS].sort((a,b)=>!!b.featured-!!a.featured);
const toks=q=>q.toLowerCase().match(/[a-z0-9+-]+/g)||[], hit=(t,k)=>k.length<=3?t===k:t.startsWith(k);
const scoreOf=(q,words)=>{const T=toks(q);return words.filter(k=>T.some(t=>hit(t,k.toLowerCase()))).length;};
const kwOf=p=>[...new Set((p.id+' '+p.title+' '+p.line+' '+p.stack.join(' ')).toLowerCase().match(/[a-z0-9+-]{3,}/g))];
const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
