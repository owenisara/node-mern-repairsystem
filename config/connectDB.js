const mongoose = require("mongoose")

const connectDB = async() =>{
    try{
    await mongoose.connect("mongodb+srv://owenisara:Owenisara456789@mernstark.ewebp8i.mongodb.net/helpdesk?retryWrites=true&w=majority"),{
        useNewUrlParser: true,
        useUnifiedTopology: false
    }
    
    console.log('Connect DB Success')   
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB