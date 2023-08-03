const express = require("express")
const router = express.Router() 
const { createDepart,listDepart,readDepart,removeDepart,updateDepart} = require("../controller/department")
const {auth,adminCheck} = require('../middleware/authmiddle')

 router.post('/createdepartment',auth,adminCheck,createDepart)

 router.get('/department/:id',readDepart)

 router.delete('/department/:id',auth,adminCheck,removeDepart)

 router.put('/department/:id',auth,adminCheck,updateDepart)

 router.get('/listdepartment',listDepart)

 module.exports = router