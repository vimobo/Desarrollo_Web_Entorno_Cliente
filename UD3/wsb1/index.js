let circulo = document.getElementById("circulo");

let ganado = false;

let btn = document.getElementById("empezar");
btn.addEventListener("click", cuentaAtras)

circulo.addEventListener("click",  acertar);


function cuentaAtras() {
    let tiempo = 0;

        tiempo = Math.floor((Math.random() * 5)+2);
        setTimeout(cambiarColor, (tiempo * 1000));


}

function cambiarColor() {
    document.getElementById("circulo").style.backgroundColor = "rgb(0, 128, 0)";
    setTimeout(() => {
        document.getElementById("circulo").style.backgroundColor = "rgb(255, 68, 0)";
    }, 200)
}

function acertar() {
    let colorActual = getComputedStyle(circulo).backgroundColor;

    if (colorActual == "rgb(0, 128, 0)") {

        ganado = true;
        alert("Has Ganado!!");
    }
        else
        alert("Has Perdido!!");
}


cuentaAtras();