document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupLink = document.getElementById('signup-link');
    const loginContainer = document.getElementById('login-container');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Here you can add code to handle login form submission
      alert('Login form submitted!');
    });
  
    signupLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginContainer.style.display = 'none';
      signupForm.style.display = 'block';
    });
  });
  