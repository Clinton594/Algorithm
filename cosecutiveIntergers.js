const consecutive = (x) => {
  x++;
  const test = x.toString().match(/(00|11|22|33|44|55|66|77|88|99)/);
  const result = test != null;
  if (result) return consecutive(x);
  else return x;
};

const result = consecutive(1765);
console.log(result);
