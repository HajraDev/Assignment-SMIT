// let age = parseInt(prompt("Enter your Age"));
// if (age <= 10) {
//   console.log("Welcome");
// } else {
//   console.log("You are not allowed");
// }

let prompt = require("prompt-sync")();
let n1 = parseInt(prompt("please enter your first number:"));
let n2 = parseInt(prompt("please enter your second number:"));
let operator = parseInt(prompt("please enter your operator(+,-,*,/):"));
if (operator == "+") {
  console.log("the number of ${n1} ${operator} $ {n2} = ${n1+n2}");
} else if (operator == "-") {
  console.log("the number of ${n1} ${operator} $ {n2} = ${n1-n2}");
} else if (operator == "*") {
  console.log("the number of ${n1} ${operator} $ {n2} = ${n1*n2}");
} else if (operator == "/") {
  console.log("the number of ${n1} ${operator} $ {n2} = ${n1/n2}");
} else {
  console.log("not operator");
}
