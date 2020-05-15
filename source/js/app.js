'use strict';

var navMain = document.querySelector('.page-header__nav');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.add('page-header__nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-header__nav--closed')) {
    navMain.classList.remove('page-header__nav--closed');
    navMain.classList.add('page-header__nav--opened');
  } else {
    navMain.classList.add('page-header__nav--closed');
    navMain.classList.remove('page-header__nav--opened');
  }
});

// Валидация поля ввода телефона
var inputPhone = document.querySelector('input[type="tel"]');

inputPhone.onkeyup = function (evt) {
  var target = evt.target;
  target.value = this.value.replace(/[^\d]/g, '');
};
