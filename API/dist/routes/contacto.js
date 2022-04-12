"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _contacto = require("../controllers/contacto");

var router = (0, _express.Router)();
router.get('/getSelectInfo', _contacto.getSelectInfo);
router.post('/getCiudades', _contacto.getCiudades);
router.post('/enviarCorreo', _contacto.enviarCorreo);
router.post('/guardarContacto', _contacto.guardarContacto);
router.post('/getUnidadesMedida', _contacto.getUnidadesMedida);
var _default = router;
exports["default"] = _default;