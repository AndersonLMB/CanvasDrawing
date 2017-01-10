/// <reference path="../require.js" />
/// <reference path="../jquery.js" />
/// <reference path="../Env/setting.js" />

define('drawLine', [
    'setting',
    'jquery'
], function () {
    alert(mode.ReturnAvailableDrawingMode()[0]);
    $(".canvas-container").css(setting.CanvasStyle);
    $(".tools-container").css("border",setting.ReturnCSS());
});