$(document).ready(function () {
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