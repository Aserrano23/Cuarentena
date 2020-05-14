"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var Schema = index_1.default.Schema;
var schemas = {
    userSchema: new Schema({
        username: { type: String },
        email: { type: String },
        password: { type: String },
        role: {
            type: String,
            enum: ['coach', 'athlete']
        }
    })
};
exports.default = schemas;
