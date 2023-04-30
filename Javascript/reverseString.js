// Reverse each word of a string

const str = "I Love Javascript";

function reverseString(str) {
  let result;
  result = str.split(" ").map((item) => item.split("").reverse().join(""));
  return result.join(" ");
}

console.log(reverseString(str));
