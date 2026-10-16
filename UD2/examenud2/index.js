function ejercicio1(edad, auth) {
    if (edad >= 18)
        console.log("Acceso permitido");
    else if (edad < 18 && auth)
        console.log("Acceso permitido");
    else
        console.log("Falta Auorizacion");

}

//ejercicio1(17, true);

const numeros = [12, 7, 24, 3, 18, 9, 30];
function ejercicio2(numeros) {
    let sumaTotal = 0;
    let contador = 0;
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0)
            console.log(numeros[i] + " es par");

        if (numeros[i] > 15)
            contador++;

        sumaTotal += numeros[i];
    }

    console.log("Suma Total: " + sumaTotal);
    console.log("Mayores de 15: " + contador);
}

//ejercicio2(numeros);

function ejercicio3() {
    let randomN = 0;
    let again = false;
    do {
        randomN = Math.floor(Math.random() * 6 + 1);
        alert("ha salido " + randomN)
        again = confirm("Volver a tirar?");

    } while (again)
}


//ejercicio3();

function ejercicio4() {

    let anio = Number(prompt("Introduce el año en que naciste"));
    if (!Number.isNaN(anio)) {

        let ahora = new Date();
        edad = ahora.getFullYear() - anio;
        alert("El usuario tiene " + edad + " años");
    }
    else {
        alert("Introduce un numero válido");
    }
}

//ejercicio4();

//función obtenida de los ejercicios de clase
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function ejercicio5() {
    //Por alguna razón me suma un dia correctamente al expiry date con esta formula, en lugar de * 10000 * 60 * 60 * 24
    document.cookie = "usuario=" + prompt("Introduce tu nombre") + "; expires =" + new Date(Date.now() + 1 * 10000 * 60 * 6 * 24);
    console.log(getCookie("usuario"));
    let confirmar = confirm("Quieres borrar el nombre guardado?");
    console.log(confirmar);
    if (confirmar) {
        console.log("El nombre ha sido boorado");
        document.cookie = "usuario=" + getCookie("nombre") + "; expires =" + new Date(Date.now() - 1 * 10000 * 60 * 60 * 24 * 365);
    }
    console.log(getCookie("usuario"));
}

ejercicio5();