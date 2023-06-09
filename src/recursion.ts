// Count down with recursion
function countDownRecursive(num: number) {
  // Base case
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  // Recursive case
  console.log(num);
  num--;
  // Calling with different input each time
  countDownRecursive(num);
}

// countDownRecursive(5);

// Sum range recursively
function sumRange(num: number): number {
  // Base case
  if (num === 1) return 1;
  // Recursive case
  return num + sumRange(num - 1);
}

// sumRange(3); // 6
// return 3 + sumRange(2)                       <- 6
//            return 2 + sumRange(1)            <- 3
//                       return 1               <- 1

// Factorial
function factorial(num: number): number {
  // Base case
  if (num === 1) return 1;
  // Recursive case
  return num * factorial(num - 1);
}

// console.log(factorial(3));

// Helper method recursion
function collectOddValues(arr: number[]): number[] {
  let result: number[] = [];

  function helper(helperInput: number[]) {
    // Base case
    if (helperInput.length === 0) return;
    // Recursive case
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
