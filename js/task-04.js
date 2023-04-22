// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const value = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]'); 
const incrementBtn = document.querySelector('button[data-action="increment"]'); 

const decrementValue = () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
}
const incrementValue = () => {
  counterValue += 1;
  value.innerHTML = counterValue;
}

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);





