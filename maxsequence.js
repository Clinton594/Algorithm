// function maxSequenceSum(arr) {
//   if (!arr || !arr.length) return 0;
//   let a1 = 0;
//   let a2 = arr[0];
//   arr.forEach((i, a) => {
//     a1 = Math.max(i, a1 + i);
//     a2 = Math.max(a2, a1);
//   });
//   if (a2 < 0) a2 = 0;
//   return a2;
// }

const response = maxSequenceSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(response);
