/**
 * Theme Toggle & Navigation Script
 */
(function() {
  'use strict';

  const THEME_KEY = 'theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  // ================================================
  // Theme Management
  // ================================================

  /**
   * Get the preferred theme from localStorage or system preference
   */
  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  }

  /**
   * Apply theme to document
   */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);

    // Update Giscus theme if present
    updateGiscusTheme(theme);
  }

  /**
   * Toggle between light and dark themes
   */
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === DARK ? LIGHT : DARK;
    setTheme(next);
  }

  /**
   * Update Giscus iframe theme
   */
  function updateGiscusTheme(theme) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (iframe) {
      iframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme: theme === DARK ? 'dark' : 'light' } } },
        'https://giscus.app'
      );
    }
  }

  // ================================================
  // Mobile Navigation
  // ================================================

  /**
   * Toggle mobile menu visibility
   */
  function toggleMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');

    if (toggle && menu) {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');

      // Prevent body scroll when menu is open
      document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    }
  }

  /**
   * Close mobile menu
   */
  function closeMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');

    if (toggle && menu) {
      toggle.classList.remove('active');
      menu.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // ================================================
  // Event Listeners
  // ================================================

  document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.nav-mobile-links a');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu on window resize (if switching to desktop)
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      const menu = document.getElementById('mobile-menu');
      const toggle = document.getElementById('mobile-toggle');

      if (menu && menu.classList.contains('active')) {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
          closeMobileMenu();
        }
      }
    });
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    // Only auto-switch if user hasn't manually set a preference
    if (!localStorage.getItem(THEME_KEY)) {
      setTheme(e.matches ? DARK : LIGHT);
    }
  });

})();
