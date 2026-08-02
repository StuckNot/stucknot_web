/* ============================================================
   DATA
   This mirrors /data/*.json exactly. It's inlined here only
   because opening this file directly (file://) can't fetch()
   local JSON due to browser CORS rules.

   TO MIGRATE:
   - Plain static server: replace each DATA.x below with
     `await fetch('/data/x.json').then(r => r.json())`
   - Next.js: `import projects from '../data/projects.json'`
     and pass as props via getStaticProps — no rewrite needed,
     the shape is identical.
   ============================================================ */

const DATA = {
  projects: [
    { name: "RetailFlow Inventory Dashboard", client: "Regional Retail Chain", summary: "Real-time inventory tracking across 40+ store locations.", tags: ["Django", "React", "PostgreSQL"], year: 2025, image: "images/retailflow-dashboard.jpg" },
    { name: "PayEase Merchant Portal", client: "Fintech Startup", summary: "Merchant onboarding and transaction reporting platform.", tags: ["Next.js", "Node.js", "Stripe API"], year: 2025, image: "images/payease-portal.jpg" },
    { name: "CampusConnect Mobile App", client: "EdTech Client", summary: "Cross-platform app connecting students with campus services.", tags: ["Flutter", "Firebase"], year: 2024, image: "images/campusconnect-app.jpg" }
  ],
  programs: [
    { title: "Full-Stack Development Track", duration: "16 weeks", level: "Beginner to job-ready", description: "From fundamentals to a production-grade capstone, built with a real mentor team." },
    { title: "Software Internship Program", duration: "12 weeks", level: "Intermediate", description: "Work directly on live client projects under senior engineer supervision." },
    { title: "Open Source Contributor Track", duration: "Self-paced", level: "All levels", description: "Structured onboarding into Stucknot's public repositories, with mentor code review." }
  ],
  blog: {
    posts: [
      { title: "Debugging Async Race Conditions in Node.js", date: "2026-06-02", readTime: "6 min" },
      { title: "Why We Mentor Every Intern on Real Client Code", date: "2026-05-18", readTime: "4 min" },
      { title: "Scaling a Django App to 40 Store Locations", date: "2026-04-27", readTime: "8 min" }
    ],
    repos: [
      { name: "stucknot/cli-toolkit", description: "Internal CLI tools, open for community contributions.", stars: 48 },
      { name: "stucknot/mentor-lms", description: "Lightweight LMS used in our mentorship program.", stars: 31 }
    ]
  },
  achievements: [
    { year: "2019", title: "Founded", description: "Started as a campus initiative preparing students for industry." },
    { year: "2022", title: "First Enterprise Client", description: "Delivered our first production system for an external business." },
    { year: "2024", title: "120+ Developers Trained", description: "Crossed our first major mentorship milestone." },
    { year: "2026", title: "One Company", description: "Unified software and education under a single portfolio." }
  ],
  testimonials: [
    { quote: "Stucknot's team shipped our dashboard faster than our internal estimate — and kept improving it after launch.", name: "Anita Rao", role: "Operations Head, Regional Retail Chain", type: "client" },
    { quote: "I went from tutorials to shipping real production code within two months of mentorship.", name: "Rohit Verma", role: "Program Graduate, now Backend Engineer", type: "student" },
    { quote: "Their open-source tooling saved us weeks of internal setup on our own stack.", name: "Karan Shah", role: "CTO, Fintech Startup", type: "client" }
  ],
  techStack: [
    { name: "React", category: "Frontend", icon: "react" },
    { name: "Next.js", category: "Frontend", icon: "next" },
    { name: "TypeScript", category: "Frontend", icon: "ts" },
    { name: "Django", category: "Backend", icon: "django" },
    { name: "Node.js", category: "Backend", icon: "node" },
    { name: "Python", category: "Backend", icon: "python" },
    { name: "Flutter", category: "Mobile", icon: "flutter" },
    { name: "Firebase", category: "Cloud", icon: "firebase" },
    { name: "PostgreSQL", category: "Database", icon: "postgres" },
    { name: "AWS", category: "Cloud", icon: "aws" },
    { name: "Docker", category: "DevOps", icon: "docker" },
    { name: "Stripe API", category: "Integration", icon: "stripe" }
  ]
};

const ICONS = {
  arrow: '<path fill="none" stroke="currentColor" stroke-width="1.8" d="M8 6l-6 6 6 6M16 6l6 6-6 6"/>',
  layers: '<path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 3l9 4.5-9 4.5-9-4.5L12 3z"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M3 12l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5"/>',
  network: '<circle fill="none" stroke="currentColor" stroke-width="1.8" cx="6" cy="6" r="2.4"/><circle fill="none" stroke="currentColor" stroke-width="1.8" cx="6" cy="18" r="2.4"/><circle fill="none" stroke="currentColor" stroke-width="1.8" cx="18" cy="12" r="2.4"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M6 8.4v7.2M8.2 7l7.6 3.8M8.2 17l7.6-3.8"/>',
  person: '<path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 15a5 5 0 100-10 5 5 0 000 10z"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/>',
  code: '<path fill="none" stroke="currentColor" stroke-width="1.8" d="M9 18l6-12M4 8l-2 4 2 4M20 8l2 4-2 4"/>',
  handshake: '<path fill="none" stroke="currentColor" stroke-width="1.8" d="M11 14l-2.5-2.5a2 2 0 00-2.8 0L4 13.2M13 14l2.5-2.5a2 2 0 012.8 0L20 13.2M11 14l1 1a1.5 1.5 0 002-2M13 14l-1 1a1.5 1.5 0 01-2-2"/>',
  
  // Tech stack icons — clean, recognizable monochrome SVGs
  react: '<circle cx="12" cy="12" r="2.2" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(120 12 12)"/>',
  next: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 8v8M8 8l9 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 8v5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
  ts: '<rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 10h6M10 10v8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M14.5 14c0-1.4 1-2 2.2-2s2.2.6 2.2 1.5c0 2-4.4 1.5-4.4 3.5 0 .9 1 1.5 2.2 1.5s2.2-.6 2.2-2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
  django: '<path d="M6 4h4v11c0 3-1.5 5-4.5 5-1.5 0-2.5-.5-3-.8l.5-2.5c.4.3 1 .5 1.6.5 1.2 0 1.9-.8 1.9-2.2V4h-.5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7.5" cy="6.5" r=".8" fill="currentColor"/><path d="M13 4h4v2.5c0 0 1.5-.5 2.5-.5 2.5 0 3.5 2 3.5 4.5 0 3-2 5-5 5-1.5 0-3-.5-5-1.5V4zm4 4c-.5 0-1 .2-1 .2v4.3c.3.2.7.3 1.2.3 1.3 0 2-.8 2-2.5 0-1.5-.7-2.3-2.2-2.3z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>',
  node: '<path d="M12 2.5L3 7.5v9l9 5 9-5v-9l-9-5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M3 7.5l9 5 9-5M12 12.5V22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  python: '<path d="M12 2C9 2 7 3 7 5v2h5v1H6c-2 0-3 1.5-3 3.5v3C3 16.5 4 18 6 18h1.5v-2.5c0-2 1.5-3.5 3.5-3.5h4c1.5 0 3-1 3-2.5V5c0-2-2-3-6-3zm-2.5 2a1 1 0 110 2 1 1 0 010-2z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c3 0 5-1 5-3v-2h-5v-1h6c2 0 3-1.5 3-3.5v-3c0-2-1-3.5-3-3.5h-1.5v2.5c0 2-1.5 3.5-3.5 3.5h-4c-1.5 0-3 1-3 2.5V19c0 2 2 3 6 3zm2.5-2a1 1 0 110-2 1 1 0 010 2z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>',
  flutter: '<path d="M14 2L4 12l3.5 3.5L20 2h-6z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 12.5L10.5 16 14 19.5h6l-3.5-3.5L20 12.5h-6z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  firebase: '<path d="M4 18L6.5 3.5c.1-.4.5-.5.7-.2l2.8 5.2L4 18z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M10 8.5l1.5-3c.2-.4.6-.4.8 0l7.7 12.5-10-5L10 8.5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M4 18l8 4.5c.4.2.8.2 1.2 0L20 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  postgres: '<ellipse cx="12" cy="7" rx="8" ry="4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M4 7v5c0 2.2 3.6 4 8 4s8-1.8 8-4V7" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M4 12v5c0 2.2 3.6 4 8 4s8-1.8 8-4v-5" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  aws: '<path d="M6.5 13.5c0 0 .5 1.5 2 2s4 .5 5.5-.5 2-2 2-2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M3 11l3 2 3-6 3 6 3-6 3 6 3-2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 15c1.5-.5 2.5-1 2.5-1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
  docker: '<path d="M2 13h4v-3H2v3zm5 0h4v-3H7v3zm5 0h4v-3h-4v3zm5 0h4v-3h-4v3zM7 9h4V6H7v3zm5 0h4V6h-4v3zM7 5h4V2H7v3z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M22 13c0 0-1-2.5-3-2.5-.5 0-1 .1-1.5.3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M1 14c0 4 3 7.5 10 7.5s10-3.5 10-7.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
  stripe: '<rect x="2" y="3" width="20" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 8c-2 0-3.5.8-3.5 2.2 0 2.8 5.5 2 5.5 4.3 0 1.2-1.2 2-3.2 2-1.5 0-2.8-.5-3.8-1.2M12 8c1.5 0 2.8.5 3.5 1.2M11.5 6v12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'
};

function svg(iconKey){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + ICONS[iconKey] + '</svg>';
}

/* ============================================================
   HEADER — glassmorphism on scroll
   ============================================================ */
(function initHeaderScroll(){
  var header = document.querySelector('.header');
  var ticking = false;
  window.addEventListener('scroll', function(){
    if (!ticking) {
      window.requestAnimationFrame(function(){
        header.classList.toggle('scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ============================================================
   HERO — audience toggle (company / student)
   ============================================================ */

const HERO_CONTENT = {
  company: {
    trust: ["40+ projects shipped", "12 industries served", "98% client retention"],
    eyebrow: "FOR BUSINESSES",
    headline: ["Production software,", "built by engineers we trained ourselves."],
    sub: "From first spec to post-launch support — delivered by a team we've mentored from day one, not hired off a resume.",
    buttons: [{ label: "Start a Project", primary: true }, { label: "See Our Work", primary: false }],
    cards: [
      { icon: "arrow", heading: "Client Projects", text: "Production apps shipped end-to-end for real businesses." },
      { icon: "layers", heading: "Full-Stack Delivery", text: "Django, React, Flutter — built and maintained by one team." },
      { icon: "network", heading: "DevOps & Cloud", text: "CI/CD pipelines and secure hosting on AWS and Azure." },
      { icon: "person", heading: "Post-Launch Support", text: "Continued maintenance, monitoring, and updates after go-live." }
    ]
  },
  student: {
    trust: ["120+ developers trained", "85% placed within 90 days", "18 open-source repos"],
    eyebrow: "FOR STUDENTS",
    headline: ["We build developers,", "not just certificates."],
    sub: "Real client projects, mentors who ship in production, and a straight line to your first job.",
    buttons: [{ label: "Explore Programs", primary: true }, { label: "Read Success Stories", primary: false }],
    cards: [
      { icon: "layers", heading: "Structured Mentorship", text: "Every learner paired with engineers who ship in production." },
      { icon: "arrow", heading: "Real Client Work", text: "Train on production codebases, not toy assignments." },
      { icon: "network", heading: "Open Source", text: "Public repositories you can contribute to and learn from." },
      { icon: "person", heading: "Career Outcomes", text: "Resume support, interview prep, and real job placements." }
    ]
  }
};

function renderHero(view){
  var c = HERO_CONTENT[view];

  document.getElementById('trust-line').innerHTML = c.trust
    .map(function(t, i){ return (i > 0 ? '<div class="divider"></div>' : '') + '<span>' + t + '</span>'; })
    .join('');

  document.getElementById('eyebrow').textContent = c.eyebrow;

  document.getElementById('headline').innerHTML =
    '<span class="line-1">' + c.headline[0] + '</span>' +
    '<span class="line-2">' + c.headline[1] + '</span>';

  document.getElementById('subheading').textContent = c.sub;

  document.getElementById('cta-buttons').innerHTML = c.buttons
    .map(function(b){ return '<button class="base-button' + (b.primary ? '' : ' secondary-btn') + '">' + b.label + '</button>'; })
    .join('');

  document.getElementById('fade-cards').innerHTML = c.cards.map(function(card, i){
    return '<div class="summary-card">' +
      '<div class="summary-card-number">0' + (i + 1) + '</div>' +
      '<div class="summary-card-icon">' + svg(card.icon, '#fff') + '</div>' +
      '<div class="summary-card-heading">' + card.heading + '</div>' +
      '<div class="summary-card-text">' + card.text + '</div>' +
    '</div>';
  }).join('');
}

function animateCounter(element, target, duration){
  var start = 0;
  var startTime = null;
  var suffix = element.textContent.replace(/[0-9]/g, '');
  function step(timestamp){
    if (!startTime) startTime = timestamp;
    var progress = Math.min((timestamp - startTime) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function animateTrustNumbers(){
  document.querySelectorAll('.trust-line span').forEach(function(span){
    var match = span.textContent.match(/(\d+)/);
    if (match){
      var num = parseInt(match[1]);
      animateCounter(span, num, 1500);
    }
  });
}

function setHeroView(view){
  var textWrap = document.getElementById('fade-text');
  var cardsWrap = document.getElementById('fade-cards');
  textWrap.classList.add('fading');
  cardsWrap.classList.add('fading');

  setTimeout(function(){
    document.body.setAttribute('data-view', view);
    document.querySelectorAll('.toggle-btn').forEach(function(btn){
      var active = btn.dataset.view === view;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', active);
    });
    renderHero(view);
    animateTrustNumbers();
    textWrap.classList.remove('fading');
    cardsWrap.classList.remove('fading');
  }, 180);
}

document.querySelectorAll('.toggle-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    if (!btn.classList.contains('active')) setHeroView(btn.dataset.view);
  });
});

/* ============================================================
   FEATURED WORK — with stagger delays
   ============================================================ */
var PROJECT_ICONS = ["arrow", "layers", "network"];

function renderProjects(){
  var container = document.getElementById('projects-grid');
  if (!container) return;
  
  // Set class for horizontal accordion grid
  container.className = 'h-accordion-grid';
  
  container.innerHTML = DATA.projects.map(function(p, i){
    return '<div class="work-card reveal reveal-stagger-' + (i + 1) + '">' +
      '<img src="' + p.image + '" alt="' + p.name + '" class="work-card-bg" loading="lazy" decoding="async">' +
      '<div class="work-card-overlay"></div>' +
      '<div class="work-card-collapsed">' +
         '<div class="collapsed-title">' + p.name + '</div>' +
      '</div>' +
      '<div class="work-card-expanded">' +
         '<div class="work-card-meta">' + p.client + '</div>' +
         '<div class="work-card-title">' + p.name + '</div>' +
         '<div class="work-card-summary">' + p.summary + '</div>' +
         '<div class="work-card-link-wrapper">' +
           '<div class="work-card-link">Learn More <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>' +
         '</div>' +
      '</div>' +
    '</div>';
  }).join('');
  
  var cards = container.querySelectorAll('.work-card');
  if (cards.length) {
    var middleIndex = Math.floor(cards.length / 2);
    cards[middleIndex].classList.add('active');
    
    cards.forEach(function(card){
      card.addEventListener('mouseenter', function(){
        cards.forEach(function(c){ c.classList.remove('active'); });
        card.classList.add('active');
      });
    });
  }
}

/* ============================================================
   TECH STACK
   ============================================================ */
function renderTechStack(){
  var iconNames = [
    'react', 'nextjs', 'ts', 'django', 'nodejs', 
    'python', 'flutter', 'firebase', 'postgres', 
    'aws', 'docker'
  ];
  
  var iconsHtml = iconNames.map(function(name) {
    return '<img src="https://skillicons.dev/icons?i=' + name + '&theme=light" alt="' + name + '" class="tech-icon-img" />';
  }).join('');
  
  var marqueeHtml = '<div class="tech-marquee-track">' + iconsHtml + iconsHtml + '</div>';
  
  var container = document.getElementById('tech-marquee');
  if (container) {
    container.innerHTML = marqueeHtml;
  }
}

/* ============================================================
   PROGRAMS — with stagger delays
   ============================================================ */
var PROGRAM_ICONS = ["code", "handshake", "network"];

function renderPrograms(){
  var container = document.getElementById('programs-tabs');
  if (!container) return;
  
  var tabsHtml = '<div class="programs-tabs-menu">';
  var contentHtml = '<div class="programs-tabs-content">';
  
  DATA.programs.forEach(function(p, i){
    var activeClass = i === 0 ? ' active' : '';
    
    // Tab Button
    tabsHtml += '<button class="program-tab-btn' + activeClass + '" data-index="' + i + '">' +
      '<span class="tab-icon">' + svg(PROGRAM_ICONS[i % 3], 'currentColor') + '</span>' +
      '<span class="tab-label">' + p.title + '</span>' +
    '</button>';
    
    // Display Pane
    contentHtml += '<div class="program-tab-pane' + activeClass + '" data-index="' + i + '">' +
      '<div class="pane-meta">' + p.duration + ' &bull; ' + p.level + '</div>' +
      '<h3 class="pane-title">' + p.title + '</h3>' +
      '<p class="pane-desc">' + p.description + '</p>' +
      '<button class="base-button outline-maroon pane-btn">Explore Track <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>' +
    '</div>';
  });
  
  tabsHtml += '</div>';
  contentHtml += '</div>';
  
  container.innerHTML = tabsHtml + contentHtml;
  initProgramTabs();
}

function initProgramTabs(){
  var btns = document.querySelectorAll('.program-tab-btn');
  var panes = document.querySelectorAll('.program-tab-pane');
  if (!btns.length) return;
  
  btns.forEach(function(btn){
    btn.addEventListener('mouseenter', function(){
      var idx = btn.dataset.index;
      btns.forEach(function(b){ b.classList.remove('active'); });
      panes.forEach(function(p){ p.classList.remove('active'); });
      
      btn.classList.add('active');
      document.querySelector('.program-tab-pane[data-index="' + idx + '"]').classList.add('active');
    });
  });
}

/* ============================================================
   OPEN SOURCE & BLOG — card-based layout
   ============================================================ */
function formatDate(dateStr){
  var d = new Date(dateStr + 'T00:00:00');
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function renderBlogAndRepos(){
  document.getElementById('blog-list').innerHTML = DATA.blog.posts.map(function(post, i){
    return '<div class="blog-card reveal reveal-stagger-' + (i + 1) + '">' +
      '<div class="blog-card-content">' +
        '<div class="blog-card-title">' + post.title + '</div>' +
        '<div class="blog-card-meta">' +
          '<span class="blog-card-date">' + formatDate(post.date) + '</span>' +
          '<span class="blog-card-read-time">' + post.readTime + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="blog-card-arrow">→</div>' +
    '</div>';
  }).join('');

  document.getElementById('repo-list').innerHTML = DATA.blog.repos.map(function(repo, i){
    return '<div class="repo-card reveal reveal-stagger-' + (i + 1) + '">' +
      '<div class="repo-card-header">' +
        '<span class="repo-name">' + repo.name + '</span>' +
        '<span class="repo-stars-badge">★ ' + repo.stars + '</span>' +
      '</div>' +
      '<div class="repo-desc">' + repo.description + '</div>' +
    '</div>';
  }).join('');
}

/* ============================================================
   ACHIEVEMENTS — enhanced timeline with cards
   ============================================================ */
function renderAchievements(){
  var container = document.getElementById('milestone-grid');
  if (!container) return;

  var cardsHtml = '<div class="stepper-cards">';
  var markersHtml = '<div class="stepper-markers">';
  
  DATA.achievements.forEach(function(m, i){
    cardsHtml += '<div class="stepper-card reveal reveal-stagger-' + (i + 1) + '" data-index="' + i + '">' +
      '<div class="stepper-year">' + m.year + '</div>' +
      '<div class="stepper-title">' + m.title + '</div>' +
      '<div class="stepper-desc">' + m.description + '</div>' +
    '</div>';
    
    markersHtml += '<div class="stepper-marker" data-index="' + i + '">' +
      '<div class="stepper-marker-dot"></div>' +
    '</div>';
  });
  cardsHtml += '</div>';
  markersHtml += '</div>';

  var trackHtml = '<div class="stepper-track-wrap reveal reveal-stagger-5">' +
    '<div class="stepper-track"></div>' +
    '<div class="stepper-progress" id="stepper-progress"></div>' +
    markersHtml +
  '</div>';

  container.innerHTML = cardsHtml + trackHtml;
  initProgressStepper();
}

function initProgressStepper() {
  var container = document.getElementById('milestone-grid');
  var cards = container.querySelectorAll('.stepper-card');
  var markers = container.querySelectorAll('.stepper-marker');
  var progress = document.getElementById('stepper-progress');
  if (!cards.length) return;
  
  var total = cards.length;
  var currentIndex = 0;
  var timer = null;
  var duration = 4000; 
  
  function goTo(index) {
    currentIndex = index;
    cards.forEach(function(c) { c.classList.remove('active'); });
    markers.forEach(function(m) { m.classList.remove('active'); });
    
    cards[currentIndex].classList.add('active');
    markers[currentIndex].classList.add('active');
    
    var pct = ((currentIndex + 1) / total) * 100;
    progress.style.width = pct + '%';
  }
  
  function nextStep() {
    var nextIdx = (currentIndex + 1) % total;
    if (nextIdx === 0) {
      progress.style.transition = 'none';
      progress.style.width = '0%';
      setTimeout(function() {
        progress.style.transition = 'width ' + duration + 'ms linear';
        goTo(0);
      }, 50);
    } else {
      goTo(nextIdx);
    }
  }
  
  function startTimer() {
    if (timer) clearInterval(timer);
    progress.style.transition = 'width ' + duration + 'ms linear';
    goTo(currentIndex); 
    timer = setInterval(nextStep, duration);
  }
  
  function stopTimer() {
    if (timer) clearInterval(timer);
  }
  
  container.addEventListener('mouseenter', stopTimer);
  container.addEventListener('mouseleave', startTimer);
  
  cards.forEach(function(card, idx) {
    card.addEventListener('mouseenter', function() {
      progress.style.transition = 'width 0.3s ease'; 
      goTo(idx);
    });
  });
  markers.forEach(function(marker, idx) {
    marker.addEventListener('mouseenter', function() {
      progress.style.transition = 'width 0.3s ease'; 
      goTo(idx);
    });
  });
  
  setTimeout(startTimer, 100);
}

/* ============================================================
   TESTIMONIALS — with quote marks + avatar initials
   ============================================================ */
function renderTestimonials(){
  document.getElementById('testimonial-grid').innerHTML = DATA.testimonials.map(function(t, i){
    return '<div class="testimonial-card reveal reveal-stagger-' + (i + 1) + '">' +
      '<div class="testimonial-quote-mark">\u201C</div>' +
      '<div class="testimonial-type">' + t.type + '</div>' +
      '<div class="testimonial-quote">\u201C' + t.quote + '\u201D</div>' +
      '<div class="testimonial-author">' +
        '<div class="testimonial-avatar">' + t.name.charAt(0) + '</div>' +
        '<div>' +
          '<div class="testimonial-name">' + t.name + '</div>' +
          '<div class="testimonial-role">' + t.role + '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

/* ============================================================
   SCROLL REVEAL — with stagger support
   ============================================================ */
function initScrollReveal(){
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(function(el){
    observer.observe(el);
  });
}

/* ============================================================
   INIT
   ============================================================ */
renderHero('company');
renderProjects();
renderPrograms();
renderBlogAndRepos();
renderTechStack();
renderAchievements();
renderTestimonials();
initScrollReveal();
/* ============================================================
   FLYWHEEL INTERACTION
   ============================================================ */
(function initFlywheel(){
  var centerLabel = document.querySelector('.flywheel-center-label');
  if (!centerLabel) return;
  var defaultText = centerLabel.innerHTML;
  
  document.querySelectorAll('.flywheel-node').forEach(function(node){
    var label = node.querySelector('.node-label');
    if (!label) return;
    
    node.addEventListener('mouseenter', function(){
      centerLabel.style.opacity = '0';
      setTimeout(function(){
        centerLabel.innerHTML = label.innerHTML;
        centerLabel.style.fontSize = '12px';
        centerLabel.style.opacity = '1';
      }, 200);
    });
    
    node.addEventListener('mouseleave', function(){
      centerLabel.style.opacity = '0';
      setTimeout(function(){
        centerLabel.innerHTML = defaultText;
        centerLabel.style.fontSize = '';
        centerLabel.style.opacity = '1';
      }, 200);
    });
  });
})();


/* ============================================================
   BENTO BOX PREMIUM INTERACTIONS
   ============================================================ */
(function initBentoInteractions(){
  var bentoCards = document.querySelectorAll('.bento-card:not(.bento-text)');
  
  bentoCards.forEach(function(card){
    card.addEventListener('mousemove', function(e){
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      
      // Spotlight effect
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
      
      // Image Parallax (only for bento-image)
      if (card.classList.contains('bento-image')) {
        var img = card.querySelector('img');
        if (img) {
          var centerX = rect.width / 2;
          var centerY = rect.height / 2;
          var moveX = (x - centerX) / 20;
          var moveY = (y - centerY) / 20;
          img.style.transform = 'scale(1.1) translate(' + moveX + 'px, ' + moveY + 'px)';
        }
      }
      
      // Flywheel 3D Tilt
      if (card.classList.contains('bento-flywheel')) {
        var flywheel = card.querySelector('.flywheel');
        if (flywheel) {
          var centerX = rect.width / 2;
          var centerY = rect.height / 2;
          var rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg tilt
          var rotateY = ((x - centerX) / centerX) * 10;
          flywheel.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';
          flywheel.style.transition = 'none';
        }
      }
    });
    
    card.addEventListener('mouseleave', function(){
      if (card.classList.contains('bento-image')) {
        var img = card.querySelector('img');
        if (img) {
          img.style.transform = 'scale(1) translate(0px, 0px)';
        }
      }
      if (card.classList.contains('bento-flywheel')) {
        var flywheel = card.querySelector('.flywheel');
        if (flywheel) {
          flywheel.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
          flywheel.style.transition = 'transform 0.5s var(--ease-out)';
        }
      }
    });
  });
})();

/* ============================================================
   FEATURED WORK ACCORDION
   ============================================================ */
(function initWorkAccordion(){
  var container = document.getElementById('projects-grid');
  if (!container) return;
  
  var cards = container.querySelectorAll('.work-card');
  if (cards.length === 0) return;
  
  // Set middle card as active by default
  var defaultIndex = Math.floor(cards.length / 2);
  cards[defaultIndex].classList.add('active');
  
  cards.forEach(function(card){
    card.addEventListener('mouseenter', function(){
      cards.forEach(function(c){ c.classList.remove('active'); });
      card.classList.add('active');
    });
  });
  
  container.addEventListener('mouseleave', function(){
    cards.forEach(function(c){ c.classList.remove('active'); });
    if (cards[defaultIndex]) {
      cards[defaultIndex].classList.add('active');
    }
  });
})();

(function initBackToTop(){
  var btn = document.getElementById('back-to-top');
  if (!btn) return;
  var ticking = false;
  window.addEventListener('scroll', function(){
    if (!ticking){
      window.requestAnimationFrame(function(){
        btn.classList.toggle('visible', window.scrollY > 400);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  btn.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();