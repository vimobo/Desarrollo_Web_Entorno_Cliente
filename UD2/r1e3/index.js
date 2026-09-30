//Fecha actual
let fecha = new Date();
console.log(fecha);

//Fecha específica
let fechaNac = new Date();
fechaNac.setMonth(3);
fechaNac.setFullYear(2000);
fechaNac.setDate(21);

console.log(fechaNac);


//convertir a string

let fechaString = fecha.toDateString();
console.log(fechaString);


//Calculos con date

function sumarDias(fecha, nDias) {
    fecha.setDate(fecha.getDate() + nDias);
    return fecha;
}

console.log(sumarDias(fecha, 30));

//diferencia entre fechas
fechaDiciembre = new Date(2026, 11, 31);

console.log(Math.round((fecha - fechaDiciembre) / (1000 * 60 * 60 * 24)));


//comparar dos fechas

if (fecha < fechaDiciembre) {
    console.log(fecha + " es anterior");
}
else {
    console.log(fechaDiciembre + " es anterior ");
}

function primerDiaDelMes (anio, mes){
    fechaMes = new Date(anio, mes, 1);
    
    return fechaMes.toLocaleDateString("es-ES", { weekday: "long" });
}

    console.log(primerDiaDelMes(2026,8));


//formateando las fechas
console.log(fecha.toISOString());

//fecha local UTC
console.log(fecha.toUTCString());

//funcion para formatear

function formatearFecha(fecha) {
    return fecha.getDate() + "/" + (fecha.getMonth()) + "/" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
}

console.log(formatearFecha(fecha));

//enseñar la fecha y hora de otros sitios


let formato = new Intl.DateTimeFormat("en-US");
let formatoEs = new Intl.DateTimeFormat("es-ES");
let formatoJa = new Intl.DateTimeFormat("ja-JP");

console.log(formato.format(fecha));
console.log(formatoEs.format(fecha));
console.log(formatoJa.format(fecha));

//cuenta atrás
cuentaAtrasFecha = new Date();

function actualizarFecha() {

    cuentaAtrasFecha = new Date();
    diferencia =  fechaDiciembre - cuentaAtrasFecha;
    console.log(  Math.floor(diferencia / (1000 * 60 * 60 * 24)) + " dias "  +
                  Math.floor(diferencia / (1000 * 60 * 60) % 24) + " horas "  +
                  Math.floor(diferencia / (1000 * 60 ) % 60) + " minutos " +
                  Math.floor(diferencia / (1000  ) % 60) + " segundos ");
}

//setInterval(actualizarFecha, 1000);


//contador exacto de edad

function contarEdad(fecha) {
    fechaActual = new Date();
    diferenciaEdad =  new Date(fechaActual - fecha); 
    return "tienes " + diferenciaEdad.toLocaleDateString('es-ES', {day:'long' ,month:'long'})  + " años"; 
}

//console.log(contarEdad(fechaNac));


function buscarViernesTrece () {
    fechaActual = new Date();
    bandera = false;
    do {
        fechaActual.setMonth(fechaActual.getMonth() + 1);
        fechaActual.setDate(13);
        if(fechaActual.getDay() == 5)
            bandera = true;
    } while (!bandera)
    return fechaActual;
}

console.log(buscarViernesTrece());