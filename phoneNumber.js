function format(arr) {
  const splitted = [3, 3, 4].map((a, i) => arr.splice(i, a, arr[a])).map((a) => a.join(``));
  return `(${splitted[0]}) ${splitted[1]}-${splitted[2]}`;
}

function createPhoneNumber(numbers) {
  return "(xxx) xxx-xxxx".replace(/x/g, (_) => numbers.shift());
}

const response = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
