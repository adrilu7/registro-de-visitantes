// Se inicializa firebase
window.visitorRegistration = {
  initializeFirebase: () => {
    firebase.initializeApp({
      apiKey: 'AIzaSyCsiVpy51uveEfSALI5eonaTBASpjjDwx8',
      authDomain: 'registro-de-visitas-5f008.firebaseapp.com',
      databaseURL: 'https://registro-de-visitas-5f008.firebaseio.com',
      projectId: 'registro-de-visitas-5f008',
      storageBucket: 'registro-de-visitas-5f008.appspot.com',
      messagingSenderId: '586868443204'
    });
  },

  // Registro de Administrador
  registerAdmin: (emailAdmin, passwordAdmin) => {
    // Función de firebase para crer usuario tomando como parametros email y contraseña
    firebase.auth().createUserWithEmailAndPassword(emailAdmin, passwordAdmin)
      .then(result => {
        // Se utiliza para obtener el usuario que accedio
        let user = firebase.auth().currentUser;
        // Se le manda un correo de verificación al usuario 
        user.sendEmailVerification();
      })
      .then(result => {
        // Se muestra una alerta exitosa
        swal({
          confirmButtonText: 'Aceptar',
          type: 'success',
          title: 'Su registro fue exitoso',
          text: 'Se ha enviado un correo de verificación a su cuenta'
        });
      })
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        // Error de contraseña incorrecta
        if (errorCode === 'auth/wrong-password') {
          // Se muestra alerta de error según el dato incorrecto
          swal({
            confirmButtonText: 'Aceptar',
            type: 'error',
            title: 'Contraseña inválida',
            text: 'Inténtalo de nuevo'
          });
          // Errores de usuario no encontrado o email inválido
        } else if (errorCode === 'auth/user-not-found' || errorCode === 'auth/invalid-email') {
          swal({
            confirmButtonText: 'Aceptar',
            type: 'error',
            title: 'Usuario inválido',
            text: 'Inténtalo de nuevo'
          });
          // Error de correo electrónico ya en uso
        } else if (errorCode === 'auth/email-already-in-use') {
          swal({
            confirmButtonText: 'Aceptar',
            type: 'error',
            title: 'Usuario ya registrado',
            text: 'Verifica tus datos'
          });
        }
      });
  },

  // Se crea acceso para administrador
  loginAdmin: (emailAdmin, passwordAdmin) => {
    // Función de firebase para comprobar usuario logeado
    firebase.auth().signInWithEmailAndPassword(emailAdmin, passwordAdmin)
      .then((result) => {
        // Si los datos son correctos se le enviara a rata página
        location.href = ('admin.html');
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        // Si marca error de contraseña incorrecta lanzará la siguiente alerta
        if (errorCode === 'auth/wrong-password') {
          swal({
            confirmButtonText: 'Aceptar',
            type: 'error',
            title: 'Contraseña inválida',
            text: 'Inténtalo de nuevo'
          });
          // Si el error es de usuario no encontrado o email inválido mandara la sigueinte alerta
        } else if (errorCode === 'auth/user-not-found' || errorCode === 'auth/invalid-email') {
          swal({
            confirmButtonText: 'Aceptar',
            type: 'error',
            title: 'Usuario inválido',
            text: 'Inténtalo de nuevo'
          });
        }
      });
  },
  // Cerrar sesión
  signOut: () => {
    // Función de firebase para cerrar sesión
<<<<<<< HEAD
    firebase.auth().signOut()
      .then(result =>{
        // Enviara al usuario a la página principal (login 'index.html')
        location.href = ('../index.html');
      }).catch(error =>{
        console.log('Error al cerrar sesión', error);
      });
  } 
  
};
=======
    // firebase.auth().signOut()
    location.href = '../index.html';
  }
};
>>>>>>> upstream/master
