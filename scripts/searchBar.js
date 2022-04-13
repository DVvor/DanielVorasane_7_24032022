// Dom Elements
inputSearch = document.querySelector('.searchbar_input');
searchBarContainer = document.querySelector('.searchbar');


// Fonctionnalité Barre de recherche principale
function searchBar(){
  const messageError = document.querySelector('.message-error');
  let inputElement = document.querySelector('.searchbar_input').value;
  

  // Si aucune recherche alors affiche le tableau des recettes en entier
  if(inputElement.length == 0) {
    messageError.style.display ='none';
    messageError.textContent = '';
    displayRecipes(recipes)
    recipesUpdated = recipes;
  }
  
  // Message erreur lorsque la saisie n'est pas d'au moins 3 caractères
  if(inputElement.length == 1 || inputElement.length == 2 ) {
    messageError.style.display ='block';
    messageError.textContent = 'Veuillez saisir au moins 3 caractères';
  }

  // Affichage des recettes après saisie d'au moins 3 caractères
  if(inputElement.length >= 3) {

    messageError.style.display ='none';
    messageError.textContent = "";

    // const result = recipes.filter((recipe) => recipe.name.toLowerCase().includes(inputElement)
    // || recipe.description.toLowerCase().includes(inputElement)
    // || recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(inputElement))
    // // Recherche dans nom , description, ingredient
    // );
    // recipesUpdated = result;

    const result = [];

    // avec boucles natives (while, for,...)
    // i représente chaque recette du fichier recipes.
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].name.toLowerCase().includes(inputElement)) {
        result.push(recipes[i]);
      } else if (recipes[i].description.toLowerCase().includes(inputElement)) {
        result.push(recipes[i]);
      } else if (recipes[i].ingredients.some(item => item.ingredient.toLowerCase().includes(inputElement))) {
        result.push(recipes[i]);
      }
    }

    // Affichage message d'erreur si la saisie ne correspond à aucune recette
    if(recipesUpdated == 0) {
      messageError.style.display ='block';
      messageError.textContent = 'Aucune recette ne correspond à votre critère...vous pouvez chercher "tarte aux pommes", "poisson" etc.';
    }

    recipesSection.innerHTML = "";
    displayRecipes(result);
  }
  addListAppliancesDropdown();
  addListIgredientDropdown();
  addListUstensilsDropdown();

  const list = document.querySelectorAll('.tag');
  list.forEach(tag => tag.addEventListener('click', tagSelected));

  tagSection.innerHTML = "" ;
}

inputSearch.addEventListener('change', displayAfterSearch);

// Affichage des recettes en différé d'une seconde après une seconde
function displayAfterSearch(){
    setTimeout(searchBar, 1000);
}