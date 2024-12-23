function scrollCarousel1(direction) {
    const carousel = document.querySelector('.horizontal-carousel1');
    const scrollAmount = 300; // Pixels à défiler

    if (direction === 'left') {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}