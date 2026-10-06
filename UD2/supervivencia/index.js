//Lista de eventos
let eventos = [
    "enemigo",
    "pocion",
    "comida",
    "monedas",
    "trampa"
];

//Objeto jugador
let jugador = {
    nombre: "vi",
    vida: 100,
    comida: 50,
    puntos: 0,
    inventario: {
        nPociones: 0,
        nComida: 0
    }
};

let contadorTiempo = 60;
let eventoActual = "";
let empezado = false;
let intervaloEfectosPorSegundo;

//Funcion decidirEvento para decidir el evento aleatorio

function decidirEvento() {
    eventoActual = eventos[Math.floor(Math.random() * 5)];
    return eventoActual;
}

//funciones ejecutadas por el jugador

function explorar() {

    if (jugador.vida > 0 && jugador.comida > 0 && empezado) {

        var evento = decidirEvento();
        if (evento == "enemigo") {
            if (contadorTiempo > 40)
                jugador.vida -= 10;
            else if (contadorTiempo > 20)
                jugador.vida -= 15;
            else
                jugador.vida -= 20;
        }
        else if (evento == "pocion") {
            jugador.inventario.nPociones++;
        }
        else if (evento == "comida") {
            jugador.inventario.nComida++;
        }
        else if (evento == "monedas") {
            jugador.puntos += 1000;
        }
        else if (evento == "trampa") {
            jugador.vida -= 20;
        }

        actualizarEstado();
        actualizarEventoInfo();
        actualizarVisualesEfecto();

    }

}

function comer() {

    if (jugador.inventario.nComida >= 1  && empezado) {

        if (jugador.comida + 20 >= 100)
            jugador.comida = 100;
        else
            jugador.comida += 20;

        jugador.inventario.nComida--;
    }

    actualizarEstado();
}

function curarse() {
    if (jugador.inventario.nPociones >= 1 && empezado) {

        if (jugador.vida + 20 >= 100)
            jugador.vida = 100;
        else
            jugador.vida += 20;

        jugador.inventario.nPociones--;
    }

    actualizarEstado();
}

//efecto que sufre el jugador cada segundo
function pasarHambre() {
    jugador.comida -= 3;
    actualizarEstado();
}

//actualizar informacion

function actualizarEventoInfo() {

    var info = "";
    if (jugador.vida > 0 && jugador.comida > 0 && contadorTiempo > 0) {

        if (eventoActual == "enemigo") {

            if (contadorTiempo > 40)
                info = "Estas siendo atacado por un enemigo. Pierdes 10 de vida";
            else if (contadorTiempo > 20)
                info = "Estas siendo atacado por un enemigo. Pierdes 15 de vida";
            else
                info = "Estas siendo atacado por un enemigo. Pierdes 20 de vida";
        }
        else if (eventoActual == "pocion") {
            info = "Obtienes una poción";
        }
        else if (eventoActual == "comida") {
            info = "Obtienes comida. ";
        }
        else if (eventoActual == "monedas") {
            info = "+1000 puntos";
        }
        else if (eventoActual == "trampa") {
            info = "Has caido en una trampa.";
        }
    }
    else if (contadorTiempo > 0 && (jugador.comida <= 0 || jugador.vida <= 0)){
        info = "Has perdido. Puntuacion final: " + jugador.puntos;
    }
    else {

        info = "Has ganado. Puntuacion final: " + jugador.puntos;
    }
     
    document.getElementById("descripcionEvento").textContent = info;
}


function actualizarEstado() {
    document.getElementById("vida").textContent = jugador.vida;
    document.getElementById("comida").textContent = jugador.comida;
    document.getElementById("puntos").textContent = jugador.puntos;
    document.getElementById("tiempo").textContent = contadorTiempo;
    document.getElementById("inventarioComida").textContent = jugador.inventario.nComida;
    document.getElementById("pociones").textContent = jugador.inventario.nPociones;
}

function actualizarVisualesEfecto() {
    document.getElementById("imagenEfecto").innerHTML = "<img src='./img/" + eventoActual + ".png' alt=''></img>";
}

//se ejecuta cada segundo. Inspirado en un sistema de ticks
function efectosPorSegundo(){
    
    contadorTiempo--;
    pasarHambre();
    document.getElementById("tiempo").textContent = contadorTiempo;

    if(jugador.vida <= 0 || contadorTiempo <= 0 || jugador.comida <= 0) {
        clearInterval(intervaloEfectosPorSegundo);
        actualizarEventoInfo();
        empezado = false;
    }
        
}

function empezar () {
    
    jugador.vida = 100;
    jugador.comida = 50;
    jugador.puntos = 0;
    jugador.inventario.nComida = 0;
    jugador.inventario.nPociones = 0;
    contadorTiempo = 60;
    actualizarEstado();
    intervaloEfectosPorSegundo = setInterval(efectosPorSegundo, 1000); 
    empezado = true;
    document.getElementById("descripcionEvento").textContent = "Explora para encontrar comida";


}


//actualizamos el estado al iniciar para mostar los parametros de salida
actualizarEstado();