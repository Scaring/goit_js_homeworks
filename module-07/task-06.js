'use strict';

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const validationInput = document.querySelector('#validation-input');
const validCount = Number(validationInput.getAttribute('data-length'));

const checkValidation = function checkValidation() {
  this.classList.remove('invalid', 'valid');
  let inputResult = '';
  let inputResultLength = 0;

  inputResult += event.target.value;
  inputResultLength = inputResult.length;

  if (inputResultLength !== validCount) {
    this.classList.add('invalid');
  } else {
    this.classList.add('valid');
  }
};

validationInput.addEventListener('change', checkValidation);
