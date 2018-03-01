'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Laporan,{through:models.Like,foreignKey:'UserId'})
    User.hasMany(models.Like,{foreignKey:'UserId'})
  };
  return User;
};
