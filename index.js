const express = require('express')
const {readdirSync} = require('fs')
const cors= require("cors")
const morgan = require("morgan")
require('dotenv').config();
const connectDB = require('./config/connectDB')
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json({limit:'20mb'}));
app.use(cors())
app.use(morgan('dev'))

connectDB()

readdirSync('./routes').map((r)=>app.use('/api', require('./routes/'+r)))

app.listen(5000,()=>{
    console.log("Server Running on port 5000")
})

