
module.exports = function (sequelize, DataTypes) {
  const Users = sequelize.define("Users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      timestamps: true
    }
  );


  return Users;
};
