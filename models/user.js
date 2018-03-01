'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username:{
      type: DataTypes.STRING,
      validate:{
      isUnique: function(value, next){
       User.find({
         where : {
           username:value,
         }
       }).then(function(result){
         if(result === null){
           return next()
         }else{
           return next('Username Sudah Terpakai')
         }
       }).catch(err =>{
           return next()
       })
     }
   }
   },
    password:{
      type: DataTypes.STRING,
      validate:{

        len:{
          args: [5,15],
          msg: "Password Minimal 5 dan Maksimal 15"
        },


      }
    },
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
