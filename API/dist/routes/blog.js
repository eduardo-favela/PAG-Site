"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _blog = require("../controllers/blog");

var router = (0, _express.Router)();
router.get('/getPosts', _blog.getPosts);
router.post('/getPost', _blog.getPost);
router.post('/getPostImage', _blog.getPostImage);
var _default = router;
exports["default"] = _default;