//Nivel basico de uso de ubicación
/*
let posicion1;
let posicion2;

navigator.geolocation.getCurrentPosition((posicion) => {
    posicion1 = posicion.coords.latitude;
    posicion2 = posicion.coords.longitude;
    printLocation();
});

function printLocation(){
    console.log(posicion1);
    console.log(posicion2);
}


//Nivel Intermedio

navigator.geolocation.watchPosition(imprimirCoordenadas);

function imprimirCoordenadas(pos) {
    console.log(pos.coords.longitude);
    console.log(pos.coords.latitude);
}
    */




//embeded code de leaflet

/*
navigator.geolocation.getCurrentPosition((pos) => {
    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);

    console.log(pos.coords.accuracy);
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
});
*/
//calcular distancia 

let ubicacion1 = L.latLng(39.5696, 2.6502);

let ubicacion2 = L.latLng(41.3874, 2.1686);

function calcularDistancia() {
    let distancia = ubicacion1.distanceTo(ubicacion2);

    console.log("Distancia: " + distancia + " metros");
    console.log("Distancia: " + (distancia / 1000).toFixed(2) + " km");
}

calcularDistancia();

//trazar una ruta en un mapa

let ubicacionArray = [L.latLng(39.5696, 2.6502)];


//declaramos el objeto mapa
var map = L.map('map').setView(ubicacionArray[0], 13);


//inicializamos
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//declaracion poliline
var polyline = L.polyline(ubicacionArray, { color: 'red' }).addTo(map);

navigator.geolocation.watchPosition((pos) => {
    ubicacionArray.push(L.latLng(pos.coords.latitude, pos.coords.longitude));
    
    //se usa map. para usar el mapa sin declararlo de nuevo
    map.setView(L.latLng(pos.coords.latitude, pos.coords.longitude), 12);
    
    //Se ejecuta la polilinea cada vez que hay un punto nuevo
    polyline.setLatLngs(ubicacionArray);
});


calcularDistancia()