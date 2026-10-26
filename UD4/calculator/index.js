/*

document.getElementById("calculatorBody").addEventListener("mouseover", (event)=> {
    event.stopPropagation();
    event.target.style = "color: rgb(165, 85, 85);background-color: white;";
})

document.getElementById("calculatorBody").addEventListener("mouseout", (event)=> {
    event.stopPropagation();
    event.target.style = "color: rgb(4, 0, 0);background-color: aquamarine;";
})

console.log
/*/
let responseValue1 = "";
let responseValue2 = "";
let responseOperation = "";

let numbers = "1234567890."
let operations = "+-/*"

document.getElementById("calculatorBody").addEventListener("click", (event) => {

    let target = event.target.textContent;

    console.log(target);

    if (target == "C") {
        reset();
        document.getElementById("response").textContent = "";

    } else if (target == "=") {

        let response = eval(responseValue1 + responseOperation + responseValue2);
        console.log(response);
        document.getElementById("response").textContent = response;
        reset();

    } else if (numbers.indexOf(target) != -1) {

        if (responseOperation == "") {
            responseValue1 += target;
            document.getElementById("response").textContent = responseValue1;
        } else {
            responseValue2 += target;
            document.getElementById("response").textContent = responseValue2;
        }

    } else if (operations.indexOf(target != -1)) {

        responseOperation = target;
        document.getElementById("response").textContent = target;

    }

})


function reset() {
    responseValue1 = "";
    responseValue2 = "";
    responseOperation = "";

}