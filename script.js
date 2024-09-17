const numberButtons = document.querySelectorAll(".number-button");
const operationButtons = document.querySelectorAll(".operation-button");
const inputDisplay = document.querySelector(".input");
const lastInputDisplay = document.querySelector(".last-input");
const equalButton = document.querySelector(".equal-button");
const clearButton = document.querySelector(".ac-button");
const deleteButton = document.querySelector(".delete-button");

let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let shouldResetInput = false;

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => b !== 0 ? a / b : alert("Cannot divide by 0"),
  "%": (a, b) => a % b,
};

numberButtons.forEach(button => {
  button.addEventListener("click", () => appendNumber(button.value));
});

operationButtons.forEach(button => {
  button.addEventListener("click", () => setOperation(button.value));
});

equalButton.addEventListener("click", calculateResult);

clearButton.addEventListener("click", clearCalculator);

deleteButton.addEventListener("click", deleteLastInput);

function appendNumber(number) {
  if (inputDisplay.textContent === "0" || shouldResetInput) {
    resetInput();
  }
  inputDisplay.textContent += number;
}

function setOperation(operator) {
  if (currentOperator !== null) {
    calculateResult();
  }
  
  firstNumber = Number(inputDisplay.textContent);
  currentOperator = operator;
  lastInputDisplay.textContent = `${firstNumber} ${currentOperator}`;
  shouldResetInput = true;
}

function calculateResult() {
  if (currentOperator === null || shouldResetInput) {
    return;
  }
  
  secondNumber = Number(inputDisplay.textContent);
  const result = operations[currentOperator](firstNumber, secondNumber);
  
  if (result !== undefined) {
    inputDisplay.textContent = result;
    lastInputDisplay.textContent = `${firstNumber} ${currentOperator} ${secondNumber} = ${result}`;
    firstNumber = result;
    currentOperator = null;
  }
}

function clearCalculator() {
  inputDisplay.textContent = "";
  lastInputDisplay.textContent = "";
  firstNumber = null;
  secondNumber = null;
  currentOperator = null;
}

function deleteLastInput() {
  inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
  if (inputDisplay.textContent === "") {
    inputDisplay.textContent = "0";
  }
}

function resetInput() {
  inputDisplay.textContent = "";
  shouldResetInput = false;
}