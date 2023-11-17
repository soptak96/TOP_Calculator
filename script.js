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

let firstInput = 10;
let operator = "/" ;
let secondInput = 2;

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