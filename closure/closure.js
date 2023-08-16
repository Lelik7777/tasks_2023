console.log("closure");

function init() {
  var name = "Mozilla"; // name - локальная переменная, созданная в init
  function displayName() {
    // displayName() - внутренняя функция, замыкание
    console.log(name); // displayName() использует переменную, объявленную в родительской функции
  }
  displayName();
}
init();

function makeFunc() {
  var name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();
myFunc();

//modular programming
var Counter = (function () {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(Counter.value()); /* Alerts 0 */

Counter.increment();
Counter.increment();

console.log(Counter.value()); /* Alerts 2 */

Counter.decrement();

console.log(Counter.value()); /* Alerts 1 */


//
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Ваш адрес e-mail" },
    { id: "name", help: "Ваше полное имя" },
    { id: "age", help: "Ваш возраст (Вам должно быть больше 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();

function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function makeHelpCallback(help) {
  return function () {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Ваш адрес e-mail" },
    { id: "name", help: "Ваше полное имя" },
    { id: "age", help: "Ваш возраст (Вам должно быть больше 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
