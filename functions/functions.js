console.log("hello form function");
//не станет свойством объекта window
const globalConst = "global constants";
const getGlobalArrow = () => {};

//станут свойствами объекта window
var globalValue = "global";
var globalFun = () => {};
function getGlobalValueCustom(params) {}

//! function as object=== first class function -get another function as parameter

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

//! passing objects to function
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

//! returning value from function
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
// function as data continue
//callCounter - это ф-ция обертка,функция декоратор - она принимает ф-цию и возвращает другую ф-цию

function callsCounter(fun) {
  //так как ф-ция - это объект,то мы можем создавать для нее свойства
  fun.counter = 0;
  return function (...arg) {
    //каждый раз,как вызывается ф-ция fun, счетчик увеличивается
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
