'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.8)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 150, 260);
  ctx.fillRect(135, 90, 50, 150);

  ctx.fillText('Ваня', 240, 260);
  ctx.fillRect(235, 90, 50, 150);

  ctx.fillText('Аня', 340, 260);
  ctx.fillRect(335, 90, 50, 150);

  ctx.fillText('Петя', 440, 260);
  ctx.fillRect(435, 90, 50, 150);
};
