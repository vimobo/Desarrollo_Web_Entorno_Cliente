
let arrayDivColor = [];
let colorRandom = "";


function generateColors() {
     arrayDivColor = [];

    let r = 0;
    let g = 0;
    let b = 0;


    for (i = 0; i < 6; i++) {
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        arrayDivColor.push("<div style='background-color: rgb(" + r + ", " + g + ", " + b + ");'></div>");
    }
    let str = arrayDivColor[Math.floor(Math.random() * arrayDivColor.length)]
    colorRandom = str.substring(str.indexOf("rgb"), str.indexOf(");") + 1);
    document.getElementById("title").textContent = "Cual es el color " + colorRandom;

}

function generateDivs() {
    let string = "";
    for (i = 0; i < arrayDivColor.length; i++) {
        string += arrayDivColor[i];
    }
    document.getElementById("colorDiv").innerHTML = string;
}

document.getElementById("colorDiv").addEventListener("click", (event) => {
    if (event.target.style.backgroundColor == colorRandom)
        alert("has ganado");
    else
        alert("Has perdido")

    generateColors();
    generateDivs();
})

generateColors();
generateDivs();

