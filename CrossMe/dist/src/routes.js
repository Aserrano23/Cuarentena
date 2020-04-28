"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var routes = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path_1.default.join(__dirname, "public", "templates", "home.html"));
    });
    app.get("/home", function (req, res) {
        res.sendFile(path_1.default.join(__dirname, "public", "templates", "home.html"));
    });
};
exports.default = routes;
