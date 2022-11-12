// 대장암 홍보자료 - swiper: 1200px 이하 해상도에만 적용
var ww = $(window).width(); //window width값 구함
var promoCard = undefined;
//호출되지 않은 swiper type = "undefinde"
//호출된 swiper type= "object"

function initSwiper() {

    if (ww < 1200 && promoCard == undefined) {
        //해상도 1200px 미만(0 ~ 1199px) swiper 호출
        promoCard = new Swiper(".s_promoCard", {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        }
        );
    } else if (ww >= 1200 && promoCard != undefined) {
        //해상도 1200px 이상 swiper 제거 
        promoCard.destory(); //swiper 제거 메서드
        promoCard = undefined;
    }
}

initSwiper();

// //실시간 window width값 구함
// $(window).on('resize', function () {
//     ww = $(window).width();
//     initSwiper();
// });