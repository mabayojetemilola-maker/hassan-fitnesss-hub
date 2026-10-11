document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.toggle('open');
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        btn.classList.remove('open');
        menu.classList.remove('open');
      });
    });
  }

  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) en.target.classList.add('visible');
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // Keep video playing
  var v = document.querySelector('.hero-video');
  if (v) {
    v.play().catch(function () {});
  }
});
