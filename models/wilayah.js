'use strict';
module.exports = (sequelize, DataTypes) => {
  var Wilayah = sequelize.define('Wilayah', {
    nama: DataTypes.STRING
  }, {});
  Wilayah.associate = function(models) {
    // associations can be defined here
  };
  return Wilayah;
};