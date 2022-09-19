const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const items = [];

for (let i = 0; i < ingredients.length; i+=1){
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredients[i];
  items.push(li)
}

list.append(...items);
console.log(list)

// const items =[];

// for (let i=0; i < ingredients.length; i+= 1 ) {
//   const ingredientsItemEl = document.createElement('li');
//   ingredientsItemEl.textContent = ingredients[i];
//   ingredientsItemEl.classList.add('.item')

//   items.push(ingredientsItemEl)
// }

// const ingredientsListEl = document.querySelector('#ingredients')
// ingredientsListEl.append(...items)