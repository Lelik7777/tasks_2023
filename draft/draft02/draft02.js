const content = document.querySelector(".content");
const dateInput = document.querySelector("#date");

dateInput.addEventListener("input", function () {
  console.log(``, new Date(this.valueAsNumber));
});
