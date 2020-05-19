'use strict';

// Меню-бургер
var navMain = $('.page-header__nav').addClass('page-header__nav--closed');
var siteList = $('.site-list').addClass('site-list--nav-closed');
var navToggle = $('.button--toggle').addClass('button--nav-closed').on('click', function () {
  if (navMain.hasClass('page-header__nav--closed')) {
    navMain.removeClass('page-header__nav--closed').addClass('page-header__nav--opened');
    navToggle.removeClass('button--nav-closed').addClass('button--nav-opened');
    siteList.removeClass('site-list--nav-closed');
  } else {
    navMain.addClass('page-header__nav--closed').removeClass('page-header__nav--opened');
    navToggle.addClass('button--nav-closed').removeClass('button--nav-opened');
    siteList.addClass('site-list--nav-closed');
  }
});


// Валидация поля ввода телефона
$('input[type="tel"]').on('keyup', function (evt) {
  var target = evt.target;
  target.value = this.value.replace(/[a-zA-Zа-яёА-ЯЁ]/g, '');
});


// Оптимизация вставки видео
function findVideo() {
  var video = $('.video__container');

  setupVideo(video);
}

function setupVideo(video) {
  var link = $('.video__link').removeAttr('href');
  var button = $('.video__button').on('click', function () {
    var iframe = createIframe();
    video.find('.video__img-container').remove(link);
    // var linkContainer = video.querySelector('.video__img-container');

    // linkContainer.removeChild(link);
    video.remove(button).append(iframe);
    // video.appendChild(iframe);
  });

  // link.removeAttr('href');
  video.addClass('video__container--enabled');
}

function createIframe() {
  var iframe = $('<iframe>', {
    src: 'https://www.youtube.com/embed/KkVG8nCbPvU?rel=0&showinfo=0&autoplay=1',
    allowfullscreen: ''
  });
  iframe.addClass('video__media');
  // var iframe = document.createElement('iframe');

  // iframe.setAttribute('allowfullscreen', '');
  // iframe.setAttribute('src', 'https://www.youtube.com/embed/KkVG8nCbPvU?rel=0&showinfo=0&autoplay=1');
  // iframe.classList.add('video__media');

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
