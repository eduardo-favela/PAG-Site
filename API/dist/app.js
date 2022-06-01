"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _contacto = _interopRequireDefault(require("./routes/contacto"));

var _ubicacion = _interopRequireDefault(require("./routes/ubicacion"));

var _blog = _interopRequireDefault(require("./routes/blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
/* const corsOptions = {
    origin: 'http://facebook.com'
} */

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use('/api/contacto', _contacto["default"]);
app.use('/api/ubicacion', _ubicacion["default"]);
app.use('/api/blog', _blog["default"]);
var _default = app;
exports["default"] = _default;