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

console.log(divide(3, 1));