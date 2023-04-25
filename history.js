const express = require('express')
const router = express.Router()
router.get('/',(request,response)=>{
    response.send("This is the history page")
})
router.get('/:id',(request,response)=>{
    response.send("the value is "+request.params.id)
})
module.exports = router