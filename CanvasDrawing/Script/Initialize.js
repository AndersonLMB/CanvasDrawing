/// <reference path="require.js" />

require.config({
    baseUrl: 'Script',
    paths: {
        jQuery: 'Lib/jquery',
        alert: 'Tool/alerttool',
        basealert: 'alert',
        drawLine: 'Tool/drawLine',
        setting:'Env/setting'
    }
});



require(['jquery', 'alert','basealert','setting','drawLine'], function ($) {

});

