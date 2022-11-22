$(document).ready(function () {
    //대장암 예방법 'DREAM'
    //tabButton
    $(".tabM .tab-button").click(function () {
        var tabindex = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(".tabM .tabBox").eq(tabindex).addClass('on').siblings().removeClass('on');
    });
});