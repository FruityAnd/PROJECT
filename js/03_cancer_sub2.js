$(document).ready(function () {
    //병기에 따른 대장암의 분류
    //tabButton
    $(".tabH .tabButton").click(function(){
        var tabindex = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(".tabH .tabBox").eq(tabindex).addClass('on').siblings().removeClass('on');
    });
});