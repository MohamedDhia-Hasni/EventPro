document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const passwordToggle = document.querySelector('.password-toggle');
  const successMessage = document.querySelector('.success-message');

  // 🔒 Toggle password visibility
  if (passwordToggle) {
    passwordToggle.addEventListener('click', function () {
      const input = this.closest('.input-wrapper').querySelector('input');
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
    });
  }

  // ✅ Form validation
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    // Remove all previous error states
    const emailGroup = emailInput.closest('.form-group');
    const passwordGroup = passwordInput.closest('.form-group');

    emailGroup.classList.remove('error');
    passwordGroup.classList.remove('error');

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      emailGroup.classList.add('error');
      isValid = false;
    }

    if (passwordValue === '') {
      passwordGroup.classList.add('error');
      isValid = false;
    }

    // ✅ Show success message if valid
    if (isValid) {
      successMessage.style.display = 'block';
      loginForm.style.display = 'none';

      setTimeout(() => {
        successMessage.style.display = 'none';
        loginForm.style.display = 'block';
        loginForm.reset();
      }, 3000);
    }
  });
});
