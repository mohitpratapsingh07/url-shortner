const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
    shortUrl:{
        type:String,
        required:true,
        unique:true
    },
    redirectedUrl:{
        type: String,
        required:true
    },
    visitedHistory:[{
        timestamp:{type:Number}
    }],
},
    {timestamp:true}
)

const urlModel = mongoose.model('url',urlSchema)
module.exports = urlModel