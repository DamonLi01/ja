$.showLoading();
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        $.hideLoading();
    }
}