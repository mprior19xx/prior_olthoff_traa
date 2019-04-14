(() => {
    // BACK TO TOP RULES

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



    // MOBILE MENU RULES
    var menu = document.querySelector("#mainNav"),
        line1 = document.querySelector("#line1"),
        line2 = document.querySelector("#line2"),
        line3 = document.querySelector("#line3"),
        menuButton = document.querySelector("#menuButton");

    // Toggle menu function
    function toggleMenu() {
        menu.classList.toggle("openMenu");
        line1.classList.toggle("openMenu");
        line2.classList.toggle("openMenu");
        line3.classList.toggle("openMenu");
    }

    // Toggle menu event listener, listens for user click
    menuButton.addEventListener("click", toggleMenu);
})();
