(() => {
    console.log("Javascript is linked up");

    // SLIDESHOW RULES

    var controls = document.querySelectorAll('.controls');
    for(var i=0; i<controls.length; i++){
        controls[i].style.display = 'inline-block';
    }

    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,4000);

    // next slide
    function nextSlide(){
        goToSlide(currentSlide+1);
    }

    // previous slide
    function previousSlide(){
        goToSlide(currentSlide-1);
    }

    // slide showing
    function goToSlide(n){
        slides[currentSlide].className = 'slide';
        currentSlide = (n+slides.length)%slides.length;
        slides[currentSlide].className = 'slide showing';
    }

    // auto play
    var playing = true;
    var pauseButton = document.getElementById('eventDesc');

    function pauseSlideshow(){
        playing = false;
        clearInterval(slideInterval);
    }

    function playSlideshow(){
        playing = true;
        slideInterval = setInterval(nextSlide,2000);
    }


    // previous and next buttons
    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    next.onclick = function(){
        nextSlide();
    };
    // previous.onclick = function(){
    //     previousSlide();
    // };



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




    // Show statistics variables
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