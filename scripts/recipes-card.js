// DOM Elements
const recipesSection = document.querySelector(".recipes-section");


// creation carte recette
function recipeFactory(recipe) {

const {name, ingredients,time,description } = recipe;

    function card(){

        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipes-card");

        const imgContentCard = document.createElement("div");
        imgContentCard.classList.add("recipes-card-img");

        const textContentCard = document.createElement("div");
        textContentCard.classList.add("recipes-card-text");

        const titleContent = document.createElement("div");
        titleContent.classList.add("recipes-card-text-title");

        const title = document.createElement("h1");
        title.classList.add("title");
        title.textContent = `${name}`;

        const timeContent = document.createElement("div");
        timeContent.classList.add("time");

        const duration = document.createElement("p");
        duration.textContent = `${time}min`;

        const iconTime = document.createElement("i");
        iconTime.classList.add("far","fa-clock");

        const textContent = document.createElement("div");
        textContent.classList.add("recipes-card-text-content");

        const listIngredients = document.createElement("div");
        listIngredients.classList.add("list-ingredients");

        ingredients.forEach(ingredient => {
            
            const ingredientArray = ingredient;
            const ingredientcard = createIngredient(ingredientArray);

            listIngredients.appendChild(ingredientcard);
        });

        const dscrptn = document.createElement("div");
        dscrptn.classList.add("description");
        dscrptn.textContent = `${description}`;

        recipeCard.appendChild(imgContentCard);
        recipeCard.appendChild(textContentCard);
            textContentCard.appendChild(titleContent);
                titleContent.appendChild(title);
                titleContent.appendChild(timeContent);
                    timeContent.appendChild(iconTime);
                    timeContent.appendChild(duration);
            textContentCard.appendChild(textContent);
                textContent.appendChild(listIngredients);

                textContent.appendChild(dscrptn);

        return (recipeCard);
    }
    return {card}
}

function displayRecipes(recipes) {
    recipes.forEach(recipe => {
        const recipeModel = recipeFactory(recipe);
        const recipeCard = recipeModel.card();

        recipesSection.appendChild(recipeCard);

    })
}

displayRecipes(recipes);


function createIngredient(ingredientArray) {
    const component = document.createElement("div");
    component.classList.add("ingredient");

    const typeIngredient = document.createElement("p");
    typeIngredient.textContent = `${ingredientArray.ingredient} : `;
    component.append(typeIngredient);

    if (ingredientArray.quantity != undefined && ingredientArray.unit == undefined) {
        const qty = document.createElement("p");
        qty.textContent = `${ingredientArray.quantity}`;
        
        component.append(qty);

    } else if (ingredientArray.quantity != undefined && ingredientArray.unit != undefined) {
        const qty = document.createElement("p");
        qty.textContent = `${ingredientArray.quantity} ${ingredientArray.unit}`;

        component.append(qty);
    }
    

    return (component)
}