const output = document.querySelector(".output");
const buttons = document.querySelectorAll("button");

let var1;
let var2;
let num;
let result;

let lastOperate = "";
let swt = 0;

// 'C'
function clear() {
  output.innerText = "";
  var1 = null;
  var2 = null;
  lastOperate = "";
}

// '='
function conclude() {
  num = parseInt(output.innerText);

  if (var1 == null) {
    var1 = num;
    lastOperate = "";
  } else if (var1) {
    var2 = num;

    if (lastOperate === "+") {
      result = var1 + var2;
    } else if (lastOperate === "-") {
      result = var1 - var2;
    } else if (lastOperate === "*") {
      result = var1 * var2;
    } else if (lastOperate === "/") {
      result = var1 / var2;
    }

    output.innerText = result;
    var1 = result;
    var2 = null;

    lastOperate = "";
  }
}

// '+ - * /'
function makeExpression(operator) {
  num = parseInt(output.innerText);

  if (lastOperate === "") {
    var1 = num;
    lastOperate = operator;
  } else {
    var2 = num;

    if (lastOperate === "+") {
      result = var1 + var2;
    } else if (lastOperate === "-") {
      result = var1 - var2;
    } else if (lastOperate === "*") {
      result = var1 * var2;
    } else if (lastOperate === "/") {
      result = var1 / var2;
    }
    var1 = result;
    var2 = null;
    output.innerText = result;
    lastOperate = operator;
  }
}

function getNumber() {
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function () {
      const buttonValue = buttons[index].innerText;
      const operators = "+-*/";

      if (buttonValue === "C") {
        clear();
        swt = 1;
      } else if (operators.indexOf(buttonValue) !== -1) {
        makeExpression(buttonValue);
        swt = 1;
      } else if (buttonValue === "=") {
        conclude();
        swt = 1;
      } else {
        if (swt == 1) {
          output.innerText = "";
        }
        swt = 0;
        output.innerText += buttonValue;
      }
    });
  }
}

getNumber();
