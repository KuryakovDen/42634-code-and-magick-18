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

var barWidth = GAP + TEXT_WIDTH;
var textHeight = CLOUD_Y + GAP + FONT_GAP;

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
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  var maxTime = getMaxArrayValue(times);

  for (var i = 0; i < players.length; i++) {
    //   MAX_BAR      BAR[I]
    // ----------- = --------
    //  BAR_WIDTH       X

    //  X = (BAR_WIDTH * BAR[I]) / MAX_BAR

    ctx.fillText(players[i], START_GAP + (TEXT_GAP * i), textHeight); // Info about player's names
    ctx.fillRect(START_GAP + (CLOUD_X * i), CLOUD_HEIGHT - 30 - ((BAR_HEIGHT * times[i]) / maxTime), barWidth, (BAR_HEIGHT * times[i]) / maxTime); // Creating columns for the bar graph
    ctx.fillText(Math.round(times[i]), START_GAP + (TEXT_GAP * i), CLOUD_HEIGHT - 40 - ((BAR_HEIGHT * times[i]) / maxTime)); // Info about player's points

    ctx.fillStyle = 'hsl(240,' + 100 * Math.random() + '%' + ', 50%)'; // Creating random saturation for the color of another player's columns
  }
};

