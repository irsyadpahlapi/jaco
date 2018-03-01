'use strict';
const models = require('../models');
module.exports = (function() {
  // app.set('view engine', 'ejs')
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
  var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      service: 'gmail',
      auth: {
        user: 'ekiempat@gmail.com',
        pass: 'jacojaya'
      }
    });

    var mailOptions = {
      from: 'ekiempat@gmail.com',
      to: 'ekitiga@gmail.com',
      subject: 'Selamat Bergabung Di Jaco',
      text: 'Klik <a href="/">Di Sini</a> Untuk Login'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  models.User.create(obj)
  .then(data => {
    res.redirect('/cekimel')
    // res.send(data)
  }).catch(err=>{
    res.redirect(`/Registers/?error=${err.message}`)
  });
});

return routes;
})();
