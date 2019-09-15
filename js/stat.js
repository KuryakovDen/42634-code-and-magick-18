'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
/* var CLOUD_X = 100;
var CLOUD_Y = 40;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;*/

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Вы', 150, 260);
  ctx.fillRect(135, 90, 40, 150);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Ваня', 240, 260);
  ctx.fillRect(235, 90, 40, 150);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Аня', 340, 260);
  ctx.fillRect(335, 90, 40, 150);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Петя', 440, 260);
  ctx.fillRect(435, 90, 40, 150);
};
