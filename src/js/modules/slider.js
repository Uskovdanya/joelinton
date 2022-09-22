const sliderMain = new Swiper('.slider_main', {
  mousewheel: true,
  slidesPerView: 2.5,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 2
    },
    680: {
      slidesPerView: 2.5,
      spaceBetween: 2

    }
  }
});

export default sliderMain;