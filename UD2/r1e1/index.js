//Conversion de tipos
let number = "123";
let float = "3.14";
let string = "abc";


console.log(parseFloat(float));
console.log(parseInt(number));
console.log(Number(string));

//Métodos de instancia

console.log(Math.PI.toFixed(2));
console.log(Math.PI.toFixed(4));
console.log(Math.PI.toFixed(6));

console.log(Math.PI.toExponential(2));

let fullByte = 255;

console.log(fullByte.toString(2));

//validación de numeros

let stringAValidar  = "12a3";

if(!Number.isNaN(stringAValidar))
    console.log(stringAValidar + " es un numero");
else
    console.log(stringAValidar + " no es un numero válido");




