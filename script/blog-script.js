window.addEventListener('load', function () {
    var targetImg = document.getElementsByClassName("blog-img");
    console.log(targetImg.length);
    for (var i = 0; i < targetImg.length; i++) {
        targetImg[i].style.width = getBlogImgWidth();
    }
});
var getBlogImgWidth = function () {
    var container = document.getElementById("blog-container");
    var container_style = window.getComputedStyle(container);
    return String(parseInt(container_style.width) / 4 * 3) + 'px';
};
