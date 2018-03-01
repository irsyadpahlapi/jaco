const express = require('express')
const app = express()
const session = require('express-session')

var user=require('./routes/userroute')
var like=require('./routes/likeroute')
const ceklogin=require('./helper/ceklogin.js')
const bodyparser=require('body-parser')
const index=require('./routes/index')
const wilayahs=require('./routes/wilayahs')
const laporans=require('./routes/laporans')
<<<<<<< HEAD
const login=require('./routes/login')

app.use(session({
  secret: 'jakarta-complaint',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))
=======
const registers=require('./routes/registers')
const fileUpload = require('express-fileupload')
>>>>>>> a5d6e811e0d5ff68e31c3f09eb143bf2d4d3b6b5
app.set('view engine','ejs')
app.locals.my_helper = require('./helpers');

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static('public'))
app.use('/index',index);
app.use('/wilayahs',wilayahs);
app.use('/laporans',laporans);
app.use('/registers',registers);
app.use(fileUpload());

app.use('/user',user)
app.use('/like',like)
app.use('/login',login)

app.get('/',ceklogin,(req,res)=>{
  res.send('halaman homepage')
})
app.get('/admin',ceklogin,(req,res)=>{
  res.send('halaman admin')
})



app.listen(3000,console.log('port 3000 succes'))
