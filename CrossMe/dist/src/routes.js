"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes = function (app) {
    app.get("/", function (req, res) {
        //res.sendFile(path.join(__dirname, "public","templates","home.html"));
        res.render('home');
    });
    app.get("/home", function (req, res) {
        //res.sendFile(path.join(__dirname, "public","templates","home.html"));
        res.render('home');
    });
    app.get("/prueba", function (req, res) {
        //res.sendFile(path.join(__dirname, "public","templates","home.html"));
        res.render('prueba');
    });
};
exports.default = routes;
