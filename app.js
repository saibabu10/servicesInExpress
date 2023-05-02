const express = require('express')
const app = express()
const servicePages = require('./servicePages.js')
app.get('/',(request,response)=>{
    response.send("this is landing  page")
})
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.get('/',(request,response)=>{
    response.render('servicePages')
})
app.use('/servicePages',servicePages)
app.listen(6700)