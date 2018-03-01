'use strict';
const models = require('../models');
module.exports = (function() {
const routes = require('express').Router();

routes.get('/', function (req, res) {
    res.render('formRegister',{data:req.query});
});

routes.post('/', function (req, res) {
  let obj = {
    username:req.body.username,
    password:req.body.password,
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    address:req.body.address,
    status:1,
  }
  models.User.create(obj)
  .then(data => {
    res.redirect('/index')
    // res.send(data)
  }).catch(err=>{
    res.redirect(`/Registers/?error=${err.message}`)
  });
});

return routes;
})();
