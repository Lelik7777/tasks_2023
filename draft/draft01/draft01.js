console.log("hello from draft01.js");
const obj = { name: "bob", age: 33 };
Object.defineProperty(obj, "age", { value: 44, enumerable: true });
console.log(obj);

const btns = document.querySelectorAll(".button");

function changeFontSize(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}
const size12 = changeFontSize(12);
const size14 = changeFontSize(14);
const size16 = changeFontSize(16);
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(e.target.id);
    if (e.target.id === "size12") {
      size12();
    }
    if (e.target.id === "size14") {
      size14();
    }
    if (e.target.id === "size16") {
      size16();
    }
  });
});
console.log("hello");
console.log("heol");
const a = 10 + 10;
a;
