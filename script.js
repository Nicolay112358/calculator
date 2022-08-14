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
        case 'x':
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

    let y = displayString.textContent;

    if (y.length < 11) {
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
const equal = document.getElementById('equal');
equal.addEventListener('click', () => {
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
    console.log(a, operator, b);
});

// clear button
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    displayString.textContent = '';
    a = undefined;
    operator = undefined;
    b = undefined;
});

// backspace button
const backspace = document.getElementById('backspace');
backspace.addEventListener('click', () => {
    displayString.textContent = displayString.textContent.slice(0, displayString.textContent.length - 1);
    if (operator == undefined) {
        a = displayString.textContent;
    }
    if (operator != undefined) {
        b = displayString.textContent;
    }
    console.log(a, operator, b);
});

// dot button
const dot = document.getElementById('dot');
dot.addEventListener('click', () => {
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

});

// plus/minus button
const plusMinus = document.getElementById('plusMinus');
plusMinus.addEventListener('click', () => {
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
    console.log(a, operator, b);
});

// const brackets = document.getElementById('brackets');
// brackets.addEventListener('click', () => {
//     let openBrackets = '(';
//     let closeBrackets = ')'
//     function addBrackets() {
//         if (displayString.textContent.length < 16) {
//             if (a == undefined) {
//                 displayString.textContent = displayString.textContent + openBrackets;
//             }
//             if (a != undefined && displayString.textContent.includes('(')) {
//                 displayString.textContent = displayString.textContent + closeBrackets;
//             }
//         }
//     }
//     addBrackets();
// })
