// Runs through the array multiple times
// Each run, it stores the position of the smallest number and the position of the start in the array in a variable
// After every run it swaps the value of the smallest array to the start of the run
// The start keeps incrementing because after every run, the left side is always sorted in an increasing order

function selectionSort(arr) {
  for (let index = 0; index < arr.length; index++) {
    let lowest = index;

    for (let j = index + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    [arr[index], arr[lowest]] = [arr[lowest], arr[index]];
  }
  return arr;
}

var data = Array.apply(null, { length: 100 })
  .map(Function.call, Math.random)
  .map((x) => x.toFixed(2) * 1000);

const result = selectionSort(data);
console.log(result);
