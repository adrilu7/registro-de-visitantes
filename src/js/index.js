visitorRegistration.initializeFirebase();

db = firebase.firestore();

// Cerrar sesión
// Se manda llamar el botón signout para detonar evento
document.getElementById('signout').addEventListener('click', event => {
// Para que no se recargue la pagina
  event.preventDefault();
  // Se manda llamar la funnción signOut
  visitorRegistration.signOut();
});

const table = document.getElementById('table-registers');
const registersRef = db.collection('register').orderBy('dateTime', 'desc');

registersRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    let name = doc.data().name;
    console.log(name);
    let email = doc.data().mail;
    let company = doc.data().company;
    let host = doc.data().host;
    let hour = doc.data().dateTime;

    table.innerHTML += `<tr>
   
      <td>${name}</td>
      <td>${email}</td>
      <td>${company}</td>
      <td>${host}</td>
      <td>${hour}</td>
      </tr>`;
  });
});


// visitorRegistration.initializeFirebase();
// db = firebase.firestore();

//   Cerrar sesión
// Se manda llamar el botón signout para detonar evento
// document.getElementById('signout').addEventListener('click', event => {
// Para que no se recargue la pagina
// event.preventDefault();
// Se manda llamar la funnción signOut
// visitorRegistration.signOut();
// });

// const drawVisitors = () => {
// firebase.auth().onAuthStateChanged(user => { 
// if (user) { 
// const registersRef = db.collection('register').orderBy('time', 'desc');
// registersRef.get()
// .then(element => {
// let result = '';
// element.forEach(register => {
// result += `<tr>
   
// <td>${register.data().name}</td>
// <td>${register.data().email}</td>
// <td>${register.data().company}</td>
// <td>${register.data().host}</td>
// <td>${register.data().hour}</td>
// </tr>`;
// });
// document.getElementById('table-registers').innerHTML = result;
// });
// }
// });
// };
// drawVisitors();