//TIPO : TIPOS A LOS QUE GANA
const tiposList = {
    piedra: ["tijera", "lagarto"],
    papel: ["piedra", "spock"],
    tijera: ["papel", "lagarto"],
    lagarto: ["spock", "papel"],
    spock: ["tijera", "piedra"]
};


//CLASE JUGADOR: Un jugador puede ser la máquina

class Jugador {
    #tipo;
    #tipoQueGana;

    constructor(tipo = this.setRandomTipo()) {
        this.setTipo(tipo);
        //tipos a los que gana
    }

    //GETTERS Y SETTERS

    getTipo() {
        return this.#tipo;
    }

    setTipo(tipo) {
        this.#tipo = tipo;
        this.#tipoQueGana = tiposList[tipo];
    }

    getTipoQueGana(n) {
        return this.#tipoQueGana[n];
    }

    setRandomTipo() {
        let allTipos = ["piedra", "papel", "tijera", "lagarto", "spock"];
        let tipo = allTipos[Math.floor(Math.random() * allTipos.length)];
        this.#tipoQueGana = tiposList[tipo];
        this.#tipo = tipo;
    }

    //LOGICA DEL JUEGO

    luchar(jugador) {
        let jugada = "";
        let tipoEnemigo = jugador.getTipo();
        let tipoQueGanaEnemigo1 = jugador.getTipoQueGana(0);
        let tipoQueGanaEnemigo2 = jugador.getTipoQueGana(1);

        if (this.#tipo == tipoQueGanaEnemigo1 || this.#tipo == tipoQueGanaEnemigo2)
            jugada = `Juegas ${this.#tipo}, pierdes contra ${tipoEnemigo}`;

        else if (this.#tipoQueGana[0] == tipoEnemigo || this.#tipoQueGana[1] == tipoEnemigo)
            jugada = `Juegas ${this.#tipo}, ganas a ${tipoEnemigo}`;

        else
            jugada = `Juegas ${this.#tipo} contra ${tipoEnemigo}. No pasa nada...`;

        return jugada;
    }




}

function empezarPartida(){
    document.getElementById("jugar").addEventListener("click", () => jugar(jugador1, jugador2));
}

//GAME LOOP

function jugar(jugador1, jugador2) {
    let tipoEntry = document.getElementById("tipoSelect").value;

    jugador1.setTipo(tipoEntry);
    jugador2.setRandomTipo();

    document.getElementById("juego").innerHTML = "<p>" + jugador1.luchar(jugador2) + "<p>";
}



//console.log(tiposList.piedra[0]);

var jugador1 = new Jugador("piedra");
var jugador2 = new Jugador();
jugador2.setRandomTipo()
console.log(jugador2);



empezarPartida();