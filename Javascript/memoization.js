// Memoization helps us to cache, when same computation is required multiple times

function add(x) {
  return 100 + x;
}

const memo = (func) => {
  let cache = {};
  return function (x) {
    if (cache[x]) {
      console.log("returned result from the cache");
      return cache[x];
    } else {
      console.log("Calculating the result");
      const result = func(x);
      cache[x] = result;
      return result;
    }
  };
};

const calculate = memo(add);
console.log(calculate(10));
console.log(calculate(20));
console.log(calculate(19));
console.log(calculate(20));
console.log(calculate(19));
