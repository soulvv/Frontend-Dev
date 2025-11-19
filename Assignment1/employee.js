// q4.js - Academic Performance Evaluator

// Marks of 5 subjects (out of 100)
const marks = [88, 76, 92, 80, 55];

let sum = 0;
let detainedDueToSubject = false;

// Check each subject and accumulate marks
for (let i = 0; i < marks.length; i++) {
  const m = marks[i];
  sum += m;
  if (m < 35) {
    detainedDueToSubject = true;
  }
}

// Calculate percentage (average of 5 subjects)
const percentage = sum / marks.length;

console.log("Marks:", marks);
console.log("Percentage:", percentage.toFixed(2) + "%");

// Validation: if any subject < 35 → Detained
if (detainedDueToSubject) {
  console.log("Result: Detained (failed in one or more subjects).");
} else {
  // Apply overall percentage rules
  if (percentage >= 85) {
    console.log("Result: Promoted with Distinction");
  } else if (percentage >= 50 && percentage <= 84) {
    console.log("Result: Promoted");
  } else {
    console.log("Result: Detained");
  }
}
