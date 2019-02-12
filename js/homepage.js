(() => {
    // STATISTICS RULES

    // Show statistics variables
    var statisticsButton = document.querySelector("#statisticsLink");
    var statistics = document.querySelector("#statistics");
    var expandTriangle = document.querySelector("#expandTriangle");

    // Toggle statistics function
    function displayStatistics() {
        statistics.classList.toggle("openStatistics");
        expandTriangle.classList.toggle("openStatistics");
    }

    //Toggle statistics event listener, listens for user click
    statisticsButton.addEventListener("click", displayStatistics);



    // MEMBERSHIP POPUP RULES

    // Membership popup variables
    var membershipButton = document.querySelector("#memberJoin");
    var xButton = document.querySelector("#xButton");
    var membershipPopup = document.querySelector("#membershipPopup");

    //Toggle membership popup function
    function displayPopup() {
        membershipPopup.classList.toggle("openPopup");
    }

    //Toggle membership popup event listeners, listens for user click
    membershipButton.addEventListener("click", displayPopup);
    xButton.addEventListener("click", displayPopup);
})();