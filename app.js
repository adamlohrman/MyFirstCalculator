const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const calculate = document.querySelector('.calculate');   
const plusButton = document.querySelector('.buttonPlus');
const minusButton = document.querySelector('.buttonMinus');
const multiplyButton = document.querySelector('.buttonMultiply');
const divideButton = document.querySelector('.buttonDivide');
const equalsButton = document.querySelector('.buttonEquals');
const clearButton = document.querySelector('.buttonClear');
const periodButton = document.querySelector('.buttonDot');
const squareRoot = document.querySelector('.buttonSquareRoot');

clearButton.addEventListener('click', clearAll);
calculator.addEventListener('click', displayMe);
plusButton.addEventListener('click', addMe);
minusButton.addEventListener('click', subtractMe);
multiplyButton.addEventListener('click', multiplyMe);
divideButton.addEventListener('click', divideMe);
squareRoot.addEventListener('click', squareMe);
periodButton.addEventListener('click', displayDot);
equalsButton.addEventListener('click', equalizeMe);
let myArr = [];
let firstNum = '';
let lastNum = '';
let addition = false;
let minus = false;
let multiply = false;
let divide = false;

// EVENT LISTENER FUNCTIONS
// =================================================================================================================================
function displayDot(e) {
   display.textContent += e.target.textContent;
   e.preventDefault();
}

function displayMe(e) {
   display.textContent += Number(e.target.textContent);
   e.preventDefault();
}

function addMe(e) {
   firstNum = Number(display.textContent);
   myArr.push(firstNum);
   display.textContent = '';
   addition = true;
   minus = false;
   multiply = false;
   divide = false;
   console.log(myArr);
   
   e.preventDefault();
}

function subtractMe(e) {
   firstNum = Number(display.textContent);
   myArr.push(firstNum);
   display.textContent = '';
   minus = true;
   addition = false;
   multiply = false;
   divide = false;
   console.log(myArr);

   e.preventDefault();
}

function multiplyMe(e) {
   firstNum = Number(display.textContent);
   myArr.push(firstNum);
   display.textContent = '';
   multiply = true;
   minus = false;
   addition = false;
   divide = false;

   e.preventDefault();
}

function divideMe(e) {
   firstNum = Number(display.textContent);
   myArr.push(firstNum);
   display.textContent = '';
   divide = true;
   multiply = false;
   minus = false;
   addition = false;

   e.preventDefault();
}

function squareMe(e) {
  display.textContent = Math.sqrt(display.textContent).toFixed(5);
  e.preventDefault();
}

// ARRAY FUNCTIONS AND MATH EQUALITY
// ===================================================================================================================================

function getSum(total, num) {
   return total + num;
}

function getDifference(total, num) {
   return total - num;
}

function getProduct(total, num) {
   return total * num;
}

function getQuotient(total, num) {
   return total / num;
}

function equalizeMe(e) {
    if(addition) {
      lastNum = Number(display.textContent);
      myArr.push(lastNum);
      display.textContent = myArr.reduce(getSum);
      myArr = [];
    }

    if(minus) {
      lastNum = Number(display.textContent);
      myArr.push(lastNum);
      display.textContent = myArr.reduce(getDifference);
      myArr = [];
      console.log('its working');
   }

    if(multiply) {
        lastNum = Number(display.textContent);
        myArr.push(lastNum);
        display.textContent = myArr.reduce(getProduct);
        myArr = [];
        console.log('multiply');
    }
    
    if(divide) {
       lastNum = Number(display.textContent);
       myArr.push(lastNum);
       display.textContent = myArr.reduce(getQuotient).toFixed(5);
       if(isNaN(display.textContent)){
          display.textContent = 0;
       } else if(display.textContent = Infinity){
          display.textContent = 0;
       }
       myArr = [];
       console.log('divide');
       console.log(display.textContent);
    }


   

   e.preventDefault();
}

function clearAll(e) {
   display.textContent = '';
   firstNum = '';
   lastNum = '';
   myArr = [];
}
   
   


