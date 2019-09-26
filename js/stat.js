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
var BAR_HEIGHT = 140;
var COLUMN_INDENT = 30;
var POINTS_INDENT = 40;

var barWidth = GAP + TEXT_WIDTH;
var textHeight = CLOUD_Y + GAP + FONT_GAP;
var winnerMessage = 'Ура вы победили!';
var resultsList = 'Список результатов';
var textFont = '16px PT Mono';
var defaultColumnColor = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxArrayValue = function (arr) {
  var maxValue = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 120, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 110, 10, '#fff');

  ctx.fillStyle = defaultColumnColor;
  ctx.font = textFont;
  ctx.fillText(winnerMessage, 130, 40);
  ctx.fillText(resultsList, 130, 60);

  var maxTime = getMaxArrayValue(times);

  var createPlayerNames = function (array, i) {
    ctx.fillText(players[i], START_GAP + (TEXT_GAP * i), textHeight);
  };

  var createColumns = function (array, i) {
    ctx.fillRect(START_GAP + (CLOUD_X * i), CLOUD_HEIGHT - COLUMN_INDENT - ((BAR_HEIGHT * times[i]) / maxTime), barWidth, (BAR_HEIGHT * times[i]) / maxTime);
  };

  var calculatePlayerPoints = function (array, i) {
    ctx.fillText(Math.round(times[i]), START_GAP + (TEXT_GAP * i), CLOUD_HEIGHT - POINTS_INDENT - ((BAR_HEIGHT * times[i]) / maxTime));
  };

  var createRandomSaturation = function (colorVariable, percent, colorLightness) {
    ctx.fillStyle = 'hsl(' + colorVariable + ',' + percent * Math.random() + '%' + ',' + colorLightness + '%)';
  };

  for (var i = 0; i < players.length; i++) {
    //   MAX_BAR      BAR[I]
    // ----------- = --------
    //  BAR_WIDTH       X

    //  X = (BAR_WIDTH * BAR[I]) / MAX_BAR

    createPlayerNames(players, i);
    createColumns(times, i);
    calculatePlayerPoints(times, i);
    createRandomSaturation(240, 100, 50);
  }
};

