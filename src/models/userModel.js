const mongoose =require('mongoose')
const adminRegister = new mongoose.Schema({

    username :String,
    email: String
})

module.exports=mongoose.model('adminRegister' , adminRegister)