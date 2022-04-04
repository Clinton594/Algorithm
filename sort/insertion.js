const insertionSort = (arr, index = 1) => {
  if (index <= arr.length) {
    let rundown = index;
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

// const data = [3, 4, 3, 67, 100, 5, 44, 5, 6, 77, 8, 6, 4, 34];
const data = Array.apply(null, { length: 10000 }).map(Function.call, Math.random);
const result = insertionSort(data);
console.log(result);
