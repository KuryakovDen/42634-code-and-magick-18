'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 80;
var GAP = 10;
var START_GAP = 140;
var FONT_GAP = 170;
var TEXT_GAP = 100;
var TEXT_WIDTH = 30;
var BAR_HEIGHT = 150;

var barWidth = GAP + TEXT_WIDTH;
var heightY = CLOUD_Y + GAP;
var textHeight = CLOUD_Y + GAP + FONT_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 50);
  ctx.fillText('Список результатов:', 130, 70);

  var players = ['Вы', 'Ваня', 'Аня', 'Кекс'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], START_GAP + (TEXT_GAP * i), textHeight);
    ctx.fillRect(START_GAP + (CLOUD_X * i), heightY, barWidth, BAR_HEIGHT);

    /* ctx.fillStyle = i > 0 ? 'hsl(240,' + 100 * Math.random() + '%' + ', 50%)' : 'rgba(255, 0, 0, 1)';*/
    ctx.fillStyle = 'hsl(240,' + 100 * Math.random() + '%' + ', 50%)';
  }
};
