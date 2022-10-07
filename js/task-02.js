const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsRef = document.querySelector("#ingredients");

const makeItem = (ingredient) => {
  const itemRef = document.createElement("li");

  itemRef.textContent = ingredient;
  itemRef.classList.add("item");
  return itemRef;
};

const elements = ingredients.map(makeItem);

ingredientsRef.append(...elements);

console.log(ingredientsRef);
console.log(ingredients);

