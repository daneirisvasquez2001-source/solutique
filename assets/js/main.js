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

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
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
  slidesPerView: 4,        // 🔹 Desktop
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

 breakpoints: {
    320: {  // 🔹 Celulares
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {  // 🔹 Tablets
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: { // 🔹 Desktop mediano
      slidesPerView: 3,
      spaceBetween: 20
    },
    1280: { // 🔹 Desktop grande
      slidesPerView: 4,
      spaceBetween: 25
    }
  }
});





/*=============== SWIPER PRODUCTS ===============*/

// Filtrado de productos
const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-item');

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

/*=============== PRODUCTS TABS ===============*/
