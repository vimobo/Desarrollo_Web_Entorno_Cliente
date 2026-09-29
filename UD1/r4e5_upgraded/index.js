//imprimir un rombo

let romboSize = prompt("Introduce el tamaño del rombo (impar)");

let string = "";
let lowerCapReached = false;



let lowerCap = Math.floor(romboSize / 2);
let upperCap = Math.floor(romboSize / 2);


for (let i = 0; i < romboSize * 2; i++) {

    string = "";

    //lower and upper cap control 
    for (let j = 0; j < romboSize; j++) {
        if (j < lowerCap || j > upperCap)
            string += ' ';
        else
            string += '*';
    }

    if (lowerCap == 0)
        lowerCapReached = true;

    if (!lowerCapReached)
        lowerCap--;
    else
        lowerCap++;

    if (!lowerCapReached)
        upperCap++;
    else
        upperCap--;
    console.log(string);
}

