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

    //모바일 header
    $(".more_bt").click(function () {

        $(".gnb").toggleClass("on");
        // 메뉴아이콘 사용했을 시 적용
        $(this).text(function (e, text) {
            return text === 'close' ? 'menu' : 'close'
        });
    });
});