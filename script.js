let firstNumber;
let secondNumber;
let operator;

const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
  "%": mod,
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Cannot divide by 0");
    return;
  }
  return a / b;
}

function mod(a, b) {
  return a % b;
}

function operate(operator, firstNumber, secondNumber) {
  return operations[operator](firstNumber, secondNumber);
}