let lastScrollY = 0; // Variable para almacenar la posición del scroll anterior
const header = document.querySelector('header'); // Selecciona el header

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY; // Obtén la posición actual del scroll

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll hacia abajo y supera los 50px
        header.classList.add('hidden');
    } else {
        // Scroll hacia arriba
        header.classList.remove('hidden');
    }

    // Si el scroll supera 100px, activa la clase 'scrolled'
    if (currentScrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY; // Actualiza la posición del scroll
});
