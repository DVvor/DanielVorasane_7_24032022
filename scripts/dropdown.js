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
arrows.forEach(arrow => arrow.addEventListener('click', openDropdown));

let recipesUpdated = recipes;

// Affichage du menu dropdown quand on √©dite du texte dans la barre de recherche de chaque dropdown
inputIngredients.addEventListener('input', openDropdown);
inputAppliances.addEventListener('input', openDropdown);
inputUstensils.addEventListener('input', openDropdown);

// Dropdown fonctionnalit√© - Ouverture et fermeture
function openDropdown(event) {
  const menuSelected = event.target.parentNode.parentNode;
  const inputMenuSelected = event.target.parentNode.querySelector('.input-dropdown');
  const menuTag = event.target.parentNode.parentNode.querySelector('.tags');
  const menuDropdown = event.target.parentNode.parentNode.querySelector('.dropdown');
  const arrowFromMenuSelected = event.target.parentNode.parentNode.querySelector('.fas');

  arrowIngredients.classList.replace('fa-angle-down', 'fa-angle-up');

  menuTag.style.display = 'grid';

  if (inputMenuSelected.className.includes('ingredients')) {
    inputMenuSelected.setAttribute('placeholder', 'Rechercher un ingr√©dient');
  } else if (inputMenuSelected.className.includes('appliances')) {
    inputMenuSelected.setAttribute('placeholder', 'Rechercher un appareil');
  } 
    else if (inputMenuSelected.className.includes('ustensils')) {
    inputMenuSelected.setAttribute('placeholder', 'Rechercher un ustensile');
  }

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
      inputMenuSelected.setAttribute('placeholder', 'Ingr√©dients');
    } else if (inputMenuSelected.className.includes('appliances')) {
      inputMenuSelected.setAttribute('placeholder', 'Appareils');
    } else if (inputMenuSelected.className.includes('ustensils')) {
      inputMenuSelected.setAttribute('placeholder', 'Ustensils');
    }
    
    arrowFromMenuSelected.classList.replace('fa-angle-up', 'fa-angle-down');
    
    menuSelected.style.animation = 'dropdown-reverse 0.3s both';
    menuSelected.style.width = '170px';
    menuSelected.style.borderRadius = '5px';
    
    arrows.forEach(arrow => arrow.removeEventListener('click', closeDropdown));
    arrows.forEach(arrow => arrow.addEventListener('click', openDropdown));
  }
}

// Affichage de la liste des ingr√©dients dans le dropdown ingr√©dient au d√©marrage
function addListIgredientDropdown() {
  const ListTagsIngredients = recipesUpdated.flatMap((recipe) => recipe.ingredients.map( Allingredients => Allingredients.ingredient));
  const ListTagsIngredientsUniqueArray  = [...new Set(ListTagsIngredients)];
  
  TagIngredients.innerHTML = '';

  ListTagsIngredientsUniqueArray.forEach(function(item) {
    
    let list = document.createElement("li");
    list.innerText = item;
    list.classList = "tag";


    TagIngredients.appendChild(list);
  })
  
}
addListIgredientDropdown()

// Affichage de la liste des ingr√©dients dans le dropdown appareils au d√©marrage
function addListAppliancesDropdown() {
  const ListTagsAppliances = recipesUpdated.map( recipe => recipe.appliance);
  const ListTagsAppliancesUniqueArray  = [...new Set(ListTagsAppliances)]; 
  
  TagAppliances.innerHTML = '';

  ListTagsAppliancesUniqueArray.forEach(function(item) {
    
    let list = document.createElement("li");
    list.innerText = item;
    list.classList = "tag";


    TagAppliances.appendChild(list);
  })
  
}
addListAppliancesDropdown()

// Affichage de la liste des ingr√©dients dans le dropdown ustensiles au d√©marrage
function addListUstensilsDropdown() {
  const ListTagsUstensils = recipesUpdated.flatMap((recipe) => recipe.ustensils);
  const ListTagsUstensilsUniqueArray  = [...new Set(ListTagsUstensils)];

  TagUstensils.innerHTML = '';

  ListTagsUstensilsUniqueArray.forEach(function(item) {
    
    let list = document.createElement("li");
    list.innerText = item;
    list.classList = "tag";


    TagUstensils.appendChild(list);
  })
}
addListUstensilsDropdown()

// Liste filtr√©e des dropdown quand on cherche avec la barre de recherche du dropdown ingr√©dient
function listFilteredWithSearchbarDropdown(e){
  const element = e.target.value.toLowerCase();
  const menuTag = e.target.parentNode.parentNode.querySelector('.tags');

  let result = "";
  let listFiltrered = "";
  let listFiltreredUnique = "";
  let listTagfiltered = "";

  if(e.target.parentNode.className.includes('dropdown-ingredients')) {
    result = recipesUpdated.filter((recipe) => recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(element)));
    listFiltrered = result.flatMap((recipe) => recipe.ingredients.map( Allingredients => Allingredients.ingredient));
    listFiltreredUnique  = [...new Set(listFiltrered)];

    listTagfiltered = listFiltreredUnique.filter( ingredient => ingredient.toLowerCase().includes(element));

  }
  if(e.target.parentNode.className.includes('dropdown-appliances')) {
    result = recipesUpdated.filter(recipe => recipe.appliance.toLowerCase().includes(element));

    listFiltrered = result.flatMap((recipe) => recipe.appliance);
    listFiltreredUnique  = [...new Set(listFiltrered)];

    listTagfiltered = listFiltreredUnique.filter( appliance => appliance.toLowerCase().includes(element));

  }

  if(e.target.parentNode.className.includes('dropdown-ustensils')) {
    result = recipesUpdated.filter(recipe => recipe.ustensils);

    listFiltrered = result.flatMap((recipe) => recipe.ustensils);
    listFiltreredUnique  = [...new Set(listFiltrered)];

    listTagfiltered = listFiltreredUnique.filter( ustensil => ustensil.toLowerCase().includes(element));

  }

  menuTag.innerHTML = "";

  listTagfiltered.forEach(function(item) {
    
    let list = document.createElement("li");
    list.innerText = item;
    list.classList = "tag";
    list.addEventListener('click',tagSelected);

    menuTag.appendChild(list);
  })
}

inputIngredients.addEventListener('input',listFilteredWithSearchbarDropdown);
inputAppliances.addEventListener('input',listFilteredWithSearchbarDropdown);
inputUstensils.addEventListener('input',listFilteredWithSearchbarDropdown);
