const breakpoint2 = window.matchMedia('(min-width: 1200px)');
const breakpoint4 = window.matchMedia('(min-width: 760px)');

let mySwiper2;
let mySwiper4;

//반응형 swiper(2): 1200px이상 스와이퍼 제거
const breakpointChecker2 = function () {
    if (breakpoint2.matches === true) {
        if (mySwiper2 !== undefined) mySwiper2.destroy(true, true);
        return;
    }
    else if (breakpoint2.matches === false) {
        return useSwiper2();
    }
};

const useSwiper2 = function () {
    mySwiper2 = new Swiper('.destorySwiper2', {
        slidesPerView: 1, //모바일 기준
        spaceBetween: 35, //모바일 기준
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            }
        },
        breakpoints: {
            400: {
                slidesPerView: 1.1,
                spaceBetween: 60,
                centeredSlides: true
            },
            500: {
                slidesPerView: 1.5,
                spaceBetween: 40,
                centeredSlides: false
            },
            650: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false
            }
        }
    });
};

//반응형 slide(4): 해상도 760px 이상 슬라이드 제거
const breakpointChecker4 = function () {
    if (breakpoint4.matches === true) {
        if (mySwiper4 !== undefined) mySwiper4.destroy(true, true);
        return;
    }
    else if (breakpoint4.matches === false) {
        return useSwiper4();
    }
};

const useSwiper4 = function () {
    mySwiper4 = new Swiper('.destorySwiper4', {
        slidesPerView: 1.2, //모바일 기준
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            }
        },
        breakpoints: {
            400: {
                slidesPerView: 1.6,
                spaceBetween: 50,
            },
            550: {
                slidesPerView: 1.4,
                spaceBetween: 70,
            }
        }
    });
};

breakpoint2.addEventListener('change', breakpointChecker2);
breakpoint4.addEventListener('change', breakpointChecker4);

breakpointChecker2();
breakpointChecker4();