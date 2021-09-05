const cartDetail = document.getElementById('#tiger-pramn-salad');
const cartDetailPopup = document.getElementById('#tiger-pramn-salad__popup');
const cartDetailClose = cartDetailPopup.querySelector('.button-close');
const body = document.querySelector('body');

cartDetail.addEventListener('click', () => {
    cartDetailPopup.classList.add('open-card');
    body.style.overflow = 'hidden';
});
cartDetailClose.addEventListener('click', () => {
    cartDetailPopup.classList.remove('open-card');
});