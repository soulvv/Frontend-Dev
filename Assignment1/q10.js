// q7.js - Smart Guessing Game (Number Range)

// Secret number between 1 and 50
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Test guess (change this to test)
const userGuess = 23;

console.log("Secret:", secretNumber);
console.log("Your guess:", userGuess);

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else if (Math.abs(userGuess - secretNumber) <= 3) {
  // Within ±3 but not equal
  console.log("Very close!");
} else {
  if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}
