//DOM Elements
const inputDropdown = document.querySelector('.input-ingredient');
const arrowIngredients = document.querySelector('.arrow-ingredients');  
const arrowAppliance = document.querySelector('.arrow-appliance');  
const arrowUstensils = document.querySelector('.arrow-ustensils');  
const dropdownIngredients = document.querySelector('.dropdown-ingredients');
const TagIngredients = document.querySelector('.tag-ingredients');
const dropdownBL = document.querySelector('.dropdown-bl');


function openDropdown() {
  const dropdownParent = document.querySelector('.dropdown-bl');

arrowIngredients.classList.replace('fa-angle-down', 'fa-angle-up');

TagIngredients.style.display = 'grid';
inputDropdown.removeAttribute('placeholder');
inputDropdown.setAttribute('placeholder', 'Rechercher un ingrédient');

dropdownParent.style.width = '600px';
dropdownParent.style.borderRadius = '5px 5px 0px 0px';


}
arrowIngredients.addEventListener('click',openDropdown)


function closeDropdown() {
  const dropdownParent = document.querySelector('.dropdown-bl');

arrowIngredients.classList.replace('fa-angle-up', 'fa-angle-down');

TagIngredients.style.display = 'none';
inputDropdown.removeAttribute('placeholder');
inputDropdown.setAttribute('placeholder', 'Ingrédient');

dropdownParent.style.width = null;
dropdownParent.style.borderRadius = '5px';


}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeDropdown()
  }
  
})

function searchBarDropdown (e){

  const element = e.target.value.toLowerCase()
  const result = recipes.filter((recipe) => recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(element)))

  console.log(element, result)


  recipesSection.innerHTML = "";

  result.forEach(recipe => {
    const recipeModel = recipeFactory(recipe);
    const recipeCard = recipeModel.card();

    recipesSection.appendChild(recipeCard);
  })

}
inputDropdown.addEventListener('change',searchBarDropdown)


function addListIgredient() {
  const ListTagsIngredients = recipes.flatMap((recipe) => recipe.ingredients.map( Allingredient => Allingredient.ingredient))
  const ListTagsIngredientsUniqueArr  = [...new Set(ListTagsIngredients)] 
  
  ListTagsIngredientsUniqueArr.forEach(function(item) {
    
    let list = document.createElement("li");
    list.innerText = item;
    list.classList = "tag";
  
    TagIngredients.appendChild(list);
      })
  
  
  
  console.log(ListTagsIngredientsUniqueArr)

  
}
addListIgredient()

