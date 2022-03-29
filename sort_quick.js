const pivot = (arr, start = 0) => {
  const swap = (arr, position1, position2) => {
    [arr[position1], arr[position2]] = [arr[position2], arr[position1]];
  };
  let position = start;
  for (let index = start + 1; index < arr.length; index++) {
    if (arr[start] > arr[index]) {
      position++;
      swap(arr, position, index);
    }
  }
  swap(arr, start, position);
  return position;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    const position = pivot(arr, start);
    // left
    quickSort(arr, start, position - 1);
    // right
    quickSort(arr, position + 1, end);
  }
  return arr;
};

const result = quickSort([40, 40, 50, 43, 10, 30, 42, 11, 20, 6, 19, 32, 20, 41, 23, 27]);
console.log(result);
