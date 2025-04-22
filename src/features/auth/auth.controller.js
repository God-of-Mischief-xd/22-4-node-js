async function loginController(req,res){
    try{
        const { email, password} =req.body
        const user = await loginService({})
    }

}