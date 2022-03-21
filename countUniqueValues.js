const countUniqueValues = (arr) => {
  return [...new Set(arr)].length;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
