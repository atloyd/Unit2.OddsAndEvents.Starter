// TODO: this file! :)

let numArr = [];
const odds = [];
const evens = [];

// Submit Form

const form = document.querySelector("form");
const bankOutput = document.querySelector("#bankOutput");

form.addEventListener("submit", addNum);

// Render

function render() {
  numArr.forEach((num) => {
    const span = document.createElement("span");
    span.textContent = num;
  });

  bankOutput.replaceChildren(...(numArr + ""));
  evenOutput.replaceChildren(...(evens + ""));
  oddsOutput.replaceChildren(...(odds + ""));
}

// Add a number

function addNum(event) {
  event.preventDefault();
  const newNum = event.target.number.value;
  numArr.push(newNum);
  render();
}

// Sort One Number

const sortOneNum = document.querySelector("#sortOne");
sortOneNum.addEventListener("click", sortOne);
const evenOutput = document.querySelector("#evenOutput");
const oddsOutput = document.querySelector("#oddsOutput");

function sortOne(event) {
  event.preventDefault();
  const shiftNum = numArr.shift();
  if (shiftNum === undefined) {
    return;
  } else if (shiftNum % 2 === 0) {
    evens.push(shiftNum);
    console.log(evens);
  } else {
    odds.push(shiftNum);
    console.log(odds);
  }
  render();
}

// Sort All Numbers

const numberBank = document.querySelector("#sortAll");
numberBank.addEventListener("click", sortAll);

function sortAll(event) {
  event.preventDefault();
  numArr.forEach((num) => {
    if (num === undefined) {
      return;
    } else if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  });
  numArr = [];
  //delete log lines
  console.log(evens);
  console.log(odds);
  render();
}
