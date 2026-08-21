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
    const menuId = navMobile.id || 'mobile-navigation';
    const isPortuguese = document.documentElement.lang.toLowerCase().startsWith('pt');
    const openMenuLabel = isPortuguese ? 'Abrir menu de navegação' : 'Open navigation menu';
    const closeMenuLabel = isPortuguese ? 'Fechar menu de navegação' : 'Close navigation menu';
    navMobile.id = menuId;
    menuToggle.setAttribute('aria-controls', menuId);

    const closeMenu = function(returnFocus) {
      navMobile.classList.remove('open');
      hamburger.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', openMenuLabel);

      if (returnFocus) {
        menuToggle.focus();
      }
    };

    menuToggle.addEventListener('click', function() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        closeMenu(false);
        return;
      }

      navMobile.classList.add('open');
      hamburger.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', closeMenuLabel);

      const firstLink = navMobile.querySelector('a');
      if (firstLink) {
        firstLink.focus();
      }
    });

    menuToggle.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu(true);
      }
    });

    navMobile.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navMobile.classList.contains('open')) {
        closeMenu(true);
      }
    });

    // Close menu when clicking on mobile nav links
    const mobileNavLinks = navMobile.querySelectorAll('a');
    mobileNavLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        closeMenu(false);
      });
    });
  }

  // Dynamic footer year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
