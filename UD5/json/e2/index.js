import { apiKey } from "./apiKey.js";


let content = "";
let pageCount = 2;
let isFull = false;

let moviesDiv = document.getElementById("movies");

function deleteMovies() {
    moviesDiv.innerHTML = "";
}

function printMovies(movies) {

    movies['Search'].forEach(movie => {
        let card = document.createElement("div");
        card.classList.add("card");

        let movieImg = document.createElement("img");
        movieImg.src = movie.Poster;

        card.appendChild(movieImg);

        let description = document.createElement("div");

        let title = document.createElement("p");
        description.appendChild(title);

        card.id = movie.Title;
        card.appendChild(description);

        moviesDiv.appendChild(card);
    });
}


function serachMovies() {
    content = document.getElementById("search").value;
    fetch("https://www.omdbapi.com/?i=tt3896198&s=" + content + "=&apikey=" + apiKey)
        .then(data => data.json())
        .then(data => {
            deleteMovies();
            printMovies(data);
        });
}

function searchMoreInfo(omdbId) {
    fetch("https://www.omdbapi.com/?i=tt3896198&s=" + content + "=&apikey=" + apiKey)
        .then(data => data.json())
        .then(data => {
            deleteMovies();
            printMovies(data);
        });
}


function printDetails(data) {
    document.getElementById("titleMoreInfo").textContent = data.Title;
    document.getElementById("yearMoreInfo").textContent = data.Year;
    document.getElementById("ratedMoreInfo").textContent = data.Rated;
    document.getElementById("actorsMoreInfo").textContent = data.Actors;
    document.getElementById("AwardsMoreInfo").textContent = data.Awards;
    document.getElementById("metascoreMoreInfo").textContent = data.Metascore;
    document.getElementById("plotMoreInfo").textContent = data.Plot;

    document.getElementById("moreInfo").style.display = "block";
}

document.getElementById("submit").addEventListener("click", () => {
    serachMovies();
})

document.getElementById("movies").addEventListener("click", (event) => {
    let target = event.target;
    let card = target.closest(".card");

    fetch("https://www.omdbapi.com/?i=tt3896198&t=" + card.id + "=&apikey=" + apiKey)
        .then(data => data.json())
        .then(data => {
            printDetails(data);
        });
})

document.getElementById("closeInfo").addEventListener("click", () => {
    document.getElementById("moreInfo").style.display = "none";
})


document.getElementById("showMore").addEventListener("click", () => {

});


window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 10) {
        fetch("https://www.omdbapi.com/?i=tt3896198&s=" + content + "=&apikey=" + apiKey + "&page=" + pageCount)
            .then(data => data.json())
            .then(data => {
                pageCount++;
                printMovies(data);
            });
    }

});