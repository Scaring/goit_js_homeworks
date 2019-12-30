'use strict';
import images from './items.js';

//variables
const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('.lightbox__button');
const lightboxOverlay = document.querySelector('.lightbox');
const imgsCount = images.length;

let checkModalStatement = false;
let imgSrc = undefined;
let newImageSrc = undefined;
let focusPosition = null;

//open modal
const openModal = () => {
  event.preventDefault();
  if (event.target === gallery) return;
  imgSrc = event.target.getAttribute('data-source');
  lightbox.classList.add('is-open');
  lightboxImg.setAttribute('src', imgSrc);
  checkModalStatement = true;
};
//close modal
const closeModal = () => {
  lightbox.classList.remove('is-open');
  imgSrc = undefined;
  checkModalStatement = false;
};
//change img by arrows
const currentImgPosition = () => {
  const imageInObj = images.find(({ original }) => original === imgSrc);
  const position = images.indexOf(imageInObj);
  return position;
};

const setNewImg = () => {
  newImageSrc = images[focusPosition].original;
  imgSrc = newImageSrc;
  lightboxImg.setAttribute('src', newImageSrc);
};

const nextImg = () => {
  focusPosition = currentImgPosition() + 1;
  if (focusPosition > imgsCount - 1) focusPosition = 0;
  setNewImg();
};

const prevImg = () => {
  focusPosition = currentImgPosition() - 1;
  if (focusPosition < 0) focusPosition = imgsCount - 1;
  setNewImg();
};

//addEventListener & call functions
gallery.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
lightboxOverlay.addEventListener('click', closeModal);

window.onkeydown = function(event) {
  if (event.keyCode == 27 && checkModalStatement) {
    closeModal();
  }
  if (event.keyCode == 37 && checkModalStatement) {
    prevImg();
  }
  if (event.keyCode == 39 && checkModalStatement) {
    nextImg();
  }
};
