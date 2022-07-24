let a, operator, b;
let toggle = false;
console.log(a, operator, b);

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
function addDigit(y, c) {
    return y + c;
};

const digitButton = document.querySelectorAll('.digitButton');
let displayString = document.querySelector('.displayString');
digitButton.forEach(digitButton => digitButton.addEventListener('click', () => {

    let y = displayString.textContent;

    if (y.length < 12) {
        if (toggle == false) {
            displayString.textContent = addDigit(displayString.textContent, digitButton.textContent);
            a = displayString.textContent;
        }
        if (toggle == true) {
            displayString.textContent = addDigit(displayString.textContent, digitButton.textContent);
            b = displayString.textContent;
        }
    }
    console.log(a, operator, b);

}));

const operateButton = document.querySelectorAll('.operateButton');
operateButton.forEach(operateButton => operateButton.addEventListener('click', () => {
    if (toggle == false) {
        operator = operateButton.textContent;
        displayString.textContent = '';
        toggle = true;
    }
    if (b != undefined) {
        let stirng = `${operate(+a, operator, +b)}`;
        a = stirng;
        b = undefined;
        operator = undefined;
        displayString.textContent = stirng.slice(0, 12);
    }
    console.log(a, operator, b);




    // if (b == undefined) {
    //     operator = operateButton.textContent;
    //     displayString.textContent = '';
    // }
    // if (b != undefined) {
    //     if (displayString.textContent.length < 12) {
    //         displayString.textContent = `${operate(+a, operator, +b)}`;
    //         a = displayString.textContent;
    //         b = undefined;
    //         operator = undefined;
    //     }
    //     // displayString.textContent = '';
    //     // operator = operateButton.textContent;
    //     console.log(a, operator, b);
    // }
    // if (a == undefined) {
    //     operator = undefined;
    // }
    // console.log(a, operator, b);
}));

// const equal = document.getElementById('equal');
// equal.addEventListener('click', () => {
//     if (operator == undefined) {
//         a == undefined;
//         b == undefined;
//         console.log(a, operator, b);
//     }
//     if (operator != undefined) {
//         displayString.textContent = `${operate(+a, operator, +b)}`;
//         a = displayString.textContent;
//         b = undefined;
//         operator = undefined;
//         console.log(a, operator, b);
//     }
// });