// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.

// Constraints:

// args is a valid JSON array
// 0 <= args.length <= 100

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
let input = prompt("Please enter a set of arguments, separated by commas");

try {
  // split input into array at the commas
  let args = input.split(",");

  // check if input JSON is an array of length 0-100
  if (Array.isArray(args) && args.length >= 0 && args.length <= 100) {
    function argumentsLength(...args) {
      return args.length;
    }
    // call and log function to the consol using spread operator
    console.log(argumentsLength(...args));
  }
  //   if invalid input, return error
  else {
    console.error(
      "Input is not a valid array or length is out of bounds (0-100 inclusive)"
    );
  }
} catch (error) {
  console.error("Invalid JSON input");
}
/**
 * argumentsLength(1, 2, 3); // 3
 */
