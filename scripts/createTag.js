const tags = document.querySelectorAll('.tag');
const tagSection = document.querySelector('.tag-section');
const tag = document.querySelector('.tag');

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
  
    
    tagSection.appendChild(btnTag);
    btnTag.appendChild(tagName);
    btnTag.appendChild(closeBtnTag);
    console.log(closeBtnTag)

    closeBtnTag.addEventListener('click', closeTag)

  function closeTag() {
    tagSection.removeChild(btnTag);
    event.target.style.backgroundColor = 'transparent';


  }

  }

  


}
const createTag = tags.forEach((tag) => tag.addEventListener('click',tagSelected))

// const btnTagClose = document.querySelector('.fa-times-circle ');



// barre de recherche filtre et propose les ingrédients en fonction de la recherche 
// affichage des recettes en fonction des tags sélectionnés

