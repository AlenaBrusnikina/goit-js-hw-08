import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// / Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

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
      return `<div class="gallery__item">
    <a class="gallery__link" href="${items.original}">
    <img
        class="gallery__image"
        src="${items.preview}"
        alt="${items.description}"
    />
    </a>
</div>`;
    })
    .join('');
}

console.log(imgMarkup);