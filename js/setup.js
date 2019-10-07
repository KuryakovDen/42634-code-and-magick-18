'use strict';

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var countOfWizards = 4;

var ESC_KEYCODE = 13;
var ENTER_KEYCODE = 27;

var getRandomElement = function (wizards) {
  var randomIndex = Math.floor(Math.random() * wizards.length);
  return wizards[randomIndex];
};

var getRandomFullname = function (wizardName, wizardLastname) {
  return getRandomElement(wizardName) + ' ' + getRandomElement(wizardLastname);
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

var wizards = createRandomWizards(countOfWizards);

var getSetupSimilarList = function () {
  return document.querySelector('.setup-similar');
};

getSetupSimilarList().classList.remove('hidden');

var createRandomWizardLook = function (wizardsArray) {
  var similarCharacters = function () {
    return document.querySelector('.setup-similar-list');
  };

  var similarWirardTemplate = function () {
    return document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  };

  for (var i = 0; i < wizardsArray.length; i++) {
    var wizardElement = similarWirardTemplate().cloneNode(true);

    var getSetupSimilarLabel = function () {
      return wizardElement.querySelector('.setup-similar-label');
    };

    var getColorWizardCoat = function () {
      return wizardElement.querySelector('.wizard-coat');
    };

    var getSetupWizardEyes = function () {
      return wizardElement.querySelector('.wizard-eyes');
    };

    getSetupSimilarLabel().textContent = wizardsArray[i].name;
    getColorWizardCoat().style.fill = wizardsArray[i].coatColor;
    getSetupWizardEyes().style.fill = wizardsArray[i].eyesColor;

    similarCharacters().appendChild(wizardElement);
  }

  return wizardsArray;
};

createRandomWizardLook(wizards);

// Events

var modalWindow = document.querySelector('.setup');

var getSetupUserName = function () {
  return modalWindow.querySelector('.setup-user-name');
};

var getSetupOpenWindow = function () {
  return document.querySelector('.setup-open');
};

var getSetupCloseWindow = function () {
  return modalWindow.querySelector('.setup-close');
};

getSetupUserName().addEventListener('invalid', function (evt) {
  if (getSetupUserName().validity.tooShort) {
    getSetupUserName().setCustomValidity('Имя персонажа не должно быть короче 2 символов');
  } else if (getSetupUserName().validity.tooLong) {
    getSetupUserName().setCustomValidity('Имя персонажа не должно быть длиннее 25 символов');
  } else if (getSetupUserName().validity.valueMissing) {
    getSetupUserName().setCustomValidity('Это поле обязательно для заполнения!');
  } else {
    getSetupUserName().setCustomValidity('');
  }
});

getSetupUserName().addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя персонажа не должно быть короче 2 символов');
  } else {
    target.setCustomValidity('');
  }
});

getSetupOpenWindow().addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
});

getSetupCloseWindow().addEventListener('click', function () {
  modalWindow.classList.add('hidden');
});

