"use strict";
const billInput = document.querySelector("#bill");
const presetInput = document.querySelector("#tip-presets");
const presetBtn = document.querySelectorAll("button[type='button']");

// looping through preset button
presetBtn.forEach((btn) =>
  // Adding click event on each btn
  btn.addEventListener("click", function (e) {
    // looping the original array to remove any previous active class
    presetBtn.forEach((b) => b.classList.remove("active"));
    // Adding active class to each element
    e.target.classList.add("active");
    console.log(e.target.dataset);
  }),
);
