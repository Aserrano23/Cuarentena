"use strict";var express=require("express"),path=require("path"),app=express(),port=3e3;app.disable("x-powered-by"),app.set("env","development"),app.set("views",path.join(__dirname,"views")),app.set("view engine","pug"),app.get("/",function(e,p){p.render("home")}),app.listen(port,function(){console.log("Server listen in port ".concat(port))});