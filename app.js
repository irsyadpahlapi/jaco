const express = require('express')
const app = express()

var user=require('./routes/userroute')
var like=require('./routes/likeroute')

const bodyparser=require('body-parser')
const index=require('./routes/index')
const wilayahs=require('./routes/wilayahs')
const laporans=require('./routes/laporans')
const registers=require('./routes/registers')
const fileUpload = require('express-fileupload')
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




app.listen(3000,console.log('port 3000 succes'))
