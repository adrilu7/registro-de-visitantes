visitorRegistration.initializeFirebase();

const db = firebase.firestore();

// Función para guardar data de registro.

let nameUser = document.getElementById('name');
let mailUser = document.getElementById('mail');
let company = document.getElementById('company');
let host = document.getElementById('host');
let registerBtn = document.getElementById('register');



const saveRegister = () => {
  db.collection('register').add({
    name: 
    mail: 
    company:
    host:
  })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
};