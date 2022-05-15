import { HttpServer } from "jackwebutil"
import { resolve } from "path";

let http: HttpServer = new HttpServer();
let rootPath = resolve(__dirname, "../..");
http.InitHttpView(9160, rootPath, "./web", "./web/");

http.GetListen("/", (req, res) => {
    res.render("index.html");
});

http.GetListen("/admin", (req, res) => {
    res.render("admin.html");
});

http.Start();