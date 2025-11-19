// q6.js - Progressive Discount System

// Input: total purchase amount (change to test)
const total = 7200;

let discountPercent = 0;

// Decide discount tier
if (total >= 10000) {
  discountPercent = 25;
} else if (total >= 5000) {
  discountPercent = 15;
} else if (total >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

// Calculate discount and final price
const discountAmount = (total * discountPercent) / 100;
const finalPrice = total - discountAmount;

console.log("Original Total:", total);
console.log("Discount Percentage:", discountPercent + "%");
console.log("Final Price after discount:", Math.round(finalPrice));
