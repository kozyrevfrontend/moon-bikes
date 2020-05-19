'use strict';

// Меню-бургер
var navMain = document.querySelector('.page-header__nav');
var navToggle = document.querySelector('.button--toggle');
var siteList = document.querySelector('.site-list');

navMain.classList.add('page-header__nav--closed');
navToggle.classList.add('button--nav-closed');
siteList.classList.add('site-list--nav-closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-header__nav--closed')) {
    navMain.classList.remove('page-header__nav--closed');
    navMain.classList.add('page-header__nav--opened');
    navToggle.classList.remove('button--nav-closed');
    navToggle.classList.add('button--nav-opened');
    siteList.classList.remove('site-list--nav-closed');
  } else {
    navMain.classList.add('page-header__nav--closed');
    navMain.classList.remove('page-header__nav--opened');
    navToggle.classList.add('button--nav-closed');
    navToggle.classList.remove('button--nav-opened');
    siteList.classList.add('site-list--nav-closed');
  }
});


// Валидация поля ввода телефона
$('input[type="tel"]').on('keyup', function (evt) {
  var target = evt.target;
  target.value = this.value.replace(/[a-zA-Zа-яёА-ЯЁ]/g, '');
});


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

// Плавный скролл
var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  return false;
});
