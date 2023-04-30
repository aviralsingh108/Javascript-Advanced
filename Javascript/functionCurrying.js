// Currying is the concept where the function take single argument
const user = {
  firstName: "Aviral",
  lastName: "Singh",
  role: "Dev",
};

// Wiithout Currying
function getUser(user, key) {
  return user[key];
}
// We need to pass the Object User every time
console.log(getUser(user, "firstName"));
console.log(getUser(user, "lastName"));
console.log(getUser(user, "role"));

// Same task but With Currying
function getUserData(user) {
  return function (key) {
    return user[key];
  };
}

// with currying we need to pass the User object only once and then just pass the keys
const result = getUserData(user);
console.log(result("firstName"));
console.log(result("lastName"));
console.log(result("role"));
