/// <reference path="../require.js" />
define('setting', function () {
    setting = {
        "LineStyle": {
            "color": "black",
            "style": "solid",
            "width": "2px",
        },
        "CanvasStyle": {
            "height": "80%",
            "width": "1024px"
        },


        "ReturnCSS": function () {
            return "2px solid black";
        }
    };
    mode = {
        "DrawingMode": null,
        "AvailableDrawingMode": [
            "DrawLine",
            "DrawCircle"
        ],
        "ReturnAvailableDrawingMode": function () {
            return this.AvailableDrawingMode;//it is an array
        }
    }
});



