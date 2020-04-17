"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require('axios');
var baseURL = 'https://api.github.com/';
var client = axios.create({
    baseURL: baseURL,
});
exports.default = client;
//# sourceMappingURL=github.client.js.map