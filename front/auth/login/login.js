document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const successMessage = document.querySelector('.success-message');
  const emailErrorMessage = document.querySelector('.form-group .error-message:first-of-type');
  const passwordErrorMessage = document.querySelector('.form-group.password-field .error-message');

  // password visibility
  const passwordToggle = document.querySelector('.password-toggle');
  if (passwordToggle) {
    passwordToggle.addEventListener('click', function () {
      const input = this.closest('.input-wrapper').querySelector('input');
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
    });
  }

  // API request
  loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    let isValid = true;

    // Reset error states
    emailErrorMessage.style.display = 'none';
    passwordErrorMessage.style.display = 'none';

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email
    if (!emailPattern.test(emailValue)) {
      emailErrorMessage.style.display = 'block'; // Show email error
      isValid = false;
    }

    // Validate password
    if (passwordValue === '') {
      passwordErrorMessage.style.display = 'block'; // Show password error
      isValid = false;
    }

    // Proceed with login if form is valid
    if (isValid) {
      try {
        const response = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: emailValue, password: passwordValue }),
        });

        if (response.ok) {
          const data = await response.json();
          const token = data.accessToken;  // JWT token
          localStorage.setItem('isLoggedIn', 'true'); // Add login flag

          // Store the token in localStorage
          localStorage.setItem('authToken', token);

          // Show success message and hide the form
          successMessage.style.display = 'block';
          setTimeout(() => {
            window.location.href = '../../Services/services.html';  // Redirect to services page after success
          }, 2000);  // Redirect after 2 seconds*/
        } else {
          const errorData = await response.json();
          // Handle backend error and display it
          alert(errorData.message || 'Login failed, please try again.');
        }
      } catch (error) {
        // Handle any other errors (e.g., network errors)
        console.error('Error:', error);
        alert('An error occurred, please try again later.');
      }
    }
  });
});
