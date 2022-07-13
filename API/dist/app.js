"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

require("./database");

require("core-js/stable");

require("regenerator-runtime/runtime");

var _contacto = _interopRequireDefault(require("./routes/contacto"));

var _ubicacion = _interopRequireDefault(require("./routes/ubicacion"));

var _blog = _interopRequireDefault(require("./routes/blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fs = require('fs');

var http = require('http');

var https = require('https');

var privateKey = fs.readFileSync("".concat(__dirname, "/pvtky.pem"), 'utf8');
var certificate = fs.readFileSync("".concat(__dirname, "/certificado.crt"), 'utf8');
var credentials = {
  key: privateKey,
  cert: certificate
};
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use('/api/contacto', _contacto["default"]);
app.use('/api/ubicacion', _ubicacion["default"]);
app.use('/api/blog', _blog["default"]);
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(3000);
httpsServer.listen(3650);
console.log('server on port 3000');
console.log('server https on port 3650');
/* app.listen(3000)
*/

/* var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express(); */
// your express configuration here

/* var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443); */