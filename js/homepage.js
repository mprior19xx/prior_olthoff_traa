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
})();