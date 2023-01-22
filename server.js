const express= require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require ('dotenv').config()

const app=express()
const port = process.env.PORT || 5050
app.use(cors())
app.use(express.json());

// console.log("token", process.env.Question_API_TOKEN)

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const url = process.env.Question_API_TOKEN
mongoose.connect(url,connectionParams)
.then(()=>{
    console.log("connected to database")
}).catch(err=>{
    console.log("error connecting to mongodb:", err);
})

const questionRoutes = require('./routes/questions')
app.use('/Questions', questionRoutes)

app.listen(port,()=>{
    console.log("app is listening on port", port);
})