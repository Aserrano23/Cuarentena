"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _express=_interopRequireDefault(require("express"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var router=_express.default.Router();router.get("/",function(e,r){r.render("article",{title:"Articulo del curso de nodeJS",message:"Esta es la página del articulo del curso de nodeJS"}),r.end()});var _default=router;exports.default=_default;