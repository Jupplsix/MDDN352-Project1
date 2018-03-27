// Get Required Elements from HTML

var landing = document.querySelector("#landing");

var section1Button = document.querySelector("#buttonToSection1");
var section2Button = document.querySelector("#buttonToSection2");
var section3Button = document.querySelector("#buttonToSection3");
var section4Button = document.querySelector("#buttonToSection4");



// Resize Landing to Fit Screen

function resizeLandingLoad() {
	height = window.innerHeight;
	height = height + "px"
	landing.style.height = height;
}

// Scroll To Sections

function scrollToSection1 (x) {
 	var section = document.querySelector("#section" + x);
	section.scrollIntoView({
		behavior: "smooth",
		block: "center",
		inline: "nearest"
	});
};

// Required Event Listeners

window.addEventListener('load', resizeLandingLoad);

section1Button.addEventListener('click', function(){ scrollToSection1(1) });
section2Button.addEventListener('click', function(){ scrollToSection1(2) });
section3Button.addEventListener('click', function(){ scrollToSection1(3) });
section4Button.addEventListener('click', function(){ scrollToSection1(4) });