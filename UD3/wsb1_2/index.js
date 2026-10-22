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
                parpadear(visitedBoxes[visitedCount]);
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
        alert("Has perdido");
    }
}

//parpadeo de los boxes

function parpadear(currentBox) {
    let nOfParpadeos = 2;
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
gameLoop();

//logica del jugador

document.getElementById("colorContainers").addEventListener("click", (event) => {
    let clickedChild = event.target;

    if (!active) {

        if (clickedChild.id == visitedBoxes[recuentoDeAciertos]) {
            recuentoDeAciertos++;
            if (recuentoDeAciertos == visitedBoxes.length && vivo) {
                gameLoop();
                alert("te adentras al nivel " + (visitedBoxes.length));
                recuentoDeAciertos = 0;
            }
        }
        else {
            alert("Has perdido");
            vivo = false;
            visitedBoxes = [];

        }
    }
});
