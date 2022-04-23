"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatName = exports.checkFileExist = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formatName = function formatName(name) {
  if (!name) {
    name = '';
  }

  return name.split('/').reverse()[0].match(/^[^.]*/)[0];
};

exports.formatName = formatName;

var checkFileExist = function checkFileExist(file) {
  if (!_fs["default"].existsSync(file)) {
    throw new Error('File not found: ' + file);
  }
};

exports.checkFileExist = checkFileExist;