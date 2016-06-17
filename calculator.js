// Create an HTML file that has two input fields to accept the two numbers to perform operations on.
// Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.

var x = document.getElementById("firstNum").value;
var y = document.getElementById("secondNum").value;
var multiplyButton = document.getElementById("multiply").addEventListener("click", doMath());
var multiply = function(x, y) {
	return (x * y);
}

var addButton = document.getElementById("addBtn").addEventListener("click", doMath);
var add = function(x, y) {
	return(x + y);
}

var subtractButton = document.getElementById("subtract").addEventListener("click", doMath);
var subtract = function(x, y) {
	return (x - y);
}

var divideButton = document.getElementById("divide").addEventListener("click", doMath);
var divide = function(x, y) {
	return (x / y);
}

function doMath(x, y, func) {
  return func(x,y);
};
console.log(doMath(3,5,add))


