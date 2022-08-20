let a, operator, b;
console.log(a, operator, b);

// main function
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
    return a / b;
}

function operate(a, operator, b) {

    switch (operator) {
        case '/':
            return divide(a, b);
        case ('x' || '*'):
            return multiply(a, b);
        case '-':
            return subtract(a, b);
        case '+':
            return add(a, b);
    }
}

// digit buttons
function addDigit(y, c) {
    return y + c;
};
const digitButton = document.querySelectorAll('.digitButton');
let displayString = document.querySelector('.displayString');
digitButton.forEach(digitButton => digitButton.addEventListener('click', () => {
    if (displayString.textContent.length < 11) {
        if (operator == undefined) {
            displayString.textContent = addDigit(displayString.textContent, digitButton.textContent);
            a = displayString.textContent;
        }
        if (operator != undefined) {
            if (b == undefined) {
                displayString.textContent = '';
            }
            displayString.textContent = addDigit(displayString.textContent, digitButton.textContent);
            b = displayString.textContent;
        }
    }
    console.log(a, operator, b);
}));

// operations buttons
const operateButton = document.querySelectorAll('.operateButton');
operateButton.forEach(operateButton => operateButton.addEventListener('click', () => {

    if (operator == '/' && b == 0) {
        displayString.textContent = '';
        alert(`You can't divide by zero`);
        a = undefined;
        operator = undefined;
        b = undefined;
    }
    if (b == undefined) {
        operator = operateButton.textContent;
        displayString.textContent = '';
    }
    if (b != undefined) {

        let string = `${operate(+a, operator, +b)}`;

        if (displayString.textContent.length < 12) {
            (+string * 1000000000000000) / 1000000000000000;
            let h = string;
            displayString.textContent = h.slice(0, 11);
            a = displayString.textContent;
            b = undefined;
        }
        if (displayString.textContent.length > 12) {
            displayString.textContent = string.slice(0, 11);
            a = displayString.textContent;
            b = undefined;
        }
        operator = operateButton.textContent;
    }
    if (a == undefined || a == '') {
        operator = undefined;
    }
    console.log(a, operator, b);
}));

// equal button
function equalButton() {
    if (b == 0 && operator == '/') {
        displayString.textContent = '';
        alert('You can\'t divide by zero');
        a = undefined;
        operator = undefined;
        b = undefined;
    }
    if (operator == undefined) {
        a = undefined;
        b = undefined;
    }
    if (operator != undefined) {
        if (b != undefined) {
            let string = `${operate(+a, operator, +b)}`;
            (+string * 1000000000000000) / 1000000000000000;
            let h = string;
            displayString.textContent = h.slice(0, 11);
            a = displayString.textContent;
            b = undefined;
            operator = undefined;
            console.log(a, operator, b);
        }
    }
}
const equal = document.getElementById('equal');
equal.addEventListener('click', () => {
    equalButton();
    console.log(a, operator, b);
});

// clear button
function clearButton() {
    displayString.textContent = '';
    a = undefined;
    operator = undefined;
    b = undefined;
}
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    clearButton();
});

// backspace button
function backspaceButton() {
    displayString.textContent = displayString.textContent.slice(0, displayString.textContent.length - 1);
    if (operator == undefined) {
        a = displayString.textContent;
    }
    if (operator != undefined) {
        b = displayString.textContent;
    }
}
const backspace = document.getElementById('backspace');
backspace.addEventListener('click', () => {
    backspaceButton();
    console.log(a, operator, b);
});

// dot button
function dotButton() {
    if (displayString.textContent != '' && displayString.textContent.includes('.') != true) {
        displayString.textContent = displayString.textContent + dot.textContent;
        if (a != undefined && operator != undefined) {
            b = displayString.textContent;
            console.log(a, operator, b);
        }
    }
    if (displayString.textContent == '') {
        displayString.textContent = `0${dot.textContent}`;
        if (operator == undefined) {
            a = displayString.textContent;
        }
    }
}
const dot = document.getElementById('dot');
dot.addEventListener('click', () => {
    dotButton();
});

// plus / minus button
function plusMnusButton() {
    if (displayString.textContent != '' || displayString.textContent.includes('-') == true) {
        displayString.textContent = `-${displayString.textContent}`;
        if (operator == undefined) {
            a = displayString.textContent;
        }
        if (operator != undefined) {
            b = displayString.textContent;
        }
    }
    if (displayString.textContent.includes('--') == true) {
        displayString.textContent = displayString.textContent.slice(2, displayString.textContent.length);
        if (operator == undefined) {
            a = displayString.textContent;
        }
        if (operator != undefined) {
            b = displayString.textContent;
        }
    }
}
const plusMinus = document.getElementById('plusMinus');
plusMinus.addEventListener('click', () => {
    plusMnusButton();
    console.log(a, operator, b);
});

// keyboard support
window.onkeydown = function (e) {
    //  digital buttons keyboard support
    if ((e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode >= 48 && e.keyCode <= 57)) {
        if (displayString.textContent.length < 11) {
            displayString.textContent = displayString.textContent + e.key;
            if (operator == undefined) {
                a = +displayString.textContent;
            } else {
                b = +displayString.textContent;
            }
            console.log(a, operator, b);
        }
    }

    // operations buttons keyboard support 
    if (e.keyCode == 111 || e.keyCode == 106 || e.keyCode == 109 || e.keyCode == 107) {
        displayString.textContent = '';
        operator = e.key;
        if (operator == '/' && b == 0) {
            displayString.textContent = '';
            alert(`You can't divide by zero`);
            a = undefined;
            operator = undefined;
            b = undefined;
        }

        if (a == undefined || a == '') {
            operator = undefined;
        }
        console.log(operator);
    }

    // equal button keyboard support
    if (e.keyCode == 13) {
        equalButton();
    }

    // clear button keyboard support
    if (e.keyCode == 27) {
        clearButton();
    }

    // backspace button keyboard support
    if (e.keyCode == 8) {
        backspaceButton();
    }

    // dot button keyboard support
    if (e.keyCode == 110 || e.keyCode == 190) {
        dotButton();
    }

    // plus/minus button keyboard support 
    if (e.keyCode == 189) {
        plusMnusButton();
        console.log(a, operator, b);
    }
}
