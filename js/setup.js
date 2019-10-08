'use strict';

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var countOfWizards = 4;

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

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

var popupEscHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  modalWindow.classList.remove('hidden');

  document.addEventListener('keydown', popupEscHandler);
};

var closePopup = function () {
  modalWindow.classList.add('hidden');
};

var inputValidityHandler = function (validityParam) {
  validityParam = getSetupUserName().validity;
  var message = '';

  if (validityParam.tooShort) {
    message = 'Имя персонажа не должно быть короче 2 символов!';
  } else if (validityParam.tooLong) {
    message = 'Имя персонажа не должно быть длиннее 25 символов!';
  } else if (validityParam.valueMissing) {
    message = 'Это поле обязательно для заполнения!';
  } else {
    message = '';
  }

  return getSetupUserName().setCustomValidity(message);
};

var inputSmallLengthValidityHandler = function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя персонажа не должно быть короче 2 символов!');
  } else {
    target.setCustomValidity('');
  }
};

getSetupUserName().addEventListener('invalid', inputValidityHandler);
getSetupUserName().addEventListener('input', inputSmallLengthValidityHandler);

getSetupOpenWindow().addEventListener('click', function () {
  openPopup();
});

getSetupOpenWindow().addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

getSetupCloseWindow().addEventListener('click', function () {
  closePopup();
});

getSetupCloseWindow().addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var getRandomColorCoat = getRandomElement(coatColors);
var getRandomColorEyes = getRandomElement(eyesColors);
var getRandomColorWireball = getRandomElement(fireballColors);

var getSetupMainWizard = document.querySelector('.setup-wizard');

var getColorMainWizardCoat = function () {
  return getSetupMainWizard.querySelector('.wizard-coat');
};

var getSetupMainWizardEyes = function () {
  return getSetupMainWizard.querySelector('.wizard-eyes');
};

var getSetupWireballColor = function () {
  return document.querySelector('.setup-fireball-wrap');
};

getColorMainWizardCoat().addEventListener('click', function () {
  getColorMainWizardCoat().style.fill = getRandomColorCoat;
});

getSetupMainWizardEyes().addEventListener('click', function () {
  getSetupMainWizardEyes().style.fill = getRandomColorEyes;
});

getSetupWireballColor().addEventListener('click', function () {
  getSetupWireballColor().style.background = getRandomColorWireball;
});
