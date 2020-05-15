"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userModel_1 = __importDefault(require("../config/mongoose/models/userModel"));
var User = userModel_1.default.User;
var userCtrl = {
    signup: function (req, res) {
        var user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        });
        user.save();
        res.render('home', {
            status: "Te has registrado correctamente"
        });
        /*if (err) {
            res.render('signup', {
                status: "Error al registrarte"
            })
        } else {
            user.save()
            res.render('home', {
                status: "Te has registrado correctamente"
            })
        }*/
    }
};
exports.default = userCtrl;
