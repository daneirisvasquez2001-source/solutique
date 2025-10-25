const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
  if(index >= slides.length) current = 0;
  else if(index < 0) current = slides.length - 1;
  else current = index;

  document.querySelector('.slides').style.transform = `translateX(-${current*100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');
}

// Dots click
dots.forEach((dot, idx) => dot.addEventListener('click', () => showSlide(idx)));

// Botones prev/next
document.querySelector('.prev').addEventListener('click', () => showSlide(current-1));
document.querySelector('.next').addEventListener('click', () => showSlide(current+1));

// Auto-slide
let autoSlide;
function startCarousel() { autoSlide = setInterval(() => showSlide(current+1), 5000); }
function stopCarousel() { clearInterval(autoSlide); }

const carrusel = document.querySelector('.carrusel');
carrusel.addEventListener('mouseenter', stopCarousel);
carrusel.addEventListener('mouseleave', startCarousel);

startCarousel();

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Hide Show =====*/
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
    const maxIndex = document.querySelector('.details--img');
    smallImg = document.querySelectorAll('.details--small-img');

    smallImg.forEach((img) => {
        img.addEventListener('click', function () {
            mainIng.src = this.src;
        });
    });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/

var swiperCategories = new Swiper(".categories--container", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: false, // 👈 evita saltos
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
  },
  observer: true,          // 👈 reacciona a cambios del DOM
  observeParents: true,    // 👈 recalcula si cambia el ancho del padre
  watchOverflow: true,
  initialSlide: 0,         // 👈 asegura empezar desde la primera tarjeta
});






/*=============== SWIPER PRODUCTS ===============*/

// Filtrado de productos
const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-item');

// Filtro por categoría desde index.html
function filterByCategoryKeywords() {
  const keywords = JSON.parse(localStorage.getItem('categoryFilter') || 'null');
  if(keywords && Array.isArray(keywords)) {
    products.forEach(product => {
      const name = product.querySelector('.product-name').textContent.toLowerCase();
      if(keywords.some(k => name.includes(k))) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
    // Limpiar filtro para futuras visitas
    localStorage.removeItem('categoryFilter');
  }
}
window.addEventListener('DOMContentLoaded', filterByCategoryKeywords);

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Quitar active de todos los botones
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    products.forEach(product => {
      if(filter === 'all') {
        product.style.display = 'block';
      } else {
        if(product.classList.contains(filter)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      }
    });
  });
});

var swiperProducts = new Swiper(".new--container", {
  slidesPerView: 4,        // 🔹 Desktop
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

 breakpoints: {
    768: {  // 🔹 Celulares
      slidesPerView: 2,
      spaceBetween: 24
    },
    992: {  // 🔹 Tablets
      slidesPerView: 3,
      spaceBetween: 24
    },
    1400: { // 🔹 Desktop mediano
      slidesPerView: 3,
      spaceBetween: 20
    },
    
  }
});

/*=============== PRODUCTS TABS ===============*/

