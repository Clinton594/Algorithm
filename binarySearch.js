//Uses divide and conquer method to search and return index of the value
//This only works for sorted arrays

const binarySearch = (arr, find) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((end + start) / 2);
  let count = 0;
  while (arr[middle] !== find) {
    if (arr[middle] < find) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((end + start) / 2);
    count++;
  }
  return arr[middle] === find ? middle : -1;
};

const result = binarySearch([3, 4, 5, 6, 7, 8, 12, 20, 34, 56, 78, 456, 678], 678);
console.log(result);
