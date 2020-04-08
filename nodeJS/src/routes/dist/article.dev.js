"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", function (req, res) {
  res.render('article', {
    title: "Articulo del curso de nodeJS",
    message: "Esta es la página del articulo del curso de nodeJS"
  });
  res.end();
});
var _default = router;
exports["default"] = _default;