const routerlike=require('express').Router();
const models = require('../models');

routerlike.get('/',(req,res)=>{
  models.Like.findAll().then(datas =>{
    res.render('like',{data:datas})
  })
})


module.exports=routerlike
