const navItemsElement = document.querySelectorAll('.js-nav-item a');

navItemsElement.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('is-header__link--active');
  });
});
