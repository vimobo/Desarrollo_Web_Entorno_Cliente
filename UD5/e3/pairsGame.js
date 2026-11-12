
//variables
let board = document.getElementById("cardBoard");
let gameLost = false;
let deck = [];

let cardTypes = [];



//starting functions

function randomNumber255() {
    return Math.floor(Math.random() * 51) * 5;
}

function createRandomColor() {
    return `rgb(${randomNumber255()},${randomNumber255()},${randomNumber255()})`;
}

function createCard(cardType, counter) {
    const card = document.createElement("card");

    card.id = counter;

    card.className = "card hidden";

    card.style.backgroundColor = cardType;

    deck.push(card);

}


function createDeck(nOfPairs) {
    let counter = 0;

    createPairs(nOfPairs);

    cardTypes.map((cardType) => {
        createCard(cardType, counter);
        createCard(cardType, counter);
        counter++;
    })
    printDeck();
}

function printDeck() {
    deck = deck.sort(() => Math.random() - 0.5);
    let timeToApear = 100;
    deck.map((card) => {
        setTimeout(() => {
            board.appendChild(card);
        },timeToApear += 100)
    })
}

function createPairs(nOfPairs) {
    for (let i = 0; i < nOfPairs; i++) {
        cardTypes.push(createRandomColor());
    }
}

//Game functions

let clickCount = 0;
let currentCards = [];
let lastCard = "";
let actionOn = true;

board.addEventListener("click", (event) => {

    const target = event.target;
    console.log(event);

    if(target.id != "cardBoard" && actionOn) {
        
        if (clickCount == 0 ) {
            clickCount++;
            
            target.classList.remove("hidden");
            currentCards.push(target);
            lastCard = target;
        }
        else if (clickCount == 1 ) {
            
            target.classList.remove("hidden");
            currentCards.push(target);
            actionOn = false;

            if (lastCard.id == target.id) {
                setTimeout(() => {
                    currentCards.map((card) => 
                    card.classList.add("removed"));
                    currentCards = [];
                    clickCount = 0;
                    actionOn = true;
                }, 1000)
            }
            else {
                setTimeout(() => {
                    currentCards.map((card) => card.className = "card hidden");

                    currentCards = [];
                    lastCard = "";
                    actionOn = true;
                    clickCount = 0;

                }, 1000)
            }
            
        }
            
    }
})




//start

createDeck(6);



