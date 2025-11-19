// q9.js - Random Math Quiz Generator

// Generate two random numbers between 1 and 20
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

// Random operator from the list
const operators = ['+', '-', '*', '/'];
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

let correctAnswer;

// Decide operation using switch
switch (operator) {
  case '+':
    correctAnswer = num1 + num2;
    break;
  case '-':
    correctAnswer = num1 - num2;
    break;
  case '*':
    correctAnswer = num1 * num2;
    break;
  case '/':
    // Avoid divide-by-zero (though num2 is 1–20, still safe check)
    correctAnswer = num2 !== 0 ? (num1 / num2) : 0;
    // Round to 2 decimals for division
    correctAnswer = Number(correctAnswer.toFixed(2));
    break;
  default:
    console.log("Unknown operator");
}

// Show question and correct answer
console.log(`Question: ${num1} ${operator} ${num2} = ?`);
console.log("Correct Answer:", correctAnswer);
