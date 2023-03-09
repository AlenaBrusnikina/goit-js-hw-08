import { galleryItems } from './gallery-items.js';
// Change code below this line

// Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
const imgMarkup = createsMarkupGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imgMarkup);

function createsMarkupGalleryItems(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
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

galleryEl.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
   <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryEl.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}