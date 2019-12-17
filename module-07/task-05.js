'use strict';

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его
// текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'

let inputName = document.querySelector('input#name-input');

let outputName = document.querySelector('span#name-output');

const DEFAULTNAME = 'незнакомец';

let name = '';

const changeName = function changeName() {
  if (event.data !== null) {
    name += event.data;
    outputName.textContent = name;
  } else if (event.data === null) {
    name = name.slice(0, -1);
    outputName.textContent = name;
    if (name === '') {
      outputName.textContent = DEFAULTNAME;
    }
  }
};

inputName.addEventListener('input', changeName);
