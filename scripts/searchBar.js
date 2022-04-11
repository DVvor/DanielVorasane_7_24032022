inputSearch = document.querySelector('.searchbar_input');
searchBarContainer = document.querySelector('.searchbar');


function searchBar(){
  const messageError = document.querySelector('.message-error');
  // const element = e.target.value.toLowerCase();
  let inputElement = document.querySelector('.searchbar_input').value;

  if(inputElement.length == 0) {
    messageError.style.display ='none';
    messageError.textContent = '';
    displayRecipes()
    recipesUpdated = recipes;
    addListAppliancesDropdown();
    addListIgredientDropdown();
    addListUstensilsDropdown();
  }
  
  if(inputElement.length == 1 || inputElement.length == 2 ) {
    messageError.style.display ='block';
    messageError.textContent = 'Veuillez saisir au moins 3 caractères';
  }

  if(inputElement.length >= 3) {

    messageError.style.display ='none';
    messageError.textContent = "";

    const result = recipes.filter((recipe) => recipe.name.toLowerCase().includes(inputElement)
    || recipe.description.toLowerCase().includes(inputElement)
    || recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(inputElement))
    // Recherche dans nom , description, ingredient
    );
    recipesUpdated = result;
    console.log(recipesUpdated)

    recipesSection.innerHTML = "";

    if(result == 0) {
      messageError.style.display ='block';
      messageError.textContent = 'Aucune recette ne correspond à votre critère...vous pouvez chercher "tarte aux pommes", "poisson" etc.';
    }
    
    result.forEach(recipe => {
      const recipeModel = recipeFactory(recipe);
      const recipeCard = recipeModel.card();

      recipesSection.appendChild(recipeCard);
    })
    // listFilteredWithSearchbarDropdown(e)
  }

}
inputSearch.addEventListener('change', searchBar);

