document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY; // Última posición de scroll
    let isScrollingUp = false; // Determina si el scroll es hacia arriba

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Mostrar o esconder el header al hacer scroll
        if (currentScrollY > lastScrollY) {
            // Si el scroll va hacia abajo, oculta el header
            header.classList.add('hidden');
        } else {
            // Si el scroll va hacia arriba, muestra el header
            header.classList.remove('hidden');
        }

        // Cambiar el estilo del header cuando se hace scroll
        if (currentScrollY > 50) {
            header.classList.add('scrolled'); // Aplica el estilo "scrolled" al header
        } else {
            header.classList.remove('scrolled'); // Remueve el estilo cuando el scroll es pequeño
        }

        // Actualiza la última posición del scroll
        lastScrollY = currentScrollY;
    });
});
