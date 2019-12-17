'use strict';

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль
// span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const fzCtrl = document.querySelector('#font-size-control');
const text = document.querySelector('span#text');

fzCtrl.addEventListener('input', event =>
  text.setAttribute('style', `font-size: ${16 * (fzCtrl.value / 50)}px;`),
);
