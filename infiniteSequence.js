const infiniteSequence = (arr) => {
  if (arr.length < 1 || arr.length > 100000) return 0;
  for (let index = 0; index < arr.length; index++) {
    // console.log(arr);
    if (arr[index] > 1) {
      if (arr[index] % 2 === 0) {
        const rem = arr[index] / 2;
        arr[index] = 0;
        if (arr[index + 1] === undefined) arr.push(rem);
        else arr[index + 1] = arr[index + 1] + rem;
      } else {
        const rem = Math.floor(arr[index] / 2);
        arr[index] = 1;
        if (arr[index + 1] === undefined) arr.push(rem);
        else arr[index + 1] = arr[index + 1] + rem;
      }
    }
  }
  return arr.reduce((x, y) => x + y);
};

const result = infiniteSequence([4, 0, 3, 0]);
console.log(result);
