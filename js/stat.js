'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 80;
var GAP = 10;
var START_GAP = 150;
var FONT_GAP = 170;
var TEXT_GAP = 90;
var TEXT_WIDTH = 30;
var BAR_HEIGHT = 150;
var barWidth = GAP + TEXT_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 50);
  ctx.fillText('Список результатов:', 130, 70);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Вы', START_GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP, barWidth, BAR_HEIGHT);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Ваня', START_GAP + TEXT_GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillRect((CLOUD_X * 2) + GAP + TEXT_WIDTH, CLOUD_Y + GAP, barWidth, BAR_HEIGHT);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Аня', START_GAP + (TEXT_GAP * 2), CLOUD_Y + GAP + FONT_GAP);
  ctx.fillRect((CLOUD_X * 3) + GAP + TEXT_WIDTH, CLOUD_Y + GAP, barWidth, BAR_HEIGHT);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Петя', START_GAP + START_GAP + START_GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillRect((CLOUD_X * 4) + GAP + TEXT_WIDTH, CLOUD_Y + GAP, barWidth, BAR_HEIGHT);
};
