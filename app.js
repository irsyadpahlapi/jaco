const express = require('express')
const app = express()
const bodyparser=require('body-parser')
const wilayahs=require('./routes/wilayahs')
const laporans=require('./routes/laporans')

app.set('view engine','ejs')

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static('public'))
app.use('/wilayahs',wilayahs);
app.use('/laporans',laporans);

app.listen(3000,console.log('port 3000 success'))
