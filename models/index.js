
const fs = require("fs");
const Sequelize = require("sequelize");
const logger = require("../utils/logger");
const config = require("config");

const db = {};
const dbConfig = config.get("Database");
const sequelize = new Sequelize(
  dbConfig.name,
  null,
  null,
  {
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: false,
    replication: {
      write: {
        host: dbConfig.host,
        username: dbConfig.user,
        password: dbConfig.password,
        pool: { max: 1500, min: 100, idle: 1000 }
      },
      read: {
        host: dbConfig.host_read,
        username: dbConfig.user,
        password: dbConfig.password,
        pool: { max: 1500, min: 100, idle: 1000 }
      }
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    logger.info("Connection has been established successfully.");
  })
  .catch((err) => {
    logger.error("Unable to connect to the database:", err);
  });

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf(".") !== 0) && (file !== "index.js"))
  .forEach((file) => {
    const model = sequelize.import(`${__dirname}/${file}`);
    db[model.name] = model;
  });

module.exports = { db };

