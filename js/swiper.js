// js/swiper-init.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.js-featured-swiper').forEach((el) => {
        new Swiper(el, {
            // Mobile defaults
            enabled: true,
            slidesPerView: 1,
            spaceBetween: 16,
            loop: false,
            autoHeight: true,
            keyboard: { enabled: true },
            grabCursor: true,
            pagination: {
                el: el.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: el.querySelector('.swiper-button-next'),
                prevEl: el.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                500: {
                    slidesPerView: 1.5,
                },
                768: {
                    slidesPerView: 2,
                },
                1280: {
                    enabled: false,
                },
            },
        });
    });
});
