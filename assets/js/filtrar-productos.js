// filtrar-productos.js
// Filtrado de productos por botones

document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const products = document.querySelectorAll('.product-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Quitar clase activa de todos los botones
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filtro = this.getAttribute('data-filter');
      products.forEach(producto => {
        if (filtro === 'todos') {
          producto.style.display = '';
        } else if (filtro === 'tendencias') {
          producto.style.display = producto.querySelector('.trending-label') ? '' : 'none';
        } else if (filtro === 'descuentos') {
          producto.style.display = producto.querySelector('.discount-label') ? '' : 'none';
        } else if (filtro === 'recientes') {
          producto.style.display = producto.querySelector('.new-label') ? '' : 'none';
        }
      });
    });
  });
});
