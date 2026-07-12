// IMG SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId=setInterval(nextSlide, 5000);
    }
    
}

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[index].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex = (slideIndex-1 + slides.length)%slides.length;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex = (slideIndex+1) % slides.length;
    showSlide(slideIndex);
}

