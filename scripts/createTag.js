let tags = document.querySelectorAll('.tag');
const tagSection = document.querySelector('.tag-section');
let tag = document.querySelector('.tag');

function tagSelected(event) {

  if (!tagSection.textContent.includes(event.target.textContent)) {
    event.target.style.backgroundColor = 'rgb(6, 62, 147, 0.3)';

    const btnTag = document.createElement('div');
    btnTag.classList = 'btn-tag';
  
    const tagName = document.createElement('p');
    tagName.classList = 'tag-name';
    tagName.textContent = event.target.textContent;
  
    const closeBtnTag = document.createElement('i');
    closeBtnTag.classList = 'far fa-times-circle';
    closeBtnTag.addEventListener('click', closeTag)

    
    tagSection.appendChild(btnTag);
    btnTag.appendChild(tagName);
    btnTag.appendChild(closeBtnTag);

    
    // recipesSection.innerHTML = "";

    //Affichage avec filtres sélectionnés

    // const result = recipes.filter((recipe) => recipe.name.toLowerCase().includes(tagName))

    // result.forEach(recipe => {
    //   const recipeModel = recipeFactory(recipe);
    //   const recipeCard = recipeModel.card();

    // recipesSection.appendChild(recipeCard);
    // })


    function closeTag() {
    tagSection.removeChild(btnTag);
    event.target.style.backgroundColor = 'transparent';
    }

  }

}
const createTag = tags.forEach((tag) => tag.addEventListener('click',tagSelected))


inputIngredients.addEventListener('change',tagSelected)
