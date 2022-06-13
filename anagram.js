const isAnagram = (word1, word2) => {
  word1 = word1
    .toLowerCase()
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

  word2 = word2
    .toLowerCase()
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
  console.log(word1 == word2);
};

isAnagram("finder", "Friend");
