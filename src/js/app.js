visitorRegistration.initializeFirebase();

db = firebase.firestore();

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
