"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var Schemas_1 = __importDefault(require("../schemas/Schemas"));
var models = {
    User: index_1.default.model('user', Schemas_1.default.userSchema)
};
exports.default = models;
