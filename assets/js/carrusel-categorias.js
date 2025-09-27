// Carrusel de categorías populares: flechas funcionales

document.addEventListener('DOMContentLoaded', function() {
  const swiperWrapper = document.querySelector('.categories--container .swiper-wrapper');
  const slides = document.querySelectorAll('.categories--container .swiper-slide');
  const prevBtn = document.querySelector('.categories--container .swiper-button-prev');
  const nextBtn = document.querySelector('.categories--container .swiper-button-next');

  let currentIndex = 0;
  const maxIndex = slides.length - 1;

  function updateCarrusel() {
    swiperWrapper.style.transform = `translateX(-${currentIndex * (slides[0].offsetWidth + 12)}px)`;
  }

  prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarrusel();
    }
  });

  nextBtn.addEventListener('click', function() {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarrusel();
    }
  });

  // Inicializa posición
  updateCarrusel();
});
