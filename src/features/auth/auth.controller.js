const AuthModel = require("./auth.model")
const {loginService} = require("./auth.services")
async function loginController(req,res){
    try{
        const { email, password} =req.body
        const user = await loginService({email, password})

        if(!user){
            return res.status(401).send({message:"user not found!"})
        }
        res.send({data:user})
    } catch(error){
        console.log(error)
        res.send({message:"unexpected eroor!"})
    }

}

module.exports = {loginController}