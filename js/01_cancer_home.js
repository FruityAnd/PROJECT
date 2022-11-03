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

  // $(window).scroll(function () {
  //     var height = $(this).scrollTop();
  //     if (height >= $(".sec03").offset().top - $(window).height() / 2) {
  //         $(".sec03").addClass("show");
  //     }
  //     if (height >= $(".sec04").offset().top - $(window).height() / 2) {
  //         $(".sec04").addClass("show");
  //     }
  //   });

  // button: scrollTop (클릭 이벤트)
  $(".pageTop").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
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

  //모바일 header
  $(".more_bt").click(function () {
    
      $(".gnb").toggleClass("on");
      // 메뉴아이콘 사용했을 시 적용
      $(this).text(function (e, text) {
        return text === 'close' ? 'menu' : 'close'
      });
  });

  
  AOS.init();
});



