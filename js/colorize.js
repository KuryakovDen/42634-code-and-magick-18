'use strict';

(function () {
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

  var wizardCoatClickHandler = function () {
    getColorMainWizardCoat().style.fill = window.util.getRandomElement(window.setup.coatColors);
  };

  var wizardEyesClickHandler = function () {
    getSetupMainWizardEyes().style.fill = window.util.getRandomElement(window.setup.eyesColors);
  };

  var wizardWireballClickHandler = function () {
    getSetupWireballColor().style.background = window.util.getRandomElement(fireballColors);
  };

  getColorMainWizardCoat().addEventListener('click', wizardCoatClickHandler);
  getSetupMainWizardEyes().addEventListener('click', wizardEyesClickHandler);
  getSetupWireballColor().addEventListener('click', wizardWireballClickHandler);
})();
