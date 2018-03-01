'use strict';
const models = require('../models');
module.exports = (function() {
  // app.set('view engine', 'ejs')
const routes = require('express').Router();

routes.get('/', function (req, res) {
  models.Wilayah.findAll({
    order: [['id','ASC']],
  })
  .then(data => {
    res.render('viewWilayah',{data:data});
    // res.send(data)
  });
});

routes.get('/add',function(req,res){
    res.render('formAddWilayah',{})
})

routes.post('/add',function(req,res){
  let obj={
    nama:req.body.name,
  }
  models.Wilayah.create(obj).then(data=>{
    res.redirect('/wilayahs')
  }).catch(err=>{
    res.send(err)
  })

})

routes.get('/update/:id',function(req,res){
  models.Wilayah.findById(req.params.id).then(data=>{
    res.render('formUpdateWilayah',{data:data})
  })
})

routes.post('/update/:id',function(req,res){
  let obj = {
    nama:req.body.name,

  }
  models.Wilayah.update(obj,{
    where:{
      id : req.params.id
    }
  }).then(data=>{
    res.redirect('/wilayahs')
    // res.send(data)
  }).catch(err=>{
    res.send(err)
  })
})

routes.get('/delete/:id', function (req, res) {
  models.Wilayah.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.redirect('/wilayahs')
    }).catch(err=>{
      res.send(err)
    });
  })

return routes;
})();
