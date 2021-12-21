var css = document.querySelector("h3");
var color1 = document.querySelector(".colour1");
var color2 = document.querySelector(".colour2");
var body = document.getElementById("bodyy");

function f() {
    body.style.background = "linear-gradient(90deg," + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}
color1.addEventListener("input", f);
color2.addEventListener("input", f);