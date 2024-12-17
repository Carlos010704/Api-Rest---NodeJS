"use strict";

var _app = _interopRequireDefault(require("./app"));
var _connection = require("./datebase/connection");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const port = 3000;

_app["default"].listen(_app["default"].get('port'));
console.log('Servidor establecido en http://127.0.0.1:' + _app["default"].get('port'));
(0, _connection.getConnection)();