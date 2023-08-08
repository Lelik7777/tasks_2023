console.log("hello from this.js");
const test = {
  prop: 42,
  func() {
    return this.prop;
  },
};

console.log(test.func());
function f1() {
  return this;
}
// В браузере:
console.log(f1() === globalThis);
console.log(f1() === window);
console.log(window);
console.log(f1.call(test));