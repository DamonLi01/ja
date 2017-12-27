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



function copy(btn, copycontent) {
    var clipboard = new Clipboard('#' + btn, {
        target: function () {
            return document.querySelector('#' + copycontent);
        }
    });

    clipboard.on('success', function (e) {

        $.toptip('复制成功', 'success');
    });

    clipboard.on('error', function (e) {
        $.toptip('复制失败', 'error');

    });
}

// select
var val = $('#menu-list').children('li').eq(0).text();
var optype = false;
$(".wy-xiala").text(val);
$(".wy-xiala").click(function () {
    optype = true;
    $('#menu-list').show().children('li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var val1 = $(this).text();
        $(".wy-xiala").text(val1);
        $('#menu-list').hide();
        optype = false;
    });

    $('.weui-tab__bd').click(function () {
        if (optype === true) {
            $('#menu-list').hide();
            optype = false;
        }
    })


});

// select end