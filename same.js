const same = (arr1, arr2) => {
  arr1 = arr1.map((val) => val ** 2).sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  return arr1.join("") === arr2.join("");
};

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
