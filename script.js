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

function scrollToSection1 () {
 	var section = document.querySelector("#section1");
	section.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "nearest"
		});
};

function scrollToSection2 () {
 	var section = document.querySelector("#section2");
	section.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "nearest"
		});
};

function scrollToSection3 () {
 	var section = document.querySelector("#section3");
	section.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "nearest"
		});
};

function scrollToSection4 () {
 	var section = document.querySelector("#section4");
	section.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "nearest"
		});
};

// Required Event Listeners

window.addEventListener('load', resizeLandingLoad);

section1Button.addEventListener('click', scrollToSection1);
section2Button.addEventListener('click', scrollToSection2);
section3Button.addEventListener('click', scrollToSection3);
section4Button.addEventListener('click', scrollToSection4);