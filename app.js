const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const calculate = document.querySelector('.calculate');   
const plusButton = document.querySelector('.buttonPlus');
const equalsButton = document.querySelector('.buttonEquals');
const clearButton = document.querySelector('.buttonClear');
clearButton.addEventListener('click', clearAll);
calculator.addEventListener('click', displayMe);
plusButton.addEventListener('click', addMe);   
equalsButton.addEventListener('click', equalizeMe);
const allNum = [];
let firstNum = '';
let secondNum = '';
   
function displayMe(e) {
   display.textContent += parseInt(e.target.textContent);
   e.preventDefault();
}

function addMe(e) {
   firstNum = parseInt(display.textContent);
   display.textContent = '';
   
   e.preventDefault();
}

function getSum(total, sum) {
   return total + sum;
}

function equalizeMe(e) {
   secondNum = parseInt(display.textContent);
   display.textContent = firstNum + secondNum;
   e.preventDefault();
}

function clearAll() {
   display.textContent = '';
   firstNum = '';
   secondNum = '';
   allNum = [];
}
   
   


