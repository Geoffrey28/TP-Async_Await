export function showDevicesList(devicesList) {
    devicesList.forEach((device) => {
        console.log(device);
        if (device.deviceId !== '') {
            let option = document.createElement('option');
            option.textContent = device.label;
            option.value = device.deviceId;
            selectCam.append(option);
        }
    });
}