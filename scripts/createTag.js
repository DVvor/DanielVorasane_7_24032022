let tags = document.querySelectorAll('.tag');
const tagSection = document.querySelector('.tag-section');
let tag = document.querySelector('.tag');
let btnCloseTag = document.querySelectorAll('.far fa-time-circle');
let arrayTagSelected = []

// Creation Tag **************************************************
function tagSelected(event) {

  if (!tagSection.textContent.includes(event.target.textContent)) {
    event.target.style.backgroundColor = 'rgb(6, 62, 147, 0.3)';

    const btnTag = document.createElement('div');
    // btnTag.classList = 'btn-tag';
  
    const tagName = document.createElement('p');
    tagName.classList = 'tag-name';
    tagName.textContent = event.target.textContent;
  
    const closeBtnTag = document.createElement('i');
    closeBtnTag.classList = 'far fa-times-circle';
    closeBtnTag.addEventListener('click', closeTag)

    
    tagSection.appendChild(btnTag);
    btnTag.appendChild(tagName);
    btnTag.appendChild(closeBtnTag);

    if(event.target.parentNode.className.includes('menu-blue')) {
      btnTag.classList = 'btn-tag tag-blue';
    }
    if(event.target.parentNode.className.includes('menu-red')) {
      btnTag.classList = 'btn-tag tag-red';
    }
    if(event.target.parentNode.className.includes('menu-green')) {
      btnTag.classList = 'btn-tag tag-green';
    }
    
    arrayTagSelected = Array.from(document.querySelectorAll('.tag-name'));

    console.log(arrayTagSelected)

    function closeTag() {
    tagSection.removeChild(btnTag);
    event.target.style.backgroundColor = 'transparent';
    recipesArrayWithtagSelected()
    }

  }

  // Filtre tableau avec tag sélectionnés **************************************************

  function recipesArrayWithtagSelected() {

    const ingredientsTagsSelected = Array.from(document.querySelectorAll(".tag-blue")).map(tag => tag.textContent);
    const appliancesTagsSelected = Array.from(document.querySelectorAll(".tag-green")).map(tag => tag.textContent);
    const ustensilsTagsSelected = Array.from(document.querySelectorAll(".tag-red")).map(tag => tag.textContent);
  
    recipesUpdated = recipes.filter(recipe => 
      appliancesTagsSelected.every(tags => recipe.appliance.includes(tags)) // get recipe including EVERY tags from appliancesTagsSelected array, can't use includes alone because will get only one tag
      && ustensilsTagsSelected.every(tags => recipe.ustensils.includes(tags))
      && ingredientsTagsSelected.every(tags => recipe.ingredients.some(ingredientItem => ingredientItem.ingredient.includes(tags)))
    );

    // recipesUpdated = recipesCorrespondingToTags
    // Tableau des recettes actualisés avec les tags sélectionnés
    recipesSection.innerHTML = "";
  
    recipesUpdated.forEach(recipe => {
      const recipeModel = recipeFactory(recipe);
      const recipeCard = recipeModel.card();
  
      recipesSection.appendChild(recipeCard);
    })

  }
  recipesArrayWithtagSelected()
  

}
tags.forEach((tag) => tag.addEventListener('click',tagSelected))


function DisplayRecipesClickBtnCloseTag() {
  arrayTagSelected = Array.from(document.querySelectorAll('.tag-name'));

  if(arrayTagSelected.length == 0){
    recipesUpdated = recipes

    recipesSection.innerHTML = "";

    recipesUpdated.forEach(recipe => {
    const recipeModel = recipeFactory(recipe);
    const recipeCard = recipeModel.card();

    recipesSection.appendChild(recipeCard);
    })
  }

}

// affichage dégressif
/* ensemble de tags sélectionnés => 
boucle qui reprend chaque element de l'ensemble et fait actualisé l'affichage des recettes.
selon le tag de la boucle, si il a pour parent X (rouge vert ou bleu) alors = execution spécifique du code pour filtrer
*/

function listTagUpdated(event) {


  if(event.target.parentNode.className.includes('menu-blue')) {

    let ListTagsIngredients = recipesUpdated.flatMap((recipe) => recipe.ingredients.map( Allingredients => Allingredients.ingredient))
      let ListTagsIngredientsUniqueArray  = [...new Set(ListTagsIngredients)] 
      
      TagIngredients.innerHTML = "";

      ListTagsIngredientsUniqueArray.forEach(function(item) {

      let list = document.createElement("li");
      list.innerText = item;
      list.classList = "tag";
      list.addEventListener('click',listTagUpdated);

      TagIngredients.appendChild(list);
      })
  }
}

tags.forEach((tag) => tag.addEventListener('click',listTagUpdated))
