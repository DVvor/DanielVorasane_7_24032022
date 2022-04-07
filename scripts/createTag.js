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

      function closeTag() {
        tagSection.removeChild(btnTag);
        event.target.style.backgroundColor = 'transparent';
        recipesArrayWithtagSelected()
        // listTagUpdated(event)
        const ingredientsTagsSelected = Array.from(document.querySelectorAll(".tag-blue")).map(tag => tag.textContent);
        const appliancesTagsSelected = Array.from(document.querySelectorAll(".tag-green")).map(tag => tag.textContent);
        const ustensilsTagsSelected = Array.from(document.querySelectorAll(".tag-red")).map(tag => tag.textContent);

        if(ingredientsTagsSelected.length === 0) {
          addListIgredientDropdown()  
        }
        if(appliancesTagsSelected.length === 0) {
          addListAppliancesDropdown()  
        }
        if(ustensilsTagsSelected.length === 0) {
          addListUstensilsDropdown()  
        }
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
    listTagUpdated(event)
    
    function listTagUpdated(event) {

      if(event.target.parentNode.className.includes('menu-blue')) {
    
        let ListTagsIngredients = recipesUpdated.flatMap((recipe) => recipe.ingredients.map( Allingredients => Allingredients.ingredient))
          let ListTagsIngredientsUniqueArray  = [...new Set(ListTagsIngredients)] 
          
          TagIngredients.innerHTML = "";
    
          ListTagsIngredientsUniqueArray.forEach(function(item) {
    
            let list = document.createElement("li");
            list.innerText = item;
            list.classList = "tag";
            list.addEventListener('click',tagSelected);
      
            TagIngredients.appendChild(list);
          })
      } else if(event.target.parentNode.className.includes('menu-red')) {
    
          let ListTagsUstensils = recipesUpdated.flatMap((recipe) => recipe.ustensils)
          let ListTagsUstensilsUniqueArray  = [...new Set(ListTagsUstensils)] 
          
          TagUstensils.innerHTML = "";
    
          ListTagsUstensilsUniqueArray.forEach(function(item) {
    
            let list = document.createElement("li");
            list.innerText = item;
            list.classList = "tag";
            list.addEventListener('click',tagSelected);
      
            TagUstensils.appendChild(list);
          })
      } else if(event.target.parentNode.className.includes('menu-green')) {
    
          let ListTagsAppliances = recipesUpdated.flatMap((recipe) => recipe.appliance)
          let ListTagsAppliancesUniqueArray  = [...new Set(ListTagsAppliances)] 
          
          TagAppliances.innerHTML = "";
    
          ListTagsAppliancesUniqueArray.forEach(function(item) {
    
            let list = document.createElement("li");
            list.innerText = item;
            list.classList = "tag";
            list.addEventListener('click',tagSelected);
      
            TagAppliances.appendChild(list);
          })
      }
      if(event.target.className.includes('fa-times-circle')) {
    
        let ListTagsAppliances = recipesUpdated.flatMap((recipe) => recipe.ustensils)
          let ListTagsAppliancesUniqueArray  = [...new Set(ListTagsAppliances)] 
          
          TagAppliances.innerHTML = "";
    
          ListTagsAppliancesUniqueArray.forEach(function(item) {
    
            let list = document.createElement("li");
            list.innerText = item;
            list.classList = "tag";
            list.addEventListener('click',tagSelected);
      
            TagAppliances.appendChild(list);
          })
      }

    }

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


  // Manque re actualiser liste tags apres avoir sélectionné un tag
  // Manque quand aucun tag => liste tag d'origine 