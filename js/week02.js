// This part is for Week 02

function sumNumber() {
  let inputNumber = document.getElementById('inputNumber').value;
  inputNumber = parseInt(inputNumber);
  result = sum(inputNumber);
  document.getElementById('div__result').innerHTML = `The result is: ${result}`;
}

function sumNumber2() {
  let inputNumber1 = document.getElementById('inputNumber').value;
  let inputNumber2 = document.getElementById('inputNumber2').value;
  inputNumber1 = parseInt(inputNumber1);
  inputNumber2 = parseInt(inputNumber2);
  result2 = sum2(inputNumber1, inputNumber2);
  document.getElementById('div__result2').innerHTML = `The total sum is: ${result2}`;
}

function multiply() {
  let inputNumber3 = document.getElementById('inputNumber3').value;
  let inputNumber4 = document.getElementById('inputNumber4').value;
  inputNumber3 = parseInt(inputNumber3);
  inputNumber4= parseInt(inputNumber4);
  result3 = mult(inputNumber3, inputNumber4);
  document.getElementById('div__result3').innerHTML = `The result is: ${result3}`;
}

function sum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum
}

const sum2 = (x, y) => x + y;

const mult = function(x, y) {
  return x * y;
}