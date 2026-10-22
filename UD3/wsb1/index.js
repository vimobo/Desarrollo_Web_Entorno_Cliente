let circulo = document.getElementById("circulo");

let ganado = false;

let btn = document.getElementById("empezar");
btn.addEventListener("click", cuentaAtras)

circulo.addEventListener("click", acertar);


function cuentaAtras() {
    let tiempo = 0;

    tiempo = Math.floor((Math.random() * 5) + 2);
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



//Ejercicio 5
document.getElementById("game5btn").addEventListener("click", startGame5);

let rNumber;

function startGame5() {
    rNumber = Math.floor(Math.random() * 9) + 1;

    document.getElementById("adivinanza").textContent =
        "Pulsa el número " + rNumber;
}

document.getElementById("numberedButtons").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") {
        return;
    }

    let hijoClicado = Number(event.target.textContent);

    if (hijoClicado === rNumber) {
        alert("¡Oleee!");
    } else {
        alert("¡Naaahh!");
    }
});