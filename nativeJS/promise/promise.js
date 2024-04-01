let result;

const prom = new Promise((resolve, reject) => {
  //имитация запроса на сервак и получение данных от него
  setTimeout(
    response => {
      if (response.httpStatus >= 200 && response.httpStatus < 400) {
        //после resolve() код выполняется
        // data, которые положили в resolve() перебрасываются дальше и мы их можем в дальнейшем получить через метод then()
        // resolve() всегда получает только один аргумент
        resolve(response.data);
        console.log(prom);
      } else {
        reject(response.error);
      }
    },
    2000,
    {
      httpStatus: 200,
      data: { user: "bob", status: "active", id: 111 },
      error: {},
    },
  );
});
//метод then принимает два callbacks - первый отвечает за resolve and second for reject
prom
  .then(
    //нужно помнить, что в конструкторе промиса и в методе then разные области видимости, поэтому, если нам нужно что-то из области видимости конструктора промиса, то тогда в нем создаем объект и передаем его параметром в resolve() и тогда получим его в then()
    res => {
      const { user, status, id } = res;
      console.log(user, status, id);

      // это означает, что данный метод возвращает новый промис в состоянии resolved, и в следующий then влетит id в качестве параметра res
      return id;
    },
    rej => console.log(rej),
  )
  .then(res => {
    result = res;
    console.log(res); // увидим 111

    //имитирую снова запрос, но уже с данными из первого запроса в виде id
    return new Promise((resolve, reject) => {
      //имитация второго запроса на сервак и получение данных от него
      setTimeout(
        response => {
          if (
            response.httpStatus >= 200 &&
            response.httpStatus < 400
          ) {
            resolve(response.data);
            console.log(prom);
          } else {
            reject(response.error);
          }
        },
        3000,
        {
          httpStatus: 200,
          data: { users: ["tom", "nick", "ket"] },
          error: {},
        },
      );
    });
  })
  .then(res => console.log("res2", res));
//result - это глобальная переменная
console.log(result); //undefined, поскольку движок сначала выполняет весь синхронный код

const promWithError = new Promise((resolve, reject) => {
  setTimeout(
    response => {
      if (response.httpStatus >= 200 && response.httpStatus < 400) {
        resolve(response.data);
        console.log(prom);
      } else {
        reject(response.error);
      }
    },
    2000,
    {
      httpStatus: 404,
      data: { user: "bob", status: "active", id: 111 },
      error: "not found",
    },
  );
});
//метод then принимает два callbacks - первый отвечает за resolve and second for reject
promWithError
  // это catch слушает возможные ошибки в конструкторе промиса
  .catch(err => {
    console.log(err);
  })
  .then(
    //этот не отрабатывает, поскольку ошибка и вызовется rej
    res => {
      const { user, status, id } = res;
      console.log("res1 when error", user, status, id);
    },
    // это callback ловит ошибки только те,которые выше текущего then(), если ошибка упадет в строчка с 91 по 94 он ее не увидит
    rej => console.log("reject promise:", rej), // увидим эту консоль
  )
  .then(res => console.log("res2 when error", res)) // но также увидим и эту консоль!!!
  //строки 105-107 и 108 полностью одинаковы, обычно ипользуют catch
  //   .then(null, err => {
  //     console.log(err);
  //   })
  .catch(err => console.log(err));
//Если нам нужно слушать ошибки после каждого then(), то catch() ставим после каждого then()

//Если нужно делать несколько запросов, то необходимо их делать через return

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.json())
  .then(res => {
    console.log(res);
    return fetch("https://jsonplaceholder.typicode.com/todos/2");
  })
  .then(res => res.json())
  .then(res => console.log(res));

console.log("START"); //1
//асихронность самого промиса
// САМ конструктор промиса сихронен
const prom2 = new Promise((resolve, reject) => {
  console.log("start promise"); //2
  setTimeout(
    response => {
      console.log("start setTimeout"); //5
      if (response.httpStatus >= 200 && response.httpStatus < 400) {
        resolve(response.data);
      } else {
        reject(response.error);
      }
    },
    2000,
    {
      httpStatus: 200,
      data: { user: "TOM", status: "active", id: 111 },
      error: {},
    },
  );
  console.log("end promise"); //3
});
console.log("MIDDLE"); //4
//здесь мы отдаем методу then callback console.log, в который влетит результат ,что и отобразиться в консоли!!!
prom2.then(console.log); //6
//все это означает, что вначале выполняется весь синхронный код:122, 126,143,145,147 строчки и другие, если они ниже есть и только после их выполнения отработает строчка 129, а уже за ней и 147
