/**
 * Theme Toggle System
 *
 * Manages light/dark theme switching across the portfolio.
 * Priority order for initial theme:
 *   1. User's saved preference (localStorage)
 *   2. System preference (prefers-color-scheme)
 *   3. Default: light theme
 *
 * The theme is applied via the `data-theme` attribute on <html>.
 * CSS custom properties in variables.css handle the visual switching.
 */
(function () {
  const STORAGE_KEY = 'portfolio-theme';
  const THEME_ATTRIBUTE = 'data-theme';
  const DARK_THEME = 'dark';
  const LIGHT_THEME = 'light';

  /**
   * Determines the initial theme to apply on page load.
   * Checks localStorage first, then falls back to the system preference.
   * @returns {'light'|'dark'} The theme to apply.
   */
  function getInitialTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme) {
      return savedTheme;
    }

    // Fall back to the OS/browser color scheme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_THEME;
    }

    return LIGHT_THEME;
  }

  /**
   * Applies a theme to the document and persists it to localStorage.
   * @param {'light'|'dark'} theme - The theme to apply.
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  /**
   * Toggles between light and dark themes.
   * Reads the current theme from the DOM to determine the next state.
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute(THEME_ATTRIBUTE);
    const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    applyTheme(newTheme);
  }

  // Apply the correct theme immediately to avoid a flash of unstyled content
  applyTheme(getInitialTheme());

  // Attach the toggle button click handler once the DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle-btn');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        // Prevent click from bubbling up to any parent handlers (e.g., intro navigation)
        e.stopPropagation();
        toggleTheme();
      });
    }
  });

  // React to OS-level theme changes, but only if the user hasn't set a manual preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? DARK_THEME : LIGHT_THEME);
      }
    });
  }
})();
