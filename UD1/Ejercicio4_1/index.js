//imprimir un rombo
let string = "";
let lowerCapReached = false;
let lowerCap = 2;
let upperCap = 2;


for(let i = 0; i < 5; i++) {
    
    string = "";

    //lower and upper cap control 
    for(let j = 0; j < 5; j++) {
        if(j < lowerCap || j > upperCap)
            string+= ' ';
        else
            string+= '*';
    }
    
    if(lowerCap == 0)
        lowerCapReached = true;

    if (!lowerCapReached)
        lowerCap--;
    else
        lowerCap++;

    if(!lowerCapReached)
        upperCap++;
    else
        upperCap--;
    console.log(string);
}

