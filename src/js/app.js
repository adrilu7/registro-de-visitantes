visitorRegistration.initializeFirebase();

const db = firebase.firestore();

// Función para guardar data de registro.

let nameUser = document.getElementById('name');
let mailUser = document.getElementById('mail');
let company = document.getElementById('company');
let host = document.getElementById('host');
let registerBtn = document.getElementById('register');

registerBtn.addEventListener('click', () => {
  let nameValue = nameUser.value;
  let mailValue = mailUser.value;
  let companyValue = company.value;
  let hostValue = host.value;
  let yearDateTime = firebase.firestore.FieldValue.serverTimestamp();

  db.collection('register').add({
    name: nameValue,
    mail: mailValue,
    company: companyValue,
    host: hostValue,
    dateTime: yearDateTime
  })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
});

// Agregar evento para el botón de inicio de sesión.

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
  
