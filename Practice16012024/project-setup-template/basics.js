"use strict";
console.log('Your code goes here...');
function add(num1, num2, showResult, phrase) {
    const result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = parseFloat("15");
const number2 = 4.5;
const printResult = true;
const resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
