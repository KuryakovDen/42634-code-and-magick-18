'use strict';

(function () {
  window.setup = {
    getRandomElement: function (wizards) {
      var randomIndex = Math.floor(Math.random() * wizards.length);
      return wizards[randomIndex];
    },

    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green']
  };

  var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardLastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var countOfWizards = 4;

  var getRandomFullname = function (wizardName, wizardLastname) {
    return window.setup.getRandomElement(wizardName) + ' ' + window.setup.getRandomElement(wizardLastname);
  };

  var createRandomWizards = function (wizardsCount) {
    var randomWizards = [];

    for (var i = 0; i < wizardsCount; i++) {
      randomWizards.push({
        name: getRandomFullname(wizardNames, wizardLastnames),
        coatColor: window.setup.getRandomElement(window.setup.coatColors),
        eyesColor: window.setup.getRandomElement(window.setup.eyesColors)
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
})();
