'use strict';

var gamePopup = document.querySelector('.setup');
gamePopup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarCharacters = document.querySelector('.setup-similar-list');
var similarWirardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i<4; i++) {
  var wizardElement = similarWirardTemplate.cloneNode(true);
  similarCharacters.appendChild(wizardElement);
}
