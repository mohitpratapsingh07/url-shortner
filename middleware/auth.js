const {getUser} = require('../services/auth')
async function restictedToprivateUser(req,res,next){
    console.log(req)
    const uid = req.cookies?.uid
    console.log("hii form auth")
    console.log(uid)
    if(!uid) res.redirect('/user/login')
    const user = getUser(uid)
    if(!user) res.redirect('/user/login')
    req.user = user
    next()
}

module.exports={
    restictedToprivateUser
}