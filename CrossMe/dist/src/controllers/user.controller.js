"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userModel_1 = __importDefault(require("../config/mongoose/models/userModel"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var User = userModel_1.default.User;
var BCRYPT_SALT_ROUNDS = 12;
var userCtrl = {
    signup: function (req, res, next) {
        var errors = [];
        var messages = [];
        var _a = req.body, username = _a.username, email = _a.email, password = _a.password, confirmPassword = _a.confirmPassword, role = _a.role;
        if (password != confirmPassword) {
            errors.push({ text: 'Las contraseñas no coinciden' });
        }
        if (password.length < 6) {
            errors.push({ text: 'La contraseña no puede contener menos de 6 carácteres' });
        }
        if (errors.length > 0) {
            res.render('signup', {
                errors: errors
            });
        }
        else {
            bcrypt_1.default.hash(password, BCRYPT_SALT_ROUNDS)
                .then(function (hashedPassword) {
                var user = new User({
                    username: username,
                    email: email,
                    password: hashedPassword,
                    role: role
                });
                user.save();
            });
            res.redirect('home');
        }
    },
    login: function (req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        User.find(username)
            .then(function (user) {
            return bcrypt_1.default.compare(password, user.password);
        })
            .then(function (samePassword) {
            if (!samePassword) {
                res.status(403).send();
            }
            res.send();
        })
            .catch(function (error) {
            console.log("Error authenticating user: ");
            console.log(error);
            next();
        });
        res.render('home');
    }
};
exports.default = userCtrl;
