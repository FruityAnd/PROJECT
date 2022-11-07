$(document).ready(function () {
  // swiper: slide Banner
  var swiper = new Swiper(".slideBanner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 대장암 홍보자료 - swiper: 1200px 이하 해상도에만 적용
  var swiper = new Swiper(".s_promoCard", {
    slidesPerView: 1, //모바일 기준
    spaceBetween: 30, //모바일 기준
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      760: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }
  });

  AOS.init();
});



