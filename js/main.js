const menu = document.querySelector('.menu__popup');
const menuBtn = document.querySelector('.menu__btn');

const tab = document.querySelectorAll('.tab');

const foodMenu = document.querySelector('.food-menu');
const drinkMenu = document.querySelector('.drink-menu');
const filter1 = document.querySelector('.filter-1');
const filter2 = document.querySelector('.filter-2');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-active');
});

tab.forEach(item => {
    item.addEventListener('click', (e) => {
        event.preventDefault();
        tab.forEach(el => {
            el.classList.remove('tab--active');
        });
        item.classList.add('tab--active');
    });
});

filter1.addEventListener('click', function() {
    foodMenu.classList.add('menu--active');
    drinkMenu.classList.remove('menu--active');
});
filter2.addEventListener('click', function() {
    drinkMenu.classList.add('menu--active');
    foodMenu.classList.remove('menu--active');
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

//swiper-menu

const swiperMenu = new Swiper(".mySwiper-menu", {
    slidesPerView: 3.5,
    spaceBetween: 7,
    centeredSlides: false,
    breakpoints: {
        767: {
            slidesPerView: 5,
            spaceBetween: 10,
        }
    }
});