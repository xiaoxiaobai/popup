define("arale/popup/0.0.1/popup-debug", [ "gallery/jquery/1.8.2/jquery-debug" ], function(require, exports, module) {
    var popup, $ = require("gallery/jquery/1.8.2/jquery-debug");
    popup = function() {
        alert(1);
    };
    module.exports = popup;
});