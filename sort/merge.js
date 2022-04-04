/** 
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 * 
  This splits up an array into two halves until each gets to the lowest value of 1 or 0 length
  Then starts merging each singly splited arrays by comparing and sorting the values back up till the parent array
 */

const merge = (arr1, arr2) => {
  let left = 0;
  let right = 0;
  let result = [];
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      result.push(arr1[left]);
      left++;
    } else {
      result.push(arr2[right]);
      right++;
    }
  }
  result = [...result, ...arr1.slice(left, arr1.length), ...arr2.slice(right, arr2.length)];
  return result;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const result = mergeSort([11, 40, 40, 50, 43, 10, 30, 42, 20, 6, 19, 32, 20, 41, 23, 27]);
console.log(result);
