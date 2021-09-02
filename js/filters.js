const foodMenu = document.querySelector('.food-menu');
const drinkMenu = document.querySelector('.drink-menu');
const filter1 = document.querySelector('.filter-1');
const filter2 = document.querySelector('.filter-2');

filter1.addEventListener('click', function() {
    foodMenu.classList.add('menu--active');
    drinkMenu.classList.remove('menu--active');
});
filter2.addEventListener('click', function() {
    drinkMenu.classList.add('menu--active');
    foodMenu.classList.remove('menu--active');
});