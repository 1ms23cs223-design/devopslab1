// Simple test to verify the environment
console.log("Running Unit Tests...");
const testValue = 1 + 1;

if (testValue === 2) {
  console.log("Unit Test Passed!");
  process.exit(0);
} else {
  console.error("Unit Test Failed!");
  process.exit(1);
}
