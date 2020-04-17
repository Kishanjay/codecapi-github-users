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

import {
  createLogger, config, format as _format, transports as _transports,
} from 'winston';

const logger = createLogger({
  levels: config.npm.levels,
  format: _format.combine(
    _format.colorize(),
    _format.simple(),
  ),
  transports: [new _transports.Console({ level: 'silly' })],
});

export default logger;
