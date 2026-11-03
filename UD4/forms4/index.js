function validateUppercase(string) {
    return /[A-Z]/.test(string);
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
    return /\d/.test(string);
}

let errorArray = [];


document.getElementById("submit-button").addEventListener("click", (event) => {

    errorArray = [];



    validate("firstName", validateUppercase, "Uppercase");
    validate("lastName", validateUppercase, "Uppercase last name");
    validate("phone", validateNumber, "numbers");
    printErrors();
})

function validate(id, call, response) {

    let doc = document.getElementById(id);
    let validated = call(doc.value);


    if (validated) {
        doc.style = "border: 1px solid #e0e3e6;"
    }
    else {
        doc.style = "border: 1px solid #FF5B42;"
        errorArray.push(response);
    }

    return validated;
}

function printErrors() {
    
    let doc = document.getElementById("response");
    doc.textContent  = "";

    errorArray.forEach(error => {
        console.log(error);
        doc.textContent += "<br>" + error;
    });


}

