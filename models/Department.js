const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
    departmentname:{type:String},
},{timestamps:true});
module.exports = Department = mongoose.model('department',DepartmentSchema);