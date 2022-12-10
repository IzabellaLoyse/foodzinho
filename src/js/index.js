function isActiveItem() {
  const navItemsElement = document.querySelectorAll('.js-nav-link');
  navItemsElement.forEach((item) => {
    item.classList.remove('is-header__link--active');
    item.removeAttribute('aria-current', 'page');

    this.classList.add('is-header__link--active');
    this.setAttribute('aria-current', 'page');
  });
}

const handleClickItemSelected = () => {
  const navItemsElement = document.querySelectorAll('.js-nav-link');
  navItemsElement.forEach((item) => {
    item.addEventListener('click', isActiveItem);
  });
};

const handleBackToTop = () => {
  const button = document.querySelector('.js-back-to-top');

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};

const buttonHamburger = document.querySelector('.js-button-hamburger');

const toggleMenuHamburger = () => {
  const navigation = document.querySelector('.js-navigation');

  navigation.classList.toggle('is-header__nav--active');
};

buttonHamburger.addEventListener('click', toggleMenuHamburger);

handleClickItemSelected();
handleBackToTop();
