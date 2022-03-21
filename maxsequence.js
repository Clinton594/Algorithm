function maxSequenceSum(arr) {
  let a1 = 0;
  let a2 = arr[0];
  arr.forEach((i, a) => {
    a1 = Math.max(i, a1 + i);
    console.log(a1);
    a2 = Math.max(a2, a1);
  });
  if (a2 < 0) a2 = 0;
  // console.log(a2);
}

maxSequenceSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
