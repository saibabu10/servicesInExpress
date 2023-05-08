const express = require('express')
const router = express.Router()
 let listOfService = [
    {
        "name":"Web Development",
        "cost":"$100",
        "duration":'1'
        },
    {

        "name":"Mobile App Development",
        "cost":"$100",
        "duration":'1'
        },
    {
        "name":"Digital Marketing",
        "cost":"$100",
        "duration":'1'
    },
    {
        "name":"IOS App Development",
        "cost":"$100",
        "duration":'1'
    },
    {
        "name":"Cloud Service",
        "cost":"$100",
        "duration":'1'
    },
    {
        "name":"SaaS",
        "cost":"$100",
        "duration":'1'
    },
    {
        "name":"Hardware Services",
         "cost":"$100",
        "duration":'1'
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
    listOfService.push({name:request.body.serviceName,cost:request.body.serviceCost,Duration:request.body.serviceDuration})
    console.log(listOfService)
    response.redirect(`servicePages/${listOfService.length-1}`)
})


 router.get('/:id',(request,response)=>{
    const service = listOfService[request.params.id]
     const dur = Number(service.duration)
     console.log(dur)
    response.send(`The service ID is ${request.params.id} The service is ${service.name} The service Cost is ${service.cost} and The service Duration is ${dur}`)
 })
 module.exports = router