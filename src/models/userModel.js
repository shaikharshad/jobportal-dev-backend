const mongoose =require('mongoose')
const adminRegister = new mongoose.Schema({
    username :String,
    email: String,
    password: String,
    mobileNumber: Number
})

var entitySchema = mongoose.Schema({
    testvalue: {type: String}
});

module.exports=mongoose.model('adminRegister' , adminRegister)