"use strict";
const billInput = document.querySelector("#bill");
const numPerson = document.querySelector("#person");
const tipInput = document.querySelector("#tip");
const presetBtn = document.querySelectorAll("button[type='button']");
const submit = document.querySelector("#submit");
const error = document.querySelector(".error");
const output = document.querySelector(".output");
let tipPer = 0;

// looping through preset button
presetBtn.forEach((btn) =>
  // Adding click event on each btn
  btn.addEventListener("click", function (e) {
    // looping the original array to remove any previous active class
    presetBtn.forEach((b) => b.classList.remove("active"));
    // Adding active class to each element
    e.target.classList.add("active");
    // setting the value of tip to the preset
    tipPer = parseInt(e.target.dataset.value);
    tipInput.value = tipPer;
  }),
);

// i was using pure functions for each calc (tip, total, perperson) but i felt like something was offf cause i was calling calctip in calctotal and calcTotal in calcperperson and if i had do call i need to pass parameters multiple times so gemini recommended i use object return method

const calculateResult = function (bill, tipPercent, personCount) {
  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  const perPerson = total / personCount;

  return {
    tip: parseFloat(tip.toFixed(2)),
    total: parseFloat(total.toFixed(2)),
    perPerson: parseFloat(perPerson.toFixed(2)),
  };
};

const reset = function () {
  billInput.value = "";
  numPerson.value = "";
  tipInput.value = "";
  tipPer = 0;
  presetBtn.forEach((b) => b.classList.remove("active"));
};

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const billValue = parseFloat(billInput.value);
  const personValue = parseInt(numPerson.value);

  if (
    billInput.value === "" ||
    numPerson.value === "" ||
    tipInput.value === ""
  ) {
    error.classList.add("active");
    error.innerHTML = "Fields are empty!";
  } else if (!tipPer || billValue <= 0 || personValue <= 0) {
    error.classList.add("active");
    error.innerHTML = "Invalid number!, values should be higher than 0";
  } else {
    error.classList.remove("active");
    const calcOutput = calculateResult(billValue, tipPer, personValue);

    // Display
    output.style.display = "flex";
    output.innerHTML = `<div class="tip"><h2>Tip: ₦${calcOutput.tip}</h2><h2>Total: ₦${calcOutput.total}</h2><h2>Per Person: ₦${calcOutput.perPerson}</h2></div>`;

    // Reset
    reset();
  }
});
