const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gandg:bps@cluster0.jbddp.mongodb.net/WT3D?retryWrites=true&w=majority', (err) => {
    if(err) console.log("error")
    console.log("Database connected")
})

const loginCopy = require('../models/loginModels')
// x=loginCopy.find({NAME:'bajaj'})
// console.log(x)

loginCopy.find({},(err,res)=>{
    if(err) console.log("error");
    else {
        for(let i in res){
            console.log(res[i].NAME)
        }
    }
})
