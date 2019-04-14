(() => {
    // STATISTICS RULES

    // Show statistics variables
    var statisticsButton = document.querySelector("#statisticsLink"),
        statistics = document.querySelector("#statistics"),
        expandTriangle = document.querySelector("#expandTriangle");

    // Toggle statistics function
    function displayStatistics() {
        statistics.classList.toggle("openStatistics");
        expandTriangle.classList.toggle("openStatistics");
    }

    //Toggle statistics event listener, listens for user click
    statisticsButton.addEventListener("click", displayStatistics);



    // MEMBERSHIP POPUP RULES

    // Membership popup variables
    var membershipButton = document.querySelector("#memberJoin"),
        xButton = document.querySelector("#xButton"),
        membershipPopup = document.querySelector("#membershipPopup");

    //Toggle membership popup function
    function displayPopup() {
        membershipPopup.classList.toggle("openPopup");
    }

    //Toggle membership popup event listeners, listens for user click
    membershipButton.addEventListener("click", displayPopup);
    xButton.addEventListener("click", displayPopup);



    // PAGE TRAVERSAL RULES
    let links = document.querySelectorAll("#mainNav a"),
        menu = document.querySelector("#mainNav"),
        line1 = document.querySelector("#line1"),
        line2 = document.querySelector("#line2"),
        line3 = document.querySelector("#line3"),
        targetArea;

    // Toggle menu function
    function toggleMenu() {
        menu.classList.toggle("openMenu");
        line1.classList.toggle("openMenu");
        line2.classList.toggle("openMenu");
        line3.classList.toggle("openMenu");
    }

    // Scroll to function
    function scrollLink(e) {
        // Closes menu
        if (menu.classList.contains("openMenu")) {
            toggleMenu();
        };

        // Scrolls to proper part of page
        e.preventDefault();
        targetArea = e.currentTarget.id.slice(0,-3);
        TweenMax.to(window, 1, {scrollTo:{y:`#${targetArea}Section`, offsetY: 60, autoKill:false}});
    }

    // Adds event listeners to each menu button
    for (var i=0; i < links.length; i++) {
        links[i].addEventListener("click", scrollLink);
    }
})();