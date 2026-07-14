"use strict";
const billInput = document.querySelector("#bill");
const numPerson = document.querySelector("#person");
const tipInput = document.querySelector("#tip");
const presetBtn = document.querySelectorAll("button[type='button']");
const submit = document.querySelector("#submit");
const error = document.querySelector(".error");
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

// // calculate tip
// const calcTip = function (bill, tipPercent) {
//   return bill * (tipPercent / 100);
// };

// // calculate total
// const calcTotal = function (bill, tipPercent) {
//   return bill + calcTip(bill, tipPercent);
// };

// // Split that total by the number of people
// const calcPerPerson = function (bill, tipPercent, personCount) {
//   return calcTotal(bill, tipPercent) / personCount;
// };

// i was using pure functions for each calc (tip, total, perperson) but i felt like something was offf cause i was calling calctip in calctotal and calcTotal in calcperperson and if i had do call i need to pass parameters multiple times so gemini recommended i use object return method

const calculateResult = function (bill, tipPercent, personCount) {
  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  const perPerson = total / personCount;

  return {
    tip: tip,
    total: total,
    perPerson: perPerson,
  };
};

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const billValue = parseInt(billInput.value);
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

    console.log("Tip:", calcOutput.tip);
    console.log("Total:", calcOutput.total);
    console.log("Per Person:", calcOutput.perPerson);
  }
});
