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
    return a/b;
}

let firstInput = "" ;
let operator;
let secondInput = "";



function operate() {
    if(operator === "+"){
       return add(firstInput,secondInput)
    }
    if(operator === "-"){
        return subtract(firstInput,secondInput)
    }
    if(operator === "*"){
        return multiply(firstInput,secondInput)
    }
    if(operator === "/"){
        return divide(firstInput,secondInput)
    }
}

const numberKeys = document.querySelectorAll("[data-number]")
const Display = document.querySelector("#typing-display");

function displayNumber() {
    firstInput += this.value;
    Display.textContent = firstInput;
}
numberKeys.forEach(button => {
    button.addEventListener("click", (e) => {
        firstInput += e.target.innerText;
        console.log(firstInput);
        if(Number(firstInput)){
            Display.textContent = firstInput;
        }
    });
    

})

