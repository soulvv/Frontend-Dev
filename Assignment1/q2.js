// q2.js - Multi-Type Data Summary

// Different types of data
const userName = "Alice";             // string
const userAge = 20;                   // number
const isActive = true;                // boolean
const scores = [85, 90, 92];          // array
const profile = { city: "Lucknow" };  // object
const emptyValue = null;              // null
let notAssigned;                      // undefined

// Helper to get type (with special handling for array and null)
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

// Build report object for console.table
const report = {
  userName: { label: "userName", value: userName, type: getType(userName) },
  userAge: { label: "userAge", value: userAge, type: getType(userAge) },
  isActive: { label: "isActive", value: isActive, type: getType(isActive) },
  scores: { label: "scores", value: scores, type: getType(scores) },
  profile: { label: "profile", value: profile, type: getType(profile) },
  emptyValue: { label: "emptyValue", value: emptyValue, type: getType(emptyValue) },
  notAssigned: { label: "notAssigned", value: notAssigned, type: getType(notAssigned) }
};

console.table(report);
