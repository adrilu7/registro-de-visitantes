// Agregar evento para el botón de inicio de sesión.

visitorRegistration.initializeFirebase();

const mailAdmin = document.getElementById('login-mail');
const pass = document.getElementById('login-password');
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', event => {
  // console.log('sí funciono');
  const emailValue = mailAdmin.value;
  const passwordValue = pass.value;
  const auth = firebase.auth();
  // Para iniciar sesión 
  const promise = auth.signInWithEmailAndPassword(emailValue, passwordValue);
  promise.catch(event => console.log(event.message));
});

firebase.auth().onAuthStateChanged(firebaseUser => { // cuando detecta que el usuario se ha "logeado"
  if (firebaseUser) {
    console.log('logged in');
  } else {
    console.log('not logged in');
  }
});
