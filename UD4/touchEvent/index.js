

const caja = document.getElementById("caja");
const caja2 = document.getElementById("caja2");

let offsetX = 0;
let offsetY = 0;

caja.addEventListener("touchstart", (event) => {
    let toque = event.touches[0];

    offsetX = caja.offsetLeft - toque.clientX;
    offsetY = caja.offsetTop - toque.clientY;
    caja.style.backgroundColor = "red";

});

caja.addEventListener("touchmove", (event) => {
    let toque = event.touches[0];
    event.preventDefault();

    caja.style.left = `${toque.clientX + offsetX}px`;
    caja.style.top = `${toque.clientY + offsetY}px`;
});

caja.addEventListener("touchend", () => {
    caja.style.backgroundColor = "beige";
})



caja.addEventListener("mousedown", (event) => {
    offsetX = caja.offsetLeft - event.clientX;
    offsetY = caja.offsetTop - event.clientY;

    caja.style.backgroundColor = "red";
});

document.addEventListener("mousemove", (event) => {
    if (event.buttons === 1) {
        caja.style.left = `${event.clientX + offsetX}px`;
        caja.style.top = `${event.clientY + offsetY}px`;
    }
});

//caja 2


let startY = 0;
let startX = 0;
let endY = 0;
let endX = 0;

caja2.addEventListener("touchstart", (event) => {
    event.preventDefault();

    toque = event.touches[0];
    startX = toque.clientX;
    startY = toque.clientY;
    console.log(startX);
    console.log(startY);
} )

caja2.addEventListener("touchend", (event) => {
    event.preventDefault();

    toque = event.changedTouches[0];

    endX = toque.clientX;
    endY = toque.clientY;
    calculateDirection(startX, startY, endX, endY);
} )

function calculateDirection (sX, sY, eX, eY) {
    let response = "";
    let xSum = sX - eX;
    let ySum = sY - eY;

    console.log(xSum);
    console.log(ySum);
    if (Math.abs(xSum) > Math.abs(ySum)){

        if (xSum > 0) {
            response = "izquierda";
        }
        else if (xSum < 0){
            response = "derecha";
        }
    } else{

        if (ySum < 0 ) {
            
            response = "abajo";
        }
        else if (ySum > 0 ) {
            
            response = "arriba";
        }
    }
    document.getElementById("caja2").textContent = response;
}