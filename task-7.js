//
// Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

let row;
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j < i; j++) {
    row += "*";
  }
  console.log(row);
  row = "";
}
