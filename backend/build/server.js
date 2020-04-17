"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
var express = require("express");
var cors = require("cors");
var logger_1 = require("./logger");
var github_routes_1 = require("./routes/github.routes");
var port = Number(process.env.PORT || 3001);
var app = express();
app.use(cors());
app.get('/', function (_req, res) { return res.send({ alive: true }); });
app.use('/github', github_routes_1.default);
app.listen(port, function () {
    logger_1.default.verbose("Server listening on port " + port + "!");
});
//# sourceMappingURL=server.js.map