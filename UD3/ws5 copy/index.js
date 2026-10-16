class Tipo {
    #tipo;
    #tiposEnemigos = [];

    constructor(tipo, tiposEnemigos) {
        this.#tipo = tipo;
        //tipos a los que gana
        this.#tiposEnemigos = tiposEnemigos;
    }

    pelear (tipoEnemigo){
        let pelea = "";
        if(this.#tiposEnemigos[0] == tipoEnemigo || this.#tiposEnemigos[1] == tipoEnemigo)
            pelea = "Juegas " + this.#tipo + " y ganas a " + tipoEnemigo;   
        else 
            pelea = "Juegas " + this.#tipo + " y pierdes contra " + tipoEnemigo

        return pelea;
    }

    jugar () {
        enemigo = tipos[Math.floor(Math.random() * 4)];
        console.log(this.pelear(enemigo));
    }
}



const tipos =  [
    "PIEDRA",
    "PAPEL",
    "PAPEL",
    "PAPEL",
    "PAPEL"];

console.log();