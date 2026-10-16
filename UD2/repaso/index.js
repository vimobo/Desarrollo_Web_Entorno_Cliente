//Number y parseInt()
//
//let a = parseInt("12.75");
//let b = Number("12.75");
//
//console.log(a); // 12
//console.log(b); // 12.75



//Conversión a número
//Convierte las cadenas "123", "3.14" y "abc" en números usando Number(), parseInt() y parseFloat(). Explica la diferencia en los resultados.
//

function convertirANumero(n) {
    return Number(n);
}

//console.log(convertirANumero("123"));

//Comprobar si es entero
//Escribe una función que reciba un valor y devuelva true si es un número entero (Number.isInteger) y false en caso contrario.
//

function isInt(n){
    return Number.isInteger(n);
}

//console.log(isInt("2"));
//console.log(isInt(2));


//Not a Number
//Prueba qué devuelve Number.isNaN con los valores: NaN, "hello", undefined, 0/0, parseInt("abc").
//


//Valores infinitos
//Divide 1 entre 0 y comprueba si el resultado es infinito (Number.isFinite).
//
//
//Nivel 2 – Métodos de instancia
//
//    Número con decimales fijos
//    Dado el número 3.141592, muéstralo con 2, 4 y 6 decimales usando .toFixed.
//

//console.log(Number("21").toFixed(2));

//    Representación exponencial
//    Convierte 123456 a notación científica con .toExponential(2).
//

//nsole.log(Number(21).toExponential(2))

//    Conversión a string con base
//    Convierte el número 255 a:
//        Binario
//        Octal
//        Hexadecimal
//        usando .toString(base).
//

//console.log((255).toString(16));


//    Precisión controlada
//    Usa .toPrecision para representar 123.456789 con 4 y 7 cifras significativas.
//
//
//console.log((123.456789).toPrecision(4));

//console.log((123.456789).toPrecision(7));

//Nivel 3 – Retos aplicados
//
//    Validador de números
//    Escribe una función que reciba una cadena y devuelva:
//
//    Si es un número válido
//    Si es entero o decimal
//

function validarNumero(cadena) {
    let numero = Number(cadena);

    if (cadena.trim() === "" || Number.isNaN(numero)) {
        return "No es un número válido";
    }

    if (Number.isInteger(numero)) {
        return "Es un número entero";
    } else {
        return "Es un número decimal";
    }
}

//console.log(validarNumero("25"));    // Es un número entero
//console.log(validarNumero("25.8"));  // Es un número decimal
//console.log(validarNumero("hola"));  // No es un número válido


//Método	Uso	Importante para el examen
//Math.abs(x)	Valor absoluto	Elimina el signo negativo. Math.abs(-5) → 5
//Math.round(x)	Redondea al entero más cercano	4.6 → 5; 4.4 → 4
//Math.ceil(x)	Redondea hacia arriba	4.1 → 5
//Math.floor(x)	Redondea hacia abajo	4.9 → 4
//Math.pow(x, y)	Potencia	\(2^3 = 8\)
//Math.sqrt(x)	Raíz cuadrada	Math.sqrt(81) → 9
//Math.max(a, b, ...)	Devuelve el mayor	Con arrays: Math.max(...numeros)
//Math.min(a, b, ...)	Devuelve el menor	Con arrays: Math.min(...numeros)

//Nivel 3 – Trigonometría y logaritmos
//Método	Uso	Importante para el examen
//Math.sin(x)	Calcula el seno	Recibe radianes, no grados.
//Math.cos(x)	Calcula el coseno	Recibe radianes, no grados.
//Math.tan(x)	Calcula la tangente	Recibe radianes, no grados.
//Math.atan(x)	Calcula el arco tangente	Devuelve radianes.
//Math.log(x)	Logaritmo natural	Es el logaritmo en base \(e\), no en base 10.
//Conversión de grados a radianes:
//let radianes = grados * Math.PI / 180;

let date = new Date(2000, 3, 21);
console.log(date.toLocaleDateString());