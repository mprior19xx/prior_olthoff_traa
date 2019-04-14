(() => {
    // SLIDESHOW RULES

    // Slideshow variables
    var slideIndex = 0,
        prevArrow = document.querySelector(".prevSlide"),
        nextArrow = document.querySelector(".nextSlide"),
        slidePic = document.querySelector(".slideshowImg"),
        slideNum = document.querySelector(".slideNumber"),
        slideDesc = document.querySelector(".eventDesc"),
        pageSlide = document.querySelector(".slideshow");

    // Slices pageSlide to determine which slideshow to display
    pageSlide = pageSlide.id.slice(0, -9);

    // Slideshows and their contents
    const slideshows = [
        // Homepage slideshow
        [
            // Slide 1
            [`<img class="fade" src="images/events_pic1_trout_release.jpg" alt="Releasing Trout">`, `<p>1 of 2</p>`, `<p class="eventDescTitle">Rainbow Trout Release - June 21, 2014</p> <p>This spring's hatch of rainbow trout was incredibly successful with low mortality resulting in a phenomenal total of over 40,000 fry ready for release day on Saturday June 21, 2014.</p> <a class="seeMore" href="trout_release_june_21_2014.html">See more...</a>`],

            // Slide 2
            [`<img class="fade" src="images/events_pic2_barbecue.jpg" alt="Angling Sports Barbeque">`, `<p>2 of 2</p>`, `<p class="eventDescTitle">Angling Sports Barbecue - Saturday, May 7, 2016</p> <p>There was hotdogs, burgers and lots of fun going on at this informal get-together. Paul Noble put his barbequing skills to the test supplying a steady stream of hungry customers. <a class="seeMore" href="#eventsSection">See more...</a></p>`]
        ], // End Homepage slideshow

        // Trout Release slideshow
        [
            // Slide 1
            [`<img class="fade" src="images/events_pic1_trout_release.jpg" alt="Releasing Trout">`, `<p>1 of 2</p>`],

            // Slide 2
            [`<img class="fade" src="images/trout_release_fry.jpg" alt="Trout Fry">`, `<p>2 of 2</p>`]
        ]
    ];

    // Next/previous controls

    // Changes slideshow to previous slide
    function prevSlide() {
        showSlides(slideIndex -= 1)
    }

    // Changes slideshow to next slide
    function nextSlide() {
        showSlides(slideIndex += 1)
    }

    // Shows the current slide
    function showSlides(n) {
        // If on the last slide and clicking next, set slide to the first slide
        if (n > slideshows[pageSlide].length - 1) {slideIndex = 0;};

        // If on the first slide and clicking previous, set slide to the last slide
        if (n < 0) {slideIndex = slideshows[pageSlide].length - 1;};

        // Displays proper slide
        slidePic.innerHTML = slideshows[pageSlide][slideIndex][0];
        slideNum.innerHTML = slideshows[pageSlide][slideIndex][1];

        // Displays description if it is the homepage slideshow
        if (pageSlide == 0) {
            slideDesc.innerHTML = slideshows[pageSlide][slideIndex][2];
        };
    }

    //Call functions for displaying the slides
    showSlides(slideIndex);
    prevArrow.addEventListener("click", prevSlide);
    nextArrow.addEventListener("click", nextSlide);
})();