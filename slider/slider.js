const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const createCardTemplate = () => {
  const card = document.createElement("div");
  card.classList.add("card");
  return card;
};

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedItem = ITEM_RIGHT;
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  }

  changedItem.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const card = createCardTemplate();
    card.innerText = Math.floor(Math.random() * 8);
    changedItem.appendChild(card);
  }

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
});

const card = document.querySelector(".card");
let computedStyle = getComputedStyle(card);
console.log(computedStyle.width);

const images = document.querySelectorAll(".images img");
let i = 0;
const bntPrev = document.querySelector(".images__buttons .prev");
const bntNext = document.querySelector(".images__buttons .next");

bntNext.addEventListener("click", function () {
  images[i].className = "";
  i++;
  if (i >= images.length - 1) {
    i = 0;
  }
  images[i].className = "showed";
  setDisabledButton(this, bntPrev);
});
bntPrev.addEventListener("click", function () {
  images[i].className = "";
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  images[i].className = "showed";
  setDisabledButton(this, bntNext);
});
let myTimeout;
const setDisabledButton = (btn1, btn2) => {
  btn1.setAttribute("disabled", true);
  btn2.setAttribute("disabled", true);
  myTimeout = setTimeout(() => {
    btn1.removeAttribute("disabled");
    btn2.removeAttribute("disabled");
  }, 1000);
};
window.onbeforeunload = function (params) {

  clearTimeout(myTimeout);
};
