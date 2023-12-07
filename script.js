let input = document.querySelectorAll('#number');
let btn = document.querySelectorAll('#btn');
let output = document.querySelector('#answer');

let num1 = 0;
let num2 = 0;
btn.addEventListener('click', function () {
    num1 = Number(input.value);
    console.log(num1);
});
btn.addEventListener('click', function () {
    num2 = Number(input.value);
    console.log(num2);
});