// Ajout de la liste des ingrédients sur chaque recette (carte)

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
