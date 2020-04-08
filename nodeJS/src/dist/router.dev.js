"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _home = _interopRequireDefault(require("./routes/home"));

var _article = _interopRequireDefault(require("./routes/article"));

var _user = _interopRequireDefault(require("./routes/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(app) {
  app.use("/", _home["default"]);
  app.use("/article", _article["default"]);
  app.use("/", _user["default"]);
};

exports["default"] = _default;