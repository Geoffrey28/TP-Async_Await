export async function savePicture() {
    let url = canvas.toDataURL('image/png');
    let image = await fetch(url);
    let imageBlob = await image.blob();
    let imageURL = URL.createObjectURL(imageBlob);

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'Camera_Screen';
    document.body.appendChild(link);
    link.click();
    document.removeChild(link);
}