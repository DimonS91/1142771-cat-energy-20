var navMain = document.querySelector('.main-nav__wrapper');
    var navToggle = document.querySelector('.main-nav__toggle');

  navToggle.addEventListener('click', function() {

    if (navToggle.classList.contains('main-nav__toggle--close')) {
      navToggle.classList.remove('main-nav__toggle--close');
      navToggle.classList.add('main-nav__toggle--open');
    } else {
      navToggle.classList.add('main-nav__toggle--close');
      navToggle.classList.remove('main-nav__toggle--open');
    }

    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
