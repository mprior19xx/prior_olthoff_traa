(() => {
    // STATISTICS RULES

    // Show statistics variable
    var statisticsButton = document.querySelector("#statisticsLink");
    var statistics = document.querySelector("#statistics");
    var expandTriangle = document.querySelector("#expandTriangle");

    // Toggle statistics function
    function displayStatistics() {
        console.log(statistics);
        statistics.classList.toggle("openStatistics");
        expandTriangle.classList.toggle("openStatistics");
    }

    //Toggle statistics event listener, listens for user click
    statisticsButton.addEventListener("click", displayStatistics);
})();