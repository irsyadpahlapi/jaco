'use strict';
module.exports = (sequelize, DataTypes) => {
  var Like = sequelize.define('Like', {
    id : {type:DataTypes.INTEGER,allowNull: false,autoIncrement: true,primaryKey:true},
    UserId: DataTypes.INTEGER,
    LaporanId: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.User,{foreignKey:'UserId'})
    Like.belongsTo(models.Laporan,{foreignKey:'LaporanId'})
  };
  return Like;
};
