const arr = [1, 2, [3, 4], 5, 6, 7, [8, 9, 10, [11, 12]], 13];
let result = "";
function flatten(arr) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
      result += item + " ";
    }
  });

  return result;
}
console.log(flatten(arr));
