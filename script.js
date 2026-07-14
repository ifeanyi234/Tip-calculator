"use strict";
const billInput = document.querySelector("#bill");
const numPerson = document.querySelector("#person");
const tipInput = document.querySelector("#tip");
const presetBtn = document.querySelectorAll("button[type='button']");
const submit = document.querySelector("#submit");
const error = document.querySelector(".error");

const billValue = parseInt(billInput.value);
// looping through preset button
presetBtn.forEach((btn) =>
  // Adding click event on each btn
  btn.addEventListener("click", function (e) {
    // looping the original array to remove any previous active class
    presetBtn.forEach((b) => b.classList.remove("active"));
    // Adding active class to each element
    e.target.classList.add("active");
    // setting the value of tip to the preset
    tipInput.value = parseInt(e.target.dataset.value);
  }),
);

submit.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    billInput.value === "" ||
    numPerson.value === "" ||
    tipInput.value === ""
  ) {
    error.classList.add("active");
    error.innerHTML = "Fields are empty!";
    console.log(error);
  } else {
    error.classList.remove("active");
  }
});
