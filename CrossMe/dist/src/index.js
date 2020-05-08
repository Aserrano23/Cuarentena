"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var path_1 = __importDefault(require("path"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var app = express_1.default();
var port = 3000;
app.use(cookie_parser_1.default);
app.use('/static', express_1.default.static(__dirname + '/public'));
routes_1.default(app);
app.set('view engine', 'pug'); //Sets pug as the View Engine / Template Engine
app.set('views', path_1.default.join(__dirname, 'public/templates')); //Sets the directory where all the views (.pug files) are stored.
app.listen(port, function () {
    console.log("listen in port " + port);
});
