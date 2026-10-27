
let crossTurn = false;

document.getElementById("board").addEventListener("click", (event) => {
    let content = event.target.textContent;
    if (content == "" && crossTurn == false) {
        event.target.textContent = "O";
        crossTurn = true;
    }
    else if (content == "") {
        event.target.textContent = "X";
        crossTurn = false;
    }

    if (checkGame()) {
        document.getElementById("whoWins").textContent = crossTurn ? "Gana O" : "Gana X";
    }
})

function checkGame() {
    const tabla = document.getElementById("board");
    let wonGame = false;
    for (i = 0; i < 3 && !wonGame; i++) {
        if (tabla.rows[i].cells[0].textContent != "" && tabla.rows[i].cells[0].textContent == tabla.rows[i].cells[1].textContent &&
            tabla.rows[i].cells[2].textContent == tabla.rows[i].cells[1].textContent
            )
            wonGame = true;

        if (tabla.rows[0].cells[i].textContent == tabla.rows[1].cells[i].textContent &&
            tabla.rows[1].cells[i].textContent == tabla.rows[2].cells[i].textContent &&
            tabla.rows[0].cells[i].textContent != "")
            wonGame = true;

    }
    if (tabla.rows[1].cells[1].textContent != "" &&
        tabla.rows[0].cells[0].textContent == tabla.rows[1].cells[1].textContent &&
        tabla.rows[1].cells[1].textContent == tabla.rows[2].cells[2].textContent)
        wonGame = true;

    if (tabla.rows[1].cells[1].textContent != "" &&
        tabla.rows[0].cells[2].textContent == tabla.rows[1].cells[1].textContent &&
        tabla.rows[1].cells[1].textContent == tabla.rows[2].cells[0].textContent)
        wonGame = true;

    return wonGame;
}