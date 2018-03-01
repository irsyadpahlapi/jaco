const routerlike=require('express').Router();
const models = require('../models');

routerlike.get('/',(req,res)=>{
  models.Like.findAll({include:[{model:models.Laporan},{model:models.User}]}).then(datas =>{
    res.render('like',{data:datas})
    // res.send(datas)
  })
})


routerlike.get('/update/:id',(req,res)=>{
  models.Like.findById(req.params.id).then(datas =>{
    res.render('formupdatelike',{data:datas})
  })
})


routerlike.post('/update/:id',(req,res)=>{
  models.Like.update({
    UserId: Number(req.body.UserId),
    LaporanId: Number(req.body.LaporanId),
    status: req.body.status},{where:{id:req.params.id}}).then(() =>{
    res.redirect('/like')
  })
})


routerlike.get('/delete/:id',(req,res)=>{
  models.Like.destroy({where:{id:req.params.id}}).then(()=>{
    res.redirect('/like')
  })
})


module.exports=routerlike
