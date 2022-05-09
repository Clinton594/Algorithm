function toCamelCase(str) {
  return str.replace(/[-_][a-zA-Z]/g, (match, index, char) => char.charAt(index + 1).toUpperCase());
}
