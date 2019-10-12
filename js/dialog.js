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
  getColorMainWizardCoat().style.fill = getRandomElement(coatColors);
};

var wizardEyesClickHandler = function () {
  getSetupMainWizardEyes().style.fill = getRandomElement(eyesColors);
};

var wizardWireballClickHandler = function () {
  getSetupWireballColor().style.background = getRandomElement(fireballColors);
};

getColorMainWizardCoat().addEventListener('click', wizardCoatClickHandler);
getSetupMainWizardEyes().addEventListener('click', wizardEyesClickHandler);
getSetupWireballColor().addEventListener('click', wizardWireballClickHandler);

