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

});

//(5)해상도 size에 따른 반응형 swiper: 1200px부터 swiper 제거
const breakpoint = window.matchMedia('(min-width: 1200px)');
let mySwiper;

const breakpointChecker = function () {
    if (breakpoint.matches === true) {
        if (mySwiper !== undefined) mySwiper.destroy(true, true);
        return;
    }
    else if (breakpoint.matches === false) {
        return useSwiper();
    }
};
// swiper slide 옵션
const useSwiper = function () {
    mySwiper = new Swiper('.destorySwiper', {
        slidesPerView: 1, //모바일 기준
        spaceBetween: 30, //모바일 기준
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
                spaceBetween: 25,
            }
        }
    });
};

breakpoint.addEventListener('change', breakpointChecker);
breakpointChecker();

//AOS 라이브러리
AOS.init();