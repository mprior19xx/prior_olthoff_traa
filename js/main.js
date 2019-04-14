(() => {
    // STICKY MENU RULES

    // Menu button variables
    var menu = document.querySelector("#menu");
    var stickyNav = document.querySelector("#stickyNav")
    var line1 = document.querySelector("#line1");
    var line2 = document.querySelector("#line2");
    var line3 = document.querySelector("#line3");
    var menuButton = document.querySelector("#menuButton");

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

    // Toggle menu event listener, listens for user click
    menuButton.addEventListener("click", toggleMenu);
})();
