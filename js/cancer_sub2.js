$(document).ready(function () {
    //병기에 따른 대장암의 분류
    //tabButton
    $(".tabH .tab-button").click(function () {
        var tabindex = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(".tabH .tabBox").eq(tabindex).addClass('on').siblings().removeClass('on');
    });
});

//button: 더보기 / 접기
let moreButton = document.querySelector(".more-btn");

moreButton.addEventListener('click', function () {
    moreButton.parentNode.classList.toggle("active");
});

//반응형 slide(4): 해상도 760px 이상 슬라이드 제거
const breakpoint6 = window.matchMedia('(min-width: 760px)');
const breakpoint5 = window.matchMedia('(min-width: 760px)');

let mySwiper6;
let mySwiper5;

const breakpointChecker6 = function () {
    if (breakpoint6.matches === true) {
        if (mySwiper6 !== undefined) mySwiper6.destroy(true, true);
        return;
    }
    else if (breakpoint6.matches === false) {
        return useSwiper6();
    }
};

const useSwiper6 = function () {
    mySwiper6 = new Swiper('.destorySwiper6', {
        slidesPerView: 1.6, //모바일 기준
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        // autoplay: {
        //     delay: 1000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            350: {
                slidesPerView: 2.2,
                spaceBetween: 40,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
};

//반응형 slide(4): 해상도 760px 이상 슬라이드 제거
const breakpointChecker5 = function () {
    if (breakpoint5.matches === true) {
        if (mySwiper5 !== undefined) mySwiper5.destroy(true, true);
        return;
    }
    else if (breakpoint5.matches === false) {
        return useSwiper5();
    }
};

const useSwiper5 = function () {
    mySwiper5 = new Swiper('.destorySwiper5', {
        slidesPerView: 1.1, //모바일 기준
        spaceBetween: 25,
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
            400: {
                slidesPerView: 1.4,
                spaceBetween: 30,
            },
            500: {
                slidesPerView: 1.6,
                spaceBetween: 40,
            }
        }
    });
};

breakpoint6.addEventListener('change', breakpointChecker6);
breakpoint5.addEventListener('change', breakpointChecker5);
breakpointChecker6();
breakpointChecker5();