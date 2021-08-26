const menu = document.querySelector('.menu__popup');
const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-active');
});

//swiper

const swiper = new Swiper(".mySwiper", {
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