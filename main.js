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
                })
            }
        } else {
            if ($('.top-header').hasClass('slick-initialized')) {
                $('.top-header').slick('unslick')
            }
        }
    }

    initializeSlick()

    $(window).on('resize', function() {
        initializeSlick()
    })
})


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


// Expansão dos cards
function toggleDropdown(contentId) {
    const content = document.getElementById(contentId)
    content.style.display = content.style.display === "block" ? "none" : "block"
}


// Carrosel Categoria
let currentIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const visibleSlides = 3;

    if (index >= totalSlides / visibleSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = Math.floor(totalSlides / visibleSlides) - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100 / visibleSlides;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Inicializa com o primeiro grupo de slides
showSlides(currentIndex);

// Avança automaticamente a cada 5 segundos
setInterval(() => {
    showSlides(currentIndex + 1);
}, 5000);
