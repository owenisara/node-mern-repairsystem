const express = require("express")
const router = express.Router() 
const { createDevice,readDevice,removeDevice,updateDevice,listDevice } = require("../controller/deviceController")
const {auth,adminCheck} = require('../middleware/authmiddle')

router.post('/createdevice',auth,adminCheck,createDevice)

router.get('/device/:id',readDevice)

router.delete('/device/:id',auth,adminCheck,removeDevice)

router.put('/device/:id',auth,adminCheck,updateDevice)

router.get('/listdevice',listDevice)

module.exports = router