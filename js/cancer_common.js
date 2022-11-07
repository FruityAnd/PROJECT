$(document).ready(function () {
// PC header click 이벤트
    var currentURL = window.location.pathname; // 현재 페이지 경로이름 반환 
    // console.log(currentURL); 

    $("header .gnb").find("a.c").each(function() {  
    // header .gnb 안에 class="c"인 a태그를 찾고 each()함수를 통해 하나하나 순환
        $(this).toggleClass("on", $(this).attr("href") == currentURL);
    });

// 모바일 header
    $(".more_bt").click(function () {
        $(".gnb").toggleClass("on");
        // 메뉴아이콘 사용했을 시 적용
        $(this).text(function (e, text) {
            return text === 'close' ? 'menu' : 'close';
        });
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
