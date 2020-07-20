'use strict';

(function () {
  const buttons = document.querySelectorAll('.advantages__button');
  const texts = document.querySelectorAll('.advantages__text');

  buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      button.classList.toggle('active');
      texts[index].classList.toggle('shown');
    });
  });
})();
