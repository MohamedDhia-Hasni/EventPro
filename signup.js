document.addEventListener('DOMContentLoaded', function() {
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
  
    // Form validation
    const signupForm = document.getElementById('signupForm');
    const successMessage = document.querySelector('.success-message');
    
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Reset error states
      document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
      });
      
      // Validate form
      let isValid = true;
      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      
      // Validate full name
      if (fullName === '') {
        document.querySelector('#fullName').parentElement.classList.add('error');
        isValid = false;
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.querySelector('#email').parentElement.classList.add('error');
        isValid = false;
      }
      
      // Validate password
      if (password.length < 8) {
        document.querySelector('#password').parentElement.classList.add('error');
        isValid = false;
      }
      
      // Validate password match
      if (password !== confirmPassword) {
        document.querySelector('#confirmPassword').parentElement.classList.add('error');
        isValid = false;
      }
      
      // If form is valid, show success message
      if (isValid) {
        // In a real application, you would send the data to your server here
        console.log('Form submitted:', { fullName, email, password });
        
        // Show success message and hide form
        signupForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Reset form after 5 seconds (for demo purposes)
        setTimeout(() => {
          signupForm.reset();
          signupForm.style.display = 'block';
          successMessage.style.display = 'none';
        }, 5000);
      }
    });
    
    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
      button.addEventListener('click', function() {
        const platform = this.querySelector('i').classList[1].split('-')[1];
        alert(`You clicked ${platform} login. In a real app, this would redirect to ${platform} authentication.`);
      });
    });
  });