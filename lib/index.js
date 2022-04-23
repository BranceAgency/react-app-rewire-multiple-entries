"use strict";

var _supportMultipleEntry = _interopRequireDefault(require("./supportMultipleEntry"));

var _getValidSettings = _interopRequireDefault(require("./getValidSettings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addMultipleEntries(params) {
  return (0, _supportMultipleEntry["default"])((0, _getValidSettings["default"])(params));
}

;
module.exports = addMultipleEntries;