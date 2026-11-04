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



document.getElementById("form").addEventListener("keyup", (event) => {
    let target = event.target;
    let value = target.value;

    if(target.id = "cardNumber") {
        let doctext = document.getElementById("cardNumberShow").value; 
        doctext = "";
        doctext += value;
        console.log(value)
        console.log("doc " + doctext)
        for(i = 0 ; i < 16 - doctext.length; i++){
            doctext += "*";
        }
    }

})
