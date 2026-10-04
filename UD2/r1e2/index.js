function doE1(n) {
    console.log(Math.abs(n));
}


function doE2(n) {

    console.log(Math.round(n));
    console.log(Math.floor(n));
    console.log(Math.ceil(n));
}


function doE3([n]) {
    console.log(Math.min([n]));
}

function doE5 () {
    console.log(Math.floor(Math.random() * 6) + 1);
}

function doE14 (length) {
    let contrasenia = "";
    for(i = 0; i < length; i++){
        contrasenia += String.fromCharCode(Math.floor((Math.random()* 50) + 65));
    }
    return contrasenia;
}
//doE1(10.2);
//doE2(10.5);
//doE3([1,2,3,4]);
//doE5();
console.log(doE14(10));