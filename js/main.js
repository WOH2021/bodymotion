// ============================================
// Body Motion Pilates - Enhanced UX JavaScript
// ============================================
// Vanilla JS for smooth navigation, form validation, 
// and accessibility enhancements without framework bloat

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all features
  initMobileMenu();
  initSmoothScroll();
  initActiveNavLink();
  initFormValidation();
  initBackToTop();
  initDynamicFooterYear();
});

// ============================================
// 1. MOBILE MENU TOGGLE
// ============================================
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const hamburger = document.querySelector('.hamburger');

  if (!menuToggle || !navMobile || !hamburger) return;

  menuToggle.addEventListener('click', function() {
    navMobile.classList.toggle('open');
    hamburger.classList.toggle('open');

    const isExpanded = navMobile.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', isExpanded);
  });

  // Close menu when clicking on mobile nav links
  const mobileNavLinks = navMobile.querySelectorAll('a');
  mobileNavLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Close menu
      navMobile.classList.remove('open');
      hamburger.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');

      // Handle smooth scroll for anchor links
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        event.preventDefault();
        smoothScrollToAnchor(href);
      }
    });
  });
}

// ============================================
// 2. SMOOTH SCROLL TO ANCHOR
// ============================================
function initSmoothScroll() {
  // Handle all internal anchor links
  const allLinks = document.querySelectorAll('a[href^="#"]');
  
  allLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        event.preventDefault();
        smoothScrollToAnchor(href);
      }
    });
  });
}

function smoothScrollToAnchor(selector) {
  const target = document.querySelector(selector);
  if (!target) return;

  // Scroll with smooth behavior and offset for sticky header
  const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
  const targetPosition = target.offsetTop - headerHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });

  // Update URL without triggering navigation
  history.pushState(null, '', selector);
}

// ============================================
// 3. ACTIVE NAV LINK HIGHLIGHTING
// ============================================
function initActiveNavLink() {
  updateActiveNavLink();
  
  // Re-check active link on scroll (for pages with multiple sections)
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveNavLink, 100);
  });
}

function updateActiveNavLink() {
  const currentUrl = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .lang-btn');

  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (!href) return;

    // Check if this link matches current page
    const isActive = 
      (currentUrl === '/' || currentUrl.endsWith('index.html')) && href.includes('index.html') ||
      currentUrl.endsWith(href) ||
      (href === './index.html' && (currentUrl === '/' || currentUrl.endsWith('index.html'))) ||
      (href === './about.html' && currentUrl.endsWith('about.html')) ||
      (href === './schedule.html' && currentUrl.endsWith('schedule.html')) ||
      (href === './contact.html' && currentUrl.endsWith('contact.html'));

    if (isActive) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

// ============================================
// 4. CONTACT FORM VALIDATION
// ============================================
function initFormValidation() {
  const contactForm = document.querySelector('form[name="contact"]') || 
                      document.querySelector('form');
  if (!contactForm) return;

  // Add real-time validation to email and phone fields
  const emailInputs = contactForm.querySelectorAll('input[type="email"]');
  const phoneInputs = contactForm.querySelectorAll('input[type="tel"]');
  const textInputs = contactForm.querySelectorAll('input[type="text"]');
  const textareas = contactForm.querySelectorAll('textarea');

  // Email validation
  emailInputs.forEach(function(input) {
    input.addEventListener('blur', function() {
      validateEmail(this);
    });
    input.addEventListener('input', function() {
      if (this.classList.contains('invalid')) {
        validateEmail(this);
      }
    });
  });

  // Phone validation
  phoneInputs.forEach(function(input) {
    input.addEventListener('blur', function() {
      validatePhone(this);
    });
    input.addEventListener('input', function() {
      if (this.classList.contains('invalid')) {
        validatePhone(this);
      }
    });
  });

  // Required field validation
  [textInputs, textareas].forEach(function(inputs) {
    inputs.forEach(function(input) {
      input.addEventListener('blur', function() {
        if (this.required && this.value.trim() === '') {
          this.classList.add('invalid');
          showFieldError(this, 'This field is required');
        }
      });
      input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
          this.classList.remove('invalid');
          clearFieldError(this);
        }
      });
    });
  });

  // Form submission
  contactForm.addEventListener('submit', function(event) {
    const isValid = validateForm(this);
    if (!isValid) {
      event.preventDefault();
      console.log('Form validation failed');
    }
  });
}

function validateEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(input.value);

  if (input.value === '') {
    input.classList.remove('invalid');
    clearFieldError(input);
  } else if (!isValid) {
    input.classList.add('invalid');
    showFieldError(input, 'Please enter a valid email address');
  } else {
    input.classList.remove('invalid');
    clearFieldError(input);
  }

  return isValid || input.value === '';
}

function validatePhone(input) {
  // Accept common phone formats: +351 928 255 320, +351928255320, 928255320, etc.
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  const digitsOnly = input.value.replace(/\D/g, '');
  const isValid = phoneRegex.test(input.value) && digitsOnly.length >= 9;

  if (input.value === '') {
    input.classList.remove('invalid');
    clearFieldError(input);
  } else if (!isValid) {
    input.classList.add('invalid');
    showFieldError(input, 'Please enter a valid phone number');
  } else {
    input.classList.remove('invalid');
    clearFieldError(input);
  }

  return isValid || input.value === '';
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach(function(input) {
    if (input.type === 'email') {
      if (!validateEmail(input)) isValid = false;
    } else if (input.type === 'tel') {
      if (!validatePhone(input)) isValid = false;
    } else if (input.required && input.value.trim() === '') {
      input.classList.add('invalid');
      showFieldError(input, 'This field is required');
      isValid = false;
    }
  });

  return isValid;
}

function showFieldError(input, message) {
  clearFieldError(input);
  const errorEl = document.createElement('span');
  errorEl.className = 'field-error';
  errorEl.setAttribute('role', 'alert');
  errorEl.textContent = message;
  input.parentNode.insertBefore(errorEl, input.nextSibling);
}

function clearFieldError(input) {
  const errorEl = input.parentNode.querySelector('.field-error');
  if (errorEl) {
    errorEl.remove();
  }
}

// ============================================
// 5. BACK TO TOP BUTTON
// ============================================
function initBackToTop() {
  // Create back-to-top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  backToTopBtn.setAttribute('title', 'Back to top');
  backToTopBtn.innerHTML = '↑';
  document.body.appendChild(backToTopBtn);

  // Show/hide button on scroll
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, 50);
  });

  // Smooth scroll to top
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================
// 6. DYNAMIC FOOTER YEAR
// ============================================
function initDynamicFooterYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
