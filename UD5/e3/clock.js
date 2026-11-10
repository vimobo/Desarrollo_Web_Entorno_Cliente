let milisecondsPassed = 0;
let interval;

function start() {

    interval = setInterval(() => {

        let clock = document.getElementById("clock");
        
        milisecondsPassed += 1000;
        
        clock.innerHTML = formatTime(milisecondsPassed);

    }, 1000); 
}

document.getElementById("startButton").addEventListener("click", () => start());

document.getElementById("resetButton").addEventListener("click", () => milisecondsPassed = 0);

document.getElementById("stopButton").addEventListener("click", () => clearInterval(interval));


function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}