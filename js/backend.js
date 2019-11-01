'use strict';

(function () {
  window.load = function (url, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Ваш запрос не успел выполниться за ' + xhr.timeout + ' мс');
    });

    xhr.timeout = 1000; // 1 second

    xhr.open('GET', url);
    xhr.send();
  };
})();
