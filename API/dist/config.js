"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var config = {
  host: process.env.DB_HOST || '200.100.100.50',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASS || '12345',
  database: process.env.DB_DATABASE || 'pag_system'
};
exports.config = config;