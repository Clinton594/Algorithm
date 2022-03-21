const palindrome = (str) => {
  str = str.toLowerCase();
  const flipped = str.split("").reverse().join("");
  return str === flipped;
};

console.log(palindrome("annA"));
