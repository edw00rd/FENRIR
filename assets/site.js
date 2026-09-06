(() => {
  const menuButton = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const signalButtons = document.querySelectorAll('[data-signal-button]');
  const heroLogo = document.querySelector('[data-hero-logo]');
  signalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const signal = button.dataset.signalButton;
      document.body.dataset.signal = signal;
      signalButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      if (heroLogo) {
        heroLogo.src = signal === 'orange' ? '/assets/fenrir-logo-orange.png' : '/assets/fenrir-logo-blue.png';
      }
    });
  });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach((item) => observer.observe(item));
  } else {
    reveals.forEach((item) => item.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
