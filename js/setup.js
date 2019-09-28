'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];
  return randomElement;
};

var getRandomFullname = function (firstArray, secondArray) {
  var wirardFullname = getRandomElement(firstArray) + ' ' + getRandomElement(secondArray);
  return wirardFullname;
};

var createRandomObjects = function (objectsCount) {
  var arrayData = [];

  for (var i = 0; i < objectsCount; i++) {
    var objectData = {
      name: getRandomFullname(names, lastnames),
      coatColor: getRandomElement(coatColors),
      eyesColor: getRandomElement(eyesColors)
    };

    arrayData[i] = objectData;
  }

  return arrayData;
};

var testData = createRandomObjects(4);

/* var wizardName = getRandomElement(names);
var wizardLastName = getRandomElement(lastnames);
var wizardCoatColor = getRandomElement(coatColors);
var wizardEyeColor = getRandomElement(eyesColors);
var wirardFullname = getRandomFullname(names, lastnames);*/


var gamePopup = document.querySelector('.setup');
gamePopup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarCharacters = document.querySelector('.setup-similar-list');
var similarWirardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i<randomNames.length; i++) {
  var wizardElement = similarWirardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = randomNames[i];

  similarCharacters.appendChild(wizardElement);
}
