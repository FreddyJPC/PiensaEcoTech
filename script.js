document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const newTransformValue = -index * 100 + '%';
        slidesWrapper.style.transform = 'translateX(' + newTransformValue + ')';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Agrega flechas de navegación
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function () {
            prevSlide();
        });

        nextButton.addEventListener('click', function () {
            nextSlide();
        });
    }

    setInterval(nextSlide, 8000);

    // Muestra el primer slide al cargar la página
    showSlide(currentSlide);
});


  document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.navbar__menu-icon');
    var menuOptions = document.querySelector('.navbar__menu-options');

    menuIcon.addEventListener('click', function () {
      menuOptions.classList.toggle('active');
    });
  });



