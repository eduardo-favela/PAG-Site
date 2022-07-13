"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWppNumber = exports.getUens = void 0;

var _database = require("../database");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getUens = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var db, _yield$db$query, _yield$db$query2, uens;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.query("SELECT id_uen, nombre_uen, direccion, telefono,\n    email, longitud, latitud, estado, ciudad, tipos_uen\n    FROM uens\n    INNER JOIN estados ON uens.estados_idestados=estados.idestados\n    INNER JOIN ciudades ON uens.ciudades_id_ciudad=ciudades.id_ciudad;");

          case 5:
            _yield$db$query = _context.sent;
            _yield$db$query2 = _slicedToArray(_yield$db$query, 1);
            uens = _yield$db$query2[0];
            res.json(uens);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUens(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUens = getUens;

var getWppNumber = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var db, _yield$db$query3, _yield$db$query4, uen, _yield$db$query5, _yield$db$query6;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context2.sent;
            _context2.next = 5;
            return db.query("SELECT nombre_uen, num_wpp as telefono FROM ciudades_has_uens\n    INNER JOIN ciudades on ciudades_has_uens.ciudad = ciudades.id_ciudad\n    INNER JOIN estados on ciudades.estados_idestados = estados.idestados\n    INNER JOIN uens on ciudades_has_uens.uen = uens.id_uen\n    WHERE estado like '%".concat(req.body.estado, "%' and ciudades.ciudad like '%").concat(req.body.ciudad, "%';"));

          case 5:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = _slicedToArray(_yield$db$query3, 1);
            uen = _yield$db$query4[0];

            if (!(uen.length === 0)) {
              _context2.next = 15;
              break;
            }

            _context2.next = 11;
            return db.query("SELECT nombre_uen, num_wpp as telefono FROM estados_has_uens\n        INNER JOIN estados on estados_has_uens.estados_has_uens_estado = estados.idestados\n        INNER JOIN uens on estados_has_uens.estados_has_uens_uens = uens.id_uen WHERE estado like '%".concat(req.body.estado, "%';"));

          case 11:
            _yield$db$query5 = _context2.sent;
            _yield$db$query6 = _slicedToArray(_yield$db$query5, 1);
            uen = _yield$db$query6[0];

            if (uen.length === 0) {
              res.json([{
                nombre_uen: 'LAGUNA',
                telefono: '8711319784'
              }]);
            }

          case 15:
            res.json(uen);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getWppNumber(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getWppNumber = getWppNumber;