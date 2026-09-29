
let cadena = "JavaScritp";
let cadena2 = "Hola Mundo";
let cadena3 = "Programar es divertido";


//usamos la length para ver la longitud.
console.log(cadena.length);
console.log(cadena2.charAt(0));
console.log(cadena2.charAt(cadena2.length - 1));
console.log(cadena3.toUpperCase());
console.log(cadena3.toLowerCase());

//indices
console.log(cadena2.indexOf("o"));
console.log(cadena2.lastIndexOf("o"));

//extracción de subcadenas
console.log(cadena3.substring(0, 8));
console.log(cadena3.slice(0, 8));

//reemplazo de texto
cadena3 = cadena3.replace("divertido", "horrible");
console.log(cadena3);

//dividir un string



//repetir cadena
let cadena4 = "hola";
console.log(cadena4.repeat(4));

//creando array a partir de un carácter como punto de split
let cadena5 = "hola, que , tal, jefe";
console.log(cadena5.split(","));

console.log(cadena2.padStart(cadena2.length + 2, "0"));


//escribe una funcion para contar vocales
function contarVocales(s) {
    let vowelCount = 0;
    s = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == 'a' ||
            s.charAt(i) == 'e' ||
            s.charAt(i) == 'i' ||
            s.charAt(i) == 'o' ||
            s.charAt(i) == 'u')
            vowelCount++;
    }
    return vowelCount;
}

console.log(contarVocales("sssssssssssssaaassssssssssssss"));


//es palindromo?
function esPalindromo(s) {
    let esPalindromo = true;
    let contador = s.length - 1;
    s = s.toLowerCase();
    for (let i = 0; i < s.length && esPalindromo; i++) {
        if (s.charAt(i) != s.charAt(contador))
            esPalindromo = false;

        contador--;
    }
    return esPalindromo;
}

console.log(esPalindromo("aba"));


//invertir String
function invertirString(s) {
    var sInverted = "";
    for (let i = s.length - 1; i >= 0; i--) {
        sInverted += s.charAt(i);
    }
    return sInverted;
}

console.log(invertirString("hola"));

//capitalizar frase
function capitalizarFrase(s) {
    var newString = "";
    for (let i = 0; i < s.length; i++) {
        if ((i == 0 && s.charAt(i) != " ") || s.charAt(i - 1) == " ")
            newString += s.charAt(i).toUpperCase();
        else
            newString += s.charAt(i);

    }
    return newString;
}

console.log(capitalizarFrase("   hola   que tal amigo   "));

//ocultar parte de un string

function ocultarParte(s) {

    var sOculto = "";

    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 4)
            sOculto += "*";
        else
            sOculto += s.charAt(i);
    }
    return sOculto;
}

console.log(ocultarParte("9asdddddddddd715238978"))



//contar palabras en una frase
function contarPalabras(s) {
    var contadorPalabras = 0;
    for (let i = 0; i < s.length; i++) {
        if ((i == 0 && s.charAt(i) != " ") || (s.charAt(i - 1) == " " && s.charAt(i) != " "))
            contadorPalabras++;
    }
    return contadorPalabras;
}

console.log(contarPalabras("   hola       que tal amigo    hola    quetal"));