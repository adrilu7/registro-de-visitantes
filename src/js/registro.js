// Este archivo es para el registro del administrador y no aparece en la app.

visitorRegistration.initializeFirebase();

const mailAdminReg = document.getElementById('mail-register');
const passAdminReg = document.getElementById('password-register');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', event => {
  const adminEmailValue = mailAdminReg.value;
  const adminPasswordValue = passAdminReg.value;
  const auth = firebase.auth();
  
  const promise = auth.createUserWithEmailAndPassword(adminEmailValue, adminPasswordValue)
    .then(function(promise) {
      promise.catch(event => console.log(event.message));
    });
});
  
firebase.auth().onAuthStateChanged(firebaseUser => { 
  if (firebaseUser) {
  } else {
    console.log('not logged in');
  }
});