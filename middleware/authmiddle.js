const jwt = require('jsonwebtoken');
const User = require('../models/User') 

exports.auth = (req,res,next)=>{
    try{
        const token = req.headers['authtoken']
        
    if(!token){
        return res.status(401).send('No Token Authorization')
    }
    
    const decode = jwt.verify(token,'jwtSecret')
    console.log(decode)

    req.user = decode.user.email
  
    next()
    }
    catch(err)
    {
        console.log(err)
        res.status(401).send('token invalid')
    }
}


exports.adminCheck = async(req,res,next)=>{
    try{
      const  email = req.user
      
      console.log('email',email)
      const adminUser = await  User.findOne({email}).exec()
      console.log('adminCheck',adminUser)

        if( adminUser.role !== 'admin'){
            res.status(403).send(err,'Admin Access Denied')
        }else{
            next()
        }
    }
    catch(err)
    {
        console.log(err)
        res.status(401).send('Admin Access denied')
    }
}