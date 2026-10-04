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
let 

//Funcion explorar para decidir el evento aleatorio

function explorar() {
    var evento = eventos[Math.floor(Math.random()*4)];

    if(evento == "enemigo") {
        if (contadorTiempo > 40)
            jugador.vida - 10;
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
        jugador.puntos + 1000;
    }
    else if (evento == "trampa") {
        jugador.inventario.nComida++;
    }
}

function comer () {
    document.get
}