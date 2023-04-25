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
    }
 ]
  router.get('/:id',(request,response)=>{
    const serviceId = Number(request.params.id)
    const getService = listOfService.find((service)=>service.id === serviceId)
    if(!getService)
    {
        response.sendStatus(500).send("Expected service not found")
        console.log(request.params.id);
    }
    else{
        response.json(getService)
    }
 })
 module.exports = router