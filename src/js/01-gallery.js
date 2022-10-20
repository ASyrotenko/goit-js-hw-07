import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgContainer = document.querySelector('.gallery');
const imgMarkup = createImgMarkup(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', imgMarkup);

imgContainer.addEventListener('click', onImgContainerClick);

function createImgMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
    })
    .join('');
}

function onImgContainerClick(evt) {
  const isImgEl = evt.target.classList.contains('gallery__image');

  if (!isImgEl) {
    return;
  }

  console.log(evt.target.dataset);
}
