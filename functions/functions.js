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

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind only works once!
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
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
  return function() {
    document.body.style.fontSize = size + 'px';
  };
};

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

// Copy to Clipboard
// <a href="#" id="size-12">12</a>
// <a href="#" id="size-14">14</a>
// <a href="#" id="size-16">16</a>

// создание приватных методов с помощью замыкания

