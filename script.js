var logo = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');

logo.addEventListener('click', () => {
    menu.classList.toggle('showmenu');
});