/*
3. Criba de Eratóstenes (Primos eficientes)

Dado un número entero N , genera todos los números primos menores o iguales a N aplicando el algoritmo histórico de la criba de Eratóstenes.

    Ejemplo de entrada: N = 30
    Salida esperada: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    Pista: Crea un array de booleanos de tamaño N + 1 inicializado a true. Utiliza un bucle para ir marcando como false los múltiplos de cada primo encontrado.
*/

let nSize = parseInt(prompt("Introduce n"));
let counter = 0;
let numberArray = Array(nSize + 1);
let isPrime = false;

for(let i = 2; i < nSize; i++) {
    isPrime = false;

    for(let j = 2; j < i || (i == 2 && j == 2) ; j++) {
        if((i % 2 != 0 && i % j != 0 ) || i == 2 ) {
            isPrime = true;
        
        }
    }
    if (isPrime) {

        numberArray[counter] = i;
        counter++;
    }
}

console.table(numberArray);