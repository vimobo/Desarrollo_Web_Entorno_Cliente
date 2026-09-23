/*
function sumarPares(numeros) {
  let total = 0;
  
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      total += numeros[i];
    }
  }
  
  return total;
}

// Prueba de ejecución:
const misNumeros = [2, 7, 4, 11, 8];
console.log("Resultado obtenido:", sumarPares(misNumeros)); 
// Resultado esperado: 14 (2 + 4 + 8)
*/


//primer precio es un string
/*
const carrito = [
  { nombre: "Teclado", precio: 30, aplicarDescuento: false },
  { nombre: "Ratón", precio: 15, aplicarDescuento: true },
  { nombre: "Monitor", precio: 200, aplicarDescuento: true },
  { nombre: "Alfombrilla", precio: 10, aplicarDescuento: false }
];

function calcularTotalCarrito(lista) {
  let total = 0;
  
  for (let i = 0; i < lista.length; i++) {
    let producto = lista[i];
    let precioFinal = producto.precio;

    if (producto.aplicarDescuento) {
      precioFinal = precioFinal - (precioFinal * 0.10); // 10% de descuento
    }

    total = total + precioFinal;
  }

  return total;
}

console.log("Total del carrito:", calcularTotalCarrito(carrito));
// Revisa si el tipo de dato o las operaciones son las correctas.
*/

//
//MensajeAcceso esta declarado dos veces y se declara dentro del bloque
//edadTexto se introduce como un string
//esEstudiante es un string, y se compara con un booleano
//la verificacion no compara , sino asigna
//Recorrido tiene <=
/*

function procesarRegistro(nombre, edadTexto, esEstudiante) {
  // Conversión y validación de edad
  let edad = parseInt(edadTexto);
  var mensajeAcceso
  
  if (edad >= 18) {
    mensajeAcceso = "Acceso concedido a mayores de edad";
  } else {
    mensajeAcceso = "Acceso restringido a menores";
  }

  console.log(mensajeAcceso);

  // Verificación de descuento por estudiante
  if (esEstudiante) {
    console.log("Se ha aplicado el descuento de estudiante.");
  }

  // Recorrido de verificación de historial
  const historialIntentos = [1, 2, 3];
  for (let i = 0; i < historialIntentos.length; i++) {
    console.log("Verificando intento número: " + historialIntentos[i]);
  }
}

// Caso de prueba
procesarRegistro("Ana", "20", true);
*/

/*
function calcularPromedio(sumaTotal, cantidad) {
  if (cantidad === 0 || typeof cantidad !== "number") {
    throw new Error("División no válida o cantidad errónea.");
  }
  return sumaTotal / cantidad;
}

function procesarNotasAlumno(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return calcularPromedio(suma, notas.length);
}

function evaluarCandidato(datosAlumno) {
  console.log("Iniciando evaluación de:", datosAlumno.nombre);
  const promedio = procesarNotasAlumno(datosAlumno.notas);
  
  if (promedio >= 5) {
    return "Aprobado";
  } else {
    return "Suspenso";
  }
}

// Simulaciones de prueba:
const alumnoA = { nombre: "Carlos", notas: [6, 8, 5, 7] };
const alumnoB = { nombre: "Elena", notas: [1]};

console.log(evaluarCandidato(alumnoA));
console.log(evaluarCandidato(alumnoB)); // ¡Aquí saltará un error!
*/

/*
function esMatrizOrdenada(numeros) {
  let ordenado = true;

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      ordenado = false;
    }
  }

  return ordenado;
}

console.log(esMatrizOrdenada([1, 3, 5, 8, 12])); // Devuelve false de forma inesperada
console.log(esMatrizOrdenada([4, 2, 9]));       // ¿Funciona correctamente?
*/

//
function validarTransaccion(usuario) {
  let resultado = "";

  if (usuario !== null && usuario !== undefined) {
    if (usuario.activo === true) {
      if (usuario.saldo >= usuario.montoRetiro) {
        if (usuario.montoRetiro > 0) {
          resultado = "Transacción autorizada";
        } else {
          resultado = "Monto inválido";
        }
      } else {
        resultado = "Saldo insuficiente";
      }
    } else {
      resultado = "Usuario inactivo";
    }
  } else {
    resultado = "Usuario no encontrado";
  }

  return resultado;
}

// Caso a probar:
const cliente = { activo: true, saldo: 100, montoRetiro: 50 };
console.log(validarTransaccion(cliente)); 