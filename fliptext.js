const word = "chisom";

const flip = (word) => {
  return word.split("").reverse().join("");
};

console.log(flip(word));
