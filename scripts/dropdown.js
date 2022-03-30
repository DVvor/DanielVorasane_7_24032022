//DOM Elements
const inputIngredients = document.querySelector('.input-ingredients');
const inputAppliances = document.querySelector('.input-appliances');
const inputUstensils = document.querySelector('.input-ustensils');

const arrowIngredients = document.querySelector('.arrow-ingredients');  
const arrowAppliances = document.querySelector('.arrow-appliances');  
const arrowUstensils = document.querySelector('.arrow-ustensils');  
const dropdownIngredients = document.querySelector('.dropdown-ingredients');
const dropdownAppliances = document.querySelector('.dropdown-appliances');
const dropdownUstensils = document.querySelector('.dropdown-ustensils');

const TagIngredients = document.querySelector('.tag-ingredients');
const TagAppliances = document.querySelector('.tag-appliances');
const TagUstensils = document.querySelector('.tag-ustensils');

const dropdownBL = document.querySelector('.dropdown-bl');


function openDropdown(event) {
  let dropdownbl = event.target.parentNode.parentNode;

  if(event.target === arrowIngredients) {
    arrowIngredients.classList.replace('fa-angle-down', 'fa-angle-up');

    TagIngredients.style.display = 'grid';
    dropdownbl.setAttribute('disabled','false');
    inputIngredients.removeAttribute('placeholder');
    inputIngredients.setAttribute('placeholder', 'Rechercher un ingrédient');

    dropdownAppliances.style.width = null;

    dropdownbl.style.width = '600px';
    dropdownbl.style.borderRadius = '5px 5px 0px 0px';
  }
  if(event.target === arrowAppliances) {

    console.log(event.target)
    arrowAppliances.classList.replace('fa-angle-down', 'fa-angle-up');

    TagAppliances.style.display = 'grid';
    inputAppliances.removeAttribute('placeholder');
    inputAppliances.setAttribute('placeholder', 'Rechercher un appareil');

    dropdownbl.style.width = '600px';
    dropdownbl.style.borderRadius = '5px 5px 0px 0px';
  }
  // if(event.target === arrowUstensils) {
  //   arrowAppliance.classList.replace('fa-angle-down', 'fa-angle-up');

  //   TagUstensils.style.display = 'grid';
  //   inputDropdown.removeAttribute('placeholder');
  //   inputDropdown.setAttribute('placeholder', 'Rechercher un ingrédient');

  //   dropdownParent.style.width = '600px';
  //   dropdownParent.style.borderRadius = '5px 5px 0px 0px';
  // }

}

arrowIngredients.addEventListener('click',openDropdown)
arrowAppliances.addEventListener('click',openDropdown)
arrowUstensils.addEventListener('click',openDropdown)


function closeDropdown(event) {
  let dropdownParent = event.target.parentNode.parentNode;

  if(event.target === arrowIngredients) {
    arrowIngredients.classList.replace('fa-angle-down', 'fa-angle-up');

    TagIngredients.style.display = 'none';
    inputIngredients.removeAttribute('placeholder');
    inputIngredients.setAttribute('placeholder', 'Ingrédient');
    
    arrowIngredients.classList.replace('fa-angle-up', 'fa-angle-down');

    dropdownParent.style.width = null;
    dropdownParent.style.borderRadius = '5px';

  }
  if(event.target.classList == 'fas fa-angle-up arrow-appliance') {
    arrowIngredients.classList.replace('fa-angle-down', 'fa-angle-up');

    TagAppliances.style.display = 'none';
    inputAppliances.removeAttribute('placeholder');
    inputIngredients.setAttribute('placeholder', 'Appareil');

    arrowAppliances.classList.replace('fa-angle-up', 'fa-angle-down');

    dropdownParent.style.width = null;
    dropdownParent.style.borderRadius = '5px';

  }



}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeDropdown()
  }
  
})

function searchBarDropdown (e){

  const element = e.target.value.toLowerCase()
  const result = recipes.filter((recipe) => recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(element)))

  // console.log(element, result)


  recipesSection.innerHTML = "";

  result.forEach(recipe => {
    const recipeModel = recipeFactory(recipe);
    const recipeCard = recipeModel.card();

    recipesSection.appendChild(recipeCard);
  })

}
inputIngredients.addEventListener('keyup',searchBarDropdown)


// Affichage de la liste des ingrédients dans le dropdown ingrédient
function addListIgredientDropdown() {
  const ListTagsIngredients = recipes.flatMap((recipe) => recipe.ingredients.map( Allingredients => Allingredients.ingredient))
  const ListTagsIngredientsUniqueArray  = [...new Set(ListTagsIngredients)] 
  
  ListTagsIngredientsUniqueArray.forEach(function(item) {
    
    let list = document.createElement("li");
    list.innerText = item;
    list.classList = "tag";
  
    TagIngredients.appendChild(list);
      })
  
}
addListIgredientDropdown()



// List filtrée des ingrédients quand on cherche avec la barre de recherche du dropdown ingrédient
function listFilteredWithSearchbarDropdown (e){

  const element = e.target.value.toLowerCase()
  const result = recipes.filter((recipe) => recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(element)))

  const listFiltrered = result.flatMap((recipe) => recipe.ingredients.map( Allingredients => Allingredients.ingredient))
  const listFiltreredUnique  = [...new Set(listFiltrered)] 

  const listTagfiltered = listFiltreredUnique.filter( ingredient => ingredient.toLowerCase().includes(element))

  // console.log(element, result, listFiltreredUnique)

  TagIngredients.innerHTML = "";

  listTagfiltered.forEach(function(item) {
    
    let list = document.createElement("li");
    list.innerText = item;
    list.classList = "tag";
    list.addEventListener('click',tagSelected)

    TagIngredients.appendChild(list);
      })


}
inputIngredients.addEventListener('keyup',listFilteredWithSearchbarDropdown)

