console.log("hello from events.js");

document.querySelector(".button-1").addEventListener("click", () => {
  document.querySelector(".text-1").setAttribute("hidden", true);
});
