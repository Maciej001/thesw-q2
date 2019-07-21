export const firstLetterToUpperCase = str =>
  str.charAt(0).toUpperCase() + str.substr(1);

export const snakeToCamel = key =>
  key
    .split("_")
    .map((word, index) => (index === 0 ? word : firstLetterToUpperCase(word)))
    .join("");
