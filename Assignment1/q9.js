// q3.js - Monthly Expense Tracker

// Expenses by category: [food, travel, rent, bills, leisure]
const expenses = [8000, 1500, 12000, 3000, 2000];

// Calculate total using a loop
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
}

// Average monthly expense (per category)
const average = total / expenses.length;

// Add 10% tax to total (using assignment operator)
const taxRate = 0.10;
let finalAmount = total;
finalAmount += finalAmount * taxRate;

// Show results rounded to 2 decimal places
console.log("Total expenses:", total.toFixed(2));
console.log("Average per category:", average.toFixed(2));
console.log("Final amount after 10% tax:", finalAmount.toFixed(2));
