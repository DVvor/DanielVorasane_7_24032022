
//DOM
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

      const tagName = document.createElement('p');
      tagName.classList = 'tag-name';
      tagName.textContent = event.target.textContent;
    
      const closeBtnTag = document.createElement('i');
      closeBtnTag.classList = 'far fa-times-circle';
      closeBtnTag.addEventListener('click', closeTag);


      tagSection.appendChild(btnTag);
      btnTag.appendChild(tagName);
      btnTag.appendChild(closeBtnTag);

      if(event.target.parentNode.className.includes('menu-blue')) {
        btnTag.classList = 'btn-tag tag-blue';
        inputIngredients.value = "";

      }
      if(event.target.parentNode.className.includes('menu-red')) {
        btnTag.classList = 'btn-tag tag-red';
        inputUstensils.value = "";

      }
      if(event.target.parentNode.className.includes('menu-green')) {
        btnTag.classList = 'btn-tag tag-green';
        inputAppliances.value = "";

      }

      function closeTag() {
        tagSection.removeChild(btnTag);
        event.target.style.backgroundColor = 'transparent';
        recipesArrayWithtagSelected();
        listTagUpdated();
        DisplayRecipesClickBtnCloseTag();
      }
    }

    // Filtre tableau avec tag sélectionnés **************************************************

    function recipesArrayWithtagSelected() {

      const ingredientsTagsSelected = Array.from(document.querySelectorAll(".tag-blue")).map(tag => tag.textContent);
      const appliancesTagsSelected = Array.from(document.querySelectorAll(".tag-green")).map(tag => tag.textContent);
      const ustensilsTagsSelected = Array.from(document.querySelectorAll(".tag-red")).map(tag => tag.textContent);
      
      recipesUpdated = recipes.filter(recipe => 
        appliancesTagsSelected.every(tags => recipe.appliance.includes(tags)) // get recipe qui inclus chaque tag de appliancesTagsSelected array, car on ne peut pas utiliser .includes seul (ne peut inclure qu'un élément)
        && ustensilsTagsSelected.every(tags => recipe.ustensils.includes(tags))
        && ingredientsTagsSelected.every(tags => recipe.ingredients.some(ingredientItem => ingredientItem.ingredient.includes(tags)))
      );

      // Affichage des recettes actualisés avec les tags sélectionnés
      recipesSection.innerHTML = "";
    
      recipesUpdated.forEach(recipe => {
        const recipeModel = recipeFactory(recipe);
        const recipeCard = recipeModel.card();
    
        recipesSection.appendChild(recipeCard);
      })

    }

    recipesArrayWithtagSelected();
    listTagUpdated();


    function listTagUpdated() {
      // Liste dropdown des ingredients actualisée avec tag(s) sélectionné(s)
      let ListTagsIngredients = recipesUpdated.flatMap((recipe) => recipe.ingredients.map( Allingredients => Allingredients.ingredient));
      let ListTagsIngredientsUniqueArray  = [...new Set(ListTagsIngredients)];
      
      TagIngredients.innerHTML = "";

      ListTagsIngredientsUniqueArray.forEach(function(item) {
        let list = document.createElement("li");
        list.innerText = item;
        list.classList = "tag";
        list.addEventListener('click', tagSelected);
        
        if (tagSection.textContent.includes(item)) {
          list.style.backgroundColor = 'rgb(6, 62, 147, 0.3)';
        }

        TagIngredients.appendChild(list);
      })

      // Liste dropdown des ustensiles actualisée avec tag(s) sélectionné(s)
      let ListTagsUstensils = recipesUpdated.flatMap((recipe) => recipe.ustensils);
      let ListTagsUstensilsUniqueArray  = [...new Set(ListTagsUstensils)];
      
      TagUstensils.innerHTML = "";

      ListTagsUstensilsUniqueArray.forEach(function(item) {
        let list = document.createElement("li");
        list.innerText = item;
        list.classList = "tag";
        list.addEventListener('click', tagSelected);
        
        if (tagSection.textContent.includes(item)) {
          list.style.backgroundColor = 'rgb(6, 62, 147, 0.3)';
        }

        TagUstensils.appendChild(list);
      })

      // Liste dropdown des appareils actualisée avec tag(s) sélectionné(s)
      let ListTagsAppliances = recipesUpdated.flatMap((recipe) => recipe.appliance);
      let ListTagsAppliancesUniqueArray  = [...new Set(ListTagsAppliances)];
      
      TagAppliances.innerHTML = "";

      ListTagsAppliancesUniqueArray.forEach(function(item) {
        let list = document.createElement("li");
        list.innerText = item;
        list.classList = "tag";
        list.addEventListener('click', tagSelected);
        
        if (tagSection.textContent.includes(item)) {
          list.style.backgroundColor = 'rgb(6, 62, 147, 0.3)';
        }

        TagAppliances.appendChild(list);
      })
    }

}

// Ajout event listener sur chaque tag dans chaque dropdown
tags.forEach((tag) => tag.addEventListener('click',tagSelected));

// Affichage actualisé lorsqu'on retire un tag de la sélection
function DisplayRecipesClickBtnCloseTag() {
  arrayTagSelected = Array.from(document.querySelectorAll('.tag-name'));

  if(arrayTagSelected.length == 0){
    searchBar();

    recipesSection.innerHTML = "";

    recipesUpdated.forEach(recipe => {
    const recipeModel = recipeFactory(recipe);
    const recipeCard = recipeModel.card();

    recipesSection.appendChild(recipeCard);
    })
  }
}
