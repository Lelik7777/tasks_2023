//'use strict';
console.log("hello form function");
//не станет свойством объекта window
const globalConst = "global constants";
let getGlobalArrow = () => {};

//станут свойствами объекта window
var globalValue = "global";
var globalFun = () => {};
function getGlobalValueCustom(params) {}

//! FUNCTION AS OBJECT=== first class function -get another function as parameter

function logger(price) {
  console.log(price);
}
logger(45); //45
logger("$" + 40); //$40;

//данная ф-ция делает тоже самое,что и на 16 строчке
function updatePrice(fun, currency) {
  function changePrice(price) {
    return fun(currency + price);
  }
  return changePrice;
}

const res = updatePrice(logger, "$");
//знак доллара берется из замыкания,также в замыкании находится function logger
res(50); //$50;

//! данный пример показывает,что hoisting ф-ции происходит выше чем у переменной, поскольку иначе было бы undefined,а дальше просто происходит переназначение переменной pie,поэтому в 35 строчке видим lemon
//! данный пример не будет работать,если использовать let,поскольку выбросит ошибку: SyntaxError: Identifier 'pie' has already been declared
console.log(pie); //pie(params) {}
var pie = "lemon";
function pie(params) {}
console.log(pie); //lemon

//! PASSING OBJECTS IN FUNCTIONS
function cookPie(pieOptions) {
  console.log("#cookPie:0", pieOptions);
  // pieOptions - это просто очередная ссылка на объект,поэтому мы можем ее переназначить,как в строке 45,но если изменим свойства объекта,как в 42 строке,то это глобально изменит объект!!
  pieOptions.type = "choco";
  console.log("#cookPie:1", pieOptions);

  pieOptions = {};
  console.log("#cookPie:2", pieOptions); //{}
}

const options = { type: "lemon", radius: 30, slice: true };

cookPie(options);
console.log("#global:0", options); //{type: 'choco', radius: 30, slice: true}

//! лишние аргументы ингорируются, но попадают в псевдомассив arguments
function cookPie(type, radius, slice) {
  console.log(arguments); //Arguments(5) ['lemon', 21, true, 'extra', 'args', callee: ƒ, Symbol(Symbol.iterator): ƒ]
  for (let item of arguments) {
    console.log(item);
  }
  console.log("#cookPie:0", type, radius, slice);
}
cookPie("lemon", 21, true, "extra", "args");

//! RETURNING VALUES FROM FUNCTION
function returnPieType(n) {
  if (n === 0) {
    return "lemon";
  }
  if (n === 1) {
    return;
  }
  if (n === 2) {
  }
  if (n === 3) {
    this.type = "choco";
  }
}

console.log(returnPieType(0));
console.log(returnPieType(1));
console.log(returnPieType(2));
//в этом случае вернет объекта,поскольку оператор new
console.log(new returnPieType(3));

//! function as data
function cookPie(type, radius, slice) {
  console.log("#cookPie:0", type, radius, slice);
}
//мы положили ф-цию в массив
const pieFlow = [["lemon", "pipe"], cookPie];
//а здесь ее вызвали,взяв из массива
pieFlow[1]("lemon", 42, false);

cookPie.oven = "oven#1";
//здесь мы ф-цию положили в свойство объекат
const lemonPie = {
  type: "lemon",
  cook: cookPie,
};
console.log(lemonPie);

//! FUNCTION AS DATA

//callCounter - это ф-ция обертка,функция декоратор - она принимает ф-цию и возвращает другую ф-цию

function callsCounter(fun) {
  //так как ф-ция - это объект,то мы можем создавать для нее свойства
  fun.counter = 0;
  return function (...arg) {
    //каждый раз,как вызывается ф-ция fun, счетчик увеличивается(берется из замыкания, также как и сама ф-ция fun)
    fun.counter++;
    // возвращаем вызов ф-ции fun. Таким образом вызов ф-ции обертки callCounter будет автоматически вызывать ф-цию параметр fun и при этом будет происходить подсчет этих вызовов
    return fun(...arg);
  };
}
const sum = (a, b) => console.log(a + b);
const countSum = callsCounter(sum);
countSum(2, 3);
countSum(5, 6);
countSum(6, 2);
console.log("call sum:", sum.counter);

function showPrice(price) {
  console.log(price);
}
function getCurrency(fun, currency) {
  function changePrice(price) {
    console.log(currency + price);
  }
  return changePrice;
}
const currency = getCurrency(showPrice, "USD");
currency(34);

//! THIS

const lemonPie0 = {
  type: "lemon",
  cookPie: function () {
    console.log(this);
  },
};

lemonPie0.cookPie();

const cookPie0 = lemonPie0.cookPie;

cookPie0();

// ! CALL()
function cookPie() {
  console.log("#cookPie", this.type, this.radius);
}
const chocoPie = { type: "choco", radius: 17 };
//здесь я привязываю контекст ф-ции cookPie к объекту chocoPie
cookPie.call(chocoPie);

function cookPie2(radius, slice) {
  console.log("#cookPie", this.type, radius, slice);
}
const lemonPie2 = { type: "lemon", radius: 9 };
// здесь тоже самое,что и в 153 строчке, только еще добавляются аргументы для ф-ции cookPie2. Исходный объект при этом не меняется
cookPie2.call(lemonPie2, 14, false);
console.log(lemonPie2);

//todo example encheritance  constructor functions
function Product(name, price) {
  this.name = name;
  this.price = price;
  if (price < 0) {
    throw RangeError("price must be more than zero");
  }
}
function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}
const toys = new Product("toys", 3);
const cheese = new Food("feta", 4);
console.log("cheese", cheese);

//! BIND()

function cookPie3(radius, slice) {
  console.log("#cookPie", this.type, radius, slice);
}

const lemonPie3 = { type: "lemon", radius: 9 };

const cookLemonPie = cookPie3.bind(lemonPie3);
cookLemonPie(47, true);
//Number.MAX_SAFE_INTEGER - это будет параметр по умолчанию,поэтому при вызове новой ф-ции указывается только второй параметр slice
const cookHugeLemonPie = cookPie3.bind(lemonPie3, Number.MAX_SAFE_INTEGER);
cookHugeLemonPie(false);
console.log(Number.MAX_SAFE_INTEGER);

// bind works only once
function f() {
  return this.a;
}

var g = f.bind({ a: "azerty" });
console.log(g()); // azerty

var h = g.bind({ a: "yoo" }); // bind only works once!
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty

//! IIFE
//таким образом я создал приватное свойство
const lemonPieNew = {
  radius: 4,
  cook: (function () {
    const type = "lemon";
    return function () {
      console.log("cook", type, this.radius);
    };
  })(),
};

console.log(lemonPieNew);
lemonPieNew.cook();

//todo example IIFE and call()

const animals = [
  { type: "cat", name: "tom" },
  { type: "dog", name: "polcan" },
];
for (let i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log(`#${i} ${this.type}:${this.name}`);
    };
    this.print(i);
  }).call(animals[i], i);
}

//!  LEXICAL SCOPE
//данный пример явно показывает,что ф-ция showObj обладает статической областью видимостью(ее scope формируется в момент создания,объявления ф-ции,а не в момент вызова),а this - определяется динамически, в момент вызова, т.е. реализует динамический scope
const obj = { name: "bob" };
function showObj() {
  console.log("obj", obj);
  console.log(this);
}
function showAnothing() {
  const obj = { name: "tom" };
  showObj.call(obj);
}
showAnothing();

//! ARROW FUNCTIONS

const show = () => console.log(this.name, this.age);
function show2() {
  console.log(this.name, this.age);
}
const man = {
  name: "nick",
  age: 44,
  show,
  show2,
};
man.show();
man.show2();

const pies = [
  { type: "lemon", radius: 1 },
  { type: "choco", radius: 4 },
  { type: "lemon", radius: 2 },
];
console.log(
  pies
    .filter((pie) => pie.radius > 2)
    .map((pie) => ({ type: pie.type, crashed: true }))
);
//!CLOUSER
function cookPie(index) {
  console.log("#cookPie", index);
}
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    cookPie(i);
  }, i);
}

//example using clouser
// body {
//   font-family: Helvetica, Arial, sans-serif;
//   font-size: 12px;
// }

// h1 {
//   font-size: 1.5em;
// }

// h2 {
//   font-size: 1.2em;
// }
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
// document.getElementById("size-12").onclick = size12;
// document.getElementById("size-14").onclick = size14;
// document.getElementById("size-16").onclick = size16;

// Copy to Clipboard
// <a href="#" id="size-12">12</a>
// <a href="#" id="size-14">14</a>
// <a href="#" id="size-16">16</a>

// создание приватных методов с помощью замыкания

function makeCounter() {
  let counter = 0;
  function changeCounter(value) {
    counter += value;
  }
  return {
    increment() {
      changeCounter(1);
    },
    decrement() {
      changeCounter(-1);
    },
    getCounter() {
      return counter;
    },
  };
}
const counter1 = makeCounter();
const counter2 = makeCounter();
counter1.increment();
counter1.increment();
console.log(counter1.getCounter());
console.log(counter2.getCounter());

//example clouser in loop with error

const showText = (text) => (document.getElementById("help").textContent = text);

const setupHelp = () => {
  const messages = [
    { id: "email", message: "enter email address" },
    { id: "name", message: "enter your name" },
    { id: "age", message: "enter your age" },
  ];
  messages.forEach((message) => {
    document.getElementById(message.id).addEventListener("focus", () => {
      showText(message.message);
    });
  });
};
setupHelp();

//этот пример демонстрирует тот факт,что ф-ция получает актуальные,последние значения переменной.
let customName = "John";

function sayHi() {
  console.log("Hi, " + customName);
}

customName = "Pete"; // (*)
sayHi();
//! нельзя объявлять,поскольку уже есть переменная с таким именем в function2.js
//const global = "global";

//1.
function Counter() {
  //let count = 0;
  this.count = 0;

  this.up = function () {
    return ++this.count;
  };
  this.down = function () {
    return --this.count;
  };
}

let counter = new Counter();
console.log(counter.up());
console.log(counter.up());

//2.Сумма с помощью замыканий

// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4
function getSum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(getSum(5)(-2));

//3. Фильтрация с помощью функции
важность: 5;
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
let arr000 = [1, 2, 3, 4, 5, 6, 7, 8];
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}
console.log(arr000.filter(inBetween(2, 6)));
console.log(arr000.filter(inArray([1, 5])));

//4. Сортировать по полю
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
//Обычный способ был бы таким:

// по имени (Ann, John, Pete)
//users.sort((a, b) => (a.name > b.name ? 1 : -1));

// по возрасту (Pete, Ann, John)
//users.sort((a, b) => (a.age > b.age ? 1 : -1));
//Можем ли мы сделать его короче, например вот таким?

function byField(fild) {
  return function (a, b) {
    return a[fild] > b[fild] ? 1 : -1;
  };
}
users.sort(byField("name"));
console.log(users);
users.sort(byField("age"));

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function (i) {
      // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
//! RECURSION

// функция,которая возводит число в степень n
const pow = (number, degree) => {
  let result = 1;
  for (let i = 0; i < degree; i++) {
    result *= number;
  }
  return result;
};

const powRecursive = (number, degree) =>
  degree > 1 ? number * powRecursive(number, degree - 1) : number;
console.log(pow(2, 3));
console.log(powRecursive(2, 4));

//обход объекта посредством рекурсии
let company = {
  // тот же самый объект, сжатый для краткости
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};
const getSalary = (obj) => {
  if (Array.isArray(obj)) {
    return obj.reduce((acc, cur) => acc + cur.salary, 0);
  } else {
    let sum = 0;
    for (let elem of Object.values(obj)) {
      sum += getSalary(elem);
    }
    return sum;
  }
};
console.log(getSalary(company));

//1.Вычислить сумму чисел до данного

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
const sumTo = (number) => {
  let sum = 0;
  for (let i = 0; i <= number; i++) sum += i;
  return sum;
};
const sumToRecursive = (number) =>
  number > 1 ? number + sumToRecursive(number - 1) : number;
console.log(sumTo(100));
console.log(sumToRecursive(100));

//2. Вычислить факториал

// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
const fuctorial = (number) => (number > 1 ? number * fuctorial(number - 1) : 1);
console.log(fuctorial(5));

//3. Числа Фибоначчи

// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
const fib = (number) =>
  number < 2 ? 0 : number == 2 ? 1 : fib(number - 1) + fib(number - 2);
const nthFibo = (number) => {
  let [prev, cur] = [0, 1];
  for (let i = 1; i < number; i++) {
    [prev, cur] = [cur, prev + cur];
  }
  return prev;
};
//console.log(fibCicle(4));
console.log(fib(3));
console.log(nthFibo(4));

//4. Вывод односвязного списка

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.

const printList = (list) => {
  let temp = list;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
};
const printList2 = (list) => {
  console.log(list.value);
  if (list.next) {
    printList2(list.next);
  }
};
printList(list);
printList2(list);

//.5 Вывод односвязного списка в обратном порядке
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

const reversePrintList = (list) => {
  if (list.next) reversePrintList(list.next);
  console.log(list.value);
};
reversePrintList(list);

const reversePrintList2 = (list) => {
  const arr = [];
  let temp = list;
  while (temp) {
    arr.push(temp.value);
    temp = temp.next;
  }
  arr.reverse().forEach((value) => console.log(value));
};
reversePrintList2(list);

//Установка и уменьшение значения счётчика

// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

const makeCounter0 = () => {
  let count = 0;
  function counter() {
    return ++count;
  }
  counter.set = (value) => (count = value);
  counter.decrease = () => --count;
  return counter;
};
const counter00 = makeCounter0();
console.log(counter00.set(10));
console.log(counter00());
console.log(counter00());
console.log(counter00());
console.log(counter00.decrease());
function Counter11() {
  this.count = 0;
  this.up = function () {
    return ++this.count;
  };
  this.down = function () {
    return --this.count;
  };
}
const counter11 = new Counter11();
console.log(counter11.up());
console.log(counter11.down());
const sumNew = (a) => {
  let innerSum = a;
  function fun(b) {
    innerSum += b;
    return fun;
  }
  fun.toString = () => innerSum;
  fun.getRes = () => innerSum;
  return fun;
};
console.log(sumNew(2)(4)(4).getRes());

//! SETINTERVAL and SETTIMEOUT

let timeId = setInterval(() => console.log("tick from setInterval"), 5000);
setTimeout(() => clearInterval(timeId), 11000);

//вариант интервального вызова,но с использованием вложенных setTimeout()
let count = 0;
let timerId1 = setTimeout(function tick() {
  console.log("tick");
  count++;
  timerId1 = setTimeout(tick, 2000);
  if (count === 10) clearTimeout(timerId1);
}, 2000);

setTimeout(function tick() {
  console.log("tick from setTimeout");
}, 3000);

//1. Вывод каждую секунду

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.
function printNumbers(from, to) {
  let timeId = setInterval(() => {
    console.log(from);
    if (from === to) clearInterval(timeId);
    from++;
  }, 1000);
}
//printNumbers(10,30);
//здесь присутствует задержка в одну секунду,чтобы ее избежать,то ф-цию tick()нужно вынести отдельно и запустить до setTimeout()
function printNumbers2(from, to) {
  // let timeId = setTimeout(function tick() {
  //   console.log(from);
  //   timeId = setTimeout(tick, 1000);
  //   if (from === to) clearTimeout(timeId);
  //   from++;
  // }, 1000);
  let timerId;
  function tick() {
    console.log(from);
    timerId = setTimeout(tick, 1000);
    if (to === from) clearTimeout(timerId);
    from++;

  }
  tick();
}
printNumbers2(5, 20);
