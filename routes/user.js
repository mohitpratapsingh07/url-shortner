const express = require('express');
const route = express.Router()
const {handleCreateNewUser, handleLogin} = require('../controller/user')
route.get('/',(req,res)=>{
    res.render("signup")
})
route.post('/signup',handleCreateNewUser)
route.post('/login',handleLogin)
route.get('/signup',(req,res)=>{
    res.render("signup")
})
route.get('/login',(req,res)=>{
    res.render('login')
})

module.exports = route