const mongoose = require('mongoose')
async function handleConnectToMongoose(url){
    return mongoose.connect(url)
}

module.exports = handleConnectToMongoose;