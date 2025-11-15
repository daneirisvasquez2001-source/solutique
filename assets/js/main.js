/* ===================== CARRUSEL (solo si existe) ===================== */
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

if (slides.length > 0 && dots.length > 0) {
  let current = 0;

  function showSlide(index) {
    if (index >= slides.length) current = 0;
    else if (index < 0) current = slides.length - 1;
    else current = index;

    document.querySelector('.slides').style.transform = `translateX(-${current * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[current].classList.add('active');
  }

  dots.forEach((dot, idx) => dot.addEventListener('click', () => showSlide(idx)));

  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => showSlide(current - 1));
    nextBtn.addEventListener('click', () => showSlide(current + 1));
  }

  const carrusel = document.querySelector('.carrusel');
  if (carrusel) {
    let autoSlide;
    function startCarousel() { autoSlide = setInterval(() => showSlide(current + 1), 5000); }
    function stopCarousel() { clearInterval(autoSlide); }
    carrusel.addEventListener('mouseenter', stopCarousel);
    carrusel.addEventListener('mouseleave', startCarousel);
    startCarousel();
  }
}



/* ===================== MENÚ RESPONSIVO ===================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Mostrar menú */
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* Ocultar menú */
if (navClose && navMenu) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* Cerrar menú al hacer clic en un enlace */
const navLinks = document.querySelectorAll('.nav--link');
if (navLinks) {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });
}



/* ===================== IMG GALLERY ===================== */
function imgGallery() {
  const mainIng = document.querySelector('.details--img');
  const smallImg = document.querySelectorAll('.details--small-img');

  if (mainIng && smallImg.length > 0) {
    smallImg.forEach((img) => {
      img.addEventListener('click', function () {
        mainIng.src = this.src;
      });
    });
  }
}
imgGallery();


/* ===================== SWIPER CATEGORIES ===================== */
if (document.querySelector(".categories--container")) {
  var swiperCategories = new Swiper(".categories--container", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1400: { slidesPerView: 6 },
      1200: { slidesPerView: 5 },
      992: { slidesPerView: 4 },
      768: { slidesPerView: 3 },
      350: { slidesPerView: 2 },
    }
  });
}


/* ===================== FILTROS ===================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-item');

function filterByCategoryKeywords() {
  if (products.length > 0) {
    const keywords = JSON.parse(localStorage.getItem('categoryFilter') || 'null');
    if (keywords && Array.isArray(keywords)) {
      products.forEach(product => {
        const name = product.querySelector('.product-name').textContent.toLowerCase();
        if (keywords.some(k => name.includes(k))) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
      localStorage.removeItem('categoryFilter');
    }
  }
}
window.addEventListener('DOMContentLoaded', filterByCategoryKeywords);


/* ===================== SWIPER PRODUCTS ===================== */
if (document.querySelector(".new--container")) {
  var swiperProducts = new Swiper(".new--container", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 24 },
      992: { slidesPerView: 3, spaceBetween: 24 },
      1400: { slidesPerView: 3, spaceBetween: 20 }
    }
  });
}

