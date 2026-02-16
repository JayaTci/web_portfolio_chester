/**
 * Navigation and Page Interactions
 *
 * Handles three shared behaviors used on the home and about pages:
 *   1. Accordion toggle — expand/collapse the "Let's Connect" section
 *   2. Email copy — copy email address to clipboard with visual feedback
 *   3. Active nav link — highlights the current page link in the header
 */
document.addEventListener('DOMContentLoaded', () => {

  /* ============================
     ACCORDION TOGGLE
     Toggles the aria-expanded attribute on accordion trigger buttons.
     CSS uses the attribute value to animate the content panel open/closed.
     ============================ */
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', !isExpanded);
    });
  });

  /* ============================
     EMAIL COPY TO CLIPBOARD
     Uses the modern Clipboard API with a fallback for older browsers
     that require the deprecated execCommand approach.
     ============================ */
  const emailCopyBtn = document.querySelector('.email-copy-btn');

  if (emailCopyBtn) {
    emailCopyBtn.addEventListener('click', async () => {
      const email = emailCopyBtn.getAttribute('data-email');

      try {
        // Modern approach: Clipboard API (requires HTTPS or localhost)
        await navigator.clipboard.writeText(email);
        showCopiedFeedback(emailCopyBtn);
      } catch (err) {
        console.error('Failed to copy email:', err);

        // Fallback: create a temporary textarea, select its content, and copy
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';  // Prevent page scroll jump
        textArea.style.opacity = '0';       // Keep it invisible
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand('copy');
          showCopiedFeedback(emailCopyBtn);
        } catch (err2) {
          console.error('Fallback copy failed:', err2);
        }

        document.body.removeChild(textArea);
      }
    });
  }

  /**
   * Briefly adds the `.copied` class to the button to show visual feedback,
   * then removes it after 2 seconds.
   * @param {HTMLElement} btn - The button element to apply feedback to.
   */
  function showCopiedFeedback(btn) {
    btn.classList.add('copied');
    setTimeout(() => {
      btn.classList.remove('copied');
    }, 2000);
  }

  /* ============================
     ACTIVE NAV LINK
     Compares the current page filename against each nav link's href
     to mark the matching link as active.
     ============================ */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});
