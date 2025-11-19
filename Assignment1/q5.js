// q5.js - Weather Activity Planner

// Example values – change to test
const temperature = 12;        // in °C
const isRaining = false;       // boolean
const windSpeed = 25;          // in km/h (or any unit)

// Decision based on rain, temperature and wind
if (isRaining || windSpeed > 50) {
  // OR used with extreme wind case
  console.log("Stay indoors with hot coffee.");
} else if (!isRaining && temperature > 35) {
  console.log("Go swimming.");
} else if (!isRaining && temperature < 15 && windSpeed > 20) {
  // AND used to combine cold + windy
  console.log("Too cold and windy — stay home.");
} else {
  console.log("Perfect day for a walk.");
}
