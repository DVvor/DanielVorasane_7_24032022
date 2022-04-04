inputSearch = document.querySelector('.searchbar_input');
searchBarContainer = document.querySelector('.searchbar');


function searchBar (e){
  const messageError = document.querySelector('.message-error')
  const element = e.target.value.toLowerCase()
  
  if(e.target.value.length == 0) {
    displayRecipes()
  }
  
  if(e.target.value.length < 3) {
    messageError.style.display ='block';
    messageError.textContent = 'Veuillez saisir au moins 3 caractères';
  }

  if(e.target.value.length >= 3) {

    messageError.style.display ='none';
    messageError.textContent = "";

    const result = recipes.filter((recipe) => recipe.name.toLowerCase().includes(element)
    || recipe.description.toLowerCase().includes(element)
    || recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(element))
    // Recherche dans nom , description, ingredient
    )

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
  }
  

}

inputSearch.addEventListener('change', searchBar) 


