"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
try {
    /*mongoose.connect('mongodb+srv://dbAdmin:OSTT2Ic7F4BmJb8f@crossme-gxvvo.gcp.mongodb.net/CrossMe',{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })*/
    mongoose_1.default.connect('mongodb://localhost:27017/Crossme', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongoDB");
}
catch (err) {
    console.log(err);
}
exports.default = mongoose_1.default;
