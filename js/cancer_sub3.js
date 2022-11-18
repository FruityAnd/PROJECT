//반응형 slide(4): 해상도 760px 이상 슬라이드 제거
const breakpoint5 = window.matchMedia('(min-width: 760px)');
let mySwiper5;

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
                slidesPerView: 1.1,
                spaceBetween: 30,
            },
            485: {
                slidesPerView: 1.3,
                spaceBetween: 40,
            },
            590: {
                slidesPerView: 1.5,
                spaceBetween: 40,
            }
        }
    });
};

breakpoint5.addEventListener('change', breakpointChecker5);
breakpointChecker5();

//button: 더보기 / 접기
let moreButton = document.querySelector(".more-btn");

moreButton.addEventListener('click', function () {
    moreButton.parentNode.classList.toggle("active");
});