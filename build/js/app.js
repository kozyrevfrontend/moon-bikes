'use strict';

// Меню-бургер
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


// Оптимизация вставки видео
function findVideo() {
  var video = document.querySelector('.video__container');

  setupVideo(video);
}

function setupVideo(video) {
  var link = document.querySelector('.video__link');
  var button = document.querySelector('.video__button');

  button.addEventListener('click', function () {
    var iframe = createIframe();
    var linkContainer = video.querySelector('.video__img-container');

    linkContainer.removeChild(link);
    video.removeChild(button);
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video__container--enabled');
}

function createIframe() {
  var iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/KkVG8nCbPvU?rel=0&showinfo=0&autoplay=1');
  iframe.classList.add('video__media');

  return iframe;
}

findVideo();
