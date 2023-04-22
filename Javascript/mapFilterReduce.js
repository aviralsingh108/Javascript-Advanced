// Problem 1
// Implement a function that takes an array of objects representing transactions and returns an object with the total balance grouped by year and month. Each transaction object has properties "amount" (a positive or negative number), "date" (a JavaScript Date object), and "description" (a string).
// Sample input:
const transactions = [
  { amount: -100, date: new Date("2022-01-02"), description: "Rent payment" },
  { amount: 500, date: new Date("2022-01-15"), description: "Salary" },
  { amount: -50, date: new Date("2022-02-01"), description: "Phone bill" },
  { amount: -20, date: new Date("2022-02-10"), description: "Internet bill" },
  {
    amount: -150,
    date: new Date("2023-03-20"),
    description: "Insurance payment",
  },
  { amount: 300, date: new Date("2023-03-22"), description: "Freelance work" },
];
// Desired Output:
// {
//   "2022": {
//     "01": {
//       "balance": 400
//     },
//     "02": {
//       "balance": 330
//     }
//   },
//   "2023": {
//     "03": {
//       "balance": 150
//     }
//   }
// }

function calculateBalance(transactions) {
  return transactions.reduce((acc, curr) => {
    const year = curr.date.getFullYear();
    const month = curr.date.getMonth() + 1;
    const key = `${year}-${month.toString().padStart(2, "0")}`;
    if (!acc[key]) {
      acc[key] = { balance: 0 };
    }
    acc[key].balance += curr.amount;
    // console.log(acc);
    return acc;
  }, {});
}
const keyFormat = calculateBalance(transactions);

const balanceByYearAndMonth = {};
function splitMonthYear(keyFormat) {
  for (const [key, value] of Object.entries(keyFormat)) {
    console.log(key, value);
    const [year, month] = key.split("-");
    if (!balanceByYearAndMonth[year]) balanceByYearAndMonth[year] = {};
    balanceByYearAndMonth[year][month] = value;
  }
  console.log(balanceByYearAndMonth);
  return balanceByYearAndMonth;
}

console.log(splitMonthYear(keyFormat));

//Problem 2
// Write a function that takes an array of strings and returns a new array with the longest word from each string.
// Sample input:
const strings = ["The quick brown fox", "jumps over", "the lazy dog"];

//Sample Output:
// ["cherry", "elephant", "JavaScript"];

function logngestString(strings) {
  return strings.reduce((acc, curr) => {
    const subString = curr.split(" ");
    let longest = subString[0];
    subString.forEach((item) => {
      if (item.length > longest.length) longest = item;
    });
    acc.push(longest);
    return acc;
  }, []);
}
console.log(logngestString(strings));
