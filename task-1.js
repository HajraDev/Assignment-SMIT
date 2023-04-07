// Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.
let num1 = prompt("Enter your first Number");
let num2 = prompt("Enter your Second Number");

let largerNumber;
if (num1 > num2) {
  largerNumber = num1;
  // console.log(largernum);
} else {
  largerNumber = num2;
  // console.log(largernum);
}
console.log("The larger number is: " + largerNumber);
