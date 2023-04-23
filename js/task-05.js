// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const textInput = document.querySelector("#name-input");
const textOuput = document.querySelector("#name-output");
const initialText = textOuput.textContent;

textInput.addEventListener("input", (event) => {
  if (textInput.value.trim() !== '') {
    textOuput.textContent = event.currentTarget.value.trim();
  } else {
   textOuput.textContent = initialText;
  }
});
