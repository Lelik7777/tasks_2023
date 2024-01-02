const email = document.querySelector("#email");
console.log("email", email);
console.log("email attributes", Array.from(email.attributes));
console.log("email placeholder", email.getAttribute("placeholder"));
Array.from(email.attributes).forEach((element) => {
  if (element.nodeName.toLocaleLowerCase() === "placeholder") {
    element.value = "please enter email";
  }
});
const fruit = document.querySelector("#fruit");
const simpleText = document.querySelector("#simple-text");
const date = document.querySelector("#date");
//console.log("date", date.value);
date.addEventListener("input", function () {
  console.log("date", date.valueAsNumber);
  console.log("date as object", new Date(date.valueAsNumber));
});
// if (email.validity.valueMissing)
console.log("fruit", fruit.validity.valueMissing);
console.log(fruit.validationMessage);
console.log(fruit.willValidate);
console.log(simpleText.willValidate);

console.log(email.validationMessage);
console.log(email.willValidate);
email.addEventListener("input", function () {
  console.log("email", email.validationMessage);
  console.log("email", email.willValidate);
  console.log("email", this.validity);
  console.log("email", email.checkValidity());
  // email.setCustomValidity("неверное значение");
});
simpleText.addEventListener("input", function () {
  console.log("simple", this.validity);
});

console.log("location", location.href);
if (confirm("go to wikipedia")) {
  location.href = "https://wikipedia.org";
}
console.log("fieldset", document.querySelector("fieldset"));

for (const el of document.querySelector("fieldset").children) {
  console.log("el", el);
}
