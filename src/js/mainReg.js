visitorRegistration.initializeFirebase();

document.getElementById('send-btn').addEventListener('click', event => { 
  event.preventDefault();
  const emailAdmin = document.getElementById('mail-register').value;
  const passwordAdmin = document.getElementById('password-register').value;
  visitorRegistration.registerAdmin(emailAdmin, passwordAdmin);
});
  
