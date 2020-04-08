"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 3000;
app.disable("x-powered-by");
app.set("env", "development");
app.set("views", _path["default"].join(__dirname, "views"));
app.set("view engine", "pug");
app.use('/static', _express["default"]["static"](_path["default"].join(__dirname, "public")));
(0, _router["default"])(app);
app.use(function (req, res, next) {
  res.render("404", {
    title: "Error",
    message: "La ruta a la que intentas acceder no existe"
  });
  next();
});
app.listen(port, function () {
  console.log("Server listen in port ".concat(port));
});