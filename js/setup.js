'use strict';

var wizardNames = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Поттер'];

var gamePopup = document.querySelector('.setup');
gamePopup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarCharacters = document.querySelector('.setup-similar-list');
var similarWirardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i<wizardNames.length; i++) {
  var wizardElement = similarWirardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardNames[i];

  similarCharacters.appendChild(wizardElement);
}
