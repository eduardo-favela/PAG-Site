"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosts = exports.getPostImage = exports.getPost = void 0;

var _database = require("../database");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getPosts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var db, _yield$db$query, _yield$db$query2, posts;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.query("SELECT id_post, titulo, CONCAT(SUBSTRING(contenido, 1, 100), '...') AS contenido,\n    imagen, fecha FROM posts ORDER BY fecha DESC;");

          case 5:
            _yield$db$query = _context.sent;
            _yield$db$query2 = _slicedToArray(_yield$db$query, 1);
            posts = _yield$db$query2[0];
            posts.forEach(function (post) {
              var imagesPath = require('path').join("".concat(__dirname, "/../assets/posts-img/").concat(post.imagen));

              var bitmap = _fs["default"].readFileSync(imagesPath, 'base64');

              post.imagen = bitmap;
            });
            res.json(posts);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPosts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPosts = getPosts;

var getPost = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var db, _yield$db$query3, _yield$db$query4, post, imagesPath, bitmap;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context2.sent;
            _context2.next = 5;
            return db.query("SELECT id_post, titulo, contenido, imagen, fecha \n    FROM posts\n    WHERE id_post = ?\n    ORDER BY fecha DESC;", req.body.id);

          case 5:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = _slicedToArray(_yield$db$query3, 1);
            post = _yield$db$query4[0];
            imagesPath = require('path').join("".concat(__dirname, "/../assets/posts-img/").concat(post[0].imagen));
            bitmap = _fs["default"].readFileSync(imagesPath, 'base64');
            post[0].imagen = bitmap;
            res.json(post[0]);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPost(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPost = getPost;

var getPostImage = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var imagesPath, bitmap;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            imagesPath = require('path').join("".concat(__dirname, "/../assets/posts-img/").concat(req.body.image)); // read binary data

            bitmap = _fs["default"].readFileSync(imagesPath, 'base64');
            res.json({
              imagen: bitmap
            });

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getPostImage(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getPostImage = getPostImage;