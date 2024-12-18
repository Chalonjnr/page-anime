// Seleccionar elementos del DOM
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Función para cerrar el menú
function closeMenu() {
    menu.classList.remove('open');
    hamburger.classList.remove('active');
}

// Evento para cerrar el menú al hacer clic fuera
document.addEventListener('click', (event) => {
    const isClickInside = menu.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInside) {
        closeMenu();
    }
});

// Evento para alternar el menú al hacer clic en el icono de hamburguesa
hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// Evento para cerrar el menú al hacer scroll vertical
window.addEventListener('scroll', () => {
    closeMenu();
});
