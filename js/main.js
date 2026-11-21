(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('nav-menu');
  var year = document.getElementById('year');

  root.classList.add('js');
  if (year) year.textContent = String(new Date().getFullYear());

  function setOpen(open) {
    if (!toggle || !menu) return;
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Close' : 'Menu';
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setOpen(!menu.classList.contains('open'));
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setOpen(false);
    });
  }

  var nodes = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    nodes.forEach(function (node) { node.classList.add('is-in'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  nodes.forEach(function (node, index) {
    node.style.transitionDelay = (index % 4) * 70 + 'ms';
    observer.observe(node);
  });
})();
