/* ============================================================
   Nexify — Modern SaaS Template
   Main JavaScript
   ============================================================
   Table of Contents:
   1. Mobile Hamburger Toggle
   2. Debounce Utility
   3. Navbar Scroll Effect (debounced via rAF)
   4. Active Nav Link on Scroll (debounced via rAF)
   5. Intersection Observer: Fade-In Reveal
   6. FAQ Accordion
   7. Smooth Scroll for Anchor Links
   8. CTA Email Form Validation
   9. prefers-color-scheme Detection
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ======= 1. Mobile Hamburger Toggle ======= */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ======= 2. Debounce Utility (requestAnimationFrame) ======= */
  let scrollTicking = false;

  /* ======= 3. Navbar Scroll Effect (debounced) ======= */
  const navbar = document.getElementById('navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        requestAnimationFrame(() => {
          navbar.classList.toggle('scrolled', window.scrollY > 40);
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });
  }

  /* ======= 4. Active Nav Link on Scroll (debounced) ======= */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a:not(.nav-cta)');

  function updateActiveNav() {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(anchor => {
      anchor.classList.remove('active');
      if (anchor.getAttribute('href') === '#' + current) {
        anchor.classList.add('active');
      }
    });
  }

  if (sections.length && navAnchors.length) {
    // Debounced version for scroll
    const onScrollUpdateNav = () => {
      if (!scrollTicking) {
        requestAnimationFrame(() => {
          updateActiveNav();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };
    window.addEventListener('scroll', onScrollUpdateNav, { passive: true });
    window.addEventListener('load', updateActiveNav);
  }

  /* ======= 5. Intersection Observer: Fade-In Reveal ======= */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ======= 6. FAQ Accordion ======= */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    if (button) {
      button.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        item.classList.toggle('active');
        button.setAttribute('aria-expanded', !isActive);
      });
    }
  });

  /* ======= 7. Smooth Scroll for anchor links (fallback) ======= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ======= 8. CTA Email Form Validation ======= */
  const ctaForm = document.getElementById('ctaForm');
  const ctaEmail = document.getElementById('ctaEmail');
  const ctaEmailError = document.getElementById('ctaEmailError');

  if (ctaForm && ctaEmail && ctaEmailError) {
    function validateCtaEmail() {
      const email = ctaEmail.value.trim();
      if (!email) {
        ctaEmail.classList.add('error');
        ctaEmailError.textContent = 'Silakan masukkan alamat email.';
        return false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        ctaEmail.classList.add('error');
        ctaEmailError.textContent = 'Masukkan alamat email yang valid.';
        return false;
      }
      ctaEmail.classList.remove('error');
      ctaEmailError.textContent = '';
      return true;
    }

    ctaEmail.addEventListener('input', function () {
      if (this.classList.contains('error')) {
        ctaEmailError.textContent = '';
        this.classList.remove('error');
      }
    });

    ctaEmail.addEventListener('blur', validateCtaEmail);

    ctaForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateCtaEmail()) {
        // Simulate success
        ctaEmail.value = '';
        ctaEmail.classList.remove('error');
        ctaEmailError.textContent = '';
        ctaEmail.placeholder = 'Cek kotak masuk Anda!';
        setTimeout(function () {
          ctaEmail.placeholder = 'Masukkan email kerja Anda';
        }, 3000);
      }
    });
  }

  /* ======= 9. prefers-color-scheme Detection ======= */
  // Set data attribute on <html> so CSS can respond
  function setColorScheme() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-color-scheme', isDark ? 'dark' : 'light');
  }

  // Initial check
  setColorScheme();

  // Listen for changes (e.g., OS theme toggle)
  const colorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
  if (colorSchemeMedia.addEventListener) {
    colorSchemeMedia.addEventListener('change', setColorScheme);
  } else if (colorSchemeMedia.addListener) {
    // Fallback for older Safari
    colorSchemeMedia.addListener(setColorScheme);
  }

});
