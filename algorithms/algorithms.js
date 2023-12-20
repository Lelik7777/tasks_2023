console.log("algorithms");

function quickSort(arr) {
  if (!arr.length) return [];
  const a = [],
    b = [],
    p = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < p) {
      a.push(arr[i]);
    } else {
      b.push(arr[i]);
    }
  }
  return [...quickSort(a), p, ...quickSort(b)];
}

const arr = [-1, 0, 1, 2, 3, 4, 6, 100, 10000];

function binarySearchIterationMethod(arr, i) {
  let left = 0,
    right = arr.length - 1,
    mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === i) {
      return mid;
    } else if (arr[mid] < i) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearchIterationMethod(arr, 100));

function binarySearchRecursiveMethod(arr, i, left = 0, right = arr.length - 1) {
  let mid = Math.floor((left + right) / 2);
  if (left > right) return -1;
  if (arr[mid] === i) {
    return mid;
  } else if (arr[mid] < i) {
    return binarySearchRecursiveMethod(arr, i, mid + 1, right);
  } else {
    return binarySearchRecursiveMethod(arr, i, left, mid - 1);
  }
}
console.log(binarySearchRecursiveMethod(arr, 4));
const n = 5;
for (let i = 0; i < n; i++) {
  //выполняется n раз
  for (let j = 1; j < n; j = j * 2) {
    // выполняется blogs раз
    console.log("hello");
  }
  console.log("\n");
}
//print “hello"; //константное время
