const request = new XMLHttpRequest();
request.open("https://jsonplaceholder.typicode.com/todos/1");
request.send();
request.addEventListener("load", function () {
  console.log(JSON.parse(this.responseText));
});
