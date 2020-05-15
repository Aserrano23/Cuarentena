"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes/routes"));
var user_routes_1 = __importDefault(require("./routes/user-routes"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
var port = 3000;
//CONFIG
app.use('/static', express_1.default.static(__dirname + '/public')); //Set the statics files
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
//RUTAS
routes_1.default(app);
user_routes_1.default(app);
/*app.use(routes)
app.use(userRoutes)*/
//VIEWS
app.set('view engine', 'pug'); //Sets pug as the View Engine / Template Engine
app.set('views', path_1.default.join(__dirname, 'public/templates')); //Sets the directory where all the views (.pug files) are stored.
app.listen(port, function () {
    console.log("listen in port " + port);
});
