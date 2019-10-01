'use strict';

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomElement = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

var getRandomFullname = function (names, lastnames) {
  return getRandomElement(names) + ' ' + getRandomElement(lastnames);
};

var createRandomWizards = function (wizardsCount) {
  var randomWizards = [];

  for (var i = 0; i < wizardsCount; i++) {
    randomWizards.push({
      name: getRandomFullname(wizardNames, wizardLastnames),
      coatColor: getRandomElement(coatColors),
      eyesColor: getRandomElement(eyesColors)
    });
  }

  return randomWizards;
};

var wizards = createRandomWizards(4);

var findCurrentGameElement = function (className) {
  return document.querySelector(className);
};

var showGamePopup = function (className) {
  return document.querySelector(className).classList.remove('hidden');
};

showGamePopup('.setup');
showGamePopup('.setup-similar');

var createRandomWizardLook = function (array) {
  var similarCharacters = findCurrentGameElement('.setup-similar-list');
  var similarWirardTemplate = findCurrentGameElement('#similar-wizard-template').content.querySelector('.setup-similar-item');

  for (var i = 0; i < array.length; i++) {
    var wizardElement = similarWirardTemplate.cloneNode(true);

    var getRandomCLothesElement = function (className) {
      return wizardElement.querySelector(className);
    };

    getRandomCLothesElement('.setup-similar-label').textContent = array[i].name;
    getRandomCLothesElement('.wizard-coat').style.fill = array[i].coatColor;
    getRandomCLothesElement('.wizard-eyes').style.fill = array[i].eyesColor;

    similarCharacters.appendChild(wizardElement);
  }

  return array;
};

createRandomWizardLook(wizards);
