const jwt = require('jsonwebtoken')
const JWT_SECRET = 'Mohit@1234'
function setUser(user){
   return jwt.sign({
      name:user.name,
      __id:user.__id
   },JWT_SECRET)
}

function getUser(token){
   if(!token) return null
   return jwt.verify(token,JWT_SECRET)
}
//  const sessionIdToUserMap = new Map()

//  function setUser(id,User){
//     sessionIdToUserMap.set(id,User)
//  }

//  function getUser(id){
//     return sessionIdToUserMap.get(id)
//  }

 module.exports={
    setUser,
    getUser
 }