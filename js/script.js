"use strict";


// To make the header/navbar sticky via javascript
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 0);
});


// get year for footer
let n =  new Date();
let yearr = n.getFullYear();
document.getElementById("year").innerHTML = yearr;