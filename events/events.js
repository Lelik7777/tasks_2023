console.log("hello from events.js");

document.querySelector(".button-1").addEventListener("click", function () {
  document.querySelector(".text-1").setAttribute("hidden", true);
  this.setAttribute("hidden", true);
} );
//three buttons
class Menu {
  constructor(elem) {
    this.element = elem;
    this.element.addEventListener("click", this.onClick.bind(this));
  }
  save() {
    console.log("save");
  }
  load() {
    console.log("load");
  }
  search() {
    console.log("search");
  }
  onClick(e) {
    const action = e.target.dataset.action;

    if (action) {
      this[action]();
    }
  }
}
new Menu(document.querySelector(".menu"));
//show form
document.addEventListener("click", function (e) {
  if (e.target.dataset.toggleId) {
    document.querySelector("#subscribe-mail").hidden =
      !document.querySelector("#subscribe-mail").hidden;
  }
});

//counter
document.addEventListener("click", function (e) {
  console.log(e.target.dataset.counter);
  if (e.target.dataset.counter !== undefined) {
    e.target.value++;
  }
});
document.querySelector(".input").addEventListener("mousedown", function (e) {
  e.preventDefault();
  console.log(e.defaultPrevented);
});

//images
thumbs.addEventListener("click", function (e) {
  const link = e.target.closest("a");
  if (!link) return;
  console.log(link.href);
  showImage(link.href,link.title);
  e.preventDefault();
});

const showImage = (src, alt) => {
  largeImg.src = src;
  largeImg.alt = alt;
};
