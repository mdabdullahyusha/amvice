$(document).ready(function(){
    $('.nn').click(function(){
        $('.collapse_dropdown').toggle();
    });
    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop:0}, 500);
    });
    $(window).on('scroll', function(){
        var scroller = $(this).scrollTop();
        if (scroller > 400) {
            $('.back_to_top').show(500);
        } else {
            $('.back_to_top').hide(500);
        }
    });
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
  });