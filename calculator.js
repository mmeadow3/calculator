// Create an HTML file that has two input fields to accept the two numbers to perform operations on.
// Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.
var multiply = function(x, y) {
	return (x * y);
}
var add = function(x, y) {
	return(x + y);
}
var subtract = function(x, y) {
	return (x - y);
}

var divide = function(x, y) {
	return (x / y);
}

function doMath(x, y, func) {
  return func(x,y);
};
// console.log(doMath(3,5,add))      //////These console logs were testing the doMath function///////////
// console.log(doMath(3,5,multiply))
////////calls multiply function///////////////////////
var multiplyButton = document.getElementById("multiply").addEventListener("click", function (event) {
  var x = parseInt(document.getElementById("firstNum").value);
  var y = parseInt(document.getElementById("secondNum").value);
  var result = parseInt(doMath(x, y, multiply));
  output.innerHTML = result
});
/////////calls Addition function////////////////////////////////
var addButton = document.getElementById("addBtn").addEventListener("click", function (event) {
  var x = parseInt(document.getElementById("firstNum").value);
  var y = parseInt(document.getElementById("secondNum").value);
  var result = parseInt(doMath(x, y, add));
  output.innerHTML = result
});
///////////////////calls Addition function////////////////////////////////
var subButton = document.getElementById("subtract").addEventListener("click", function (event) {
  var x = parseInt(document.getElementById("firstNum").value);
  var y = parseInt(document.getElementById("secondNum").value);
  var result = parseInt(doMath(x, y, subtract));
  output.innerHTML = result
});
///////////////////calls Addition function////////////////////////////////
var divideButton = document.getElementById("divide").addEventListener("click", function (event) {
  var x = parseInt(document.getElementById("firstNum").value);
  var y = parseInt(document.getElementById("secondNum").value);
  var result = (doMath(x, y, divide)); ///// remove parseInt, we want it to show decimals////////////
  output.innerHTML = result
});

