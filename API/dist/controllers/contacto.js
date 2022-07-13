"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guardarContactoWpp = exports.guardarContacto = exports.getUnidadesMedida = exports.getSelectInfo = exports.getCiudades = exports.enviarCorreo = void 0;

var _database = require("../database");

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
            return db.query('SELECT id_producto as id, producto as field FROM productos order by producto;');

          case 6:
            _yield$db$query = _context.sent;
            _yield$db$query2 = _slicedToArray(_yield$db$query, 1);
            productos = _yield$db$query2[0];
            infoSelects.productos = _toConsumableArray(productos);
            _context.next = 12;
            return db.query('SELECT id_info_solicitada as id, tipo_info as field FROM info_solicitada order by tipo_info;');

          case 12:
            _yield$db$query3 = _context.sent;
            _yield$db$query4 = _slicedToArray(_yield$db$query3, 1);
            infoSolicitada = _yield$db$query4[0];
            infoSelects.infosolicitada = _toConsumableArray(infoSolicitada);
            _context.next = 18;
            return db.query('SELECT id_uen as id, nombre_uen as field FROM uens order by nombre_uen;');

          case 18:
            _yield$db$query5 = _context.sent;
            _yield$db$query6 = _slicedToArray(_yield$db$query5, 1);
            sucursales = _yield$db$query6[0];
            infoSelects.sucursales = _toConsumableArray(sucursales);
            _context.next = 24;
            return db.query('SELECT idestados as id, estado as field FROM estados order by estado');

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

var getUnidadesMedida = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var db, _yield$db$query9, _yield$db$query10, unidadesMedida;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context2.sent;
            _context2.next = 5;
            return db.query("SELECT unidades_de_medida.id_unidad_de_medida AS id, unidad_medida AS field\n    FROM producto_has_umedida\n    INNER JOIN unidades_de_medida ON producto_has_umedida.phum_has_umedida=unidades_de_medida.id_unidad_de_medida\n    WHERE phum_has_producto = ?;", req.body.producto);

          case 5:
            _yield$db$query9 = _context2.sent;
            _yield$db$query10 = _slicedToArray(_yield$db$query9, 1);
            unidadesMedida = _yield$db$query10[0];
            res.json(unidadesMedida);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUnidadesMedida(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUnidadesMedida = getUnidadesMedida;

var getCiudades = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var db, _yield$db$query11, _yield$db$query12, ciudades;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context3.sent;
            _context3.next = 5;
            return db.query("SELECT id_ciudad as id, ciudad as field FROM ciudades WHERE estados_idestados = ? order by ciudad", req.body.estadoid);

          case 5:
            _yield$db$query11 = _context3.sent;
            _yield$db$query12 = _slicedToArray(_yield$db$query11, 1);
            ciudades = _yield$db$query12[0];
            res.json(ciudades);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getCiudades(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getCiudades = getCiudades;

var guardarContacto = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var db, _yield$db$query13, _yield$db$query14, result;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context4.sent;
            _context4.next = 5;
            return db.query("INSERT INTO contactos_web SET nombre=?, apellidos=?,\n    telefono=?, email=?,direccion=?,comentarios=?,empresa=?,estados_idestados=?,ciudades_id_ciudad=?, \n    productos_id_producto=?,info_solicitada_id_info_solicitada=?,\n    uens_id_uen=?, unidad_medida=?,cantidad=?;", [req.body.nombre, req.body.apellidos, req.body.telefono, req.body.email, req.body.direccion, req.body.comentarios, req.body.empresa, req.body.estado, req.body.ciudad, req.body.productoSelected, req.body.infoSolicitada, req.body.sucursal, req.body.uMedida, req.body.cantidad]);

          case 5:
            _yield$db$query13 = _context4.sent;
            _yield$db$query14 = _slicedToArray(_yield$db$query13, 1);
            result = _yield$db$query14[0];
            res.json(result);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function guardarContacto(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.guardarContacto = guardarContacto;

var guardarContactoWpp = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var db, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context5.sent;
            _context5.next = 5;
            return db.query("INSERT INTO contactos_whatsapp (ciudad) VALUES ((select id_ciudad\n        from ciudades\n        inner join estados on ciudades.estados_idestados = estados.idestados\n        where ciudad like '%".concat(req.body.ciudad, "%' and estado like '%").concat(req.body.estado, "%'));"));

          case 5:
            result = _context5.sent;

            if (result) {
              res.json(true);
            } else {
              res.json(false);
            }

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function guardarContactoWpp(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.guardarContactoWpp = guardarContactoWpp;

var enviarCorreo = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var url, data;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            url = 'https://www.google.com/recaptcha/api/siteverify';
            data = {
              secret: '6LdiF1AgAAAAAHDWPmX3uUYP5HNUyzhTdBNhhqDs',
              response: req.body.token
            };

            _axios["default"].post(url + "?secret=".concat(data.secret, "&response=").concat(data.response)).then( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(response) {
                var db, _yield$db$query15, _yield$db$query16, result, transporter, mailDetails, info;

                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!response.data.success) {
                          _context6.next = 17;
                          break;
                        }

                        _context6.next = 3;
                        return (0, _database.connect)();

                      case 3:
                        db = _context6.sent;
                        _context6.next = 6;
                        return db.query("SELECT CONCAT(nombre,' ',apellidos) AS nombre, contactos_web.telefono, contactos_web.email, \n            contactos_web.direccion, comentarios, empresa, estado, ciudad, producto, tipo_info,\n            nombre_uen, cantidad, unidades_de_medida.unidad_medida, uens.email as emailuen\n            FROM contactos_web\n            INNER JOIN estados ON contactos_web.estados_idestados=estados.idestados\n            INNER JOIN ciudades ON contactos_web.ciudades_id_ciudad=ciudades.id_ciudad\n            INNER JOIN productos ON contactos_web.productos_id_producto=productos.id_producto\n            INNER JOIN info_solicitada ON contactos_web.info_solicitada_id_info_solicitada=info_solicitada.id_info_solicitada\n            INNER JOIN uens ON contactos_web.uens_id_uen=uens.id_uen\n            INNER JOIN unidades_de_medida ON contactos_web.unidad_medida=unidades_de_medida.id_unidad_de_medida\n            WHERE id_contacto = ?;", req.body.contactId);

                      case 6:
                        _yield$db$query15 = _context6.sent;
                        _yield$db$query16 = _slicedToArray(_yield$db$query15, 1);
                        result = _yield$db$query16[0];

                        if (!result) {
                          _context6.next = 15;
                          break;
                        }

                        // create reusable transporter object using the default SMTP transport
                        transporter = _nodemailer["default"].createTransport({
                          host: "mail.alfagamma.com.mx",
                          port: 3535,
                          secure: false,
                          // use TLS
                          auth: {
                            user: "pag_web@alfagamma.com.mx",
                            pass: "nirqlk(2gor5"
                            /* pass: "nirqlk(2gor5", */

                          },
                          tls: {
                            // do not fail on invalid certs
                            rejectUnauthorized: false
                          }
                        });
                        mailDetails = {
                          from: 'No-Reply <pag_web@alfagamma.com.mx>',
                          to: ["coord.softweb@alfagamma.com.mx"],

                          /* to: [`${result[0].emailuen}`], */
                          subject: 'Formulario de contacto',
                          html: "\n                <head>\n                    <style>\n                    table, td, div, h1, p {font-family: \"Montserrat\", sans-serif;}\n                    </style>\n                </head>\n                <body style=\"margin:0;padding:0;\">\n                    <table role=\"presentation\"\n                    style=\"width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff; \">\n                    <tr>\n                        <td align=\"center\" style=\"padding:0;\">\n                        <table role=\"presentation\"\n                            style=\"width:500px;border-collapse:collapse;border:1px solid\n                            #cccccc;border-spacing:0;text-align:left;\">\n                            <tr>\n                            <td align=\"center\" style=\"padding:40px 0 30px 0;border-bottom:\n                                solid;border-bottom-width:0.5px;\">\n                                <img src=\"cid:PAG_Logo\"\n                                style=\"height:auto;display:block;width:450px\" />\n                            </td>\n                            </tr>\n                            <tr>\n                            <td style=\"padding:36px 30px 42px 30px;\">\n                                <table role=\"presentation\"\n                                style=\"width:100%;border-collapse:collapse;border:0;border-spacing:0;\">\n                                <tr>\n                                    <td style=\"color:#153643;\">\n                                    <h1 style=\"text-align:center;font-size:24px;font-weight:bolder;\">Formulario desde p\xE1gina web</h1>\n                                    <hr>\n                                    </td>\n                                </tr>\n                                <tr style=\"align-content: center;\">\n                                    <td style=\"padding:0;\">\n                                    <table role=\"presentation\">\n                                        <tr>\n                                        <th style=\"text-align: initial; width: 260px;padding: 5px; \n                                        color: #153643;border-right-width: thin;\">\n                                            Informaci\xF3n solicitada\n                                        </th>\n                                        <td style=\"padding: 5px;\">\n                                            ".concat(result[0].tipo_info, "\n                                        </td>\n                                        </tr>\n                                        <tr>\n                                        <th style=\"text-align: initial; width: 260px;padding: 5px;border-right-color: black;\n                                            border-right-width: thin;\">\n                                            Producto\n                                        </th>\n                                        <td style=\"padding: 5px;\">\n                                            ").concat(result[0].producto, "\n                                        </td>\n                                        </tr>\n                                        <tr>\n                                        <th style=\"text-align: initial; width: 260px;padding: 5px;\n                                        color:#153643; border-right-width: thin;\">\n                                            Cantidad aproximada\n                                        </th>\n                                        <td style=\"padding: 5px;\">\n                                            ").concat(result[0].cantidad, " ").concat(result[0].unidad_medida, "\n                                        </td>\n                                        </tr>\n                                        <tr>\n                                        <th style=\"text-align: initial; width: 260px;padding: 5px;border-right-color: black;\n                                            border-right-width: thin;\">\n                                            Nombre\n                                        </th>\n                                        <td style=\"padding: 5px;\">\n                                            ").concat(result[0].nombre, "\n                                        </td>\n                                        </tr>\n                                        <tr>\n                                        <th style=\"text-align: initial; width: 260px;padding: 5px;\n                                        color:#153643; border-right-width: thin;\">\n                                            Tel\xE9fono\n                                        </th>\n                                        <td style=\"padding: 5px;\">\n                                            ").concat(result[0].telefono, "\n                                        </td>\n                                        </tr>\n                                        <tr>\n                                        <th style=\"text-align: initial; width: 260px;padding: 5px;border-right-color: black;\n                                            border-right-width: thin;\">\n                                            Empresa\n                                        </th>\n                                        <td style=\"padding: 5px;\">\n                                            ").concat(result[0].empresa, "\n                                        </td>\n                                        </tr>\n                                        <tr>\n                                        <th style=\"text-align: initial; width: 260px;padding: 5px;\n                                        color:#153643; border-right-width: thin;\">\n                                            Correo\n                                        </th>\n                                        <td style=\"padding: 5px;\">\n                                            ").concat(result[0].email, "\n                                        </td>\n                                        </tr>\n                                        <tr>\n                                        <th style=\"text-align: initial; width: 260px;padding: 5px;border-right-color: black;\n                                            border-right-width: thin;\">\n                                            Ciudad\n                                        </th>\n                                        <td style=\"padding: 5px;\">\n                                            ").concat(result[0].ciudad, ", ").concat(result[0].estado, "\n                                        </td>\n                                        </tr>\n                                        <tr>\n                                        <th style=\"text-align: initial; width: 260px;padding: 5px;\n                                        color:#153643; border-right-width: thin;\">\n                                            Sucursal\n                                        </th>\n                                        <td style=\"padding: 5px;\">\n                                            ").concat(result[0].nombre_uen, "\n                                        </td>\n                                        </tr>\n                                        <tr>\n                                        <th style=\"text-align: initial; width: 260px;padding: 5px;border-right-color: black;\n                                            border-right-width: thin;\">\n                                            Direcci\xF3n\n                                        </th>\n                                        <td style=\"padding: 5px;\">\n                                            ").concat(result[0].direccion, "\n                                        </td>\n                                        </tr>\n                                        <tr>\n                                        <th style=\"text-align: initial; width: 260px;padding: 5px;color:#153643;\n                                        border-right-width: thin;\">\n                                            Comentarios\n                                        </th>\n                                        <td style=\"padding: 5px;\">\n                                            ").concat(result[0].comentarios, "\n                                        </td>\n                                        </tr>\n                                    </table>\n                                    </td>\n                                </tr>\n                                </table>\n                            </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding: 15px;border-bottom: solid;border-bottom-color: #d13138;border-top: solid;border-top-color: #d13138;text-align: center; border-top-width: 3px;border-bottom-width: 3px;\">\n                                    <table role=\"presentation\" style=\"width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;\">\n                                    <tbody><tr>\n                                        <td style=\"padding:0;width:50%;text-align: center;\" align=\"left\">\n                                        <p style=\"margin:0;font-size:14px;line-height:16px;font-family:'Montserrat',sans-serif;\">\n                                            Poliestireno Alfa Gamma, 2022<br><a target=\"_blank\" href=\"https://alfagamma.com.mx/\" style=\"text-decoration:underline;\">Visitar\n                                                p\xE1gina</a>\n                                            </p>\n                                        </td>\n                                        </tr>\n                                    </tbody>\n                                    </table>\n                                    </td>\n                                </tr>\n                            </table>\n                        </td>\n                    </tr>\n                    </table>\n                    </body>"),
                          attachments: [{
                            filename: 'PAG.png',
                            path: "".concat(__dirname, "/../assets/PAG.png"),
                            cid: "PAG_Logo"
                          }]
                        }; // send mail with defined transport object

                        _context6.next = 14;
                        return transporter.sendMail(mailDetails, function (err, data) {
                          if (err) {
                            console.log('Error Occurs', err);
                            res.json(false);
                          } else {
                            console.log('Email sent successfully to ', mailDetails.to);
                            res.json(true);
                          }
                        });

                      case 14:
                        info = _context6.sent;

                      case 15:
                        _context6.next = 18;
                        break;

                      case 17:
                        res.json(false);

                      case 18:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x13) {
                return _ref7.apply(this, arguments);
              };
            }());

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function enviarCorreo(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.enviarCorreo = enviarCorreo;