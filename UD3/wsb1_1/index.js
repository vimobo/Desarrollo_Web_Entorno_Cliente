let colores = {
    azul: "rgb(0, 0, 255)",
    verde: "rgb(0, 128, 0)",
    negro: "rgb(0, 0, 0)",
    rojo: "rgb(255, 0, 0)"
};

let keys = Object.keys(colores);
let randomN = Math.floor(Math.random() * 4);
console.log(keys);
let colorACazar = keys[randomN];

document.getElementById("presentador").textContent = "Busca el color " + colorACazar;

let container = document.getElementById("container");

container.addEventListener("click", comprobarColor)

function comprobarColor(event) {
    let hijoClicado = event.target;
    if(colores[keys[randomN]] == getComputedStyle(hijoClicado).backgroundColor)
        alert("muu bien");
    else
        alert("muu mal");
}


let btn1 = document.getElementById("botonCambio");

btn1.addEventListener("mouseover", () => {
    btn1.style.backgroundColor="red";
})

btn1.addEventListener("mouseout", () => {
    btn1.style.backgroundColor="white";
})

addEventListener("keydown", (event) => {
    if(event.key == 'a')
        alert("Muy bien sabes que letra es la A");
    else
        alert("Muy mal no sabes que letra es la A");

})

