import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
      return `
    <a class="gallery__link" href="${items.original}">
    <img
        class="gallery__image"
        src="${items.preview}"
        alt="${items.description}"
    />
    </a>`;
    })
    .join('');
}
