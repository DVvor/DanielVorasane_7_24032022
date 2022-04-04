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

const arrows = document.querySelectorAll('.fas');
arrows.forEach(arrow => arrow.addEventListener('click', openDropdown))

function openDropdown(event) {
  const menuSelected = event.target.parentNode.parentNode;
  const inputMenuSelected = event.target.parentNode.querySelector('.input-dropdown')
  const menuTag = event.target.parentNode.parentNode.querySelector('.tags')
  const menuDropdown = event.target.parentNode.parentNode.querySelector('.dropdown')
  const arrowFromMenuSelected = event.target.parentNode.parentNode.querySelector('.fas');

  arrowIngredients.classList.replace('fa-angle-down', 'fa-angle-up');

    menuTag.style.display = 'grid';

    if (inputMenuSelected.className.includes('ingredients')) {
      inputMenuSelected.setAttribute('placeholder', 'Rechercher un ingrédient');
    } else if (inputMenuSelected.className.includes('appliances')) {
      inputMenuSelected.setAttribute('placeholder', 'Rechercher un appareil');
    } else if (inputMenuSelected.className.includes('ustensils')) {
      inputMenuSelected.setAttribute('placeholder', 'Rechercher un ustensile');
    }

    // menuDropdown.style.width = null;
    menuSelected.style.animation = 'dropdown 0.3s both';
    menuSelected.style.width = '600px';
    menuSelected.style.borderRadius = '5px 5px 0px 0px';

    arrows.forEach(arrow => arrow.removeEventListener('click', openDropdown))
    arrowFromMenuSelected.addEventListener('click', closeDropdown)


    function closeDropdown(event) {
      const menuSelected = event.target.parentNode.parentNode;
    
      arrowFromMenuSelected.classList.replace('fa-angle-down', 'fa-angle-up');
  
      menuTag.style.display = 'none';
  
      if (inputMenuSelected.className.includes('ingredients')) {
        inputMenuSelected.setAttribute('placeholder', 'Ingrédients');
      } else if (inputMenuSelected.className.includes('appliances')) {
        inputMenuSelected.setAttribute('placeholder', 'Appareils');
      } else if (inputMenuSelected.className.includes('ustensils')) {
        inputMenuSelected.setAttribute('placeholder', 'Ustensils');
      }
      
      arrowFromMenuSelected.classList.replace('fa-angle-up', 'fa-angle-down');
      
      menuSelected.style.animation = 'dropdown-reverse 0.3s both';
      menuSelected.style.width = '170px';
      menuSelected.style.borderRadius = '5px';
      
      arrows.forEach(arrow => arrow.removeEventListener('click', closeDropdown))
      arrows.forEach(arrow => arrow.addEventListener('click', openDropdown))
    }
}

// document.addEventListener('click', closeDropdown)


// function searchBarDropdown (e){

//   const element = e.target.value.toLowerCase()
//   const result = recipes.filter((recipe) => recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(element)))

//   recipesSection.innerHTML = "";

//   result.forEach(recipe => {
//     const recipeModel = recipeFactory(recipe);
//     const recipeCard = recipeModel.card();

//     recipesSection.appendChild(recipeCard);
//   })

// }
// inputIngredients.addEventListener('input',searchBarDropdown)


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

function addListAppliancesDropdown() {
  const ListTagsAppliances = recipes.map( recipe => recipe.appliance)
  const ListTagsAppliancesUniqueArray  = [...new Set(ListTagsAppliances)] 
  
  // console.log(ListTagsAppliancessUniqueArray)
  ListTagsAppliancesUniqueArray.forEach(function(item) {
    
    let list = document.createElement("li");
    list.innerText = item;
    list.classList = "tag";

    TagAppliances.appendChild(list);
      })
  
}
addListAppliancesDropdown()

function addListUstensilsDropdown() {
  const ListTagsUstensils = recipes.flatMap((recipe) => recipe.ustensils)
  const ListTagsUstensilsUniqueArray  = [...new Set(ListTagsUstensils)] 

  ListTagsUstensilsUniqueArray.forEach(function(item) {
    
    let list = document.createElement("li");
    list.innerText = item;
    list.classList = "tag";

    TagUstensils.appendChild(list);
      })
  
}
addListUstensilsDropdown()

// List filtrée des ingrédients quand on cherche avec la barre de recherche du dropdown ingrédient

function listFilteredWithSearchbarDropdown (e){

  const element = e.target.value.toLowerCase()
  const menuTag = e.target.parentNode.parentNode.querySelector('.tags')

  let result = "";
  let listFiltrered = "";
  let listFiltreredUnique = "";
  let listTagfiltered = "";


  if(e.target.parentNode.className.includes('dropdown-ingredients')) {
    result = recipes.filter((recipe) => recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(element)))
    listFiltrered = result.flatMap((recipe) => recipe.ingredients.map( Allingredients => Allingredients.ingredient))
    listFiltreredUnique  = [...new Set(listFiltrered)] 
    // console.log(listFiltrered, listFiltreredUnique)

    listTagfiltered = listFiltreredUnique.filter( ingredient => ingredient.toLowerCase().includes(element))
    
    // console.log(listTagfiltered)
  }
  if(e.target.parentNode.className.includes('dropdown-appliances')) {
    result = recipes.filter(recipe => recipe.appliance.toLowerCase().includes(element))

    listFiltrered = result.flatMap((recipe) => recipe.appliance)
    listFiltreredUnique  = [...new Set(listFiltrered)] 

    listTagfiltered = listFiltreredUnique.filter( appliance => appliance.toLowerCase().includes(element))

  }

  if(e.target.parentNode.className.includes('dropdown-ustensils')) {
    result = recipes.filter(recipe => recipe.ustensils)

    listFiltrered = result.flatMap((recipe) => recipe.ustensils)
    listFiltreredUnique  = [...new Set(listFiltrered)] 

    listTagfiltered = listFiltreredUnique.filter( ustensil => ustensil.toLowerCase().includes(element))

  }

  menuTag.innerHTML = "";

  listTagfiltered.forEach(function(item) {
    
    let list = document.createElement("li");
    list.innerText = item;
    list.classList = "tag";
    list.addEventListener('click',tagSelected)

    menuTag.appendChild(list);
      })

}
inputIngredients.addEventListener('input',listFilteredWithSearchbarDropdown)
inputAppliances.addEventListener('input',listFilteredWithSearchbarDropdown)
inputUstensils.addEventListener('input',listFilteredWithSearchbarDropdown)


