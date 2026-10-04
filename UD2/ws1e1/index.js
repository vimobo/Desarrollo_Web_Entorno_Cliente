
let fecha = new Date();

console.log(fecha.getDate());
console.log(fecha.getMonth() + 1);
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());


function imprimirCuentaAtras() {
    document.getElementById("cuentaAtras").textContent = fecha.getSeconds();
    
}
//setTimeout(imprimirCuentaAtras, 2000);

let segundos = 10;

function imprimirCuentaAtras() {
    document.getElementById("cuentaAtras").textContent = segundos;

    segundos--;

    if (segundos < 0) {
        clearInterval(intervalo);
    }
}

let intervalo = setInterval(imprimirCuentaAtras, 1000);