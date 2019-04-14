(() => {
    // STICKY MENU RULES

    // Menu button variables
    var menu = document.querySelector("#menu"),
        stickyNav = document.querySelector("#stickyNav"),
        line1 = document.querySelector("#line1"),
        line2 = document.querySelector("#line2"),
        line3 = document.querySelector("#line3"),
        menuButton = document.querySelector("#menuButton"),
        toTop = document.querySelector("#topBtn");

    // Toggle menu function
    function toggleMenu() {
        console.log(line1);
        console.log(line2);
        console.log(line3);
        console.log(menu);
        stickyNav.classList.toggle("openMenu")
        menu.classList.toggle("openMenu");
        line1.classList.toggle("openMenu");
        line2.classList.toggle("openMenu");
        line3.classList.toggle("openMenu");
    }

    // Back to top function
    function backToTop(e) {
        e.preventDefault();
        TweenLite.to(window, 1, {scrollTo:0});
    }

    // Toggle menu event listener, listens for user click
    // menuButton.addEventListener("click", toggleMenu);

    // Back to top on user click
    toTop.addEventListener("click", backToTop);
})();
