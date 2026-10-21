//
//    Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):
//
//    find largest number

numberArray = [1, 2, 3, 4, 5, 6, 5, 6, 8, 100];

numberArray.sort((a, b) => b - a);
console.log(numberArray[0]);

//    find longest string

stringArray = ["a", "bb", "ccc", "dddd", "aisas", "is", "assisis"];
let s = stringArray.sort((b, a) => b.length - a.length).pop(stringArray[0]);
console.log(s);


//    find even numbers

let oddNumbers = numberArray.filter(n => n % 2 == 0);
console.log(oddNumbers);

//    find words that contain 'is'

containsIs = stringArray.filter(s => s.indexOf("is") != -1);

console.log(containsIs);

//    assert all numbers are divisible by three

divisibleBy3 = numberArray.filter(n => n % 3 == 0);
console.log(divisibleBy3);

//    zip two arrays together

numberArray2 = [1, 22, 23, 53, 43, 1, 4, 56, 8, 9];

let zipArray = [];

numberArray.map((n, i) => {
    zipArray.push(n);
    zipArray.push(numberArray2[i]);
})

console.log(zipArray);

//    sort joined array from smallest to largest

zipArray = zipArray.sort((a, b) => a - b);
console.log(zipArray);

//    remove the first word in the array

stringArray.shift();
console.log(stringArray);

//    place a new word at the start of the array

stringArray.unshift("aaa");
console.log(stringArray);


//    replace some elements

replacedStrings = stringArray.splice(1, 2, 2, "hola");
console.log(replacedStrings);
console.log(replacedStrings);



//
//    Over an array with names, find all entries whose firstname starts with 'J',
//    create projection combined of only the initials of the name and then sort alphabetically
//
//    Treasure hunt
//
//                  +-------------------------+
//                  ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
//                  +----+----+----+----+-----¦
//                  ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
//                  +----+----+----+----+-----¦
//                  ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
//                  +----+----+----+----+-----¦
//                  ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
//                  +----+----+----+----+-----¦
//                  ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
//                  +-------------------------+
//
//Do you like treasure hunts? In this problem you are to write a program to explore the above array for a treasure.
//  The values in the array are clues. Each cell contains an integer between 11 and 55;
//  for each value the ten's digit represents the row number and the unit's digit represents the column number of the cell containing the next clue.
//  Starting in the upper left corner (at 1,1), use the clues to guide your search of the array. (The first three clues are 11, 34, 42).
//  The treasure is a cell whose value is the same as its coordinates. Your program must first read in the treasure map data into a 5 by 5 array.
//  Your program should output the cells it visits during its search, and a message indicating where you found the treasure.
//
let map = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
];
console.log();

function intDev(n1, n2) {
    return  (n1 - (n1 % n2)) / n2;
}

function findTreasuere(map) {
    let column = 0;
    let row = 0;
    let nextColumn = 0;
    let nextRow = 0;
    let found = false;
    console.log("Seraching in [" + nextRow + "][" + nextColumn + "] value: " + map[column][row]);

    do {
        nextColumn = (map[column][row] % 10) - 1;
        nextRow = (intDev(map[column][row], 10)) - 1;
        if (map[row][column] == map[nextRow][nextColumn]) {
            found = true;
            console.log("The treasure is in [" + (nextRow + 1) + "][" + (nextColumn + 1) + "] -> " + map[nextRow][nextColumn]);
        }
        else
            console.log("Seraching in [" + (row + 1) + "][" + (column + 1) + "] value: " + map[row][column] + " next step: " + map[nextRow][nextColumn]);
        column = nextColumn;
        row = nextRow;
    } while (!found);
}

function findTreasuereAlternative(map) {
    solution = "";
    let value = 0;
    for (row = 0; row < map.length; row++) {
        for (col = 0; col < map[row].length; col++) {
            value = map[row][col];
            if (value == map[(intDev(value, 10) - 1)][((value % 10) - 1)])
                solution = "Treasure found in " + (intDev(value, 10) - 1) + " " + ((value % 10) - 1) + " -> " + map[(intDev(value, 10) - 1)][(value % 10) - 1];
        }
    }
    return solution;
}

findTreasuere(map);
console.log(findTreasuereAlternative(map));

//    Develop a function wich be able to create a random treasure hunt like the previous one. As arguments it will recibe the dimensions of the array (at least 5x5) and must return a valid treasure hunt array.
//

function createTreasureMap(size) {
    let treasureMap = new Array(size);

    for (let i = 0; i < size; i++) {
        treasureMap[i] = new Array(size).fill(0);
    }
    let counter = 1;
    let randomRow = Math.floor((Math.random() * size));
    let randomCol = Math.floor((Math.random() * size));
    let newRandomRow = 0;
    let newRandomCol = 0;
    let found = false;
    treasureMap[randomRow][randomCol] = (randomRow + 1) * 10 + (randomCol + 1);
    console.log(treasureMap[randomRow][randomCol]);

    do {
        do {
            found = false;
            newRandomRow = Math.floor((Math.random() * size));
            newRandomCol = Math.floor((Math.random() * size));

            if (treasureMap[newRandomRow][newRandomCol] == 0) {
                treasureMap[newRandomRow][newRandomCol] = (randomRow + 1) * 10 + (randomCol + 1);
                found = true;
                counter++;

            }

        } while (!found && counter < size * size);

        randomRow = newRandomRow;
        randomCol = newRandomCol;
    } while (counter < size * size);
    console.log(treasureMap);
    return treasureMap;
}
createTreasureMap(3);


//findTreasuere(createTreasureMap(3));


//    Write a program to search for the "saddle points" in a 5 by 5 array of integers. A saddle point is a cell whose value is greater than or equal to any in its row, and less than or equal to any in its column. There may be more than one saddle point in the array. Print out the coordinates of any saddle points your program finds. Print out "No saddle points" if there are none.
//
//    One classic method for composing secret messages is called a square code. The spaces are removed from the english text and the characters are written into a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, so it is written into a rectangle with 7 rows and 8 columns.
//
//                ifmanwas
//                meanttos
//                tayonthe
//                groundgo
//                dwouldha
//                vegivenu
//                sroots
//
//The coded message is obtained by reading down the columns going left to right. For example, the message above is coded as:
//
//imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
//
//Write a function, that recibe a message and return it coded (have the maximum message length be 81 characters). Here are some more examples:
//
// Input                                           Output
//have a nice day                                 hae and via ecy
//feed the dog                                    fto ehg ee  dd
//chill out                                       clu hlt io
//
//    Write a function that return the original message from one coded recieved as argument.
//