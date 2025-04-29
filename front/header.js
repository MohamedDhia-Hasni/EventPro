document.addEventListener('DOMContentLoaded', function () {
  const loginLink = document.getElementById('loginLink');
  const signupLink = document.getElementById('signupLink');
  const logoutLink = document.getElementById('logoutLink');
  const serviceLinks = document.getElementById('servicesLink');
  const startButton = document.getElementById('startButton');

  const token = localStorage.getItem('authToken'); // Check if the user is logged in

  // Check if the user is logged in
  if (token) {
    // User is logged in
    if (serviceLinks) {
      serviceLinks.style.display = 'block';
    }
    // Show service links
    loginLink.style.display = 'none';
    signupLink.style.display = 'none';
    logoutLink.style.display = 'block';

    // Add a class to the body or header
    document.body.classList.add('logged-in');
  } else {
    // User is not logged in
    if (serviceLinks) {
      serviceLinks.style.display = 'none';
    }
    loginLink.style.display = 'block';
    signupLink.style.display = 'block';
    logoutLink.style.display = 'none';

    // Remove the class
    document.body.classList.remove('logged-in');
  }

  // Handle startButton click
  if (startButton) {
    startButton.addEventListener('click', function () {
      if (token) {
        // If user is logged in, do something
        window.location.href = '/front/Services/services.html';  // Example action when logged in
      } else {
        // If user is not logged in, redirect to login page
        window.location.href = '/front/auth/login/login.html';  // Redirect to login page
      }
    });
  }

  // Handle logout button click
  logoutLink.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('authToken'); // Remove the token from localStorage
    window.location.href = '/front/landing page/index.html'; // Redirect to index page
  });
});