console.log("Javascript is linked up");

// SLIDESHOW RULES

var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,10000);

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
    slideInterval = setInterval(nextSlide,10000);
}


// previous and next buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
    nextSlide();
};
previous.onclick = function(){
    previousSlide();
};