const Device = require('../models/Device')

exports.createDevice = async (req,res)=>{
    try{
        let {devicename} = req.body
        let device = await Device.findOne({devicename}).exec()
     
        if(device){
            return res.status(401).send("Department Already")
        }

        device = new Department({
            devicename
        })
        await device.save()
        res.send("Create Department Success") 

    }catch(err){
        console.log(err)
        res.send("Server Error")
    }
} 

exports.listDevice = async (req,res)=>{
    try{
    const listdevice = await Device.find({}).exec() 
    res.send(listdevice)
    }
    catch(err){
        res.send('Server Error')
    }
   

}
exports.readDevice = async (req,res)=>{
    try{
        const{id} = req.params
        console.log(id) 
        const device = await Device.findOne({_id:id}).exec()
        
        res.send(device)
        }
        catch(err){
            res.send('Server Error')
        }
}
exports.updateDevice = async (req,res)=>{
    try{
        const{id} = req.params
        console.log(req.body)
        console.log(req.params) 
        const device = await Device.findOneAndUpdate({_id:id},req.body,{new:true}).exec() 
        res.send(device)
        }
        catch(err){
            res.send('Server Error')
        }
}

exports.removeDevice = async (req,res)=>{
    try{
        const{id} = req.params
        console.log(id)
        const device = await Device.findOneAndDelete({_id:id}).exec()
        res.send("Delete Department Success")
        }

        catch(err){
            res.send('Server Error')
        }
}