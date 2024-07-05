export async function getDevices() {
    return new Promise((resolve, reject) => {
        if (!navigator.mediaDevices?.enumerateDevices) {
            console.log("enumerateDevices() not supported.");
        } else {
            navigator.mediaDevices
                .enumerateDevices()
                .then((devices) => {
                    resolve(devices);
                })
                .catch((err) => {
                    console.error(`${err.name}: ${err.message}`);
                });
        }
    });
}

export function showDevicesList(camContainer, devicesList) {
    devicesList.forEach((device) => {
        if (device.deviceId !== '') {
            let option = document.createElement('option');
            option.textContent = device.label;
            option.value = device.deviceId;
            camContainer.append(option);
        }
    });
}