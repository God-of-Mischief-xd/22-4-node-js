const express = require("express")
const connectDB = require("./src/config/connectDB.js")
const app = express()
const PORT = 8080

connectDB().then(()=>{

    app.listen(PORT,()=>{
        console.log(`server is running port ${PORT}`)
    })
}).catch(error=>{
    console.log(error)
})