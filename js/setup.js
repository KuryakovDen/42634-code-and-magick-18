'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var wizards = [];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomElement = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];
  return randomElement;
};

var getRandomFullname = function (firstArray, secondArray) {
  return getRandomElement(firstArray) + ' ' + getRandomElement(secondArray);
};

var createRandomObjects = function (objectsCount) {
  for (var i = 0; i < objectsCount; i++) {
    var singleWizard = {
      name: getRandomFullname(names, lastnames),
      coatColor: getRandomElement(coatColors),
      eyesColor: getRandomElement(eyesColors)
    };

    wizards[i] = singleWizard;
  }

  return wizards;
};

createRandomObjects(4);

var gamePopup = document.querySelector('.setup');
gamePopup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarCharacters = document.querySelector('.setup-similar-list');
var similarWirardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWirardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarCharacters.appendChild(wizardElement);
}
