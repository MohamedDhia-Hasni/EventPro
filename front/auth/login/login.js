const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordToggle = document.querySelector('.password-toggle');

// Toggle password visibility
/*passwordToggle.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});*/
document.addEventListener('DOMContentLoaded', function(){
  // Password toggle functionality
  const passwordToggles = document.querySelectorAll('.password-toggle');
  passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const input = this.parentElement.querySelector('input');
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
    });
  });

// Form validation on submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  // Reset error states
  const formGroups = loginForm.querySelectorAll('.form-group');
  formGroups.forEach(group => group.classList.remove('error'));

  // Validate email
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    emailInput.parentElement.classList.add('error');
    isValid = false;
  }

  // Validate password
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === '') {
    passwordInput.parentElement.classList.add('error');
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    const successMessage = loginForm.parentElement.querySelector('.success-message');
    successMessage.style.display = 'block';
    loginForm.style.display = 'none';
    
    // Reset form after 3 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
      loginForm.style.display = 'block';
      loginForm.reset();
    }, 3000);
  }
})});
