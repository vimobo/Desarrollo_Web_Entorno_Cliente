let timesPressed = 0;
let interval;

document.getElementById("img").addEventListener("touchstart", (event) => {

    //double tap
    timesPressed++;
    let img = document.getElementById("img");

    if(timesPressed >= 2) {

        if(img.style.borderRadius != "20000px") 
            img.style.borderRadius = "20000px";
        else
            img.style.borderRadius = "0px";
        }

    setTimeout(()=> {
        timesPressed = 0;
    }, 300)


    //hold
    interval = setInterval(() =>{

        if(document.getElementById("info").style.display != "block")
            document.getElementById("info").style.display = "block";
        else
            document.getElementById("info").style.display = "none";

    },1000)

})

document.getElementById("img").addEventListener("touchend", (event) => {
    clearInterval(interval);
})

