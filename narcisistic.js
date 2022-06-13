function narcissistic(value) {
  return (
    value
      .toString()
      .split("")
      .map((a, _, str) => a ** str.length)
      .reduce((a, b) => a + b) === value
  );
}

const result = narcissistic(9);
console.log(result);
