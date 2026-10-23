//Variables

let vivo = true;
let boxes = [redBox, yellowBox, greenBox, blueBox];
let visitedBoxes = [];
let visitedCount = 0;
let recuentoDeAciertos = 0;
let active = true;


//ronda del juego

function gameLoop() {
    if (vivo) {

        active = true;
        let rNumber = Math.floor(Math.random() * boxes.length);
        let currentBox = boxes[rNumber].id;

        visitedBoxes.push(currentBox);
        console.log(visitedBoxes[0])

        const intervalLoop = setInterval(() => {
            if (visitedCount != visitedBoxes.length) {
                console.log(visitedBoxes[visitedCount].id);
                console.log(visitedBoxes[visitedCount] + " hol");
                parpadear(visitedBoxes[visitedCount], 2);
                visitedCount++
            }
            else {
                clearInterval(intervalLoop);
                visitedCount = 0;
                active = false;
            }
        }, 1000)
    }
    else {
        document.getElementById("title").textContent = "Has Perdido, ya te lo he dicho"
    }
}

//parpadeo de los boxes

function parpadear(currentBox, n) {
    let nOfParpadeos = n;

    const interval = setInterval(() => {
        document.getElementById(currentBox).style.opacity = 0.5;

        setTimeout(() => {
            document.getElementById(currentBox).style.opacity = 1;

            nOfParpadeos--;
            if (nOfParpadeos == 0) {
                clearInterval(interval)
            }
        }, 200)
    }, 400)

}

function parpadearShort(currentBox) {

    document.getElementById(currentBox).style.opacity = 0.5;
    let color = document.getElementById(currentBox).style.backgroundColor;
    document.getElementById(currentBox).style.backgroundColor = "white";

    setTimeout(() => {
        document.getElementById(currentBox).style.opacity = 1;
        document.getElementById(currentBox).style.backgroundColor = color;

    }, 50);


}


gameLoop();

//logica del jugador

document.getElementById("colorContainers").addEventListener("click", (event) => {
    let clickedChild = event.target;

    if (!active) {

        if (vivo) {
            parpadearShort(clickedChild.id);
        }

        if (clickedChild.id == visitedBoxes[recuentoDeAciertos]) {
            recuentoDeAciertos++;
            if (recuentoDeAciertos == visitedBoxes.length && vivo) {
                gameLoop();
                document.getElementById("title").textContent = "te adentras al nivel " + (visitedBoxes.length);
                recuentoDeAciertos = 0;
            }
        }
        else {
            document.getElementById("title").textContent = "Has Perdido"
            vivo = false;
            visitedBoxes = [];

        }
    }
});
