// Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

let num1 = +prompt("Enter your fist Number");
let num2 = +prompt("Enter your second Number");
let num3 = +prompt("Enter your third Number");
let num4 = +prompt("Enter your fourth Number");
let num5 = +prompt("Enter your fifth Number");

let largerNumber;
if (num1 > num2) {
  largerNumber = num1;
} else if (num2 > num3) {
  largerNumber = num2;
} else if (num3 > num4) {
  largerNumber = num3;
} else if (num4 > num5) {
  largerNumber = num4;
} else {
  largerNumber = num5;
}
console.log("Larger number is :" + largerNumber);
