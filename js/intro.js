/**
 * Intro Page Navigation
 *
 * Handles the "Let's Go!" button on the intro/landing page.
 * Triggers a fade-out animation before redirecting to the works page,
 * giving the transition a smooth, game-like feel.
 *
 * Also supports keyboard navigation (Enter or Space) for accessibility.
 */
document.addEventListener('DOMContentLoaded', () => {
  const introContainer = document.querySelector('.intro-container');
  const enterButton = document.querySelector('.enter-button');

  // Guard flag to prevent duplicate navigation calls (e.g., rapid button presses)
  let isNavigating = false;

  /**
   * Initiates the page transition to the works/home page.
   * Adds the `.fade-out` CSS class to animate the container out,
   * then redirects after the animation duration (400ms).
   */
  function navigateToWorks() {
    if (isNavigating) return;
    isNavigating = true;

    introContainer.classList.add('fade-out');

    // Wait for the CSS fade-out transition to complete before navigating
    setTimeout(() => {
      window.location.href = 'home.html';
    }, 400);
  }

  // Button click handler — stops propagation to avoid conflicts with other listeners
  if (enterButton) {
    enterButton.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateToWorks();
    });
  }

  // Keyboard shortcut: Enter or Space triggers navigation from anywhere on the page
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigateToWorks();
    }
  });
});
