let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let signs = document.querySelector('#math-signs');
let equals = document.querySelector('#btn');
let output = document.querySelector('#answer');

function sum(num1, num2) {
    return num1 + num2;
}
function dif(num1, num2) {
    return num1 - num2;
}
function product(num1, num2) {
    return num1 * num2;
}
function quotient(num1, num2) {
    return num1 / num2;
}

equals.addEventListener('click', function () {
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    let operation = signs.value;
    console.log(num1);
    console.log(num2);
    console.log(operation);
    switch (operation) {
        case '+': output.value = sum(num1, num2);
            break;
    }
    switch (operation) {
        case '-': output.value = dif(num1, num2);
            break;
    }
    switch (operation) {
        case '*': output.value = product(num1, num2);
            break;
    }
    switch (operation) {
        case '/': output.value = quotient(num1, num2);
            break;
    }
});
