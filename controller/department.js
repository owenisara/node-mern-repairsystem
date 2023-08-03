const Department = require('../models/Department')


exports.createDepart = async (req,res)=>{
    try{
        let {departmentname} = req.body
        let department = await Department.findOne({departmentname}).exec()
     
        if(department){
            return res.status(401).send("Department Already")
        }

        department = new Department({
            departmentname
        })
        await department.save()
        res.send("Create Department Success") 

    }catch(err){
        console.log(err)
        res.send("Server Error")
    }
} 

exports.listDepart = async (req,res)=>{
    try{
    const listdepartment = await Department.find({}).exec() 
    res.send(listdepartment)
    }
    catch(err){
        res.send('Server Error')
    }
   
}
exports.readDepart = async (req,res)=>{
    try{
        const{id} = req.params
        console.log(id) 
        const department = await Department.findOne({_id:id}).exec()
        
        res.send(department)
        }
        catch(err){
            res.send('Server Error')
        }
}
exports.updateDepart = async (req,res)=>{
    try{
        const{id} = req.params
        console.log(req.body)
        console.log(req.params) 
        const department = await Department.findOneAndUpdate({_id:id},req.body,{new:true}).exec() 
        res.send(department)
        }
        catch(err){
            res.send('Server Error')
        }
}

exports.removeDepart = async (req,res)=>{
    try{
        const{id} = req.params
        console.log(id)
        const department = await Department.findOneAndDelete({_id:id}).exec()
        res.send("Delete Department Success")
        }

        catch(err){
            res.send('Server Error')
        }
}

