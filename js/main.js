(() => {
    // SLIDESHOW RULES

    // Slideshow variables
    var slideIndex = 1;
    var slides = document.getElementsByClassName("slides");
    var prevArrow = document.querySelector("#prevSlide");
    var nextArrow = document.querySelector("#nextSlide");

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
      var i;

        // If on the last slide and clicking next, set slide to the first slide
        if (n > slides.length) {slideIndex = 1} 

        // If on the first slide and clicking previous, set slide to the last slide
        if (n < 1) {slideIndex = slides.length}

        // Hides any showing slides
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
        }

        // Displays proper slide
        slides[slideIndex-1].style.display = "block"; 
    }

    //Call functions for displaying the slides
    showSlides(slideIndex);
    prevArrow.addEventListener("click", prevSlide);
    nextArrow.addEventListener("click", nextSlide);



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