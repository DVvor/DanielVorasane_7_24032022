const tag = document.querySelector('.tag');
const thumbnailsSection = document.querySelector('.thumbnails-section');


console.log(tag)



function tagSelected() {
  alert('test')

  tag.style.backgroundColor = 'rgb(6, 62, 147, 0.3)';

  const thumbnails = document.createElement('div');
  thumbnails.classList = 'thumbnails';
  thumbnails.textContent = 'Coco';
  thumbnailsSection.appendChild(thumbnails);


}

tag.addEventListener('click',tagSelected)