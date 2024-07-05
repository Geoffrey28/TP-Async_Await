export function takePicture(width, height, video, pictureContainer) {
    const context = canvas.getContext('2d');
    if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);
        const data = canvas.toDataURL('image/png');
        pictureContainer.setAttribute('src', data);
        document.querySelector('#savePicture').removeAttribute('hidden');
    }
}