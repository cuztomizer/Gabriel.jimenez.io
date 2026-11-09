(function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('nav-menu');
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
