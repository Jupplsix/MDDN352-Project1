var landing = document.querySelector("#landing");

function resizeLanding() {
	var width = window.innerWidth;
	if(width >= 680) {
		var height = window.innerHeight;
		height = height + "px"
	}
}

function resizeLandingLoad() {
	height = window.innerHeight;
	height = height + "px"
	landing.style.height = height;
}

window.addEventListener('resize', resizeLanding); 
window.addEventListener('load', resizeLandingLoad);