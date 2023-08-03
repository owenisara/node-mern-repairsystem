const express = require("express")
const router = express.Router() 
const { createLocation,readLocation,removeLocation,updateLocation,listLocation } = require("../controller/locationController")
const {auth,adminCheck} = require('../middleware/authmiddle')

router.post('/createlocation',auth,adminCheck,createLocation)

router.get('/location/:id',readLocation)

router.delete('/location/:id',auth,adminCheck,removeLocation)

router.put('/location/:id',auth,adminCheck,updateLocation)

router.get('/listlocation',listLocation)

module.exports = router