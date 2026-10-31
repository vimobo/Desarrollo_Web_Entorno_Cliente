


let div = document.getElementById("myDIV");
/*
window.addEventListener("deviceorientation", (event)=> {
    div.style.transform = `rotateY(${- event.alpha}deg)`
    console.log(event.alpha);
    console.log("hola");
})*/

function rotar(event) {
    if (event.alpha !== null) {

        div.style.rotate = `${-event.alpha}deg`;
    }
    document.getElementById("result").textContent = event.alpha;
}

document.getElementById("permisos").addEventListener("click", () => onClick());

function onClick() {

    if (typeof DeviceOrientationEvent.requestPermission === 'function') {

        // iOS 13+
        DeviceOrientationEvent.requestPermission()
            .then((state) => {
                if (state === 'granted') {
                    window.addEventListener('deviceorientation', rotar);
                } else {
                    console.error('Permiso rechazado');
                }
            })
            .catch(console.error);

    } else {

        // Android y otros navegadores
        window.addEventListener('deviceorientation', rotar);
        alert("permiso concedido");

    }
}