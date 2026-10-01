//juego del ahorcado

let letrasAdivinadas = "";
let palabraAMostrar = "";
let palabraAAdivinar = "javascript";
let juegoSigue = true;
let intentos = 5;
let letraAdivinada = false;
let salvavidas = false;
do {

    palabraAMostrar = "";
    letrasAdivinadas += prompt("Introduce una letra");
    salvavidas = false;

    //bucle para recorrer cada letra de la palabra a adivinar
    for (i = 0; i < palabraAAdivinar.length; i++) {

        letraAdivinada = false;

        //segundo bucle para recorrer las letras debloqueadas cada iteracion del bucle anidado completo
        //se usan banderas para comprobar si la última letra ha aparecido

        for (j = 0; j < letrasAdivinadas.length; j++) {

            if (palabraAAdivinar.charAt(i) == letrasAdivinadas.charAt(j)) 
                letraAdivinada = true;
            
        }

        if (letrasAdivinadas.charAt(letrasAdivinadas.length - 1) == palabraAAdivinar.charAt(i))
            salvavidas = true;

        if (letraAdivinada)
            palabraAMostrar += palabraAAdivinar.charAt(i);
        else
            palabraAMostrar += "_";
    }

    console.log(palabraAMostrar);

    if (!salvavidas)
        intentos--;

    console.log(intentos);

    if (intentos == 0)
        juegoSigue = false;

} while (juegoSigue);


    console.log("Enhorabuena! No has sido ahoracado");
