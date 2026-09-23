//Ejercicio 1
// 1
/*
var nombre;
nombre = "Vicenç";
console.log(nombre);

//2

let edad = 3;
console.log(edad);

edad = 10;
console.log(edad);

//3

const pais = "Spain";
//pais = "Francia";
console.log(pais);

//4

{
    var x = 10;
}

{
    let y = 20;
}

console.log("x = "+ x);
console.log("t = "+ y);
*/
//Ejercicio 2

//1
/*
let x = prompt("Escribe un numero");

if(x < 0 ) {
    <console.log("El numero negativo");
}
else {
    console.log("El numero positivo");
}*/

//2
/*
let edad = prompt("Escribe tu edad");

if(edad < 18 ) {
    console.log("Menor de edad");
}
else {
    console.log("Mayor de edad");
}*/


//3
/*
let x = prompt("escribe un numero");

if(x % 2 == 0 ) {
    console.log("Par");
}
else {
    console.log("Inpar");
}
*/
//5

/*
let x = prompt("escribe un numero x");
let y = prompt("escribe otro numero y");

if (x > y) {
    console.log("X es mayor a Y");
}
else if (x == y) {
    console.log("X es igual a Y");
}

else {
    console.log("X es menor a Y");
}*/

//6
/*
let x = Number(prompt("escribe un numero del 1 al 7"));

switch (x) {

    case 1:
        console.log("Lunes");
        break;
        
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Del 1 al 7 señorito");

        break;

        
}*/

//8
/*
let color = prompt("escribe un color del semaforo");

switch (color) {

    case "verde":
        console.log("Pasa rey");
        break;
        
    case "naranja":
        console.log("Cuidaoo");
        break;
    case "rojo":
        console.log("Alto al paso guey");
        break;
}*/

//ejercicio 3

//1
/*
for (let i = 1; i <= 10; i++ ) {
    console.log(i);
}*/

//2
/*
let x = 0;
for (let i = 1; i <= 5; i++ ) {
    x += i;
}
console.log(x);
*/

//3
/*
let x = prompt("Introduce un numero");

for (let i = 1; i <= 10; i++ ) {
    console.log(x + " x " + i + " = " + i*x);

}*/

//4
/*
for (let i = 10; i >= 1; i-- ) {
    console.log(i);
}*/

//5
/*
let x = 0;

while (x <= 20) {
    x += Number(prompt("Introduce u numero"));
    console.log("Total " + x);
}*/

//7 

let contrasenia;

do {
   contrasenia = prompt("Introduce la contraseña");
    if(contrasenia != "123")
        console.log("Contraseña incorrecta")
} while (contrasenia != "123")
    console.log("Contraseña correcta")
