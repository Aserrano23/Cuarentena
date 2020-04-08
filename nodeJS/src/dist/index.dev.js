"use strict";

var express = require("express");

var path = require("path");

var app = express();
var port = 3000;
app.disable("x-powered-by");
app.set("env", "development");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.get("/", function (req, res) {
  res.render('home', {
    title: "Curso de nodeJS",
    message: "mi segundo renderizado de plantillas, esta vez von variables"
  });
});
app.get("/article", function (req, res) {
  res.render('article', {
    title: "Articulo del curso de nodeJS",
    message: "Esta es la página del articulo del curso de nodeJS"
  });
});
app.use('/static', express["static"](path.join(__dirname, "public")));
app.listen(port, function () {
  console.log("Server listen in port ".concat(port));
});