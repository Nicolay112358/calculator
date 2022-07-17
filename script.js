let a = 0, b = 0;

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
        alert(`you can not divide by zero`);
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
function buttonClick() {
    let button = document.querySelectorAll('.button');
    button.forEach(button => button.addEventListener('click', () => {
        let display = document.querySelector('.display');
        let y = display.textContent;
        function addDigit(y, c) {
            return y + c;
        };
        a = display.textContent = addDigit(display.textContent, button.textContent);
        // a = display.textContent;
    }));
}
buttonClick();
