const express = require('express')
const router = express.Router()
router.get('/',(request,response)=>{
    response.send("This is registering page")
})
module.exports = router