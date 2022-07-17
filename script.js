let a, b, operator;

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
        alert(`You can not divide by zero`);
    } else {
        return a / b;
    }
}

function operate(a, operator, b) {
    switch (operator) {
        case '/':
            return divide(a, b);
        case 'X':
            return multiply(a, b);
        case '-':
            return subtract(a, b);
        case '+':
            return add(a, b);
    }

}

const digitButton = document.querySelectorAll('.digitButton');
let displayString = document.querySelector('.displayString');
digitButton.forEach(digitButton => digitButton.addEventListener('click', () => {
    let y = displayString.textContent;
    function addDigit(y, c) {
        return y + c;
    };
    if (y.length < 12) {
        a = displayString.textContent = addDigit(displayString.textContent, digitButton.textContent);
    }
}));

const operateButton = document.querySelectorAll('.operateButton');
operateButton.forEach(operateButton => operateButton.addEventListener('click', () => {
    operator = operateButton.textContent;
    if (a != undefined) {
        digitButton.forEach(digitButton => digitButton.classList.add('digitButtonB'));
    }
}));

