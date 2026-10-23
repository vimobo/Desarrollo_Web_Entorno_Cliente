let colores = {
    azul: "rgb(0, 0, 255)",
    verde: "rgb(0, 128, 0)",
    negro: "rgb(0, 0, 0)",
    rojo: "rgb(255, 0, 0)"
};

let keys = Object.keys(colores);
let randomN = 0;
console.log(keys);
let colorACazar = "";


function generateRandomColor() {
    randomN = Math.floor(Math.random() * 4);
    colorACazar = keys[randomN];
    document.getElementById("presentador").textContent = "Busca el color " + colorACazar;
}

let container = document.getElementById("container");

container.addEventListener("click", comprobarColor)

function comprobarColor(event) {
    let hijoClicado = event.target;
    if(colores[keys[randomN]] == getComputedStyle(hijoClicado).backgroundColor)
        alert("muu bien");
    else
        alert("muu mal");

    generateRandomColor();
}


let btn1 = document.getElementById("botonCambio");

btn1.addEventListener("mouseover", () => {
    btn1.style.backgroundColor="red";
})

btn1.addEventListener("mouseout", () => {
    btn1.style.backgroundColor="white";
})

let randomLetter = "";

function generateRandomLetter() {
    randomLetter = String.fromCharCode(97 + Math.floor(Math.random()* 25));
    document.getElementById("teclaAPulsar").textContent = "Presiona la letra " + randomLetter;
}


addEventListener("keydown", (event) => {
    if(event.key == randomLetter)
        alert("Muy bien sabes que letra es la " + randomLetter);
    else 
        alert("Muy mal no sabes que letra es la " + randomLetter);
    
    generateRandomLetter();
    
})

generateRandomColor();
generateRandomLetter();

