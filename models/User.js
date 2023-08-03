const mongoose = require('mongoose')
const {ObjectId}= mongoose.Schema;
const UserSchema = new mongoose.Schema({
    email:{type:String},
    password:{type:String},
    firstname:{type:String,maxlength:12},
    lastname:{type:String,maxlength:12},
    role:{type:String,default:'member'},
    department:{ 
        type:ObjectId,
        ref:"department"},
    enabled:{
        type:Boolean,default:true
    },

},{timestamps:true});
module.exports = User = mongoose.model('users',UserSchema);