"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ubicacion = require("../controllers/ubicacion");

var router = (0, _express.Router)();
router.get('/getUens', _ubicacion.getUens);
router.post('/getWppNumber', _ubicacion.getWppNumber);
router.get('/getUensSelect', _ubicacion.getUensSelect);
var _default = router;
exports["default"] = _default;