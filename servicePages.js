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
 router.get("/:id",(request,response)=>{
    response.send(`The id is ${request.params.id}`)
 })
 router.param('id',(request,response,next,id)=>{
    // console.log(listOfService[request.params.id])
    const service = listOfService[request.params.id-1]
    response.send(service.name)
   next()


 })
 module.exports = router