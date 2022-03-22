const vowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  return str.split("").filter((x) => vowels.includes(x)).length;
};

const response = vowels("hello my lovers euit");
console.log(response);
