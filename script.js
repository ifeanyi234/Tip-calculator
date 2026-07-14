"use strict";
const billInput = document.querySelector("#bill");
const numPerson = document.querySelector("#person");
const tipInput = document.querySelector("#tip");
const presetBtn = document.querySelectorAll("button[type='button']");
const submit = document.querySelector("#submit");
const error = document.querySelector(".error");
let tip = 0;

// looping through preset button
presetBtn.forEach((btn) =>
  // Adding click event on each btn
  btn.addEventListener("click", function (e) {
    // looping the original array to remove any previous active class
    presetBtn.forEach((b) => b.classList.remove("active"));
    // Adding active class to each element
    e.target.classList.add("active");
    // setting the value of tip to the preset
    tip = parseInt(e.target.dataset.value);
    tipInput.value = tip;
  }),
);

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const billValue = parseInt(billInput.value);
  const personValue = parseInt(numPerson.value);
  console.log(billValue, personValue);

  if (
    billInput.value === "" ||
    numPerson.value === "" ||
    tipInput.value === ""
  ) {
    error.classList.add("active");
    error.innerHTML = "Fields are empty!";
  } else if (!tip || billValue <= 0 || personValue <= 0) {
    error.innerHTML = "Invalid number!, values should be higher than 0";
  } else {
    error.classList.remove("active");
  }
});
