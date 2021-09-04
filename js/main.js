const menu = document.querySelector('.menu__popup');
const menuBtn = document.querySelector('.menu__btn');

const tab = document.querySelectorAll('.tab');

const cartDetail = document.getElementById('#tiger-pramn-salad');
const cartDetailPopup = document.getElementById('#tiger-pramn-salad__popup');
const cartDetailClose = cartDetailPopup.querySelector('.button-close');
const body = document.querySelector('body');

//burger
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-active');
});

//menu-main - tabs
tab.forEach(item => {
    item.addEventListener('click', (e) => {
        event.preventDefault();
        tab.forEach(el => {
            el.classList.remove('tab--active');
        });
        item.classList.add('tab--active');
    });
});

//food cart
cartDetail.addEventListener('click', () => {
    cartDetailPopup.classList.add('open-card');
    body.style.overflow = 'hidden';
});
cartDetailClose.addEventListener('click', () => {
    cartDetailPopup.classList.remove('open-card');
});