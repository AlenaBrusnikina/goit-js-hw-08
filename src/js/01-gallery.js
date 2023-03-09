import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

//? Описаний в документації
import SimpleLightbox from "simplelightbox";
//? Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

//!Пошук елементів
const galleryEl = document.querySelector('.gallery');
const imgMarkup = createsMarkupGalleryItems(galleryItems);

//!Додавання рядка з HTML-тегами всередину елемента
galleryEl.insertAdjacentHTML('beforeend', imgMarkup);

//! Додавання затримки для опису зображення
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

//!Перебирання масиву об'єктів з файлу './gallery-items.js' та створення розмітки
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

console.log(imgMarkup);
