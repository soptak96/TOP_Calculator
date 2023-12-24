function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if(b === 0) {
        alert("You can not divide by 0!")
        return null;
    }
    else return a/b;
}

let firstInput = "" ;
let operator = null;
let secondInput = "";
let resetDisplay = false;



function operate(operator,a,b) {
    a = Number(a);
    b = Number(b);

    if(operator === "+"){
       return add(a,b)
    }
    if(operator === "−"){
        return subtract(a,b)
    }
    if(operator === "×"){
        return multiply(a,b)
    }
    if(operator === "÷"){
        return divide(a,b)
    }
}

const numberKeys = document.querySelectorAll("[data-number]");
const operatorKeys = document.querySelectorAll("[data-operate")
const currentDisplay = document.querySelector("#typing-display");
const resultingDisplay = document.querySelector("#resulting-display");
const equalButton = document.querySelector("#equal");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const pointButton = document.querySelector("#decemal")

function displayNumber(number) {
    if(resetDisplay === true || currentDisplay.textContent === "0") 
        resetCurrentDisplay();
    currentDisplay.textContent += number;
    }

numberKeys.forEach(key => {
    key.addEventListener("click", () => {displayNumber(key.innerText)});
    })

operatorKeys.forEach(keys => {
    keys.addEventListener("click", () => setOperation(keys.innerText))
})

equalButton.addEventListener("click", calculate)

clearButton.addEventListener("click", clear)

deleteButton.addEventListener("click", deleteKey)

pointButton.addEventListener("click", decemal)

function setOperation(op) {
    if(operator !== null) calculate(); 
    firstInput = currentDisplay.textContent;
    operator = op;
    console.log(operator);
    resultingDisplay.textContent = `${firstInput} ${operator}`;
    resetDisplay = true;
}

function resetCurrentDisplay() {
    currentDisplay.textContent = "";
    resetDisplay = false;
}

function calculate() {
    if(operator === null || resetDisplay) return;
    secondInput = currentDisplay.textContent;
    resultingDisplay.textContent = `${firstInput} ${operator} ${secondInput} = `
    currentDisplay.textContent = operate(operator,firstInput, secondInput);
    operator = null;
}

function clear() {
    currentDisplay.textContent = "0";
    resultingDisplay.textContent = null;
    firstInput = "";
    secondInput = "";
    operator = null;
    resetDisplay = false;
}

function deleteKey() {
    currentDisplay.textContent = currentDisplay.textContent.slice(0,-1)
}

function decemal() {
    if(resetDisplay) resetCurrentDisplay();

    if(currentDisplay.textContent.includes(".")) return;
   
    if(currentDisplay.textContent === "")
        currentDisplay.textContent = "0";
     currentDisplay.textContent += ".";
   
}

window.addEventListener("keydown", (e) => {
    if(e.key >=0 || e.key <= 0) displayNumber(e.key);
    else if(e.key === ".") decemal();
    else if(e.key === "+") setOperation("+");
    else if(e.key === "-") setOperation("−");
    else if(e.key === "*") setOperation("×");
    else if(e.key === "/") setOperation("÷");
    else if(e.key === "=" || e.key === "Enter") calculate();
    else if(e.key === "Backspace") deleteKey();
    else if(e.key === "Escape") clear();    
})

