const routerlogin=require('express').Router();
const models = require('../models');



routerlogin.get('/',(req,res)=>{
  models.User.findAll().then(datas =>{
    res.render('login',{data:datas})
  })
})

routerlogin.post('/',(req,res)=>{
  models.User.findOne({where:{username:req.body.username,password:req.body.password}}).then(datas =>{
    if(datas){
      req.session.username=datas.id
      req.session.status=datas.status
      if(datas.status==='user'){
        res.redirect('/')
      }else{
        res.redirect('/admin')
      }
    }else{
      res.redirect('/login')
    }
  })
})

module.exports=routerlogin
