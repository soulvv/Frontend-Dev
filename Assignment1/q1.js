// q1.js - Personalized Login Greeting

// Change this to test with different users
const userName = "Batsy";

// Get current hour (0–23) from system clock
const currentHour = new Date().getHours();

let greeting;

// Decide greeting based on time of day
if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

console.log(greeting);

