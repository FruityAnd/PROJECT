$(document).ready(function () {
  var swiper = new Swiper(".slideTest", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // tabButton: sub page
  $("ul.inner li").click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
  });

  // button: scrollTop (클릭 이벤트)
  $(".pageTop").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });
});