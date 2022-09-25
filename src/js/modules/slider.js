const sliderMain = new Swiper('.slider_main', {
  mousewheel: true,
  slidesPerView: 2.2,
  spaceBetween: 12,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  }

});

export default sliderMain;