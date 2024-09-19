// edited
const mongoose = require('mongoose')
const connectDB =require('../config/db')

var otpSchema = new mongoose.Schema({
    email:String,
    code:String,
    expireIn:Number
},{
    timestamps:true
})
// Define the 'Otp' model using mongoose.model
const Otp = mongoose.model('Otp', otpSchema);

// Export the model
module.exports = Otp;