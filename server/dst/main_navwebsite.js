"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jackwebutil_1 = require("jackwebutil");
const path_1 = require("path");
let http = new jackwebutil_1.HttpServer();
let rootPath = path_1.resolve(__dirname, "../..");
http.InitHttpView(9160, rootPath, "./web", "./web/");
http.GetListen("/", (req, res) => {
    res.render("index.html");
});
http.GetListen("/admin", (req, res) => {
    res.render("admin.html");
});
http.Start();
