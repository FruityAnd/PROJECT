$(document).ready(function(){
    $(window).scroll(function () {
        var height = $(this).scrollTop();
        if (height >= $(".sec03").offset().top - $(window).height() / 2) {
            $(".sec03").addClass("show");
        }
        if (height >= $(".sec04").offset().top - $(window).height() / 2) {
            $(".sec04").addClass("show");
        }
      });

    // button: scrollTop (클릭 이벤트)
    $(".pageTop").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

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



  