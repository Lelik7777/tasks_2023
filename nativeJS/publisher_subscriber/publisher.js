//паттерн - это архитектурный шаблон для решения типовой задачи

// примеры паттерна publisher/subscriber

//1. with promise
//promise.then(function subscriber())// здесь подписываемся на зарезолвленный промис

setTimeout(function subscriber() {}, 1000); // прошла секунда

//button.addEventListener("click", function subscriber() {}); // подписываемся на нажатие кнопки

//subscriber === observer === listener === watcher === handler

// пример рукописной кнопки, здесь кнопка - это publisher(издатель)
const button = {
  // для каждого события свой массив подписчиков
  subscribers: {
    //здесь хранятся подписчики(имена функций) для каждого события
    click: [],
    doubleClick: [],
    onFocus: [],
  },
  // на вызов этого метода вызываются все функции, которые подписанны на данное событие(клик)
  click() {
    this.subscribers["click"].forEach(subscriber => subscriber());
  },
  doubleClick() {
    this.subscribers["doubleClick"].forEach(subscriber =>
      subscriber(),
    );
  },
  onFocus() {
    this.subscribers["onFocus"].forEach(subscriber => subscriber());
  },
  // метод, с помощью которого мы подписываемся на события и пушим функцию,которая подписывается на то или иное событие
  addEventListener(eventName, subscriber) {
    this.subscribers[eventName].push(subscriber);
  },
  //метод,которым мы отписываемся от события
  removeEventListener(eventName, subscriber) {
    this.subscribers[eventName] = this.subscribers[eventName].filter(
      sub => sub !== subscriber,
    );
  },
};
//теперь, когда произойдет клик по кнопке сработает subscriber и в консоле появиться 'show something'
const showSomething = () => {
  console.log("show something");
};
const request = () => {
  console.log("request");
};
//подписываюсь на нажатие кнопки и вешаю showSomething
button.addEventListener("click", showSomething);
button.addEventListener("click", request);
button.click();
//убираю showSomething при нажатии на кнопку
button.removeEventListener("click", showSomething);
console.log("after");
button.click();

//когда у компоненты есть пропсы onClick <MyComponent onClick={subscriber}/>, то в ней реализован паттерн publish/subscriber - мы подписываемся на событие клика и вешаем на него подписчика, который будет вызван в момент клика
