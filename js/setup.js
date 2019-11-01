'use strict';

(function () {
  window.setup = {
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green']
  };

  var countOfWizards = 8;

  var getSetupSimilarList = function () {
    return document.querySelector('.setup-similar');
  };

  getSetupSimilarList().classList.remove('hidden');


  var getWizardForm = function () {
    return document.querySelector('.setup-wizard-form');
  };

  var onSaveSuccess = function () {
    window.dialog.modalWindow.classList.add('hidden');
  };

  var onSaveError = function (errorMessage) {
    var node = document.createElement('div');
    node.style.position = 'absolute';
    node.style = 'z-index: 20; background: red; margin: 0 auto; color: white; text-align: center; font-weight: bold';
    node.style.top = '100px';
    node.style.fontSize = '30px';
    node.style.left = 0;
    node.style.right = 0;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  getWizardForm().addEventListener('submit', function (evt) {
    window.save('https://js.dump.academy/code-and-magick', new FormData(getWizardForm()), onSaveSuccess, onSaveError);
    evt.preventDefault();
  });

  var onLoadSuccess = function (wizardsArray) {
    var similarCharacters = function () {
      return document.querySelector('.setup-similar-list');
    };

    var similarWirardTemplate = function () {
      return document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    };

    for (var i = 4; i < countOfWizards; i++) {
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
      getColorWizardCoat().style.fill = wizardsArray[i].colorCoat;
      getSetupWizardEyes().style.fill = wizardsArray[i].colorEyes;

      similarCharacters().appendChild(wizardElement);
    }

    return wizardsArray;
  };

  var onErrorLoad = function (errorMessage) {
    var node = document.createElement('div');
    node.style.position = 'absolute';
    node.style = 'z-index: 20; background: red; margin: 0 auto; color: white; text-align: center; font-weight: bold';
    node.style.top = '100px';
    node.style.fontSize = '30px';
    node.style.left = 0;
    node.style.right = 0;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load('https://js.dump.academy/code-and-magick/data', onLoadSuccess, onErrorLoad);
})();
