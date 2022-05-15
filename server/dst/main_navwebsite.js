"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jackwebutil_1 = require("jackwebutil");
const path_1 = require("path");
// Get Port From Args
let port = 9150;
for (let i = 0; i < process.argv.length; i++) {
    let arg = process.argv[i];
    if (arg.includes('--port=')) {
        let str = arg.split('=')[1];
        if (port) {
            port = parseInt(str);
        }
    }
}
// Set Path
const rootPath = path_1.resolve(__dirname, "../..");
const staticPath = "/web";
// Init Server
const http = new jackwebutil_1.HttpServer();
http.InitHttpView(port, rootPath, staticPath, staticPath);
// REST API
http.GetListen("/", (req, res) => {
    res.render("index.html");
});
http.GetListen("/index", (req, res) => {
    res.render("index.html");
});
http.GetListen("/admin", (req, res) => {
    res.render("admin.html");
});
// Start Server
http.Start();
