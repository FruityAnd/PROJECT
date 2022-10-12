$(document).ready(function(){
    // slide 
    $(".sec01 .slickBanner").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    });

    // button: scrollTop
    $(".pageTop").click(function(){
        $("html, body").animate({
            scrollTop: 0
        },1000);
    });
});