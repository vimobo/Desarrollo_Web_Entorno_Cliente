/**
* * Objetivo: practicar creación, acceso, modificación y recorrido de arrays.
*
*    Crear un array con los nombres de 5 frutas e imprimir la primera y última.
*        Métodos: length, acceso por índice [ ].
*
*    Añadir y eliminar elementos al inicio y al final del array.
*        Métodos: push(), pop(), unshift(), shift().
*
*    Recorrer un array e imprimir sus elementos.
*        Métodos: for, for...of, forEach().
*
*    Buscar un elemento en un array de números.
*        Métodos: indexOf(), includes().
*
*    Concatenar arrays y mostrar el resultado.
*        Métodos: concat(), spread operator ....
*
 */

let arrayDeFrutas = ["pera", "manzana", "naranja", "melocoton"];

arrayDeFrutas.push("platano");
arrayDeFrutas.pop("pera");
arrayDeFrutas.unshift("poma", "pomon");
arrayDeFrutas.shift();


console.log(arrayDeFrutas);

arrayDeFrutas.forEach(element => { console.log(element) });

for (fruta of arrayDeFrutas) {
    console.log(fruta);
}

for (i = 0; i < arrayDeFrutas.length; i++) {
    console.log(arrayDeFrutas[i]);
}


console.log(arrayDeFrutas.indexOf("pera"));
console.log(arrayDeFrutas.includes("pera"));

array = ["aa", "bb"];
array2 = ["aa", "bb"];
array = array.concat(arrayDeFrutas);
array2 = [...array2, ...arrayDeFrutas];

console.log(array);
console.log(array2);



/**
 * Objetivo: aprender a transformar, filtrar y ordenar arrays.

    Duplicar los valores de un array numérico.
        Método: map().

    Filtrar los números pares de un array.
        Método: filter().

    Sumar todos los valores de un array.
        Método: reduce().

    Ordenar un array de nombres alfabéticamente y en orden inverso.
        Métodos: sort(), reverse().

    Convertir un array en una cadena de texto separada por comas.
        Método: join().

    Dividir una cadena de texto en un array.
        Método: split().

 */

nArray = [1, 2, 3, 4, 5, 4, 3, 20, 1, 36];
nArray = nArray.map((n) => n * 3);

console.log(nArray);

//nArray = nArray.filter((n) => n % 2 == 0);
console.log(nArray);

nArray = nArray.sort((a, b) => a - b);

console.log(nArray);

nArray = nArray.reverse();
console.log(nArray);

cadena = ["hola", "que", "tal"];

console.log(cadena.join(" "));

/**
 * Objetivo: combinar métodos y resolver problemas prácticos.

Eliminar duplicados de un array.
    Métodos: filter(), indexOf(), o Set.

Encontrar el número mayor y menor en un array.
    Métodos: Math.max(), Math.min(), spread operator ....

Aplanar un array de arrays.
    Ejemplo: [[1,2],[3,4]] → [1,2,3,4]
    Método: flat().

Contar cuántas veces aparece un elemento en un array.
    Métodos: reduce() o forEach().

Transformar un array de objetos en un array de una sola propiedad.
*/

arrayDuplicado = [1, 2, 3 ,2, 1];

arrayDuplicado = arrayDuplicado.filter((n, i) => arrayDuplicado.indexOf(n) == i);
console.log(arrayDuplicado);

 
array2d = [[1,2],[3,4]];

array2d = array2d.flat();

console.log(array2d);

/*
const personas = [
  { nombre: "Ana", edad: 23 },
  { nombre: "Luis", edad: 30 }
];
// Resultado esperado: ["Ana", "Luis"]

    Método: map().

Combinar dos arrays (por ejemplo, de nombres y edades) en uno de objetos.
    Método: map().

Ordenar un array de objetos según una propiedad.

const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 20 }
];
usuarios.sort((a, b) => a.edad - b.edad);

Extraer elementos únicos y ordenarlos de menor a mayor.
    Métodos: Set, sort().

Usar encadenado de métodos: Dado un array de números, debes calcular la suma de los cuadrados de los números pares.
    Métodos: map(), filter(), reduce() en cadena
        
 */


