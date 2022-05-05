function reveal() {
    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 1500,
        delay: 200
    });

    ScrollReveal().reveal('.d2-top', { origin: 'top' });
    ScrollReveal().reveal('.d2-left', { origin: 'left' });
    ScrollReveal().reveal('.d2-top', { origin: 'top' });
    ScrollReveal().reveal('.d2-right', { delay: 300, origin: 'right' });
    ScrollReveal().reveal('.d3-bottom', { delay: 300, origin: 'bottom' });
    ScrollReveal().reveal('.d4-bottom', { delay: 400, origin: 'bottom' });
}