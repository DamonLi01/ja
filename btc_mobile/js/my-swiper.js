var swiper = new Swiper('.swiper-container', {
    onSlideChangeStart: function () {
        $(".weui-navbar.wy-navbar .weui-bar__item--on").removeClass('weui-bar__item--on');
        $(".weui-navbar.wy-navbar a").eq(swiper.activeIndex).addClass('weui-bar__item--on');

    },
    autoHeight: true
});
$(".weui-navbar.wy-navbar a").on('touchstart mousedown', function (e) {
    e.preventDefault()
    $(".weui-navbar.wy-navbar .weui-bar__item--on").removeClass('weui-bar__item--on');
    $(this).addClass('weui-bar__item--on');
    swiper.slideTo($(this).index());


});
$(".weui-navbar.wy-navbar a").click(function (e) {
    e.preventDefault();
});
