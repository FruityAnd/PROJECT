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
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }
  });
});

const breakpoint = window.matchMedia('(min-width: 1200px)');
const breakpoint3 = window.matchMedia('(min-width: 760px)');

let mySwiper;
let mySwiper3;

//반응형 swiper(1): 1200px이상 스와이퍼 제거
const breakpointChecker = function () {
  if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      return;
  }
  else if (breakpoint.matches === false) {
      return useSwiper();
  }
};

const useSwiper = function () {
  mySwiper = new Swiper('.destorySwiper', {
      slidesPerView: 1, //모바일 기준
      spaceBetween: 35, //모바일 기준
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      breakpoints: {
          760: {
              slidesPerView: 2,
              spaceBetween: 40,
          }
      }
  });
};

//반응형 slide(3): 해상도 760px 이상 슬라이드 제거
const breakpointChecker3 = function () {
  if (breakpoint3.matches === true) {
      if (mySwiper3 !== undefined) mySwiper3.destroy(true, true);
      return;
  }
  else if (breakpoint3.matches === false) {
      return useSwiper3();
  }
};

const useSwiper3 = function () {
  mySwiper3 = new Swiper('.destorySwiper3', {
      slidesPerView: 1.3, //모바일 기준
      spaceBetween: 50,
      centeredSlides: true,
      loop: true,
      autoplay: {
          delay: 1200,
          disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      breakpoints: {
          400: {
              slidesPerView: 1.6,
              spaceBetween: 40,
          },
          550: {
              slidesPerView: 2,
              spaceBetween: 50,
          }
      }
  });
};

breakpoint.addEventListener('change', breakpointChecker);
breakpoint3.addEventListener('change', breakpointChecker3);

breakpointChecker();
breakpointChecker3();

//AOS 라이브러리
AOS.init();