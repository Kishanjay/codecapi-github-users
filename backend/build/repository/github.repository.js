"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var github_client_1 = require("./client/github.client");
exports.default = {
    searchUsers: function (_searchQuery) {
        var params = { q: 'kishanjay' };
        return github_client_1.default.request({
            url: 'search/users',
            method: 'GET',
            params: params,
        }).then(function (_a) {
            var data = _a.data;
            return data;
        });
    }
};
//# sourceMappingURL=github.repository.js.map