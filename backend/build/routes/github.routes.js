"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var github_controller_1 = require("@/controller/github.controller");
var express = require("express");
var router = express.Router();
router.get('/users', github_controller_1.default.listUsers);
router.get('/users/:id', github_controller_1.default.getUser);
exports.default = router;
//# sourceMappingURL=github.routes.js.map