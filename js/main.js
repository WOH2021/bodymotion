// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
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
