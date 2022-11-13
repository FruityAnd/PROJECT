(function () {

    //1200px부터 swiper 제거
    const breakpoint = window.matchMedia('(min-width: 1200px)');
    let mySwiper;

    const breakpointChecker = function () {
        if (breakpoint.matches === true) {
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            return;
        } 
        else if (breakpoint.matches === false) {
            return enableSwiper();
        }
    };

    // swiper slide 옵션
    const enableSwiper = function () {
        mySwiper = new Swiper('.s_promoCard', {
            slidesPerView: 1, //모바일 기준
            spaceBetween: 30, //모바일 기준
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                760: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
            }
        });
    };

    breakpoint.addEventListener('change', breakpointChecker);
    breakpointChecker();

})();