/**
 * Contact Form Handler
 *
 * Submits the contact form to Web3Forms (https://web3forms.com/),
 * a free service that forwards form submissions to your email.
 * No server-side code required — the access key identifies your account.
 *
 * Behavior:
 *   - Prevents default form submission
 *   - POSTs form data + access key to the Web3Forms API
 *   - Shows a success or error message to the user
 *   - Resets the form on success
 *   - Auto-hides the status message after 5 seconds
 */
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  // Exit early if the form doesn't exist on this page
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    // Append the Web3Forms access key to authenticate the submission
    formData.append('access_key', 'e3a1d2c4-0c38-4595-b0a2-777be25bb83d');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showStatus('success', "Thank you! Your message has been sent successfully. I'll get back to you soon!");
        contactForm.reset();
      } else {
        showStatus('error', 'Oops! Something went wrong. Please try again or contact me directly via email.');
      }
    } catch (error) {
      // Handles network failures (no internet, DNS error, etc.)
      showStatus('error', 'Network error. Please check your connection and try again.');
    }
  });

  /**
   * Displays a status message below the form and hides it after 5 seconds.
   * @param {'success'|'error'} type - Controls the visual style via CSS class.
   * @param {string} message - The text to display to the user.
   */
  function showStatus(type, message) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;

    setTimeout(() => {
      formStatus.className = 'form-status';
    }, 5000);
  }
});
