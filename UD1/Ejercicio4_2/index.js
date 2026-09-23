/**
 * Crea una función que tome una cadena de caracteres repetidos y devuelva su versión comprimida. Si la cadena comprimida no resulta ser más corta que la original, debe devolver la cadena original.
    Ejemplo de entrada: "aabcccccaaa"
    Salida esperada: "a2b1c5a3"
    Pista: Recorre la cadena con un solo bucle manteniendo un contador de la letra actual y comparándola con el carácter en la posición i + 1.
 */

let stringToCompress = prompt("Introduce una frase para comprimir (aaaacccvvvv)");
let stringCompressed = "";
let sameLetterCounter = 1

for (let i = 0; i < stringToCompress.length; i++) {

    if (stringToCompress.charAt(i + 1) == stringToCompress.charAt(i) && i != stringToCompress.length - 1)
        sameLetterCounter++;

    else {
        stringCompressed += stringToCompress.charAt(i) + sameLetterCounter;
        sameLetterCounter = 1;
    }
}

if (stringCompressed.length <= stringToCompress.length)
    console.log(stringCompressed);
else
    console.log(stringToCompress);