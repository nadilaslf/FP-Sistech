const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('#nextBtn');
const prevButton = document.querySelector('#prevBtn');
const slideWidth = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
});
