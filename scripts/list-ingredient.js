// Add list ingredient on each recipes

const listIngredients = document.createElement("div");
listIngredients.classList.add("list-ingredients");

const component = document.createElement("div");
component.classList.add("ingredient");

const typeIngredient = document.createElement("p");
typeIngredient.textContent = ("Lait de coco:");

const qty = document.createElement("p");
qty.textContent = ("400ml");

/************plusieurs ingredients */
listIngredients.appendChild(component);
component.appendChild(typeIngredient);
component.appendChild(qty);
/******************************** */


console.log(recipes.map(recipe => recipe.ingredients.map( Allingredient => Allingredient.ingredient)))


// data.map( recipe => {
//   recipe.ingredients.map( ingredient => {
//       allIngredients.push(ingredient.ingredient.toLowerCase());
//   })
// })