//let hora = new Date();
let fecha = new Date();


function actualizar() {
    date = new Date();
    document.getElementById("hora").textContent = date.toLocaleTimeString();
}


setInterval(actualizar, 1000);
document.getElementById("fecha").innerHTML =  fecha.getDate() + " / " + (fecha.getMonth() + 1) + " / " + fecha.getFullYear();

//document.getElementById("fechaCompleta").textContent = fecha.toDateString();
