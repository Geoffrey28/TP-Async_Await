import { getDevices, showDevicesList } from "./getDevice.js";
import { runCam } from "./runCam.js";
import { takePicture } from "./takePicture.js";

const selectCamForm = document.querySelector('#selectCamForm');
const selectCam = document.querySelector('select');
const video = document.querySelector('video');
const takePictureBtn = document.querySelector('#takePicture');
const canvas = document.querySelector('#canvas');
const pictureContainer = document.querySelector('#pictureTaken');
const savePictureBtn = document.querySelector('#savePicture');

const constraints = {
    audio: false,
    video: true
};

const width = 640
let height = 0;
let streaming = false;

window.addEventListener('load', async () => {
    showDevicesList(selectCam, await getDevices());
});

selectCamForm.addEventListener('submit', (e) => {
    e.preventDefault();
    runCam(constraints, video);
});

video.addEventListener('play', () => {
    if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);
    }
    video.setAttribute("width", width);
    video.setAttribute("height", height);
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    streaming = true;
});

takePictureBtn.addEventListener('click', () => {
    takePicture(width, height, video, pictureContainer);
});