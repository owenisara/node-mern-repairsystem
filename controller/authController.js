const jwt = require('jsonwebtoken');
const User = require('../models/User')
const bcrypt = require('bcryptjs')
exports.register = async (req,res)=>{
    try{
   let {email,password,firstname,lastname, department} = req.body
   console.log(req.body)
    let user = await User.findOne({email}).exec()
        if(user){
            return res.status(400).send("User Already exists");
        }
        const salt = await bcrypt.genSalt(10);
        user = new User({
            email,
            password,
            firstname,
            lastname,
            department
        })
        user.password = await bcrypt.hash(password,salt)
        await user.save()
        res.send("Register Success")
    }catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}
exports.login = async (req,res)=>{
    try{
        const{email,password} = req.body
        let user = await User.findOneAndUpdate({email},{new:true})
        if(user && user.enabled){
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(400).send('password Invalid')
            }
            
            //payload
            const payload = {
                user:{
                    id:user._id,
                    email:user.email,
                    role: user.role,
                    firstname: user.firstname,
                    lastname:user.lastname
                }
            }
            //Generate Token
            jwt.sign(payload,
                'jwtSecret',
                {expiresIn:21600},
                (err,token)=>{
                if(err)throw err;
                res.json({token,payload})
            })

        } else{
            res.status(500).send("User Notfound")
        }
    }catch(err){
    console.log(err)
    res.status(500).send("Server Error")
    }
}
exports.currenUser = async(req,res)=>{
    try{
        const emailUser = (req.user) 
        console.log(emailUser)
    const user = await User.findOne({email:emailUser}).select('-password').exec()
    res.send(user)
    
    }catch(err){
        console.log(err)
            res.status(500).send("Server Error")
    }
    }