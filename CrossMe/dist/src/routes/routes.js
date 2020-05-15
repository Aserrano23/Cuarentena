"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userModel_1 = __importDefault(require("../config/mongoose/models/userModel"));
var User = userModel_1.default.User;
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
