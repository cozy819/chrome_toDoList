const formRange = document.querySelector(".form-range");

const rangeInput = formRange.querySelector("input");
const spanRangeValue = formRange.querySelector("span");

const formNumber = document.querySelector(".form-number");
const numberInput = formNumber.querySelector("input");
const buttonPlay = formNumber.querySelector("button");

const resultDiv = document.querySelector(".result");
const firstDiv = resultDiv.querySelectorAll("div")[0];
const secondDiv = resultDiv.querySelectorAll("div")[1];

let maximum = 0;

function playGame(event) {
  event.preventDefault();
  const myScore = numberInput.value;
  const machineScore = Math.floor(Math.random() * maximum);

  let firstString = "You choose: ";
  firstString += myScore;
  firstString += " , the machine choose: ";
  firstString += machineScore;

  firstDiv.innerText = firstString;

  if (myScore > machineScore) {
    secondDiv.innerHTML = "<h4>You won!</h4>";
  } else if (myScore === machineScore) {
    secondDiv.innerHTML = "<h4>Draw</h4>";
  } else if (myScore < machineScore) {
    secondDiv.innerHTML = "<h4>You lost!</h4>";
  }
}

function setNumberMax(maxValue) {
  numberInput.setAttribute("max", maxValue);

  buttonPlay.addEventListener("click", playGame);
}

function handleRange() {
  const maxValue = rangeInput.value;
  maximum = maxValue;
  spanRangeValue.innerText = maxValue;
  setNumberMax(maxValue);
}

function init() {
  rangeInput.addEventListener("change", handleRange);
}

init();
