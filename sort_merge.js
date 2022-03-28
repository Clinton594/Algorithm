const merge = (arr1, arr2) => {
  let left = 0;
  let right = 0;
  let result = [];
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      result.push(arr1[left]);
      left++;
    } else {
      console.log(right);
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

const result = mergeSort([56, 716, 83]);
console.log(result);
