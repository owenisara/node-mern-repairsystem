const mongoose = require('mongoose')

const DeviceSchema = new mongoose.Schema({
    devicename:{type:String},
},{timestamps:true});
module.exports = Department = mongoose.model('device',DeviceSchema);