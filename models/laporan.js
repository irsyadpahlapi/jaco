'use strict';
module.exports = (sequelize, DataTypes) => {
  var Laporan = sequelize.define('Laporan', {
    foto: DataTypes.STRING,
    WilayahId: DataTypes.INTEGER,
    deskripsi: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
  }, {});
  Laporan.associate = function(models) {
    // associations can be defined here
      Laporan.belongsTo(models.Wilayah);
  };
  return Laporan;
};
