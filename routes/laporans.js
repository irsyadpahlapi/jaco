'use strict';
const models = require('../models');
module.exports = (function() {
  // app.set('view engine', 'ejs')
const routes = require('express').Router();

routes.get('/', function (req, res) {
  models.Laporan.findAll({
    order: [['id','ASC']],
    include: [{
      model: models.Wilayah
    }]
  })
  .then(data => {
    res.render('viewLaporan',{data:data});

    // res.send(data)
  });
});

routes.get('/add',function(req,res){
  models.Wilayah.findAll({
    order: [['id','ASC']],
  }).then(data => {
    res.render('formAddLaporan',{data:data})
    });

})

routes.post('/add',function(req,res){
  let obj={
    foto:req.body.foto,
    WilayahId:req.body.WilayahId,
    deskripsi:req.body.deskripsi,
    lokasi:req.body.lokasi,
    UserId:1,
  }
  models.Laporan.create(obj).then(data=>{
    res.redirect('/laporans')
  }).catch(err=>{
    res.send(err)
  })

})

routes.get('/update/:id',function(req,res){
  models.Laporan.findById(req.params.id).then(data=>{
    models.Wilayah.findAll().then(data_wilayah=>{
      res.render('formUpdateLaporan',{data:data,data_wilayah:data_wilayah})
    })

  })
})

routes.post('/update/:id',function(req,res){
  let obj = {
    foto:req.body.foto,
    WilayahId:req.body.WilayahId,
    deskripsi:req.body.deskripsi,
    lokasi:req.body.lokasi,

  }
  models.Laporan.update(obj,{
    where:{
      id : req.params.id
    }
  }).then(data=>{
    res.redirect('/laporans')
    // res.send(data)
  }).catch(err=>{
    res.send(err)
  })
})

routes.get('/delete/:id', function (req, res) {
  models.Laporan.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.redirect('/laporans')
    }).catch(err=>{
      res.send(err)
    });
  })

return routes;
})();
