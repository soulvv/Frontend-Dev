// q8.js - Employee Salary Projection (5 years)

// Current annual salary and increment rate
let currentSalary = 400000;   // e.g., in INR per year
const incrementRate = 8;      // percent per year

// Store projection for console.table
const salaryProjection = [];

// For each year, apply increment and store result
for (let year = 1; year <= 5; year++) {
  // Increment: salary = salary + salary * (rate / 100)
  currentSalary += currentSalary * (incrementRate / 100);

  // Round salary for display
  const roundedSalary = Math.round(currentSalary);

  salaryProjection.push({
    Year: year,
    Salary: roundedSalary
  });
}

console.table(salaryProjection);
