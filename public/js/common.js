var swiper = new Swiper(".banner__swiper", {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
})

$(".header_menu").click(function () {
  $(this).toggleClass("active");
  $(".header__nav").toggleClass("active");
});