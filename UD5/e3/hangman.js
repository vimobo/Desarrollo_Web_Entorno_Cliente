let end = 'Z'.charCodeAt();
let start = 'A'.charCodeAt();

let letras = document.getElementById("leters");

let palabra = "BARCELONA";
let palabraAMostrar = "";

let letrasAdivinadas = "";

let lives = 10;


//imprimir letras

for (i = start; i < end; i++) {
    const p = document.createElement("p");
    p.className = "letra";
    p.innerHTML = String.fromCharCode(i);
    letras.appendChild(p);
}


letras.addEventListener("click", (e) => {


    if (e.target.className == "letra") {

        let result = e.target.innerHTML;

        letrasAdivinadas += result;

        mainLogic(e.target);

        e.target.remove();
    }
    if (palabra == palabraAMostrar.replaceAll(" ", "")) {
        alert("Has ganado!");
    }

})

function revelarFrase() {
    palabraAMostrar = "";
    for (i = 0; i < palabra.length; i++) {
        if (letrasAdivinadas.indexOf(palabra.charAt(i)) != -1) {
            palabraAMostrar += palabra.charAt(i) + " ";
        }
        else {
            palabraAMostrar += "_ "
        }
    }

    document.getElementById("response").textContent = palabraAMostrar;
}

function mainLogic(target) {

    result = target.innerHTML;

    if (lives > 1) {

        if (palabra.indexOf(result) != -1) {
            //console.log(result + " aparece")
            revelarFrase(result);
        }
        else {
            lives--;
            document.getElementById("lives").textContent = "You have " + lives + " lives";
        }

    } else {
        document.getElementById("lives").textContent = "You lost";
    }
}
