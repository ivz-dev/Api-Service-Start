const swaggerJSDoc = require("swagger-jsdoc");

module.exports = () => {
  const swaggerDefinition = {
    info: {
      title: "API Service start",
      version: "1.0.0",
      description: "Starting project for API service."
    },
    basePath: "/",
    consumes: [
      "application/json"
    ],
    schemes: ["http"],
  };

  const options = {
    swaggerDefinition,
    apis: ["./modules/**/*.js", "./docs/parameters.yaml"],
  };

  return swaggerJSDoc(options);
};
