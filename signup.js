document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginLink = document.getElementById('login-link');
    const loginContainer = document.getElementById('login-container');
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Here you can add code to handle form submission
      alert('Sign-up form submitted!');
    });
  
    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginContainer.style.display = 'block';
      signupForm.style.display = 'none';
    });
  });
  