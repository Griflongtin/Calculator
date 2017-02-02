var bmi = function(number2, number5) {
  return number2 / number5;
};

var number1 = parseInt(prompt("Enter in waight in pounds:"));
var number3 = parseInt(prompt("Enter in height in inches:"));
var number2 = (number1 * 0.45);
var number4 = (number3 * 0.025);
var number5 = (number4 * number4);
var result = bmi(number2, number5);
alert(result);
