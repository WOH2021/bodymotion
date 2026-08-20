// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Reveal each main section as it enters the viewport.
  const sections = document.querySelectorAll('main > section');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || !('IntersectionObserver' in window)) {
    sections.forEach(function(section) {
      section.classList.add('is-visible');
    });
  } else {
    const sectionObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    sections.forEach(function(section) {
      section.classList.add('section-transition');
      sectionObserver.observe(section);
    });
  }

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const hamburger = document.querySelector('.hamburger');

  if (menuToggle && navMobile && hamburger) {
    menuToggle.addEventListener('click', function() {
      navMobile.classList.toggle('open');
      hamburger.classList.toggle('open');

      // Update aria-expanded
      const isExpanded = navMobile.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking on mobile nav links
    const mobileNavLinks = navMobile.querySelectorAll('a');
    mobileNavLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navMobile.classList.remove('open');
        hamburger.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Dynamic footer year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
