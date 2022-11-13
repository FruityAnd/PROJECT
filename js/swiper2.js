function initSwiper( {
    promocard = new Swiper(".s_promoCard", {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    )
})


// initSwiper();