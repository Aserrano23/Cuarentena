"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/:user", function (req, res) {
  res.render("user", {
    title: "P\xE1gina de ".concat(req.params.user),
    message: "Bienvenido a tu p\xE1gina, ".concat(req.params.user)
  });
  res.end();
});
var _default = router;
exports["default"] = _default;