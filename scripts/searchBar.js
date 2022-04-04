inputSearch = document.querySelector('.searchbar_input');
searchBarContainer = document.querySelector('.searchbar');


function searchBar (e){
  const messageError = document.querySelector('.message-error')
  const element = e.target.value.toLowerCase()

  messageError.style.display ='none';

  const result = recipes.filter((recipe) => recipe.name.toLowerCase().includes(element)
  || recipe.description.toLowerCase().includes(element)
  || recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(element))
// Recherche dans nom , description, ingredient
  )

  recipesSection.innerHTML = "";

  if(result == 0) {
    messageError.style.display ='block';
  }

  result.forEach(recipe => {
    const recipeModel = recipeFactory(recipe);
    const recipeCard = recipeModel.card();

    recipesSection.appendChild(recipeCard);
  })

}

inputSearch.addEventListener('change', searchBar) 


