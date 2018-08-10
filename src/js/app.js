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

// ///////////////////////////
// Obtenemos todos los elementos que necesitaremos
var video = document.querySelector('#camera-stream'),
  image = document.querySelector('#snap'),
  start_camera = document.querySelector('#start-camera'),
  controls = document.querySelector('.controls'),
  take_photo_btn = document.querySelector('#take-photo'),
  delete_photo_btn = document.querySelector('#delete-photo'),
  download_photo_btn = document.querySelector('#download-photo'),
  error_message = document.querySelector('#error-message');


// Utilizamos la funcion getUserMedia para obtener la salida de la webcam
navigator.getMedia = (navigator.getUserMedia ||
                      navigator.webkitGetUserMedia ||
                      navigator.mozGetUserMedia ||
                      navigator.msGetUserMedia);


if (!navigator.getMedia) {
  displayErrorMessage('Tu navegador no soporta la funcion getMedia.');
} else {
  // Solicitamos la camara
  navigator.getMedia(
    {
      video: true
    },
    function(stream) {
      // A nuestro componente video le establecemos el src al stream de la webcam
      video.src = window.URL.createObjectURL(stream);

      // Reproducimos
      video.play();
      video.onplay = function() {
        showVideo();
      };
    },
    function(err) {
      displayErrorMessage('Ocurrio un error al obtener el stream de la webcam: ' + err.name, err);
    }
  );
}


// En los moviles no se puede reproducir el video automaticamente, programamos funcionamiento del boton inicar camara
start_camera.addEventListener('click', function(e) {
  e.preventDefault();

  // Reproducimos manualmente
  video.play();
  showVideo();
});


take_photo_btn.addEventListener('click', function(e) {
  e.preventDefault();

  var snap = takeSnapshot();

  // Mostramos la imagen
  image.setAttribute('src', snap);
  image.classList.add('visible');

  // Activamos los botones de eliminar foto y descargar foto
  delete_photo_btn.classList.remove('disabled');
  download_photo_btn.classList.remove('disabled');

  // Establecemos el atributo href para el boton de descargar imagen
  download_photo_btn.href = snap;

  // Pausamos el stream de video de la webcam
  video.pause();
});


delete_photo_btn.addEventListener('click', function(e) {
  e.preventDefault();

  // Ocultamos la imagen
  image.setAttribute('src', '');
  image.classList.remove('visible');

  // Deshabilitamos botones de descargar y eliminar foto
  delete_photo_btn.classList.add('disabled');
  download_photo_btn.classList.add('disabled');

  // Reanudamos la reproduccion de la webcam
  video.play();
});


function showVideo() {
  // Mostramos el stream de la webcam y los controles

  hideUI();
  video.classList.add('visible');
  controls.classList.add('visible');
}


function takeSnapshot() {
  var hidden_canvas = document.querySelector('canvas'),
    context = hidden_canvas.getContext('2d');

  var width = video.videoWidth,
    height = video.videoHeight;

  if (width && height) {
    // Configuramos el canvas con las mismas dimensiones que el video
    hidden_canvas.width = width;
    hidden_canvas.height = height;

    // Hacemos una copia
    context.drawImage(video, 0, 0, width, height);

    // Convertimos la imagen del canvas en datarurl
    return hidden_canvas.toDataURL('image/png');
  }
}


function displayErrorMessage(error_msg, error) {
  error = error || '';
  if (error) {
    console.log(error);
  }

  error_message.innerText = error_msg;

  hideUI();
  error_message.classList.add('visible');
}


function hideUI() {
  // Limpiamos

  controls.classList.remove('visible');
  start_camera.classList.remove('visible');
  video.classList.remove('visible');
  snap.classList.remove('visible');
  error_message.classList.remove('visible');
}

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
