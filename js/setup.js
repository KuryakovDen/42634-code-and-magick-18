'use strict';
/* eslint no-console: 0*/

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

var arrayData = [];

var createRandomObjects = function (objectsCount) {
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
console.log(testData);

var gamePopup = document.querySelector('.setup');
gamePopup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarCharacters = document.querySelector('.setup-similar-list');
var similarWirardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < arrayData.length; i++) {
  var wizardElement = similarWirardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = arrayData[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = arrayData[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = arrayData[i].eyesColor;

  similarCharacters.appendChild(wizardElement);
}
