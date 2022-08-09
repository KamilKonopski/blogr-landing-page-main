const burgerMenu = document.querySelector('.header__image--burger');
const burgerIcon = document.querySelector('.header__image--burger img');
const mobileMenu = document.querySelector('.header__nav');



const showMenu = () => {
    mobileMenu.classList.toggle('show-menu');

    if(mobileMenu.classList.contains('show-menu')) {
        burgerIcon.src = "./images/icon-close.svg";
    } else {
        burgerIcon.src = "./images/icon-hamburger.svg";
    }
}

burgerMenu.addEventListener('click', showMenu)