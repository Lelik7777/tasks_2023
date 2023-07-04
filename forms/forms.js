let form = document.forms.my;

//console.log(form[0]);
document.querySelectorAll(".form input").forEach((input) => console.log(input));

document
  .querySelectorAll('.form1 input[name="age"]')
  .forEach((input) => console.log(input));

const select = document.querySelector("#genres");

const option = document.createElement("option");
option.value = "classic";
option.textContent = "Классика";
option.setAttribute("selected", true);
select.append(option);

const elementsForm = document.querySelectorAll(".form1 input");
elementsForm.forEach((input) => {
  if (input.matches('input[name="age"]')) {
    console.log("find input with name age");
  }
});
//document.querySelector('#genres').setAttribute('data-id','1234');
document.querySelector("#genres").dataset.id = "134";
console.log(document.querySelector("#genres").dataset.dataId);
console.log(document.querySelector("[data-widget-name]").dataset.widgetName);
console.log(document.querySelectorAll('[href^="http"]'));

document.querySelectorAll("li a").forEach((link) => {
  if (
    link.getAttribute("href").includes("://") &&
    !link.href.startsWith("http://internal.com")
  ) {
    console.log(link);
    link.style.color = "orange";
  }
});
document.querySelector(".list").className = "newList";
