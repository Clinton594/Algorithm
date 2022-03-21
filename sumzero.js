const sumzero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  arr = arr.sort((a, b) => a - b);
  while (arr[left] < arr[right]) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else {
      if (arr[right] <= 0) {
        right = arr.length - 1;
        left++;
      } else right--;
    }
  }
};

console.log(sumzero([67, -8, -5, -3, -4, -3, -2, -1, 0, 4, 6, 7, 10, 12, 45]));
