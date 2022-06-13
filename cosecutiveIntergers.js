const consecutives = (x) => {
  x++;
  const stringValue = x.toString();
  return ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99"].find((x) => stringValue.includes(x)) !== undefined
    ? consecutives(x)
    : x;
};

const getLastDigit = (number, n) => Math.floor(Math.abs(number) / Math.pow(10, n)) % 10;

const consecutive = (number) => {
  const stringValue = number.toString();
  const index = Array.from(stringValue).reduce((x, y, i, arr) => {
    if (x.substring(x.length - 1) === y) {
      arr.splice(i);
      return i;
    }
    return x + y;
  });

  if (index === stringValue) return getLastDigit(number, 0) + 1 === getLastDigit(number, 1) ? number + 2 : number + 1;
  else if (index + 1 === stringValue.length && stringValue.substring(index - 1) === "99") return number + 2;
  else
    return parseInt(
      Array.from(stringValue).reduce((x, y, i) => {
        if (i < index) return x + y;
        else if (i === index) {
          if (y == "9") return (parseInt(x) + 1).toString() + 1;
          else return x + (parseInt(y) + 1);
        } else return (i - index) % 2 === 0 ? x + 1 : x + 0;
      })
    );
};

const test = 7894049087;
console.log(test + "  ==>  " + consecutive(test));

/*
 * When 99 is in the middle - 7899087
 * When higer duplicate comes first and lower duplicate comes later within - 569978897
 */
