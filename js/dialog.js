'use strict';

(function () {
  window.dialog = {
    modalWindow: document.querySelector('.setup')
  };

  var getSetupUserName = function () {
    return window.dialog.modalWindow.querySelector('.setup-user-name');
  };

  var getSetupOpenWindow = function () {
    return document.querySelector('.setup-open');
  };

  var getSetupCloseWindow = function () {
    return window.dialog.modalWindow.querySelector('.setup-close');
  };

  var popupEscHandler = function (evt) {
    window.util.escEvent(evt, closePopup);
  };

  var openPopup = function () {
    window.dialog.modalWindow.classList.remove('hidden');

    document.addEventListener('keydown', popupEscHandler);
  };

  var closePopup = function () {
    window.dialog.modalWindow.classList.add('hidden');
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
    window.util.enterEvent(evt, openPopup);
  });

  getSetupCloseWindow().addEventListener('click', function () {
    closePopup();
  });

  getSetupCloseWindow().addEventListener('keydown', function (evt) {
    window.util.enterEvent(evt, closePopup);
  });
})();
