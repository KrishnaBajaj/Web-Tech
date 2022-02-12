const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routesUrls = require('./routes/routes')
const cors = require('cors')


mongoose.connect('mongodb+srv://gandg:bps@cluster0.jbddp.mongodb.net/WT3D?retryWrites=true&w=majority', () => {console.log("Database connected")})

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server running in PORT 4000"))


