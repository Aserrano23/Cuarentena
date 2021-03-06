"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userModel_1 = __importDefault(require("../config/mongoose/models/userModel"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var User = userModel_1.default.User;
var BCRYPT_SALT_ROUNDS = 12;
var userCtrl = {
    signup: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var errors, messages, _a, username, email, password, confirmPassword, role, emailUser, usernameUser, newUser;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    errors = [];
                    messages = [];
                    _a = req.body, username = _a.username, email = _a.email, password = _a.password, confirmPassword = _a.confirmPassword, role = _a.role;
                    if (password != confirmPassword) {
                        errors.push({ text: 'Las contraseñas no coinciden' });
                    }
                    if (password.length < 6) {
                        errors.push({ text: 'La contraseña no puede contener menos de 6 carácteres' });
                    }
                    if (!(errors.length > 0)) return [3 /*break*/, 1];
                    res.render('signup', {
                        errors: errors,
                        username: username,
                        email: email
                    });
                    return [3 /*break*/, 7];
                case 1: return [4 /*yield*/, User.findOne({ email: email })];
                case 2:
                    emailUser = _b.sent();
                    return [4 /*yield*/, User.findOne({ username: username })];
                case 3:
                    usernameUser = _b.sent();
                    if (!emailUser) return [3 /*break*/, 4];
                    errors.push({ text: 'El email ya está en uso' });
                    res.render('signup', {
                        errors: errors
                    });
                    return [3 /*break*/, 7];
                case 4:
                    if (!usernameUser) return [3 /*break*/, 5];
                    errors.push({ text: 'El nombre de usuario ya existe' });
                    res.render('signup', {
                        errors: errors
                    });
                    return [3 /*break*/, 7];
                case 5:
                    newUser = new User({ username: username, email: email, password: password, role: role });
                    return [4 /*yield*/, newUser.save()];
                case 6:
                    _b.sent();
                    res.redirect('login');
                    _b.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    }); },
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
