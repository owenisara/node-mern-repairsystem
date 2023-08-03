const Locations = require('../models/Location')

exports.createLocation = async (req,res)=>{
    try{
            console.log(req.body) 
        let {locationname} = req.body
        let location = await Locations.findOne({locationname}).exec()
     
        if(location){
            return res.status(401).send("Locations Already")
        }

        location = new Locations({
            locationname
        })
        await location.save()
        res.send("Create Location Success") 

    }catch(err){
        console.log(err)
        res.send("Server Error")
    }
} 

exports.listLocation = async (req,res)=>{
    try{
    const listlocation = await Locations.find({}).exec() 
    res.send(listlocation)
    }
    catch(err){
        res.send('Server Error')
    }
   

}
exports.readLocation = async (req,res)=>{
    try{
        const{id} = req.params
        console.log(id) 
        const location = await Locations.findOne({_id:id}).exec()
        
        res.send(location)
        }
        catch(err){
            res.send('Server Error')
        }
}
exports.updateLocation = async (req,res)=>{
    try{
        const{id} = req.params
        console.log(req.body)
        console.log(req.params) 
        const location = await Locations.findOneAndUpdate({_id:id},req.body,{new:true}).exec() 
        res.send(location)
        }
        catch(err){
            res.send('Server Error')
        }
}

exports.removeLocation = async (req,res)=>{
    try{
        const{id} = req.params
        console.log(id)
        const location = await Locations.findOneAndDelete({_id:id}).exec()
        res.send("Delete Department Success")
        }

        catch(err){
            res.send('Server Error')
        }
}