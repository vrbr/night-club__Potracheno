const menu = document.querySelector('.menu__popup');
const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-active');
});

//swiper

const swiperAbout = new Swiper(".mySwiper-about", {
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//swiper-news

const swiperNews = new Swiper(".mySwiper-news", {
    slidesPerView: 3.5,
    spaceBetween: 7,
    centeredSlides: false,
    pagination: {
        el: ".swiper-pagination-news",
        clickable: true,
    },
    breakpoints: {
        320: {
            pagination: false,
        },
        767: {
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            pagination: true,
        }
    }
});