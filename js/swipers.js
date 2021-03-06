//swiper-about

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

// swiper-interior

const swiperInterior = new Swiper(".mySwiper-interior", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
const swiper2Interior = new Swiper(".mySwiper2-interior", {
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    thumbs: {
        swiper: swiperInterior,
    },
});