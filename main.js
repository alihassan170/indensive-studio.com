// main.js

// === Auth Check ===
function checkAuthStatus() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const signinLink = document.getElementById('signin-link');
  const signupLink = document.getElementById('signup-link');
  const logoutLink = document.getElementById('logout-link');

  if (isLoggedIn === 'true') {
    if (signinLink) signinLink.style.display = 'none';
    if (signupLink) signupLink.style.display = 'none';
    if (logoutLink) logoutLink.style.display = 'inline-block';
  } else {
    if (signinLink) signinLink.style.display = 'inline-block';
    if (signupLink) signupLink.style.display = 'inline-block';
    if (logoutLink) logoutLink.style.display = 'none';
  }
}

// === Logout ===
function logoutUser() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'signin.html';
}

// === Animate Services on Scroll ===
function animateServiceItems() {
  const serviceItems = document.querySelectorAll('.service-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  serviceItems.forEach(item => {
    observer.observe(item);
  });
}

// === Handle Signin/Signup Forms ===
function handleAuthForms() {
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');

  if (signinForm) {
    signinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'index.html';
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'index.html';
    });
  }
}

// === Init ===
document.addEventListener('DOMContentLoaded', () => {
  checkAuthStatus();
  animateServiceItems();
  handleAuthForms();
});
