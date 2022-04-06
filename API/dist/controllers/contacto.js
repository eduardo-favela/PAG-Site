"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectInfo = exports.getCiudades = void 0;

var _database = require("../database");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getSelectInfo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var infoSelects, db, _yield$db$query, _yield$db$query2, productos, _yield$db$query3, _yield$db$query4, infoSolicitada, _yield$db$query5, _yield$db$query6, sucursales, _yield$db$query7, _yield$db$query8, estados;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            infoSelects = {};
            _context.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context.sent;
            _context.next = 6;
            return db.query('SELECT id_producto as id, producto as field FROM productos');

          case 6:
            _yield$db$query = _context.sent;
            _yield$db$query2 = _slicedToArray(_yield$db$query, 1);
            productos = _yield$db$query2[0];
            infoSelects.productos = _toConsumableArray(productos);
            _context.next = 12;
            return db.query('SELECT id_info_solicitada as id, tipo_info as field FROM info_solicitada');

          case 12:
            _yield$db$query3 = _context.sent;
            _yield$db$query4 = _slicedToArray(_yield$db$query3, 1);
            infoSolicitada = _yield$db$query4[0];
            infoSelects.infosolicitada = _toConsumableArray(infoSolicitada);
            _context.next = 18;
            return db.query('SELECT id_uen as id, nombre_uen as field FROM uens');

          case 18:
            _yield$db$query5 = _context.sent;
            _yield$db$query6 = _slicedToArray(_yield$db$query5, 1);
            sucursales = _yield$db$query6[0];
            infoSelects.sucursales = _toConsumableArray(sucursales);
            _context.next = 24;
            return db.query('SELECT idestados as id, estado as field FROM estados');

          case 24:
            _yield$db$query7 = _context.sent;
            _yield$db$query8 = _slicedToArray(_yield$db$query7, 1);
            estados = _yield$db$query8[0];
            infoSelects.estados = _toConsumableArray(estados);
            res.json(infoSelects);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSelectInfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getSelectInfo = getSelectInfo;

var getCiudades = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var db, _yield$db$query9, _yield$db$query10, ciudades;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context2.sent;
            _context2.next = 5;
            return db.query("SELECT id_ciudad as id, ciudad as field FROM ciudades WHERE estados_idestados = ?", req.body.estadoid);

          case 5:
            _yield$db$query9 = _context2.sent;
            _yield$db$query10 = _slicedToArray(_yield$db$query9, 1);
            ciudades = _yield$db$query10[0];
            res.json(ciudades);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getCiudades(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCiudades = getCiudades;