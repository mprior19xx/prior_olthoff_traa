(() => {
    // STICKY MENU RULES

    // Menu button variables
    var toTop = document.querySelector("#topBtn"),
        desktopToTop = document.querySelector("#desktopBackToTop");

    // Back to top function
    function backToTop(e) {
        e.preventDefault();
        TweenMax.to(window, 1, {scrollTo:0});
    }

    // Back to top on user click
    toTop.addEventListener("click", backToTop);
    desktopToTop.addEventListener("click", backToTop);
})();
