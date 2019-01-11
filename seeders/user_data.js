module.exports = {
  up: queryInterface => queryInterface.bulkInsert("Users", [
    {
      name: "Ihor",
      email: "ihor@gmail.com"
    },
    {
      name: "Andy",
      email: "andy@gmail.com"
    },
    {
      name: "denis",
      email: "denis@gmail.com"
    }
  ], {}),
  down: queryInterface => queryInterface.bulkDelete("Users", null, {})
};
