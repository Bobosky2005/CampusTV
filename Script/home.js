// Navigation Bar Transition

var lastScrollTop = 0;

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    var CurrentScrollTop = document.documentElement.scrollTop;
    if (CurrentScrollTop < 490 || CurrentScrollTop < lastScrollTop) {
        document.getElementById('navbar').style.opacity = "100%";
    } else if (CurrentScrollTop > 490 && CurrentScrollTop > lastScrollTop) {
        document.getElementById('navbar').style.opacity = "0%";
    }

    lastScrollTop = document.documentElement.scrollTop;
}