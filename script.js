document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function moveSlide(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        } else if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));

    showSlide(currentIndex);
});
