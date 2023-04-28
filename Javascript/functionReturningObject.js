// plus(a).plus(b).value() problem
function plus(param) {
  let result = param;
  return {
    plus: function (num) {
      result += num;
      return this;
    },
    minus: function (num) {
      result -= num;
      return this;
    },
    value: function () {
      return result;
    },
  };
}

console.log(plus(2).plus(9).value());
