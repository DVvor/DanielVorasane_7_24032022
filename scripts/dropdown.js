//DOM Elements
const inputDropdown = document.querySelector('.input-ingredient');

function searchDropdown() {
  
  
  // agrandir block quand on rentre dans l'input
  const dropdownBlIngredient = document.querySelector('.dropdown-bl-ingredients');
   
  dropdownBlIngredient.style.width = "450px";
  dropdownBlIngredient.style.animation = "dropdown 0.5s";
  // dropdownBlIngredient.style.justifyContent = "space-between";
}



inputDropdown.addEventListener('click',searchDropdown)
 
function filterDropdown() {
  const dropdownBl = document.querySelectorAll('.dropdown-bl');
  const list = document.createElement('div');
  list.classList.add('list');
  // list.style.height = "1000px"

  dropdownBl.appendChild(list);

}

inputDropdown.addEventListener('click',filterDropdown)

