(() => {
  let streaming = false,
    video = document.querySelector('#video'),
    canvas = document.querySelector('#canvas'),
    startbutton = document.querySelector('#startbutton'),
    firstSec = document.getElementById('section1');
    secondSec = document.getElementById('section2');
    let teminar = document.getElementById('teminar');
    width = 320,
    height = 0;

  navigator.getMedia = (navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);

  navigator.getMedia(
    {
      video: true,
      audio: false
    },
    (stream) => {
      if (navigator.mozGetUserMedia) {
        video.mozSrcObject = stream;
      } else {
        let vendorURL = window.URL || window.webkitURL;
        video.src = vendorURL.createObjectURL(stream);
      }
      video.play();
    },
    (err) => {
      console.log('An error occured! ' + err);
    }
  );

  video.addEventListener('canplay', (ev) => {
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth / width);
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      streaming = true;
    }
  }, false);

  takepicture = () => {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    firstSec.classList.add('ocultar');
    secondSec.classList.remove('ocultar');
  };


  startbutton.addEventListener('click', (ev) => {
    takepicture();
    ev.preventDefault();
    terminar.classList.remove('ocultar');
  }, false);


})();
