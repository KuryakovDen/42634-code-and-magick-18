'use strict';

(function () {
  window.load = function (url, data, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });

    xhr.open('POST', url);
    xhr.send(data);
  };
})();
