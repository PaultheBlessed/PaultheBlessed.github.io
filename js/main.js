$(document).ready(function () {
const flowersSlider = new Swiper('.flowers-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 6,
  // Подключение стрелок
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 6,
    }
  }
});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 1,
  // Подключение стрелок
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://i.pinimg.com/736x/53/f6/4c/53f64cf33099c235f71d804f8663471f.jpg',
      opts : {
        caption : 'Прекрасный букет для Татьяны',
        thumb   : 'https://i.pinimg.com/736x/53/f6/4c/53f64cf33099c235f71d804f8663471f.jpg'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    },
  });



});
});