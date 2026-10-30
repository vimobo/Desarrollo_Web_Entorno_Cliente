let t1x = 0;
let t1y = 0;
let t2x = 0;
let t2y = 0;




document.getElementById("img").addEventListener("touchstart", (event) => {

    if (event.touches.length == 2) {

        calculateDistance(event)
    }

})

function calculateDistance(event) {
    let t1 = event.touches[0];
    let t2 = event.touches[1];

    t1x = t1.clientX;
    t1y = t1.clientY;
    t2x = t2.clientX;
    t2y = t2.clientY;

    return Math.hypot(t1y - t2y, t1x - t2x);
}

document.getElementById("img").addEventListener("touchmove", (event) => {

    let actualScale = document.getElementById("img").style.scale;
    
    if (event.touches.length == 2) {
        document.getElementById("img").style.scale = actualScale - calculateDistance(event) * 0.1;
        consolelog(calculateDistance(event));
        document.getElementById("result").textContent = actualScale - calculateDistance(event) * 0.1;
    }

})