// q10.js - Citizen Eligibility Validator

// Input: age and citizenship status
const age = 19;         // change to test
const isCitizen = true; // boolean

/*
  Assumption:
  - Voting age: 18+
  - Driving + Passport (all services): 21+
*/

// Eligibility logic
if (isCitizen && age >= 21) {
  console.log("Eligible for all services.");
} else if (isCitizen && age >= 18 && age <= 20) {
  console.log("Eligible to vote only.");
} else if (!isCitizen && age >= 18) {
  console.log("Only age criteria met.");
} else {
  console.log("Not eligible yet.");
}
