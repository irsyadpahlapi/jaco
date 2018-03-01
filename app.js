const express = require('express')
const app = express()

var user=require('./routes/userroute')
var like=require('./routes/likeroute')

const bodyparser=require('body-parser')
const wilayahs=require('./routes/wilayahs')
const laporans=require('./routes/laporans')

app.set('view engine','ejs')

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static('public'))
app.use('/wilayahs',wilayahs);
app.use('/laporans',laporans);

app.use('/user',user)
app.use('/like',like)




app.listen(3000,console.log('port 3000 succes'))
