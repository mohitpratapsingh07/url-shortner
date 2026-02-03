const sId = require('short-id')
const urlModel = require('../model/urlModel')
async function handleGenerateShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(404).json({
        message: "url is mendatory"
    })
    const shortId = sId.generate()
    await urlModel.create({
        shortUrl: shortId,
         redirectedUrl: body.url,
        visitedHistory:[]
    })
    res.render("home",{
        shortId: shortId
        
    })
    // res.send({
    //     shortId: shortId
        
    // })
}

module.exports = {
    handleGenerateShortUrl,
}