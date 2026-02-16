// Fixed test.js for Exercise 3
console.log("Running Unit Tests...");
const testValue = 1 + 1;

if (testValue === 2) {
  console.log("Unit Test Passed!");
  // Removed process.exit(0)
} else {
  console.error("Unit Test Failed!");
  throw new Error("Test failed!"); // Use an Error instead of exit(1)
}
