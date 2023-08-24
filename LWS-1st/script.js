let number1 = 0;
let number2 = 0;
const button = document.querySelectorAll('.button');
const display = document.querySelectorAll('.display');
console.log(button);
button[0].addEventListener('click', () => {
    number1++;
    display[0].textContent = number1;
});
button[1].addEventListener('click', () => {
    number2++;
    display[1].textContent = number2;
});