console.log("23345445123".match(/.{1,4}/g));
function a(params) {
  console.log(params);
}
a(4);
a = 5;
console.log(a);
//! throw ERROR because variable a overridden and not a function
//a(3);
const obj = { name: "foo" };
function fun(params) {
  console.log(this.name, params);
}
fun.call(obj, "hello world");
fun("hello");
//todo: example closure
function externalFun(params) {
  const innerVariable = "inner";
  return function () {
    console.log(params, innerVariable);
  };
}
const res = externalFun("hello world");
const res2 = externalFun("hello peace");
res2();
res();
console.log(res == res2);

//todo: example decorator function
function showData(data) {
  console.log(data);
}
function decorator(fun) {
  fun.counter = 0;
  return function (...args) {
    fun.counter++;
    fun(...args);
  };
}
const showSome = decorator(showData);
console.log(showData.counter);
showSome("hello world");
showSome("hello world");
showSome("hello world");
console.log(showData.counter);
//todo: example bind()

function sum(a, b) {
  return a + b;
}
const sum5 = sum.bind(null, 5);
const sum1 = sum.bind(null, 1);
console.log(sum5(5));
console.log(sum1(5));
const sumGen = sum1.bind(null, 8);
console.log(sumGen());

//todo: example JSON

const externalObject = {
  isMan: true,
  hobby: true,
  toJSON() {
    return {
      hobby: "chess",
      weather: "summer",
    };
  },
};
const object = {
  name: "bob",
  age: 44,
  job: "programmer",
  isAdmin: false,
  data: externalObject,
  date: new Date(),
};

const serializeObj = JSON.stringify(
  object,
  (key, value) => (key === "isAdmin" || key === "age" ? undefined : value),
  2
);
console.log(serializeObj);
console.log(
  JSON.parse(serializeObj, (key, value) =>
    key === "date" ? new Date(value) : value
  ).date.getMonth()
);

//simple shuffle of array
console.log(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].sort(() => Math.random() - 0.5)
);
//Fisher-Jets shuffle of array
function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(
  Array.from("hello world", (value, i) => (value === " " ? i : value))
);
console.log([..."hello world"]);

//todo example with iterator
const obj1 = {
  from: 1,
  to: 4,
};
obj1[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last)
        return { done: false, value: this.current++ };
      else return { done: true };
    },
  };
};
for (let item of obj1) {
  console.log(item);
}

const map = new Map(Object.entries(obj1));
console.log(map.get("from"));
console.log(map.has("to"));
console.log(Object.entries(obj1));

const arr = ["abc", "defgh", "ijklmn"];
function cutIt(arr) {
  //coding here...
  let min = Math.min(...arr.map((el) => el.length));

  return arr.map((el) => el.slice(0, min));
}
console.log(cutIt(arr));
console.log(cutIt(["codewars", "javascript", "java"]));

function firstToLast(str, c) {
  //coding here..
  //debugger
  if (str.indexOf(c) === -1) return str.indexOf(c);
  if ([...str].filter((el) => el === c).length === 1) return 0;
  else {
    return str.lastIndexOf(c) - str.indexOf(c);
  }
}
console.log(firstToLast("ababc", "a"));

function splitAndMerge(string, separator) {
  return string
    .split(" ")
    .map((string) => string.split("").join(separator))
    .join(" ");
}
console.log(splitAndMerge("My name is John", "-"));
console.log(splitAndMerge("My name is John", " "));

function alienLanguage(str) {
  //coding here...
  return str
    .split(" ")
    .map((subStr) =>
      subStr
        .split("")
        .map((char, i, arr) =>
          i === arr.length - 1 ? char : char.toUpperCase()
        )
        .join("")
    )
    .join(" ");
}
console.log(alienLanguage("my name is john"));
console.log(alienLanguage("this is an example"));
const arr444 = [3, 4, 5];
console.log(arr444.lastIndexOf());
console.log(arr444.slice(-1));
console.log(arr444.slice(0, -1));

const change = (str) =>
  str.replace(
    /\w+/g,
    (x) => x.slice(0, -1).toUpperCase() + x.slice(-1).toLowerCase()
  );
console.log(change("hello world"));
console.log("hello".slice(-1));
console.log("hello".slice(0, -1));
console.log("hello".replace(/.\b/g, "*"));

function topSecret(str) {
  let dict = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let Dict = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return str.replace(/[a-z]gi/, (x) => {
    if (x === x.toLowerCase()) {
      return dict.indexOf(x);
    }
    return dict.indexOf(x);
  });
}
topSecret("Pb qdph lv Mrkq");
//console.log(topSecret("Pb qdph lv Mrkq"));

function fiveLine(s) {
  //coding here...
  const char = s.trim();
  return `${char}\n${char.repeat(2)}\n${char.repeat(3)}\n${char.repeat(
    4
  )}\n${char.repeat(5)}`;
}
console.log(fiveLine("  a"));

const fiveLines2 = (s) => {
  const arr = [];
  for (let i = 1; i <= 5; i++) {
    arr.push(s.repeat(i));
  }
  return arr.join("\n");
};
console.log(fiveLines2("b"));
let [z, y] = [2, 5];
console.log(z, y);
[z, y] = [y, z];
console.log(z, y);

// function shuffleIt(arr, ...arrs) {
//   //coding here...
//   console.log(arr);
//   console.log(arrs);
//   console.log(arrs.length);
//   for (let array of arrs) {
//     //arr[(array[0], array[1])] = arr[(array[1], array[0])];
//    let temp=arr[array[0]];
//    arr[array[0]]=arr[array[1]];
//    arr[array[1]]=temp;
//   }

//   return arr
// }
const shuffleIt = (arr, ...arrs) => {
  arrs.forEach(([a, b]) => ([arr[a], arr[b]] = [arr[b], arr[a]]));
  return arr;
};

console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]));

function infiniteLoop(arr, d, n) {
  //coding here...
  if (d === "left") {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].map((el) => {
        return el < 9 ? el + n : el + (n % 10);
      });
    }
  }
  if (d === "right") {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].map((el) => {
        return el > 1 ? el - n : 9;
      });
    }
  }
  return arr;
}
console.log(
  infiniteLoop(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    "left",
    1
  )
);

function removeEven(arr) {
  //remove even number from arr
  for (var i = arr.length; i >= 0; i--) if (arr[i] % 2 == 0) arr.splice(i, 1);
  return arr;
}
var arr00 = [1, 2, 3, 4, 5];
removeEven(arr00);
console.log(arr00);

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [0, 3, 6, 9],
  [6, 8, 0, 2],
];

const findColumnWithZero = (arr) => {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[j][i] === 0) {
        array.push(i);
      }
    }
  }
  console.log("array column numbers", array);
};
findColumnWithZero(matrix);

const snakeByPass = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      for (let j = arr[i].length-1; j > 0; j--) {
        console.log(arr[i][j]);
      }
    } else {
      for (let j = 0; j < arr[i].length - 1; j++) {
        console.log(arr[i][j]);
      }
    }
  }

};
snakeByPass(matrix);

const text=`Lorem ipsum dolor sit amet consectetur adipisicing elit.
<br>
 Corporis necessitatibus aspernatur nulla a enim? Quisquam minima iusto,
<br>
 consequatur accusamus vero deserunt ut, ducimus possimus,<br> explicabo temporibus dolorum sapiente.

 Neque, ullam`

//  const block=document.querySelector('.block');
//  document.body.insertAdjacentHTML('afterbegin',text)

// const circle = {
//   radius: 10,
//   style: {
//       color: 'blue'
//   }
// };

// const clonedCircle = {
//   ...circle
// };
// const copy=circle;
// //copy.radius=33;
// clonedCircle.radius=20;
// console.log(circle);

class Circle {
  constructor(radius) {
      this.radius = radius;
  }
  set diameter(value) {
      this.radius = value / 2;
      console.log('SET ', value);
  }
  get diameter() {
      return this.radius * 2;
  }
}

let circle = new Circle(100);

let cloneCircle1 = Object.assign(circle, {
  diameter: 200
});

let cloneCircle2 = {
  ...circle
};
cloneCircle2.diameter=200;
console.log(cloneCircle2);