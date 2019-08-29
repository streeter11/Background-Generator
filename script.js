const css = document.querySelector("h3");
const colorFirst = document.querySelector(".colorFirst");
const colorSecond = document.querySelector(".colorSecond");
const body = document.getElementById("gradient");


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
