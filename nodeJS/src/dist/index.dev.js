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
  res.render('home');
});
app.listen(port, function () {
  console.log("Server listen in port ".concat(port));
});