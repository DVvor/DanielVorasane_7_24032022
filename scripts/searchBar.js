inputSearch = document.querySelector('.searchbar_input')

function searchBar (e){

  const element = e.target.value.toLowerCase()

  const result = recipes.filter((recipe) => recipe.name.toLowerCase().includes(element)
  || recipe.description.toLowerCase().includes(element)
  || recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(element))
// Recherche dans nom , description, ingredient
  )
  console.log(result)
  recipesSection.innerHTML = "";

  result.forEach(recipe => {
    const recipeModel = recipeFactory(recipe);
    const recipeCard = recipeModel.card();

    recipesSection.appendChild(recipeCard);

})
  // return (result)


}

inputSearch.addEventListener('change', searchBar) 


