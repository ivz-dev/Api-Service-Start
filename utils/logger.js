// const config = require("config");
// const winston = require("winston");
// const logzioWinstonTransport = require("winston-logzio");
// const winstonWrapper   = require("winston-meta-wrapper");

// const loggerOptions = {
//   token: config.get("LOGZIO_KEY"),
//   host: "listener.logz.io"
// };
// winston.add(logzioWinstonTransport, loggerOptions);

// let logger = new (winston.Logger)({
//   transports: [
//     new (winston.transports.Console)()
//   ],
//   exitOnError: false
// });

// logger = winstonWrapper(logger);

module.exports = console;
