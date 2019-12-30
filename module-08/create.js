'use strict';
import images from './items.js';

const gallery = document.querySelector('.gallery');
let galleryItems = '';

images.forEach(img => {
  galleryItems += `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${img.preview}"
    >
      <img
        class="gallery__image"
        src="${img.preview}"
        data-source="${img.original}"
        alt="${img.description}"
      />
    </a>
  </li>`;
});

gallery.insertAdjacentHTML('afterbegin', galleryItems);
