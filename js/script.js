const passwordField = document.querySelector('.js__password__field');
const lengthItem = document.querySelector('.js__length__item');
const lengthRange = document.querySelector('.js__length__range');
const number = document.querySelector('.js__number');
const symbol = document.querySelector('.js__symbols');
const btnGenerate = document.querySelector('.js__btn');

const charNumbers = '0123456789';
const charSymbols = '!@#$%^&&*()[]{}';

lengthRange.addEventListener('input', function() {
    lengthItem.value = lengthRange.value;
});
lengthItem.addEventListener('input', function() {
    lengthRange.value = lengthItem.value;
});

btnGenerate.addEventListener('click', generate);

function generate() {
    let password = '';
    let charLetters = 'ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstUwxyz';
    if(number.checked) {
        charLetters += charNumbers;
    }
    if(symbol.checked) {
        charLetters +=charSymbols;
    }
    for(let i = 0; i < lengthItem.value; i++) {
        password += charLetters[Math.floor(Math.random()*charLetters.length)];
    }
    passwordField.innerHTML = password;
}