function validateUppercase(string) {
    return /[A-Z]/.test(string);
}


function comprobarNombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,50}$/u;
    return regex.test(nombre.trim());
}

function validateLowerCase(string) {
    return /[a-z]/.test(string);
}

function validateMail(string) {
    return /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(string);
}

function validateCreditCard(string) {
    return /^\d{13,19}$/.test(string);
}

function validateLength(string) {
    return /.{6,}/.test(string);
}

function validateNumber(string) {
    return /^\d+$/.test(string);
}

let errorArray = [];



document.getElementById("cardNumber").addEventListener("keyup", (event) => {
    let target = event.target;
    let value = target.value;

    value = value.replaceAll(" ", "")

    if (!validateNumber(value)) {
        document.getElementById("cardNumberShowError").textContent = "Introduce numeros";
    }
    else {
        document.getElementById("cardNumberShowError").textContent = "";
    }

    if (validateCreditCard(value)) {
        target.style.border = "1px solid green";
    }
    else {
        target.style.border =  "1px solid #cbd3df";
    }

    value = value.replaceAll(/.{4}/g, '$& ');

    document.getElementById("cardNumber").value = value;


    doctext = value;
    doctext = doctext.replaceAll(" ", "")




    doctext = doctext.padEnd(16, "*");
    doctext = doctext.replaceAll(/.{4}/g, '$& ');

    document.getElementById("cardNumberShow").textContent = doctext;

})


document.getElementById("cardHolder").addEventListener("keyup", (event) => {

    let target = event.target;
    let value = target.value;

    if (!comprobarNombre(value)) {
        document.getElementById("cardNameShowError").textContent = "Introduce nombre válido";
    }
    else {
        document.getElementById("cardNameShowError").textContent = "";
    }

    if (comprobarNombre(value)) {
        target.style.border = "1px solid green";
    }
    else {
        target.style.border =  "1px solid #cbd3df";
    }



    document.getElementById("cardHolderShow").textContent = value;
})

document.getElementById("expirationMonth").addEventListener("click", (event) => {

    let target = event.target;
    let value = target.value;

        console.log(target);

    document.getElementById("cardHolderShow").textContent = value;
})

