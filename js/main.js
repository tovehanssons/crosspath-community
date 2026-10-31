
"use strict";

// Hämtar menyknappen och hamburgermenyn. 
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Lägger till en event listener som gör att man kan klicka på menyknappen.
menuBtn.addEventListener("click", function () {

    // Gör så att menyn öppnas och stängs när man klickar på knappen.
    menu.classList.toggle("open");
});