const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const track = document.querySelector(".carousel__track");

const images = document.querySelectorAll(".carousel__img");

const totalImages = images.length;

let currentImageIndex = 0;


// Actualizar posición del carrusel
function updateCarousel() {
    track.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}


// Siguiente imagen
function showNextImage() {

    currentImageIndex++;

    if (currentImageIndex >= totalImages) {
        currentImageIndex = 0;
    }

    updateCarousel();
}


// Imagen anterior
function showPrevImage() {

    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = totalImages - 1;
    }

    updateCarousel();
}


// Eventos de los botones
nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);


//Evento para movil

let xStart = 0;

document.getElementById("carousel__container").addEventListener("touchstart", (event) => {
    event.preventDefault();
    let toque = event.touches[0];
    console.log("heoll")
    
    xStart = toque.clientX; 
})

document.getElementById("carousel__container").addEventListener("touchend", (event) => {
    event.preventDefault();
    let toque = event.changedTouches[0];

    if(toque.clientX > xStart) 
        showPrevImage();
    else
        showNextImage();
})