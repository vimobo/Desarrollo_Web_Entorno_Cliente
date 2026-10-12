/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */

function isOdd (number) {
    return number % 2 == 1;
}

/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */

function inRange(x, min, max) {
    return (x >= min && x <= max);
}

/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

function getBiggestNumber(array) {
    return Math.max(array);
}

/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */

function getPercentage (x, percentage) {
    return x * (percentage / 100);
}

/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

function getRandomColorSequence(arrayColores, length) {
    let arrayRandomColor = [];
    for(i = 0; i < length; i++) {
        arrayRandomColor[i] = arrayColores[Math.floor(Math.random() * arrayColores.length)];
    }   
    return arrayRandomColor;
}

/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

function getRockPaperScissor() {
    gameOption = ["rock", "paper", "scissor"];
    return gameOption[Math.floor(Math.random() * 3)];
}

/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

function getRandomRockPaperScissor(length) {
    gameOption = ["rock", "paper", "scissor"];
    let randomRockPaperScissor = [];
    for(i = 0; i < length; i++) {
        randomRockPaperScissor[i] = gameOption[Math.floor(Math.random() * 3)];
    }   
    return arrayRandomColor;
}


/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */

function filterNumbersGreaterThan(numberArray, filter) {
    let filteredArray = [];
    for(i = 0; i < numberArray.length; i++) {
        if(numberArray[i] >= filter)
        filteredArray.push(numberArray[i]);
    }
    return filteredArray;
}

/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */

function getFactorial(x) {
    let result = x;
    for(i = x - 1; i > 0; i--){
        result = result * i;
    }
    return result;
}

/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */

function areArraysEqual (array1, array2) {
    isEqual = true;
    if(array1.length != array2.length)
        isEqual = false;
    for(i = 0; i < array1.length; i++){
        if(array1[i] != array2[i])
            isEqual = false;
    }

    return isEqual;
}

/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */

function toHackerSpeak(stringToConvert) {
    let hackerString = "";
    let cleanString = stringToConvert.trim().toLowerCase();
    console.log(cleanString);
    for(i = 0; i < cleanString.length; i++){
        if(cleanString.charAt(i) == 'a') 
            hackerString += "4";
        else if (cleanString.charAt(i) == 's')
            hackerString += "5";
        else
            hackerString +=  cleanString.charAt(i);
    }
    return hackerString;
}


/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */

function getFileExtension(fileName) {
    return fileName != undefined ? fileName.trim().slice(fileName.indexOf("."), fileName.length) : undefined;
}



/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {[][]} arr - Array 2D a "aplanar" 
 * @returns {[]} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
 */

function flatArray(array2D) {
    flatArray = [];
    array2D.forEach(array => {
        array.forEach( item => {
            flatArray.push(item);
        })
    });
    return flatArray;
}

/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */

function removeDuplicates(array) {
    return array.filter((item, pos) => {
        return array.indexOf(item) == pos;
    })
}

/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string 
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 * 
 * @example
 *  countLetter("a", "javascript") // returns 2
 */

function countLetter (letter, text) {
    
}


//array = [1, 2]
//array.map();
//console.log(toHackerSpeak("  hola que talss as  "));
//console.log(getFileExtension("  asdanskdj .jsps"));
//console.log(flatArray([[1, 5, 4], [3, 10], [2, 5]]));
//console.log( removeDuplicates([4, 5, 10, 4, 10, 2]));

