$.showLoading();
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        setTimeout(function () {
            $.hideLoading();
        }, 500);

    }
}