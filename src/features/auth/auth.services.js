const AuthModel = require("./auth.model") 

export async function loginService({email,password}){
    const user = await AuthModel.findOne({
        email:email,
        password: password
    }).select({
        password: false
    }).lean()
    return user
}