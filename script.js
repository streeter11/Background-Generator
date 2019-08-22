var css = document.querySelector("h3");
var	colorFirst = document.querySelector(".colorFirst");
var	colorSecond = document.querySelector(".colorSecond");
var body = document.getElementById("gradient");


function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ colorFirst.value 
		+ ", " 
		+ colorSecond.value 
		+ ")";

	css.textContent = body.style.background + ";";
}

colorFirst.addEventListener("input", setGradient);

colorSecond.addEventListener("input", setGradient);

css.textContent = "linear-gradient(to right, " 
		+ colorFirst.value 
		+ ", " 
		+ colorSecond.value 
		+ ")"; 
