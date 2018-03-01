'use strict';
const models = require('../models');
module.exports = (function() {
  // app.set('view engine', 'ejs')
const routes = require('express').Router();

routes.get('/', function (req, res) {
    res.render('formLogin');
});

routes.post('/', function (req, res) {
  let obj = {
    username:req.body.username,
    password:req.body.password,
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    address:req.body.address,
  }
  models.User.create(obj)
  .then(data => {
    res.redirect('/laporans')
    // res.send(data)
  });
});

return routes;
})();
