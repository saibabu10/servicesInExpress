const express = require('express')
const app = express()
const aboutUs = require('./aboutUs.js')
const contactUs = require('./contactUs.js')
const Login = require('./Login.js')
const registerIn = require('./registerIn.js')
const achievements = require('./achievements.js')
const history = require('./history.js')
const sevicePro = require('./sevicePro.js')
const servicePage = require('./servicePage.js')

app.get('/',(request,response)=>{
    response.send("Hello world")
})
app.use('/aboutUs',aboutUs)
app.use('/contactUs',contactUs)
app.use('/Login',Login)
app.use('/registerIn',registerIn)
app.use('/achievements',achievements)
app.use('/history',history)
app.use('/sevicePro',sevicePro)
app.use('/servicePage',servicePage)
app.listen(3500)