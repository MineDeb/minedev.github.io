const burger = document.querySelector('.header__button');
const menu = document.querySelector('.header__adaptive');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('red');
});