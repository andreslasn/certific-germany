(function() {
  const style = document.createElement('style');
  style.textContent = `
    body {
      margin-left: 280px !important;
      transition: margin-left 0.25s ease;
    }
    body.nav-collapsed {
      margin-left: 40px !important;
    }
    .deck {
      width: calc(100vw - 280px) !important;
      margin-left: 0 !important;
      transition: width 0.25s ease;
    }
    body.nav-collapsed .deck {
      width: calc(100vw - 40px) !important;
    }
    #counter, .ctl, #toc {
      left: calc(280px + 1rem) !important;
      transition: left 0.25s ease;
    }
    body.nav-collapsed #counter,
    body.nav-collapsed .ctl,
    body.nav-collapsed #toc {
      left: calc(40px + 1rem) !important;
    }
    .ctl {
      display: none !important;
    }
    #slide-arrows {
      position: fixed;
      bottom: 2rem;
      left: calc(280px + (100vw - 280px) / 2);
      transform: translateX(-50%);
      display: flex;
      gap: 1rem;
      z-index: 99998;
      opacity: 0;
      transition: opacity 0.2s ease, left 0.25s ease;
    }
    body.nav-collapsed #slide-arrows {
      left: calc(40px + (100vw - 40px) / 2);
    }
    body:hover #slide-arrows,
    #slide-arrows:hover {
      opacity: 1;
    }
    #slide-arrows button {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(34, 34, 34, 0.6);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      transition: background 0.15s, transform 0.15s;
    }
    #slide-arrows button:hover {
      background: rgba(61, 21, 224, 0.8);
      transform: scale(1.1);
    }
    #slide-arrows button:disabled {
      opacity: 0.3;
      cursor: default;
      transform: none;
    }
    #ed-nav {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 280px;
      background: rgba(34, 34, 34, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      z-index: 99999;
      display: flex;
      flex-direction: column;
      transition: transform 0.25s ease;
      box-shadow: 4px 0 24px rgba(0,0,0,0.2);
    }
    #ed-nav.collapsed {
      transform: translateX(-240px);
    }
    #ed-nav-toggle {
      width: 100%;
      padding: 16px 20px;
      background: transparent;
      border: none;
      border-top: 1px solid rgba(255,255,255,0.1);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: rgba(255,255,255,0.6);
      font-family: 'Public Sans', system-ui, sans-serif;
      font-size: 13px;
      transition: background 0.15s, color 0.15s;
    }
    #ed-nav-toggle:hover {
      background: rgba(255,255,255,0.05);
      color: #fff;
    }
    #ed-nav-toggle svg {
      transition: transform 0.25s ease;
    }
    #ed-nav.collapsed #ed-nav-toggle svg {
      transform: rotate(180deg);
    }
    #ed-nav-links {
      flex: 1;
      padding: 16px 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      overflow-y: auto;
    }
    #ed-nav-links a {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      color: rgba(255,255,255,0.85);
      text-decoration: none;
      font-family: 'Public Sans', system-ui, sans-serif;
      font-size: 14px;
      border-radius: 8px;
      transition: background 0.15s, color 0.15s;
    }
    #ed-nav-links a:hover {
      background: rgba(255,255,255,0.1);
      color: #fff;
    }
    #ed-nav-links a.active {
      background: rgba(61, 21, 224, 0.8);
      color: #fff;
    }
    #ed-nav-links .section-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.4);
      padding: 16px 16px 8px;
      margin: 0;
    }
    #ed-nav-links .icon {
      width: 20px;
      height: 20px;
      opacity: 0.7;
    }
    #ed-nav-footer {
      padding: 16px 20px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    #ed-nav-footer img {
      height: 20px;
      opacity: 0.5;
    }
  `;
  document.head.appendChild(style);

  const currentPath = window.location.pathname;
  const isActive = (path) => currentPath.includes(path) ? 'active' : '';

  const nav = document.createElement('nav');
  nav.id = 'ed-nav';
  nav.innerHTML = `
    <div id="ed-nav-links">
      <p class="section-label">Presentation</p>
      <a href="/slides/ed-germany/" class="${isActive('/ed-germany/') && !currentPath.includes('mockups') ? 'active' : ''}">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/><path d="M12 17v-4"/></svg>
        Slide Deck
      </a>

      <p class="section-label">Product</p>
      <a href="/slides/ed-germany-mockups/patient-flow.html" class="${isActive('patient-flow') ? 'active' : ''}">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
        Patient View
      </a>
      <a href="/slides/ed-germany-mockups/provider-view.html" class="${isActive('provider-view') ? 'active' : ''}">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
        Provider View
      </a>

      <p class="section-label">Documents</p>
      <a href="/slides/ed-germany-mockups/pilot-proposal.html" class="${isActive('pilot-proposal') ? 'active' : ''}">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
        Pilot Proposal
      </a>
    </div>
    <button id="ed-nav-toggle" title="Toggle menu">
      <span>Collapse</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>
  `;
  document.body.appendChild(nav);

  const toggle = document.getElementById('ed-nav-toggle');
  const toggleLabel = toggle.querySelector('span');

  const savedState = localStorage.getItem('ed-nav-collapsed');
  if (savedState === 'true') {
    nav.classList.add('collapsed');
    document.body.classList.add('nav-collapsed');
    toggleLabel.textContent = 'Expand';
  }

  toggle.addEventListener('click', () => {
    nav.classList.toggle('collapsed');
    document.body.classList.toggle('nav-collapsed');
    const isCollapsed = nav.classList.contains('collapsed');
    toggleLabel.textContent = isCollapsed ? 'Expand' : 'Collapse';
    localStorage.setItem('ed-nav-collapsed', isCollapsed);
  });

  // Slide navigation arrows (only on slide deck pages)
  const deck = document.getElementById('deck');
  if (deck) {
    const slides = Array.from(deck.querySelectorAll('.slide'));
    if (slides.length > 1) {
      const arrows = document.createElement('div');
      arrows.id = 'slide-arrows';
      arrows.innerHTML = `
        <button id="arrow-prev" title="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button id="arrow-next" title="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      `;
      document.body.appendChild(arrows);

      const prevBtn = document.getElementById('arrow-prev');
      const nextBtn = document.getElementById('arrow-next');
      let currentSlide = 0;

      function updateArrows() {
        prevBtn.disabled = currentSlide <= 0;
        nextBtn.disabled = currentSlide >= slides.length - 1;
      }

      function goToSlide(i) {
        i = Math.max(0, Math.min(slides.length - 1, i));
        slides[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
        currentSlide = i;
        updateArrows();
      }

      // Track current slide on scroll
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && e.intersectionRatio >= 0.5) {
              currentSlide = slides.indexOf(e.target);
              updateArrows();
            }
          });
        }, { root: deck, threshold: [0.5] });
        slides.forEach((s) => io.observe(s));
      }

      prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
      nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
      updateArrows();
    }
  }
})();
