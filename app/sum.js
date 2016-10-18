// var firstNumber: number;
// var otherNumber: number;
//
// firstNumber = parseInt(prompt('please enter a number.'));
// otherNumber = parseInt(prompt('enter another number.'));
// var sum = firstNumber + otherNumber;
// alert("The sum of your two numbers is: " + sum);
// or
var findSum = function (first, second) {
    var sum = first + second;
    alert("the sum of your two numbers is " + sum);
};
var number = parseInt(prompt("please enter a number"));
var otherNumber = parseInt(prompt("enter another number"));
findSum(number, otherNumber);
