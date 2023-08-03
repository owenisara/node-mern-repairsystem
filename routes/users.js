const express = require("express")
const router = express.Router() 
const { listUser,readUser,removeUser,updateUser,changeRole,changeStatus } = require("../controller/userController")
const {auth,adminCheck} = require('../middleware/authmiddle')

 router.get('/listuser',listUser)

 router.get('/user/:id',readUser)
 
 router.put('/user/:id',auth,adminCheck,updateUser)

 router.put('/changerole/:id',auth,adminCheck,changeRole)

 router.put('/changestatus/:id',auth,adminCheck,changeStatus)

 router.delete('/user/:id',auth,adminCheck,removeUser)
 
 

 module.exports = router