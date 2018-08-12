visitorRegistration.initializeFirebase();

 db = firebase.firestore();

const table = document.getElementById('table-registers');
const registersRef = db.collection('register');

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


