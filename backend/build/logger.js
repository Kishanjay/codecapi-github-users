"use strict";
/**
 * Logging levels:
 * error: 0
 * warn: 1
 * info: 2
 * http: 3
 * verbos: 4
 * debug: 5
 * silly: 6
 */
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var logger = winston_1.createLogger({
    levels: winston_1.config.npm.levels,
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),
    transports: [new winston_1.transports.Console({ level: 'silly' })],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map