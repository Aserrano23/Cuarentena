"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes = function (app) {
    app.get("/", function (req, res) {
        res.render('home', {
            page: "home"
        });
    });
    app.get("/home", function (req, res) {
        res.render('home', {
            page: "home"
        });
    });
    app.get("/sobreNosotros", function (req, res) {
        res.render('sobreNosotros', {
            page: "sobreNosotros"
        });
    });
    app.get("/contacto", function (req, res) {
        res.render('contacto', {
            page: "contacto"
        });
    });
};
exports.default = routes;
