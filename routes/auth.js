const express = require("express")
const router = express.Router() 
const { register,login,currenUser } = require("../controller/authController")
const {auth,adminCheck} = require('../middleware/authmiddle')

 router.post('/register',register)

 router.post('/login',login)

 router.post('/currenUser',auth,currenUser)

 router.post('/currenAdmin',auth,adminCheck,currenUser)
 

 module.exports = router