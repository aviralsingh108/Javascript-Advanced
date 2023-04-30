// Count duplicate elements in array
const items = ["a", "b", "c", "a", "b", "b", "c", "d", "e"];

//Output {a:2, b:3, c:2, d:1}

function countDuplicates(data) {
  return data.reduce((arr, curr) => {
    if (!arr[curr]) {
      arr[curr] = 1;
    } else {
      arr[curr] += 1;
    }
    return arr;
  }, {});
}

console.log(countDuplicates(items));
