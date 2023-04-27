//function(a)(b)()_problem.js
function printSum(outer) {
  return function (inner) {
    if (inner) {
      outer += inner;
      return printSum(outer);
    } else {
      return outer;
    }
  };
}

console.log(printSum(2)(5)());
console.log(printSum(2)(5)(7)());
console.log(printSum(1)(2)(3)(4)(5)());
