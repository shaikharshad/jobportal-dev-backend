const mongoose = require("mongoose");

const express =require('express')
const router =express.Router()
const adminRegister= require('../models/userModel')

router.post("/",(req,res)=> {
     const adminSignup = new  adminRegister( {
        id:1,
        username: req.body.username,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        password : req.body.password,
    })
    adminSignup.save()
    .then(result=> {
        console.log(result);
        var data  = result
        res.status(200)
        res.json({data}
        )
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).json({
            error: "please check once", 
             
        })

    })

})

module.exports=router







// const channelSchema =  new mongoose.Schema({

//     username : {
//         type:String,
//         required:true,
//         trim :true
//     },
//     email : {
//         type:String,
//         required:true,
//         trim :true
        
//     }
// })

// const ChannelModulea = mongoose.model("channel",channelSchema)
// module.exports= ChannelModulea


// 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

