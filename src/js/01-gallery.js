import { galleryItems } from './gallery-items.js';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const imgMarkup = createsMarkupGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imgMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createsMarkupGalleryItems(galleryItems) {
  return galleryItems
    .map(items => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${items.original}">
    <img
        class="gallery__image"
        src="${items.preview}"
        alt="${items.description}"
    />
    </a>
</li>`;
    })
    .join('');
}

console.log(imgMarkup);
