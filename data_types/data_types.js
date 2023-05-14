
//1.Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

//2.Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
  return str.startsWith("$") ? Number.parseInt(str.slice(1)) : "";
}
console.log(extractCurrencyValue("$120"));
console.log("0".charCodeAt());
console.log("x".localeCompare("hello"));
const arr = [];
arr[12] = "hello";
console.log(arr.length);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array);
array.push(function (params) {
  console.log(this);
});
console.log(array.length);
array[10]();

/*Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/
function sumInput() {
  const array = [];
  while (true) {
    let input = prompt("enter digit");
    if (input === null || input === "" || isNaN(input)) break;
    array.push(+input);
  }
  return array.reduce((acc, cur) => acc + cur, 0);
}
//? use a.localCompare(b) in sort() method for greater accuracy
let countries = ["Österreich", "Andorra", "Vietnam"];
console.log(countries.sort((a, b) => a.localeCompare(b)));

//! throw type Error because there is no initial value!!!
//console.log([].reduce((a,b)=>a+b));

//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//То есть дефисы удаляются, а все слова после них получают заглавную букву.
function camelize(str) {
  return str
    .split("-")
    .map((string, i) =>
      i === 0
        ? string
        : string
            .split("")
            .map((char, i) => (i === 0 ? char.toUpperCase() : char))
            .join("")
    )
    .join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));

//Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
//Функция должна возвращать новый массив и не изменять исходный.
const arr1 = [5, 3, 8, 1];
function filterRange(arr1, minValue, maxValue) {
  return arr1.filter((el) => el >= minValue && el <= maxValue);
}
console.log(filterRange(arr1, 1, 4));
console.log(arr1);

//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//Функция должна изменять принимаемый массив и ничего не возвращать.
function filterRangeInPlace(arr, minValue, maxValue) {
  const arrCopy = arr;
  arrCopy.forEach((element) => {
    if (element < minValue || element > maxValue) {
      arr.splice(arr.indexOf(element), 1);
    }
  });
}
filterRangeInPlace(arr1, 1, 4);
console.log(arr1);

//Сортировать в порядке по убыванию
let arr2 = [5, 2, 1, -10, 8];
console.log(arr2.sort((a, b) => b - a));

//У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
//Создайте функцию copySorted(arr), которая будет возвращать такую копию.
let arrStrings = ["HTML", "JavaScript", "CSS"];
function copySort(arrStings) {
  return [...arrStings].sort();
}
console.log(copySort(arrStrings));
console.log(arrStrings);

//Создать расширяемый калькулятор
class Calculator {
  operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  calculate(string) {
    const [leftOpernd, operation, rightOpernd] = string.split(" ");
    if (!this.operations[operation] || isNaN(leftOpernd) || isNaN(rightOpernd))
      return NaN;
    return this.operations[operation](+leftOpernd, +rightOpernd);
  }
  addOperation(name, fun) {
    this.operations[name] = fun;
  }
}
const calculator = new Calculator();
console.log(calculator.calculate("4 + 3"));
calculator.addOperation("*", (a, b) => a * b);
console.log(calculator.calculate("4 * 3"));

//Трансформировать в массив имён
//У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users1 = [vasya1, petya1, masha1];
let names = users1.map((name) => name.name);
console.log(names);

//Трансформировать в объекты
//У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
//Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];
const usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));
// users.forEach(user =>{
//   usersMapped.push({fullName:`${user.name} ${user.surname}`,id:user.id});
// });
console.log(usersMapped);

//Отсортировать пользователей по возрасту
//Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr22 = [vasya2, petya2, masha2];
// function sortByAge(arr) {
//   return arr.sort((a, b) => {
//     if (a.age < b.age) return -1;
//     if (a.age > b.age) return 1;
//     if (a.age === b.age) return 0;
//   });
// }
const sortByAge = (arr) => arr.sort((a, b) => (a.age > b.age ? 1 : -1));
console.log(sortByAge(arr22));

//Перемешайте массив
//Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
//simple array shuffle
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
//using method Fisher-Yates shuffle
function shuffle2(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
const arrNums = [1, 2, 3, 4];
shuffle2(arrNums);
console.log(arrNums);

//Получить средний возраст
//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
let vasya33 = { name: "Вася", age: 25 };
let petya33 = { name: "Петя", age: 30 };
let masha33 = { name: "Маша", age: 29 };

let arr33 = [vasya33, petya33, masha33];
function getAverageAge(users) {
  return users.reduce((acc, user) => acc + user.age, 0) / users.length;
}
console.log(getAverageAge(arr33));

//Оставить уникальные элементы массива
//Пусть arr – массив строк.
//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique(strings));

//Создайте объект с ключами из массива
//Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
//Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
let users11 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];
function groupById(users) {
  return users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
}
console.log(groupById(users11));

//iterable object first variant
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return {
        done: false,
        value: this.current++,
      };
    } else {
      return { done: true };
    }
  },
};

for (let value of range) {
  console.log(value);
}
// iterable object second variant
const range2 = {
  from: 1,
  to: 6,
};
range2[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      return this.current <= this.last
        ? { done: false, value: this.current++ }
        : { done: true };
    },
  };
};
for (let elem of range2) {
  console.log(elem);
}
//Array.from()
console.log(Array.from(range2, (value) => value * 2));
const someArray = [1, 3, 4, 5, 6];
const doubleArray = Array.from(someArray, (num) => num * 2);
console.log(someArray);
console.log(doubleArray);

//Map
const map = new Map();
map.set("str", "hello");
map.set(1, 1);
map.set({ name: "bob" }, "bob");

console.log(map.size);

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук", 50],
]);

for (let item of recipeMap.entries()) {
  console.log(item);
}
recipeMap.forEach((item, key) => {
  console.log(item, key);
});

//Фильтрация уникальных элементов массивa
//Допустим, у нас есть массив arr.
//Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
const unique2 = (values) => [...new Set(values)];
console.log(unique2(values));

//Отфильтруйте анаграммы
//Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
let arrNew2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
  const map = new Map();
  for (const item of arr) {
    const sortedItem = [...item.toLowerCase()].sort().join("");
    map.set(sortedItem, item);
  }
  console.log(map.values());
  return Array.from(map.values());
}
console.log(aclean(arrNew2));

//Перебираемые ключи
//Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
let map11 = new Map();

map11.set("name", "John");

let keys = Array.from(map11.keys());
keys.push("more");
console.log(keys);

//WeakMap
let john = { name: "John" };
const arrayNames = [john];
john = null;
console.log(john);
console.log(arrayNames.at(0));

const weakMap = new WeakMap();
let bob = { name: "bob" };
let emptyObj = {};
weakMap.set(emptyObj, "some value");
console.log(weakMap.has(emptyObj));
//! if delete emptyObj then it automatically is removed from weakMap
//emptyObj=null;
console.log(weakMap.has(emptyObj));
console.log(weakMap.get(bob));

//Хранение отметок "не прочитано"
//Есть массив сообщений:
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];
//У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.
//Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.

//since weakSet store only unique data, the message can only get into it once
//so all messages in weakSet are read
const readMessages = new WeakSet(messages);
readMessages.add(messages[0]);
console.log(readMessages);
console.log(readMessages.has(messages[2]));
//messages.pop();
console.log(readMessages.has(messages[2]));
//this property automatically appears in weakSet
let isRead = Symbol("isRead");
messages[0][isRead] = true;
console.log(messages);

//есть тот же массив объектов сообщений. Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
const readMessagesMap = new WeakMap();
messages.forEach((message) => readMessagesMap.set(message, new Date()));
console.log(readMessagesMap);

console.log([3, 4, 5, 6].entries());

//Object.keys(),.values(),entries()
let user = {
  name: "John",
  age: 30,
};
console.log(Object.entries(user));
//Например, у нас есть объект с ценами, и мы хотели бы их удвоить:
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};
function doDoubleProperties(obj) {
  return Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
}
console.log(doDoubleProperties(prices));
console.log(prices);

//Сумма свойств объекта
//Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
//Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
//Если объект salaries пуст, то результат должен быть 0.
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((acc, val) => acc + val, 0);
}
console.log(sumSalaries(salaries));
//Подсчёт количества свойств объекта
//Напишите функцию count(obj), которая возвращает количество свойств объекта:
const count = (obj) => Object.values(obj).length;
console.log(count(salaries));

//cache
const cache = new Map();
function makeHardActions(obj) {
  let start = Date.now();
  console.log("start", start);
  if (!cache.has(obj)) {
    let hardAction = [];
    for (let i = 0; i < 100000000; i++) {
      hardAction = i;
    }
    cache.set(obj, hardAction);
  }
  var currentTime = Date.now();

  console.log("current time", currentTime);
  console.log("time", currentTime - start);
  return cache.get(obj);
}
const someObj = { some: "object" };
console.log(makeHardActions(someObj));
console.log(makeHardActions(someObj));

//destructuring assignment
const userNew = {};
[userNew.name, userNew.email, userNew.age] = ["bob", "forest@mail.com", 34];
console.log(userNew);
let options = {
  title: "Menu",
  width: undefined,
};
//переименовал свойство и присвоил ему значение по умолчанию,если его нет в объекте. Новые свойства,типа width and height вообще не имеют никакого отношения к текущему объекту options
const { title: t = "hello", width2 } = options;
console.log(options); //{title: 'Menu', width: undefined}
let options2 = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};
//как только я захожу внутрь свойства size, то size уже не переменная
const {
  size: { width, height },
  items,
} = options2;
//а здесь у меня уже есть переменная size
const { size } = options2; //{width: 100,height: 200}
console.log(width, height, items); //100 200 (2) ['Cake', 'Donut']

//У нас есть объект:

let user00 = {
  name: "John",
  years: 30,
};
//Напишите деструктурирующее присваивание, которое:
//свойство name присвоит в переменную name.
//свойство years присвоит в переменную age.
//свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
const { name, years: age, isAdmin = false } = user00;
console.log(name, age, isAdmin);

//У нас есть объект salaries с зарплатами:

let salaries00 = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
function topSalary(salaries) {
  const maxSalary = Math.max(...Object.values(salaries));
  for (const [key, value] of Object.entries(salaries00)) {
    if (value === maxSalary) {
      return key;
    }
  }
}
console.log(topSalary(salaries00));

//DATE
console.log(new Date("2022-01-25"));
console.log(new Date(2011, 0, 1));
console.log(new Date().getTime());
console.log(new Date().getTimezoneOffset());
const date = String(new Date());
console.log(date);
console.log(Date.parse(date));
let options000 = {
  title: "My menu",
  items: ["Item1", "Item2"],
};
function showMenu00({
  title = "some name",
  items = [],
  width = 100,
  height = 200,
}) {
  console.log(`${title} ${items} ${width} ${height}`);
}
showMenu00(options000);
//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
console.log(new Date(2012, 1, 20, 3, 12));

//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
let date0 = new Date(2012, 0, 3); // 3 января 2012 года
console.log(typeof date0);
function getWeekDay(date) {
  const weekDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return weekDays[date.getDay()];
}
console.log(getWeekDay(date0));
//В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
function getLocalDay(date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}
console.log(getLocalDay(date0));
let today = new Date();

today.setMonth(0);
today.setFullYear(2020);
console.log(today); // выводится сегодняшняя дата, но значение часа будет 0

today.setHours(0, 0, 0, 0);
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:
//P.S. Функция не должна изменять переданный ей объект date.
let date00 = new Date(2015, 0, 2);

function getDateAgo({ date, days }) {
  //make copy so not mutate input date
  const dateCopy = new Date(date);
  //установил результат вычислений: текущий день минус количество дней из параметра ф-ции

  console.log(dateCopy);
  dateCopy.setDate(date.getDate() - days);
  //вернул день текущего месяца
  return dateCopy.getDate();
}
console.log(getDateAgo({ date: date00, days: 2 }));
console.log(date00);

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
function getLastDayOfMonth({ year, month }) {
  //передавая третьим параметром ноль - это означает,что передаю нулевой день,а это предыдущий день текущего месяца и объект дата сам вычислит результат
  const date = new Date(year, month + 1, 0);
  //date.setDate(date.getDate() - 1);
  return date.getDate();
}
console.log(getLastDayOfMonth({ year: 2013, month: 1 }));

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
function getSecondsToday() {
  const date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}
getSecondsToday();

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
function getSecondsToTomorrow() {
  //first variant of solution
  // const date = new Date();
  // const daySeconds = 24 * 3600;
  // const currentSeconds =
  //   date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  // return daySeconds - currentSeconds;
  //second variant of solution
  const now = new Date();
  console.log(now);
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  console.log(tomorrow);
  return Math.round((tomorrow - now) / 1000);
}
console.log(getSecondsToTomorrow());
//get current date from beginning
const date000 = new Date();
const now = new Date(
  date000.getFullYear(),
  date000.getMonth(),
  date000.getDate()
);
console.log(now); //Fri May 12 2023 00:00:00 GMT+0300 (Moscow Standard Time)

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
function formatDate(date) {
  //in ms
  const difference = new Date() - date;

  if (difference <= 1000) {
    return "right now";
  }
  const sec = Math.floor(difference / 1000);

  if (sec < 60) {
    return `${sec} seconds ago`;
  }
  const minutes = sec / 60;
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  //формат "DD.MM.YY HH:mm"
  let modifyDate = [
    "0" + date.getDate(),
    "0" + (date.getMonth() + 1),
    "" + date.getFullYear(),
    "0" + date.getHours(),
    "0" + date.getMinutes(),
  ].map((elem) => (elem.length >= 4 ? elem : elem.slice(-2)));

  return (
    modifyDate.slice(0, 3).join(".") + " " + modifyDate.slice(-2).join(":")
  );
}
console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

//! JSON

//ручной вариант преобразования объекта в примитив( строку)
const user000 = {
  name: "bob",
  age: 34,
  toString() {
    return `name:${this.name},
    age: ${this.age}`;
  },
};
//alert(user000);
const id = Symbol("id");
let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
  //методы JSON не видит methods,undefined,Symbols
  sum(a, b) {
    return a + b;
  },
  value: undefined,
  [id]: "some value",
};
const stringStudent = JSON.stringify(student);
console.log(stringStudent);
console.log(JSON.stringify("hello world"));
//получается,что ф-цию преобразовать в JSON нельзя
function sum(a, b) {
  return a + b;
}
console.log(JSON.stringify(sum));
console.log(JSON.stringify(43345345));
console.log(JSON.stringify(null));
const value = null;
console.log(JSON.stringify(value));
console.log(JSON.stringify([4, 5, 6, 7]));
//мы можем настраивать свойства,которые хотим сериализировать
let room = {
  number: 23,
  windows: {
    one: 1,
    two: 2,
  },
  //благодаря этому методу мы можем настроить ссылочный объект так, чтобы в JSON попадали только нужные нам данные. В данном случае, попадет только свойство windows,а number нет.
  toJSON() {
    return this.windows;
  },
};
let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  date: new Date(Date.UTC(2017, 0, 1)),
  place: room, // meetup ссылается на room
};
//массив в качестве replacer для нужных свойств
//console.log(JSON.stringify(meetup,['title','participants','place','number']));
//циклическая ссылка,которая ломает процесс форматирования
room.occupiedBy = meetup; // room ссылается на meetup
// функция в качестве replacer,в которой указываю свойства,которые не нужны в JSON
console.log(
  JSON.stringify(
    meetup,
    function (key, value) {
      return key == "occupiedBy" || key === "title" ? undefined : value;
    },
    1
  )
); //{"participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}

// так выглядит JSON формат после применения JSON.stringify()
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
const meetupToString = JSON.stringify(meetup, null, 1);
console.log("JSON", meetupToString);
const res2 = JSON.parse(meetupToString, function (key, value) {
  return key === "date" ? new Date(value) : value;
});
console.log(res2.date.getMonth());
let res = JSON.parse(str, (key, value) =>
  key === "date" ? new Date(value) : value
);
//! months start with 0
console.log(res.date.getDay() + 1);

//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
let user7 = {
  name: "Василий Иванович",
  age: 35,
};
const user7Json = JSON.stringify(user7);
console.log(user7Json);
const parsedUser7 = JSON.parse(user7Json);
//по сути мы скопировали объект
console.log(parsedUser7 === user7Json);

// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
let room0 = {
  number: 23,
};

let meetup0 = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room0,
};

// цикличные ссылки
room0.occupiedBy = meetup0;
meetup0.self = meetup0;

console.log(room0);
console.log(meetup0);
const meetup0Json = JSON.stringify(
  meetup0,
  (key, value) => (key !== "" && value === meetup0 ? undefined : value),
  1
);
console.log(meetup0Json);
