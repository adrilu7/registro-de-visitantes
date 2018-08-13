visitorRegistration.initializeFirebase();

document.getElementById('login').addEventListener('click', event => { 
  event.preventDefault();
  const emailAdmin = document.getElementById('login-mail').value;
  const passwordAdmin = document.getElementById('login-password').value;
  visitorRegistration.loginAdmin(emailAdmin, passwordAdmin);
});
  