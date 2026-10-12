//Pracice of Arrow Functions

/*
1. Two arguments

Transform this function:

function sum(num1, num2){
    return num1 + num2
}

*/

const sum = (num1, num2) => num1 + num2
console.log("the answer to everything is", sum(42, 0));

/*
2. One argument

Transform this function that tells you how long a string is:

function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
}
*/

const stringLength = (str) => {
    return `the length of "${str}" is ${str.length}`;
}

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";
console.log(stringLength(longestCityNameInTheWorld));

/**
 * 3. One argument, pt.2

Let's change the previous function a bit to include a variable and a return statement:

function stringLength(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}
*/

const stringLengthUpgrade = (str) => {
    strLength = str.length;
    console.log(`the length of "${str}" is ${strLength}`);
    return strLength;
}

console.log(stringLengthUpgrade("willynilly"));

/**
 * 4. One argument

Transform this function that selects a random element from the array and concatenates it to your name:

let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

function showAlert(name){    
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}

showAlert("you ball of fluff")
 */

let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]
const showAlert = (name) => alert(alerts[(Math.floor(Math.random() * alerts.length))] + `, ${name}!`);

//showAlert("vic");


/*
6. Write an arrow function that returns the string, Hello, I am ${name}, and I am ${age} years old.
*/

const helloWorld = (name, age) => console.log(`Hello ${name}, you are ${age} years old.`);
helloWorld("vi", 29);

/*
7. Write an arrow function that takes an array of integers, and returns the sum of the elements in the array.
 Google and use the built-in reduce array method for this.
 */
let numberArray = [1, 2, 3, 4, 5];
const arraySum = (array) => {
    return array.reduce((acumulator, value) => acumulator + value);
};

console.log(arraySum(numberArray));

/**
 * 8. The syntax of this function is wonky. Can you fix it to use the shortest arrow function possible?

let eye = "eye";

const fire =
(

) =
>
{
 return `bulls-`;
}
 */

let eye = "eye";

const fire = () => `bulls${eye}`;

/*
9. Refactor the following ES5 function to use an arrow function:

const fibonacci = function(n) {
if (n < 3) return 1;
return fibonacci(n - 1) + fibonacci(n - 2);
}
*/

const fibonacci = (n) => {
    return n < 3 ? 1: fibonacci(n - 1) + fibonacci(n - 2);
}