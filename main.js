const burgerMenu = document.querySelector('.header__image--burger');
const burgerIcon = document.querySelector('.header__image--burger img');
const mobileMenu = document.querySelector('.header__nav');
const productOption = document.getElementById('product');
const companyOption = document.getElementById('company');
const connectOption = document.getElementById('connect');

const showMenu = () => {
    mobileMenu.classList.toggle('show-menu');

    if(mobileMenu.classList.contains('show-menu')) {
        burgerIcon.src = "./images/icon-close.svg";
    } else {
        burgerIcon.src = "./images/icon-hamburger.svg";
    }
}

burgerMenu.addEventListener('click', showMenu)

productOption.addEventListener('click', () => {
    document.querySelector('.header__nav--product').classList.toggle('show-submenu');
    if(document.querySelector('.header__nav--product').classList.contains('show-submenu')) {
        document.getElementById('product-arrow').style.transform = "rotate(180deg)";
    } else {
        document.getElementById('product-arrow').style.transform = "rotate(0)"
    }
})

companyOption.addEventListener('click', () => {
    document.querySelector('.header__nav--company').classList.toggle('show-submenu');
    if(document.querySelector('.header__nav--company').classList.contains('show-submenu')) {
        document.getElementById('company-arrow').style.transform = "rotate(180deg)";
    } else {
        document.getElementById('company-arrow').style.transform = "rotate(0)"
    }
})

connectOption.addEventListener('click', () => {
    document.querySelector('.header__nav--connect').classList.toggle('show-submenu');
    if(document.querySelector('.header__nav--connect').classList.contains('show-submenu')) {
        document.getElementById('connect-arrow').style.transform = "rotate(180deg)";
    } else {
        document.getElementById('connect-arrow').style.transform = "rotate(0)"
    }
})


