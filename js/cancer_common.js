//공통

//jquery
$(document).ready(function () {
    //(1) PC header click 이벤트
    var currentURL = window.location.pathname; // 현재 페이지 경로이름 반환 
    // console.log(currentURL); 
    $("header .gnb").find("a.c").each(function () {
        // header .gnb 안에 class="c"인 a태그를 찾고 each()함수를 통해 하나하나 순환
        $(this).toggleClass("on", $(this).attr("href") == currentURL);
    });

    //(2) 모바일 header
    $(".more_bt").click(function () {
        $(".gnb").toggleClass("on");
        // 메뉴아이콘 사용했을 시 적용
        $(this).text(function (e, text) {
            return text === 'close' ? 'menu' : 'close';
        });
    });

    //(3) tabButton: sub page
    $("ul.inner li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });

    //(4)button: scrollTop (클릭 이벤트)
    $(".pageTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
});

//javascript 바닐라
//(5)footer copyright 년도 갱신
window.onload = function () {
    const copyRight = document.querySelector(".copy-right");
    // console.log(copyRight);
    let date = new Date();
    let currentYear = date.getFullYear();
    copyRight.innerHTML = `All Right Researved <a href="https://giendo.or.kr/KSDE4.0/main/" target="_blank">대한위대장내시경학회</a> @${currentYear}`;
};



