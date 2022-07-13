"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var config = {
  host: process.env.DB_HOST || '38.101.223.157',
  user: process.env.DB_USER || 'adminp4g',
  password: process.env.DB_PASS || 'P4GMYSQLDB*',
  database: process.env.DB_DATABASE || 'pag_system'
};
exports.config = config;