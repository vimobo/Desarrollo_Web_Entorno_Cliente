
//Trabajando con cookies básicas.

//función que devuelve el valor de una cookie segun la clave
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


//borra la cookie 
function borrarNombre() {
    document.cookie = "nombre =a; expires =" + new Date(Date.now() - 1 * 10000 * 60 * 60 * 24 * 365);
}

var valorCookieNombre = getCookie("nombre");
if (!valorCookieNombre) {
    let nombre = prompt("Introduce tu nombre");
    document.cookie = "nombre =" + nombre;
}
else {
    document.getElementById("nombre").innerHTML = `Tu nombre es ${valorCookieNombre}`;
}

