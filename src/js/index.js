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

const createStars = () => {
  const containerStars = document.querySelector('.js-stars');

  for (let i = 0; i < 5; i += 1) {
    containerStars.insertAdjacentHTML(
      'beforeend',
      `<img src="src/assets/icons/icon-star.svg" alt="Ícone de uma estrela amarela" class="c-star__icon" />
      `,
    );
  }
};

createStars();

const buttonHamburger = document.querySelector('.js-button-hamburger');

const toggleMenuHamburger = (event) => {
  const navigation = document.querySelector('.js-navigation');
  const navigationActive = navigation.classList.contains(
    'is-header__nav--active',
  );

  if (event.type === 'touchstart') event.preventDefault();

  navigation.classList.toggle('is-header__nav--active');
  event.currentTarget.setAttribute('aria-expanded', navigationActive);

  if (navigationActive) {
    event.currentTarget.setAttribute('aria-label', 'Abrir menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Fechar menu');
  }
};

buttonHamburger.addEventListener('click', toggleMenuHamburger);
buttonHamburger.addEventListener('touchstart', toggleMenuHamburger);

handleClickItemSelected();
handleBackToTop();
