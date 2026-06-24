
  /* NAV SCROLL */
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* MOBILE MENU */
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  /* TABS */
  function switchTab(id) {
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
      const ids = ['starters', 'mains', 'prix-fixe'];
      btn.classList.toggle('active', ids[i] === id);
    });
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
  }

  /* FADE-UP ON SCROLL */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
