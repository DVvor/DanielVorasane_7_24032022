let tags = document.querySelectorAll('.tag');
const tagSection = document.querySelector('.tag-section');
let tag = document.querySelector('.tag');
let btnCloseTag = document.querySelectorAll('.far fa-time-circle');
let recipesUpdated = recipes
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
    DisplayRecipesClickBtnCloseTag()
    }

  }

}
const createTag = tags.forEach((tag) => tag.addEventListener('click',tagSelected))



// Filtre tableau avec tag sélectionnés **************************************************
function recipesArrayWithtagSelected(e) {
  // Array from permet de transformer l'élément cible en tableau - .map ne fonctionne qu'avec un tableau
  // let arrayTagSelected = Array.from(document.querySelectorAll('.tag-name')).map(btn => btn.textContent);
  /* 
  Avec la méthode .forEach, cela nous aurait pris plus de ligne
  
  let arrayTagSelected = [];
  allBtnTagsSelected = document.querySelectorAll('.tag-name');
  allBtnTagsSelected.forEach(btn => arrayTagSelected.push(btn.textContent))
  
  */

  const btnselected = e.target.textContent

  if(e.target.parentNode.className.includes('menu-red')) {
    recipesUpdated = recipesUpdated.filter(recipe => recipe.ustensils.includes(btnselected))
  }
  if(e.target.parentNode.className.includes('menu-green')) {
    recipesUpdated = recipesUpdated.filter(recipe => recipe.appliance.includes(btnselected))
  }
  if(e.target.parentNode.className.includes('menu-blue')) {
    recipesUpdated = recipesUpdated.filter(recipe => recipe.ingredients.some(ingredient => ingredient.ingredient.includes(btnselected)))
  }

  // Tableau des recettes actualisés avec les tags sélectionnés
  recipesSection.innerHTML = "";

  recipesUpdated.forEach(recipe => {
    const recipeModel = recipeFactory(recipe);
    const recipeCard = recipeModel.card();

    recipesSection.appendChild(recipeCard);
  })

  console.log(recipesUpdated)


}
recipesArrayWithtagSelected


tags.forEach(tag => tag.addEventListener('click', recipesArrayWithtagSelected))


// tableau actualisé est égale au départ à recettes


function DisplayRecipesClickBtnCloseTag() {

  if(arrayTagSelected.length == 0){
    recipesUpdated = recipes

    recipesSection.innerHTML = "";

    recipesUpdated.forEach(recipe => {
    const recipeModel = recipeFactory(recipe);
    const recipeCard = recipeModel.card();

    recipesSection.appendChild(recipeCard);
    })
  }

  console.log(arrayTagSelected)
  arrayTagSelected.every(element => {
    if(element.parentNode.className.includes('tag-red')) {
      recipesUpdated = recipes.filter(recipe => recipe.ustensils.includes(element.textContent))
    }
    if(element.parentNode.className.includes('tag-green')) {
      recipesUpdated = recipes.filter(recipe => recipe.appliance.includes(element.textContent))
    }
    if(element.parentNode.className.includes('tag-blue')) {
      recipesUpdated = recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.ingredient.includes(element.textContent)))
    }
  
    console.log(recipesUpdated)
  })


}

// affichage dégressif
/* ensemble de tags sélectionnés => 
boucle qui reprend chaque element de l'ensemble et fait actualisé l'affichage des recettes.
selon le tag de la boucle, si il a pour parent X (rouge vert ou bleu) alors = execution spécifique du code pour filtrer
*/