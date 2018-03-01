const routerlogin=require('express').Router();
const models = require('../models');

routerlogin.get('/',(req,res)=>{
  models.Wilayah.findAll().then(datas =>{
    res.render('homepage',{data:datas})
  })
})

routerlogin.post('/',(req,res)=>{
  models.Laporan.findAll({where:{WilayahId:req.body.search}}).then(datas =>{
    res.render('homesearch',{data:datas})
  })
})

routerlogin.post('/pilihan',(req,res)=>{
  if(req.body.hoax){
    models.Like.create({UserId:Number(req.session.username),LaporanId:Number(req.body.id),status:0}).then(()=>{
      res.redirect('/')
    })
  }else{
    models.Like.create({UserId:Number(req.session.username),LaporanId:Number(req.body.id),status:1}).then(()=>{
      res.redirect('/')
    })
  }
})

module.exports=routerlogin
