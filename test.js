const test = (array) => {
  let alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const isUpperCase = array[0] === array[0].toUpperCase();
  if (!isUpperCase) alphabets = alphabets.map((a) => a.toLowerCase());
  const found = alphabets.indexOf(array[0]);

  const extracted = alphabets.slice(found, found + array.length + 1);
  return extracted.filter((x) => !array.includes(x));
};

const result = test(["O", "Q", "R", "S"]);
console.log(result);
