const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    NAME: {
        type: String,
        required: true
    },
    POINTS: {
        type:Number,
        default:0
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('WT3D',loginSchema)
