"use strict";


// To make the header/navbar sticky via javascript

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 0);
});


