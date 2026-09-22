/* ==========================================================================
   David Orozco — small progressive enhancements (the site works without JS)
   1. Mobile menu toggle
   2. Header hairline once the page scrolls
   3. Measure the hero line so the draw-in animation fits exactly
   4. Current year in the footer
   ========================================================================== */
(function () {
  'use strict';

  // 1. Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
        toggle.focus();
      }
    });
  }

  // 2. Header border on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 3. Hero line length for the draw animation
  var series = document.querySelector('.price-path .series');
  if (series && series.getTotalLength) {
    series.style.setProperty('--len', Math.ceil(series.getTotalLength()) + 10);
  }

  // 4. Footer year
  var year = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = year; });
})();
