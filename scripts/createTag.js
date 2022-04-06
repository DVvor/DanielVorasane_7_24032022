let tags = document.querySelectorAll('.tag');
const tagSection = document.querySelector('.tag-section');
let tag = document.querySelector('.tag');
let btnCloseTag = document.querySelectorAll('.far fa-time-circle');

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

    function closeTag() {
    tagSection.removeChild(btnTag);
    event.target.style.backgroundColor = 'transparent';
    FullDisplayRecipes()
    }

  }

}
const createTag = tags.forEach((tag) => tag.addEventListener('click',tagSelected))


// inputIngredients.addEventListener('change',tagSelected)
let recipesUpdated = recipes
console.log(recipesUpdated)
// Filtre tableau avec tag sélectionnés **************************************************
function recipesArrayWithtagSelected(e) {
  // Array from permet de transformer l'élément cible en tableau - .map ne fonctionne qu'avec un tableau
  let arrayTagSelected = Array.from(document.querySelectorAll('.tag-name')).map(btn => btn.textContent);
  /* 
  Avec la méthode .forEach, cela nous aurait pris plus de ligne
  
  let arrayTagSelected = [];
  allBtnTagsSelected = document.querySelectorAll('.tag-name');
  allBtnTagsSelected.forEach(btn => arrayTagSelected.push(btn.textContent))
  
  */

  const btnselected = e.target.textContent

  console.log(e.target.parentNode)
  // let recipesUpdated = recipes.filter((recipe) => recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(arrayTagSelected)))
  if(e.target.parentNode.className.includes('menu-red')) {
    recipesUpdated = recipesUpdated.filter(recipe => recipe.ustensils.includes(btnselected))
  }
  if(e.target.parentNode.className.includes('menu-green')) {
    recipesUpdated = recipesUpdated.filter(recipe => recipe.appliance.includes(btnselected))
  }
  if(e.target.parentNode.className.includes('menu-blue')) {
    recipesUpdated = recipesUpdated.filter(recipe => recipe.ingredients.some(ingredient => ingredient.ingredient.includes(btnselected)))
  }
  
  //  recipesUpdated = recipes.filter(recipe => arrayTagSelected.some( i => recipe.appliance.includes(i)))
  // recipesUpdated = recipesUpdated.filter(recipe => recipe.appliance.includes(btnselected))
  // recipesUpdated = recipesUpdated.filter(recipe => recipe.ustensils.includes(btnselected))

  console.log(recipesUpdated)

  recipesSection.innerHTML = "";

  recipesUpdated.forEach(recipe => {
    const recipeModel = recipeFactory(recipe);
    const recipeCard = recipeModel.card();

    recipesSection.appendChild(recipeCard);
  })

  console.log(arrayTagSelected.length, btnCloseTag)
}
recipesArrayWithtagSelected


tags.forEach(tag => tag.addEventListener('click', recipesArrayWithtagSelected))


// tableau actualisé est égale au départ à recettes


// if(Event.target = 'far fa-times-circle' ){
//   alert('tessss')
// }

function FullDisplayRecipes() {

  let arrayTagSelected = Array.from(document.querySelectorAll('.tag-name')).map(btn => btn.textContent);
  console.log(arrayTagSelected)
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
