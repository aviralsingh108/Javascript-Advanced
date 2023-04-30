// Arranging words by their length in a given sentence
const str = "We are learning Javascript to do mastery in it";

function rearrangeWords(str) {
  let result;
  result = str
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .join(" ");
  return result;
}

console.log(rearrangeWords(str));
