const express = require('express')
const app = express()

var user=require('./routes/userroute')
var like=require('./routes/likeroute')

const bodyparser=require('body-parser')
app.locals.helper=require('./helper/')

app.set('view engine','ejs')

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static('public'))

app.use('/user',user)
app.use('/like',like)




app.listen(3000,console.log('port 3000 succes'))
