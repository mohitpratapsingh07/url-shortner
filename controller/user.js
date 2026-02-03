const userModel = require('../model/userModel')
const {v4:uuidv4} = require('uuid')
const {setUser,getUser} = require('../services/auth')

async function handleCreateNewUser(req,res) {
    const {name,email,password} =req.body
    await userModel.create({
        name,
        email,
        password
    })
    res.render("login")
    
}
async function handleLogin(req,res){
    const {email,password}= req.body
    const user = await userModel.findOne({
        email,
        password
    })
    console.log(user)
    if(!user){
        res.json({
            "respose":"Invalid Login Crendial"
        })
    }
    const token = setUser(user)
    //const sessionId = uuidv4()
    // setUser(sessionId,user)
     res.cookie("uid",token)

    res.render("home")
}
module.exports ={
    handleCreateNewUser,
    handleLogin
}