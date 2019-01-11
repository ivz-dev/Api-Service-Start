const config = require("config");
const compression = require("compression");
const Express = require("express");
const fs = require("fs");
const logger = require("./utils/logger");

const setupSwagger = require("./docs/swaggerConfig");
const bodyParser = require("body-parser");

const app = new Express();
const port = process.env.PORT || config.get("DefaultPort");

const { NODE_ENV = "" } = process.env;

// add exception handler to prevent crash from newrelic errors
if (NODE_ENV !== "test" && NODE_ENV !== "localhost") {
  process.on("uncaughtException", (err) => {
    logger.error(`process.on handler catch error - ${err}`);
  });
}

app.use(compression());
app.use(bodyParser.json());

app.use((error, req, res, next) => {
  // Catch bodyParser error
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    const errors = [];
    errors.push({
      status: 400,
      title: "Bad Parameter",
      details: "Invalid JSON"
    });
    return res.status(400).send({ errors });
  }
  return next();
});

if (NODE_ENV !== "production") {
  app.options("/*", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
    res.sendStatus(200);
  });
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  app.get("/docs", (req, res) => {
    if (req.query.token !== "pGxry9ZDLi") return res.sendStatus(404);
    res.setHeader("Content-Type", "application/json");
    return res.send(setupSwagger());
  });
}

app.get("/ping", (req, res) => {
  res.status(200).send({ payload: "pong" });
});

fs.readdirSync("./modules")
  .filter(file => (file.indexOf(".") !== 0))
  .forEach((file) => {
    require(`./modules/${file}/${file}.routes.js`)(app); // eslint-disable-line
  });


if (NODE_ENV !== "test") {
  app.listen(port, (error) => {
    if (error) {
      logger.error("Error");
    } else {
      logger.info(`[${config.get("ServiceName")}] - Running on port ${port}`);
    }
  });
}

module.exports = app;
