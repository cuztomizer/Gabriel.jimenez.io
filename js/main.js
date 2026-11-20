(function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('nav-menu');
  var year = document.getElementById('year');

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
})();
