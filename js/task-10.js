function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", onCreateBtnClick);
btnDestroy.addEventListener("click", () => (boxes.innerHTML = ""));

function onCreateBtnClick() {
  const amount = +input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);

    size += 10;
  }
}
