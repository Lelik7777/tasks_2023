console.log("hello from draft01.js");
const obj = { name: "bob", age: 33 };
Object.defineProperty(obj, "age", { value: 44, enumerable: true });
console.log(obj);
