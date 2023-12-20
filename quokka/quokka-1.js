const axios = require("axios");
console.log(axios);

const user = { name: "bob", age: 34 };
const copyUser = { ...user };
console.log("");

function name(params) {}
user;
console.log("copy", user === copyUser);
console.log("hello");

function factorial(n) {
  let res = 1;
  while (n > 1) {
    res *= n;
    console.log("res", res);

    n--;
    console.log("n= ", n);
  }
  return res;
}

console.log(factorial(5));

function loop(iter) {
  let sum = 0;
  for (let i = 0; i < iter; i++) {
    sum += i;
  }
  return sum;
}
loop(100); //?
console.log(loop(10000)); //?
[1, 3, 4, 5, 6, 7, 8]
  .filter((item) => item % 2) //?
  .map((i) => (i > 3 ? i : 0)); //?

if (!content) {
  //?

  console.log(content);

  deleteProducts();
}
var content = 10;
function deleteProducts() {
  console.log("delete all products");
}
new Date().getMonth(); //?

const str = "ADFABA123adfaf";
str
  .replace(/[A-Z]*/, "") //?
  .replace(/[0-9]*/, ""); //?

// async function banUser(userId) {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//   console.log(res.data.find((user) => user.id === userId)); //?
// }
// banUser(2);

function quickSort(arr) {
  if (!arr.length) return [];
  let a = [],
    b = [],
    p = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (p < arr[i]) {
      a.push(arr[i]);
    } else {
      b.push(arr[i]);
    }
  }
  return [...quickSort(a), p, ...quickSort(b)];
}

quickSort([3, 1, 4, 5, 2, 1]); //?
Number.isFinite(); //?
new Date(323232424); //?

let str1 = "hello";
[[...str1].at(0).toUpperCase(), ...str1.slice(1)]; //?
