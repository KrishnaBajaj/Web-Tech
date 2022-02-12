const { request } = require('express');
const express= require('express')
const router = express.Router()
const loginCopy = require('../models/loginModels')
var nm = ''


router.get('/users',(req,res)=>{
    loginCopy.find({ })
        .then((data)=> {
            console.log('Data: ',data)
            res.json(data)
        })
        .catch((error)=> {
            console.log('error: ',error)
        })  
})


router.post('/entername', (req,res) =>{
    loginCopy.find({NAME:req.body.NAME},function (err, docs){
        nm=req.body.NAME
        if(docs.length){
            console.log("NAME already exists")
        }
        else{
                const existingUser = new loginCopy({
                    NAME:req.body.NAME,
                })
                existingUser.save()
                    .then(data => {
                        res.json(data)
                    })
                    .catch(err => {
                        res.json(err)
                    })
                
        }
    })
    
});

router.get('/userselect',(req,res)=>{
    loginCopy.findOne({NAME:nm})
        .then((data)=> {
            console.log('Data: ',data)
            res.json(data)
        })
        .catch((error)=> {
            console.log('error: ',error)
        })  
})

router.get('/signin')
module.exports = router