const routeruser=require('express').Router();
const models = require('../models');

routeruser.get('/',(req,res)=>{
  models.User.findAll().then(datas =>{
    res.render('user',{data:datas})
  })
})

routeruser.post('/',(req,res)=>{
  console.log(req.body);
  models.User.create({username:req.body.username,password:req.body.password,first_name:req.body.first_name,last_name:req.body.last_name,address:req.body.address,status:'user'}).then(datas =>{
    res.redirect('user')
  })
})

routeruser.get('/update/:id',(req,res)=>{
  models.User.findById(req.params.id).then(datas =>{
    res.render('userupdate',{data:datas})
  })
})


routeruser.post('/update/:id',(req,res)=>{
  models.User.update({
    username:req.body.username,
    password:req.body.password,
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    address:req.body.address,
    status:req.body.status},{where:{id:req.params.id}}).then(() =>{
    res.redirect('/user')
  })
})

routeruser.get('/delete/:id',(req,res) => {
  models.User.destroy({where:{id:req.params.id}}).then(()=>{
    res.redirect('/user')
  })
})


module.exports=routeruser
