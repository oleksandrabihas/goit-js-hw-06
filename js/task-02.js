const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


// const ingredientsList = document.querySelector("#ingredients");
// const ingredientsItems = 
//   ingredients.map(elem => {
//   const itemIngredient = document.createElement("li");
//   itemIngredient.textContent = elem;
//   itemIngredient.classList.add('item');
//   return itemIngredient;
//   });

const ingredientsList = document.querySelector("#ingredients");
  const ingredientsItems = ingredients.map(elem => {
  const itemIngredient = document.createElement("li");
  itemIngredient.textContent = elem;
  itemIngredient.classList.add("item");
  ingredientsList.append(itemIngredient);

    return ingredientsList;
  });
