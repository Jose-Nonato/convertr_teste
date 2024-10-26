// Animação da classe top-header responsiva
$(document).ready(function() {
    function initializeSlick() {
        if ($(window).width() < 768) {
            if (!$('.top-header').hasClass('slick-initialized')) {
                $('.top-header').slick({
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                });
            }
        } else {
            if ($('.top-header').hasClass('slick-initialized')) {
                $('.top-header').slick('unslick');
            }
        }
    }

    initializeSlick();

    $(window).on('resize', function() {
        initializeSlick();
    });
});


// Responsividade sidebar
const menuButton = document.querySelector('.menu-button')
const sidebar = document.querySelector('.sidebar')

menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false
    menuButton.setAttribute('aria-expanded', !expanded)
    sidebar.classList.toggle('open')
})
document.addEventListener('click', (event) => {
    const isClickInside = sidebar.contains(event.target) || menuButton.contains(event.target)
    if (!isClickInside) {
        menuButton.setAttribute('aria-expanded', 'false')
        sidebar.classList.remove('open')
    }
})