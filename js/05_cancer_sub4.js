//반응형 slide: 해상도 760px 이상 슬라이드 제거
const breakpoint2 = window.matchMedia('(min-width: 760px)');
let mySwiper2;

const breakpointChecker2 = function () {
    if (breakpoint2.matches === true) {
        if (mySwiper2 !== undefined) mySwiper2.destroy(true, true);
        return;
    }
    else if (breakpoint2.matches === false) {
        return useSwiper2();
    }
};

// swiper slide 옵션
const useSwiper2 = function () {
    mySwiper2 = new Swiper('.destorySwiper2', {
        slidesPerView: 1.2, //모바일 기준
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            }
        },
        breakpoints: {
            350: {
                slidesPerView: 1.6,
                spaceBetween: 40,
            }
        }
    });
};
breakpoint2.addEventListener('change', breakpointChecker2);
breakpointChecker2();