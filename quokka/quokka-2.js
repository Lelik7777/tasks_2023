const arr = [1, 3, 4, 2, 4, 9];
function quickSort(arr) {
  if (!arr.length) {
    return [];
  }
  let left = [],
    right = [],
    p = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < p) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), p, ...quickSort(right)];
}
quickSort(arr); //?
const obj = { name: "bob" };
const id = Symbol("id");
obj[id] = 100;
delete obj[id];
obj; //?

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matrix[2][0]; //?
matrix.flat(); //?
const arr1 = [
  ["white", "goodness"],
  ["blue", "tranquility"],
];
arr1.map(([key, value]) => ({ [key]: value })); //?

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
random(3, 4); //?
