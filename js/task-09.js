function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const nameColor = document.querySelector(".color");
const onClickBtnChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");

const changeColor = () => {
  const color = getRandomHexColor();
  nameColor.textContent = color;
  body.style.backgroundColor = color;
};
onClickBtnChangeColor.addEventListener("click", changeColor);
