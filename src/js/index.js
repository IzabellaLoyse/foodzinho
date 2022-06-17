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

handleClickItemSelected();
