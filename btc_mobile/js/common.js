$(function () {
    FastClick.attach(document.body);
});

function top_nav(e, a, e2, a2) {
    $(e).click(function () {
        var that = $(this).index();
        $(this).addClass(a).siblings().removeClass(a);
        if (e2) {
            console.log(e2);
            $(e2).eq(that).addClass(a2).siblings().removeClass(a2);
        }

    })
}

function tabs(obj) {
    var that = $(obj).index();
    $(obj).addClass('weui-bar__item--on').siblings('.weui-navbar__item').removeClass('weui-bar__item--on');
    $(obj).parent().next('.weui-tab__bd').children('.weui-tab__bd-item').eq(that).addClass(
        'weui-tab__bd-item--active').siblings('.weui-tab__bd-item').removeClass('weui-tab__bd-item--active');
}
$('.back').click(function () {
    window.history.back();
});



