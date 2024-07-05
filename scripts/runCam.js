export function runCam(constraints, video) {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (mediaStream) {
            video.srcObject = mediaStream;
            video.addEventListener('loadedmetadata', () => {
                video.play();
                document.querySelector('#takePicture').removeAttribute('hidden');
            });
        })
        .catch(function (err) {
            console.log(err.name + ': ' + err.message);
        });
}