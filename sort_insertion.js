const insertionSort = (arr, index = 1) => {
  if (index <= arr.length) {
    let rundown = [index][0];
    while (arr[rundown] < arr[rundown - 1]) {
      const temp = arr[rundown - 1];
      arr[rundown - 1] = arr[rundown];
      arr[rundown] = temp;
      rundown--;
    }
    index++;
    return insertionSort(arr, index);
  } else return arr;
};

const result = insertionSort([3, 4, 3, 67, 100, 5, 44, 5, 6, 77, 8, 6, 4, 34]);
console.log(result);
