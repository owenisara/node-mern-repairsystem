const mongoose = require('mongoose')
const {ObjectId}= mongoose.Schema;
const RepairSchema = new mongoose.Schema({

    requireBy:{
        type:ObjectId,
        ref:"users"},
    repairBy:{
        type:ObjectId,
        ref:"users",
        default:'-'
          },
    phone:{type:String},
    location:{ type:ObjectId,
        ref:"location"},

    department:{ 
        type:ObjectId,
        ref:"department"
    },
    device:{
        type:ObjectId,
        ref:"device"
    },
    statusRepair:{
        type:String,
        default:"รอซ่อม"
    },
    detailproblem:{type:String},
    detailrepair:{type:String}
},{timestamps:true});
module.exports = Repair = mongoose.model('repair',RepairSchema);