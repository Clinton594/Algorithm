const factorial = (num) => {
  let set = [];
  for (let i = 1; i <= num; i++) {
    set.push(i);
  }
  return set.reduce((a, b) => a * b);
};

// recursive
const recursiveFactorial = (num, sum = 1) => {
  if (num == 0) return sum;
  sum *= num--;
  return recursiveFactorial(num, sum);
};

const result = recursiveFactorial(3);
console.log(result);
