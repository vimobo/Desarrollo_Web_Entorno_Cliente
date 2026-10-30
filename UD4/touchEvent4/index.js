let t1x = 0;
let t1y = 0;
let t2x = 0;
let t2y = 0;


let timesPressed = 0;

document.getElementById("img").addEventListener("touchstart", (event) => {
    timesPressed++;

    if(timesPressed >= 2) {
        document.getElementById("img").style.
    }

    setTimeout(()=> {
        timesPressed = 0;
    }, 300)

})

