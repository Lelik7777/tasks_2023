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


