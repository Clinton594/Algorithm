// Optimized implementation of bubble sort Algorithm

// Runs through the array multiple times 
// Each time, compares two consecutive numbers and swaps the higher one to the right
// At the end of each run, the highest number is always at the right most in a descending order from the right.


function bubbleSort(arr) {
  var i, j;
  var len = arr.length;

  var isSwapped = false;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }

  return arr;
}

const data = Array.apply(null, { length: 100 })
  .map(Function.call, Math.random)
  .map((x) => x.toFixed(2) * 1000);
const result = bubbleSort(data);
console.log(result);
