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

document.getElementById("username").addEventListener("keyup", (event) => {

    let content = event.target.value;

    changeColorLi(content, "len", validateLength)
    changeColorLi(content, "lower", validateLowerCase)
    changeColorLi(content, "upper", validateUppercase)


})

document.getElementById("button").addEventListener("click", (event) => {

    let content = document.getElementById("username").value;

    if (validateLength(content) && validateLowerCase(content) && validateUppercase(content)) {
        document.getElementById("form").style = "opacity: 0;"
        document.getElementById("form").style = "display: none;"
        document.getElementById("hi").style = "display: block;"
        document.getElementById("hi").textContent = "Hola "  + content;
        document.getElementById("hi").style = "opacity: block;"
    }
})

function changeColorLi(content, id, call) {

    let doc = document.getElementById(id);

    if (call(content))
        doc.style = "color: green;"
    else {

        doc.style = "color: #FF5B42;"
    }
}

