const express = require('express')
const router = express.Router()
 let listOfService = [
    {
        "id":1,
        "name":"Web Development"
    },
    {
        "id":2,
        "name":"Mobile App Development"
    },
    {
        "id":3,
        "name":"Digital Marketing"
    },
    {
        "id":4,
        "name":"IOS App Development"
    },
    {
        "id":5,
        "name":"Cloud Service"
    },
    {
        "id":6,
        "name":"SaaS"
    },
    {
        "id":7,
        "name":"Hardware Services"
    }
 ]
 router.get("/:id",(request,response)=>{
    response.send(`The id is ${request.params.id}`)
 })
 router.param('id',(request,response,next,id)=>{
    // console.log(listOfService[request.params.id])
    response.send(listOfService[request.params.id-1])
   // next()


 })
 module.exports = router