const elSiteHeader = document.querySelector('.site-header');
const elMenuOpenerButton = document.querySelector('.menu-opener__button');
if (elMenuOpenerButton) {
    elMenuOpenerButton.addEventListener('click', function () {
        elSiteHeader.classList.toggle('site-header__menu--open');
    });
};