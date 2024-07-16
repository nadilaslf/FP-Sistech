const cardsWrapper = document.querySelector('.cards-wrapper');

function scrollLeft() {
    cardsWrapper.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    cardsWrapper.scrollBy({ left: 300, behavior: 'smooth' });
}

let currentIndex = 0;

function updateCarousel() {
    const carouselInner = document.querySelectorAll('.carousel-inner');
    carouselInner.forEach(inner => {
        inner.style.transform = `translateX(-${currentIndex * 220}px)`;
    });
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function nextSlide() {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateCarousel();
    }
}
