const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const calculate = document.querySelector('.calculate');   
const plusButton = document.querySelector('.buttonPlus');
const minusButton = document.querySelector('.buttonMinus');
const equalsButton = document.querySelector('.buttonEquals');
const clearButton = document.querySelector('.buttonClear');
clearButton.addEventListener('click', clearAll);
calculator.addEventListener('click', displayMe);
plusButton.addEventListener('click', addMe);
minusButton.addEventListener('click', subtractMe)   
equalsButton.addEventListener('click', equalizeMe);
let myArr = [];
let firstNum = '';
let lastNum = '';

// EVENT LISTENER FUNCTIONS
// =================================================================================================================================
   
function displayMe(e) {
   display.textContent += parseInt(e.target.textContent);
   e.preventDefault();
}

function addMe(e) {
   firstNum = parseInt(display.textContent);
   myArr.push(firstNum);
   display.textContent = '';
   console.log(myArr);
   
   e.preventDefault();
}

function subtractMe(e) {
   firstNum = parseInt(display.textContent);
   myArr.push(firstNum);
   display.textContent = '';
   console.log(myArr);

   e.preventDefault();
}

// ARRAY FUNCTIONS AND MATH EQUALITY
// ===================================================================================================================================

function getSum(total, num) {
   return total + num;
}

function getSubT(total, num) {
   return total - num;
}

function equalizeMe(e) {
   if(display.textContent === Number) {
      lastNum = parseInt(display.textContent);
      myArr.push(lastNum);
   } else {

      if(addMe) {
      display.textContent = myArr.reduce(getSum);
      myArr = [];

   }  if(subtractMe) {
      console.log('its working');
      display.textContent = myArr[1] - myArr[2];
      myArr = [];
   } 
}
   

   e.preventDefault();
}

function clearAll() {
   display.textContent = '';
   firstNum = '';
   lastNum = '';
   myArr = [];
}
   
   


