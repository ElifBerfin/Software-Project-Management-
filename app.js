const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform basic checks or send to your backend
  console.log('Username:', username);
  console.log('Password:', password);

  // Example: redirect or show an alert
  // In a real application, you'd send these to the server
  alert('Login form submitted!');
});
