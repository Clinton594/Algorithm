//Radix sort is a special sorting algorithm that works on lists of numbers only
// It does not make use of comparisons

// const getNthDigit = (number, n) => {
//   let str = number.toString();
//   str = str[str.length - 1 - n];
//   return str === undefined ? 0 : str;
// };

function getNthDigit(number, n) {
  return Math.floor(Math.abs(number) / Math.pow(10, n)) % 10;
}
// function digitCount(number) {
// if(num === 0)return 1;
//   return Math.floor(Math.log10(Math.abs(number))) + 1;
// }
const digitCount = (number) => {
  if (number < 0) number = number * -1; //Convert to positive
  return number.toString().length;
};

const radixSort = (arr, iteration = 0) => {
  let maxIteration = 0;
  let index = 0;
  let build = [];
  while (index < arr.length) {
    const n = getNthDigit(arr[index], iteration);
    const c = digitCount(arr[index]);
    if (c > maxIteration) maxIteration = c;
    if (!build[n]) build[n] = [];
    build[n].push(arr[index]);
    index++;
  }
  iteration++;
  build = build.reduce((a, b) => [...a, ...b]); //flatten the build

  if (iteration < maxIteration) return radixSort(build, iteration);
  else return build;
};

const result = radixSort([40, 40, 50, 43, 10, 30, 42, 11, 20, 6, 19, 32, 200, 41, 23, 27]);
console.log(result);
