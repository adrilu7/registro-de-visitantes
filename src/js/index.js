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
    let personVisit = doc.data().host;
    let hour = doc.data().dataTime;

    table.innerHTML += `<tr>
   
      <td>${name}</td>
      <td>${email}</td>
      <td>${company}</td>
      <td>${personVisit}</td>
      <td>${hour}</td>
      </tr>`;
  });
});


