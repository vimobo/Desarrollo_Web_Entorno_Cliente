import { cities } from "./cities.js";


let end = 'Z'.charCodeAt();
let start = 'A'.charCodeAt();

let letras = document.getElementById("leters");

let palabra = "";
let palabraAMostrar = "";

let letrasAdivinadas = "";

let lives = 10;


// funciones

function gameLogic(target) {

    let result = target.innerHTML;

    if (lives > 1) {

        if (palabra.indexOf(result) != -1) {

            revelarFrase(result);
            target.style.backgroundColor = "green";

        }
        else {

            lives--;

            target.style.backgroundColor = "red";
            document.getElementById("lives").textContent = "You have " + lives + " lives";
        }

    } else {
        
        document.getElementById("lives").textContent = "You lost";
        letras.textContent = "";

    }
}

function revelarFrase() {

    palabraAMostrar = "";

    for (let i = 0; i < palabra.length; i++) {
        if (letrasAdivinadas.indexOf(palabra.charAt(i)) != -1) {
            palabraAMostrar += palabra.charAt(i) + " ";
        }
        else {
            palabraAMostrar += "_ "
        }
    }

    document.getElementById("response").textContent = palabraAMostrar;
}

function setRandomCity() {
    palabra = cities[Math.floor(Math.random()*cities.length)];
}


//eventos

letras.addEventListener("click", (e) => {


    if (e.target.className == "letra" && lives > 0) {

        let result = e.target.innerHTML;

        letrasAdivinadas += result;

        gameLogic(e.target);

    }
    if (palabra == palabraAMostrar.replaceAll(" ", "")) {
        alert("Has ganado!");
    }

})

//empezar juego
//imprimir letras

for (let i = start; i < end; i++) {
    const p = document.createElement("p");
    p.className = "letra";
    p.innerHTML = String.fromCharCode(i);
    letras.appendChild(p);
}

setRandomCity();
revelarFrase();

