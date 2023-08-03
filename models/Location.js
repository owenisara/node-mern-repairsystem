const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
    locationname:{type:String},
},{timestamps:true});
module.exports = Locations = mongoose.model('location',LocationSchema);