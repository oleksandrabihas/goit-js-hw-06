// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControlInput = document.querySelector("#font-size-control");
const text = document.querySelector('#text')


fontSizeControlInput.addEventListener('input', (event) => {  
    text.style.fontSize = `${fontSizeControlInput.value}px`;
})