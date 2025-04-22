const express = require("express")
const connectDB = require("./src/config/connectDB.js")
const AuthRouter = require("./src/features/auth/auth.routes.js")
const app = express()
const PORT = 8080
app.use(express.json())
app.use("/auth", AuthRouter)

connectDB().then(()=>{

    app.listen(PORT,()=>{
        console.log(`server is running port ${PORT}`)
    })
}).catch(error=>{
    console.log(error)
})