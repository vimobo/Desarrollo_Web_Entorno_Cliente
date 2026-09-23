//crear una tabla con columnas personalizadas

/*
let nColumnas = prompt("Introduce el n de columnas");
let nFilas = prompt("Introduce el n de filas");
let alto = prompt("Introduce el alto");
let ancho = prompt("Introduce el ancho");

document.write("<table>");

for(let i = 0; i < nColumnas; i++){
    document.write("<tr>");

    for(let j = 0; j < nFilas; j++) {
        document.write("<td heigth=" + ancho +"px   width=" + alto+ "px> punto </td>");

    }
    document.write("</tr>")
}
document.write("</table>");

*/

//Crear una tabla de ajedrez con altura y ancho variable

let anchoAlto = prompt("Introduce el alto y ancho");


document.write("<table style='border-collapse: collapse;'>");

for(let i = 0; i < 8; i++){
    document.write("<tr>");

    for(let j = 0; j < 8; j++) {
        if(j % 2 == 0 && i % 2 == 0)
            document.write("<td style='background-color: black; width:" + anchoAlto + "px; height:" + anchoAlto + "px;' >&nbsp;</td>");
        else if (j % 2 == 1 && i % 2 == 1) 
            document.write("<td style='background-color: black; width:" + anchoAlto + "px; height:" + anchoAlto + "px;' >&nbsp;</td>");
        else
            document.write("<td style='width:" + anchoAlto + "px; height:" + anchoAlto + "px;'>&nbsp;</td>");
    }
    document.write("</tr>");

}

document.write("</table>");


