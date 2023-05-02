const express = require('express')
const router = express.Router()
 let listOfService = [
    {
        "name":"Web Development"
    },
    {

        "name":"Mobile App Development"
    },
    {
        "name":"Digital Marketing"
    },
    {
        "name":"IOS App Development"
    },
    {
        "name":"Cloud Service"
    },
    {
        "name":"SaaS"
    },
    {
        "name":"Hardware Services"
    }
 ]
 router.get('/',(request,response)=>{
    response.send("this is the service page")
 })
 router.get('/new',(request,response)=>{
    //response.send("this is the new elements add page")
    response.render('new')
 })
 router.post('/',(request,response)=>{
    listOfService.push({name:request.body.serviceName})
    console.log(listOfService)
    response.redirect(`servicePages/${listOfService.length-1}`)

 })
 router.get('/:id',(request,response)=>{
    const service = listOfService[request.params.id]
    response.send(`The service ID is ${request.params.id} The service is ${service.name}`)
 })
 module.exports = router