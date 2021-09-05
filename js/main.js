const menu = document.querySelector('.menu__popup');
const menuBtn = document.querySelector('.menu__btn');

const tab = document.querySelectorAll('.tab');

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