let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');
let slideInterval;

function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSliderPosition();
    updateDots();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSliderPosition();
    updateDots();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSliderPosition();
    updateDots();
    resetSlideInterval(); // Reset the interval when a dot is clicked
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideShow();
}

// Initialize the slider
createDots();
updateDots();
updateSliderPosition();
startSlideShow();
