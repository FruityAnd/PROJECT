$(document).ready(function(){
    // slide 
    $(".sec01 .slickBanner").slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    });

    // button: scrollTop
    $(".pageTop").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
});