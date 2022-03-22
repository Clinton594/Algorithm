/*
Write a function called maxSubarraysum which accepts an array of random integers and a number called n.
The function should find the maximum sum of consecutive elements in the array
*/

const maxSubarraySum = (arr, n) => {
  let highest = -Infinity; //to account for negetive integers
  arr.forEach((number, index) => {
    const sum = arr.slice(index, n + index).reduce((a, b) => a + b, 0);
    console.log(index, sum);
    if (sum > highest) {
      highest = sum;
    }
  });
  return highest;
};

const result = maxSubarraySum([-1, -2, -5, -2, 8, 1, -5], 2);
console.log(result);
