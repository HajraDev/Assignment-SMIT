// Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.
// The grades are computed as follows :
// Range Grade
// <60     F
// <70     D
// <80     C
// <90     B
// <100    A

let marks = [85, 65, 90, 95, 75];

let total = 0;

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}

let average = total / marks.length;

let grade;

if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}

console.log("The average mark is: " + average);
console.log("The grade is: " + grade);
