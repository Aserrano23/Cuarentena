"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = __importDefault(require("../controllers/user.controller"));
var userModel_1 = __importDefault(require("../config/mongoose/models/userModel"));
var User = userModel_1.default.User;
var routes = function (app) {
    app.get('/signup', function (req, res) {
        res.render('signup');
    });
    app.post('/signup', user_controller_1.default.signup);
    app.get('/signin', function (req, res) {
        res.render('signin');
    });
};
exports.default = routes;
