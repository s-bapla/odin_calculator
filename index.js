// comment

function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}

function divide(num1, num2) {
  return Number(num1) / Number(num2);
}

function operate(operator, first, last) {
  return operator(first, last);
}

const numberButtons = document.querySelectorAll("button.number");
const numberBtnsArr = Array.from(numberButtons);
let first, second, operator;
let flag = false;
const results = document.querySelector(".results");
const operatorBtns = document.querySelectorAll(".operator");
const operatorBtnsArr = Array.from(operatorBtns);

function getFirstNumber(e) {
  if (first === undefined) {
    first = e.target.textContent;
  } else {
    first += e.target.textContent;
  }
  results.textContent = first;
}

function getSecondNumber(e) {
  if (second === undefined || flag === true) {
    second = e.target.textContent;
  } else {
    second += e.target.textContent;
  }
  results.textContent = second;
}

function getNumber(e) {
  if (first === undefined) {
    getFirstNumber(e);
  } else {
    getSecondNumber(e);
  }
}

function chooseOperator(e) {
  if (e.target.textContent === "+") {
    operator = add;
  } else if (e.target.textContent === "-") {
    operator = subtract;
  } else if (e.target.textContent === "x") {
    operator = multiply;
  } else {
    operator = divide;
  }
  first = results.textContent;
}
for (let button of numberBtnsArr) {
  button.addEventListener("click", (e) => {
    getNumber(e);
  });
}

for (let button of operatorBtnsArr) {
  button.addEventListener("click", (e) => {
    if (second !== undefined && flag === false) {
      results.textContent = operate(operator, first, second);
      first = results.textContent;
      second = undefined;
      flag = false;
    }
    chooseOperator(e);
  });
}

const equals = document.querySelector(".equals");

equals.addEventListener("click", (e) => {
  if (second !== undefined) {
    results.textContent = operate(operator, first, second);
    first = results.textContent;
    flag = true;
  }
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  flag = false;
  first = undefined;
  second = undefined;
  results.textContent = "";
})