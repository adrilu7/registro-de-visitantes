(() => {
  let streaming = false,
    video = document.querySelector('#video'),
    canvas = document.querySelector('#canvas'),
    photo = document.querySelector('#photo'),
    startbutton = document.querySelector('#startbutton'),
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
    photo.setAttribute('src', data);
  }

  startbutton.addEventListener('click', (ev) => {
    takepicture();
    ev.preventDefault();
  }, false);
})();
