visitorRegistration.initializeFirebase();

db = firebase.firestore();
<<<<<<< HEAD
// Se declara una const para llamar donde se imprimirá la tabla de visitantes
const table = document.getElementById('table-registers');
// Se llama la colleccion register por orden descendente de tiempo 
const registersRef = db.collection('register').orderBy('dateTime', 'desc');
// Se manda traer la colección register
=======

const table = document.getElementById('table-registers');
const registersRef = db.collection('register');
const signOutBtn = document.getElementById('signout')

signOutBtn.addEventListener('click' , event => {
  visitorRegistration.signOut();
})

>>>>>>> upstream/master
registersRef.get().then(function(querySnapshot) {
  // Se itera 
  querySnapshot.forEach(function(doc) {
    // Se obtienen los datos de los visitantes
    let name = doc.data().name;
    console.log(name);
    let email = doc.data().mail;
    let company = doc.data().company;
    let host = doc.data().host;
    let hour = doc.data().dateTime;
    // Se imprimen los datos obtenidos en una tabla
    table.innerHTML += `<tr>
      <td>${name}</td>
      <td>${email}</td>
      <td>${company}</td>
      <td>${host}</td>
      <td>${hour}</td>
      </tr>`;
  });
<<<<<<< HEAD
});
=======
});


>>>>>>> upstream/master
