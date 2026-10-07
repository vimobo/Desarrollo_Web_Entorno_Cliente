//Crea una aplicación web en HTML + JavaScript que use el Browser Object Model (BOM) e implemente las siguientes funcionalidades:

//Mostrar información del navegador, idioma, plataforma y resolución de la pantalla.


document.getElementById("informacionNavegador").innerHTML = `
        <ul>
            <li>Navegador: ${navigator.userAgent}</li>
            <li>Idioma: ${navigator.language}</li>
            <li>Plataforma: ${navigator.platform}</li>
            <li>Resolución: ${screen.width} x ${screen.height}</li>
        </ul>`;

//Mostrar la URL actual .

document.getElementById("navegacion").innerHTML = `URL Actual: ${document.URL}`;


//Incluir un botón que redirija al usuario a otra página web (ej: MDN).

function redirigir() {
   window.location = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Redirections";
} 
//Mostrar información detallada del objeto screen:
//Resolución total
//Área disponible
//Orientación
//Profundidad de color

document.getElementById("informacionScreen").innerHTML = `
        <ul>
            <li>Resolución: ${screen.width} x ${screen.height}</li>
            <li>Área disponible: ${screen.availWidth} x ${screen.availHeight}</li>
            <li>Orie: ${screen.colorDepth}</li>
            <li>Color depth: ${screen.colorDepth}</li>
            <li>Pixel depth: ${screen.pixelDepth}</li>
        </ul>`;