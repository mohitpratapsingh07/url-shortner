const express = require('express')
const app = express()
const PORT =8001;
const path = require('path')
const cookiesParser = require('cookie-parser')
const {restictedToprivateUser} = require('./middleware/auth')


const urlRoute = require('./routes/url')
const staticRoute = require('./routes/serverSide')
const userRoute = require('./routes/user')

app.set('view engine','ejs')
app.set("views",path.resolve("./views"))

app.use(express.json());         // <-- required for JSON body
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser())
app.use('/',staticRoute)
app.use('/user',userRoute)
app.use('/url',urlRoute);

//**************************************************************** */
const handleConnectToMongoose =require('./connect');
handleConnectToMongoose('mongodb://127.0.0.1:27017/urlShortner').then(()=>{
    console.log("mongoose is connected")
})
.catch((error)=>{
    console.log('mongoose error')
})
//********************************************************************* */

app.get('/mohit',(req,res)=>{
    res.redirect('https://youtube.com')
})


app.listen(PORT,()=>{console.log('Server is served on PORT:', PORT)})