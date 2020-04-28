"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var port = 3000;
//app.use(express.static(__dirname + '/public/'))
app.use('/static', express_1.default.static(__dirname + '/public'));
routes_1.default(app);
app.listen(port, function () {
    console.log("listen in port " + port);
});
