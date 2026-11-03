function validateUppercase(string) {
    return /[A-Z]/.test(string);
}

function validateLowerCase(string) {
    return /[!@#$%^&]/.test(string);
}

function validateMail(string) {
    return /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(string);
}

function validateCreditCard(string) {
    return /^\d{13,19}$/.test(string);
}

function validateLongitude(string) {
    return /.{8,}/.test(string);
}

function validateNumber(string) {
    return /\d/.test(string);
}