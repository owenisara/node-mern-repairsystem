const express = require("express")
const router = express.Router()
const { createRepair,listRepair,updateRepair,updateStatus,
    readRepair,waitingRepair,completeRepair,waitingpartsRepair } = require("../controller/repairController")

router.post('/createrepair',createRepair)

router.get('/listrepair',listRepair)

router.get('/repair/:id',readRepair)

router.put('/repair/:id',updateRepair)

router.put('/statusrepair/:id',updateStatus)

router.get('/waitingrepair',waitingRepair)

router.get('/waitingpartsrepair',waitingpartsRepair)

router.get('/completerepair',completeRepair)


 module.exports = router