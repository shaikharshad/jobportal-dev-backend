const mongoose = require("mongoose");

const  defaultport = '/getAll'

module.exports = defaultport;
const express =require('express')
const router =express.Router()
const adminRegister= require('../models/userModel')

router.post("/",(req,res,next)=> {
     const csk = new  adminRegister({
        _id: new mongoose.Types.ObjectId,
        username: req.body.username,
        email: req.body.email,
    })
    csk.save()
    .then(result=> {
        console.log(result);
        res.status(200).json({
            newCSk :result,
        })
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

