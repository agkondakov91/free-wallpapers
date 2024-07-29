new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Cursor
  grabCursor: true,
  // Mouse
  mousewheel: {
    sensitivity: 1,
  },
  // Autoplay
  // autoplay: {
  //   delay: 2000,
  // }
})