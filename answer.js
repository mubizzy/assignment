// Rectangle Area Calculator with Comparison
function calculateRectangleArea() {
  // Prompt for length and width (using prompt in browser environment)
  let length = parseFloat(prompt("Enter the length of the rectangle:"));
  let width = parseFloat(prompt("Enter the width of the rectangle:"));

  // Calculate area
  let area = length * width;

  // Fixed threshold value
  const THRESHOLD = 100;

  // Compare area with threshold and display messages
  console.log(`Rectangle Dimensions: ${length} x ${width}`);
  console.log(`Calculated Area: ${area} cm²`);
  console.log(`Threshold: ${THRESHOLD} cm²`);

  // Comparison using different operators
  if (area > THRESHOLD) {
    console.log("The area is GREATER THAN the threshold.");
  } else if (area === THRESHOLD) {
    console.log("The area is EQUAL TO the threshold.");
  } else {
    console.log("The area is LESS THAN the threshold.");
  }

  // Demonstrating comparison operators
  console.log(`Is area greater than threshold? ${area > THRESHOLD}`);
  console.log(`Is area equal to threshold? ${area === THRESHOLD}`);
  console.log(`Is area less than or equal to threshold? ${area <= THRESHOLD}`);
}

// Call the function
calculateRectangleArea();

/**************************************************************************************/
// Number Range Validator using Logical Operators
function validateNumberRange() {
  // Prompt for a number (using prompt in browser environment)
  let number = parseFloat(prompt("Enter a number to check:"));

  // Using logical AND (&&) to check if number is between 10 and 20
  if (number >= 10 && number <= 20) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }

  // Alternative approach using logical OR (||)
  let isValid = number < 10 || number > 20 ? "Invalid" : "Valid";
  console.log(`Alternative Check: ${isValid}`);

  // Demonstrating logical operators
  console.log(`Is number >= 10? ${number >= 10}`);
  console.log(`Is number <= 20? ${number <= 20}`);
  console.log(
    `Full condition (number between 10 and 20): ${
      number >= 10 && number <= 20
    }`,
  );
}

// Call the function
validateNumberRange();
