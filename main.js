/**
 * BROTH3R X — MSNEWSWORTHY
 * Main JavaScript — Interactions, Scroll Behavior, Animations
 */

'use strict';

// ─────────────────────────────────────────────────────────────
// NAVIGATION — Scroll depth + mobile menu
// ─────────────────────────────────────────────────────────────

const header = document.querySelector('.site-header');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link');

// Header scroll depth
function handleHeaderScroll() {
  if (window.scrollY > 40) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
}

// Mobile nav toggle
function toggleMobileNav() {
  const isOpen = hamburger?.classList.contains('open');
  hamburger?.classList.toggle('open');
  if (mobileNav) {
    if (isOpen) {
      mobileNav.style.display = 'none';
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      mobileNav.style.display = 'flex';
      requestAnimationFrame(() => mobileNav.classList.add('open'));
      document.body.style.overflow = 'hidden';
    }
  }
}

function closeMobileNav() {
  hamburger?.classList.remove('open');
  if (mobileNav) {
    mobileNav.classList.remove('open');
    setTimeout(() => { mobileNav.style.display = 'none'; }, 300);
    document.body.style.overflow = '';
  }
}

hamburger?.addEventListener('click', toggleMobileNav);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

function setActiveNavLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ─────────────────────────────────────────────────────────────
// SCROLL REVEAL — Archive cards + operation cards
// ─────────────────────────────────────────────────────────────

const revealElements = document.querySelectorAll('.archive-card, .operation-card');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger slightly per card position
      const cards = Array.from(entry.target.parentElement.children);
      const i = cards.indexOf(entry.target);
      const delay = Math.min(i * 80, 400);

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);

      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ─────────────────────────────────────────────────────────────
// NEWSLETTER FORM — Beehiiv integration
// ─────────────────────────────────────────────────────────────

const newsletterForm = document.querySelector('.newsletter__form-element');
const formInput = document.querySelector('.newsletter-email-input');
const formSubmit = document.querySelector('.form-submit');
const formMessage = document.querySelector('.form-message');

newsletterForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = formInput?.value?.trim();
  if (!email || !isValidEmail(email)) {
    showFormMessage('Please enter a valid email address.', 'error');
    return;
  }

  // Disable form during submission
  if (formSubmit) {
    formSubmit.disabled = true;
    formSubmit.textContent = 'Sending...';
  }

  // <!-- REPLACE: Beehiiv publication URL -->
  // When Beehiiv URL is available, replace the fetch below with the actual endpoint.
  // Example: await fetch('https://www.beehiiv.com/subscribe/YOUR_PUB_ID', { ... })
  // For now, simulate a successful submission

  try {
    // Simulate async request — replace with actual Beehiiv fetch
    await simulateSubscribe(email);
    showFormMessage('You\'re in. Frequencies incoming.', 'success');
    if (formInput) formInput.value = '';
  } catch (err) {
    showFormMessage('Something went wrong. Try again.', 'error');
  } finally {
    if (formSubmit) {
      formSubmit.disabled = false;
      formSubmit.textContent = 'Feel the Frequency →';
    }
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(message, type) {
  if (!formMessage) return;
  formMessage.textContent = message;
  formMessage.className = 'form-message ' + type;
}

function simulateSubscribe(email) {
  return new Promise((resolve) => setTimeout(resolve, 800));
}

// ─────────────────────────────────────────────────────────────
// SCROLL LISTENER — Throttled
// ─────────────────────────────────────────────────────────────

let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      handleHeaderScroll();
      setActiveNavLink();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// ─────────────────────────────────────────────────────────────
// SMOOTH SCROLL — Internal anchor links
// ─────────────────────────────────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerHeight = header?.offsetHeight || 80;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ─────────────────────────────────────────────────────────────
// KEYBOARD ACCESSIBILITY
// ─────────────────────────────────────────────────────────────

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileNav();
  }
});

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────

function init() {
  handleHeaderScroll();
  setActiveNavLink();

  // Hide mobile nav initially
  if (mobileNav) {
    mobileNav.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', init);
