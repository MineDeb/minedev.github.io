const burger = document.querySelector('.header__button');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('visible');
});
